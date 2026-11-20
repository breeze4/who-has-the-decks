// Checks the page's stepping, timeline and sync logic against a stand-in for the YouTube player.
// It does NOT prove the real video plays; check that by hand in a browser.
// Run: npm i --no-save playwright && npx playwright install chromium && node tests/smoke.js
const { chromium } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path'), assert = require('assert');
const root = path.join(__dirname, '..');
const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css' };
const server = http.createServer((q, s) => {
  const f = path.join(root, decodeURIComponent(q.url.split(/[?#]/)[0].replace(/\/$/, '/index.html')));
  if (!f.startsWith(root) || !fs.existsSync(f)) { s.writeHead(404); return s.end(); }
  s.writeHead(200, { 'content-type': types[path.extname(f)] || 'application/octet-stream' });
  fs.createReadStream(f).pipe(s);
});
const STUB = `
window.YT={Player:function(id,o){const self=this;let t=o.playerVars.start||0,timer=null;
 window.__p=self;window.__calls=[];
 self.getDuration=()=>6985;self.getCurrentTime=()=>t;
 self.seekTo=(x)=>{t=x;__calls.push('seek '+x)};
 self.playVideo=()=>{__calls.push('play');clearInterval(timer);timer=setInterval(()=>{t+=0.25},250);o.events.onStateChange({data:1})};
 self.pauseVideo=()=>{__calls.push('pause');clearInterval(timer);o.events.onStateChange({data:2})};
 self.__set=(x)=>{t=x};
 setTimeout(()=>o.events.onReady(),50)}};
setTimeout(()=>window.onYouTubeIframeAPIReady(),20);`;
(async () => {
  await new Promise(r => server.listen(0, r));
  const base = 'http://localhost:' + server.address().port + '/';
  const b = await chromium.launch();
  const errs = [];
  async function open(vp, hash) {
    const p = await (await b.newContext({ viewport: vp })).newPage();
    p.on('pageerror', e => errs.push(e.message));
    await p.route('**/iframe_api', r => r.fulfill({ contentType: 'text/javascript', body: STUB }));
    await p.route(/ytimg|fonts\.g/, r => r.abort());
    await p.goto(base + (hash || '')); await p.waitForTimeout(500);
    return p;
  }
  const st = p => p.evaluate(() => ({
    cur: document.getElementById('cur').textContent,
    active: document.querySelectorAll('.m.is-active').length === 1 ? +document.querySelector('.m.is-active').dataset.i : -1,
    calls: window.__calls.slice(), playing: document.getElementById('app').classList.contains('is-playing'),
    overflow: document.documentElement.scrollWidth > innerWidth,
    visible: (() => { const r = document.querySelector('.m.is-active').getBoundingClientRect(); return r.top >= 0 && r.top < innerHeight; })()
  }));
  const p = await open({ width: 1440, height: 900 });
  const n = await p.evaluate(() => window.GUIDE.moments.length);
  const T = await p.evaluate(() => window.GUIDE.moments.map(m => m.t));
  assert(T.every((t, i) => i === 0 || t > T[i - 1]), 'moments must be in time order');
  let s = await st(p); assert.equal(s.active, 0); assert.equal(s.overflow, false);
  await p.click('#next'); s = await st(p); assert.equal(s.active, 1, 'next moves one moment'); assert.equal(s.calls.pop(), 'seek ' + T[1]);
  await p.click('#next'); await p.click('#prev'); s = await st(p); assert.equal(s.active, 1, 'prev moves back one');
  await p.click('#play'); await p.waitForTimeout(4200); s = await st(p); assert(s.playing, 'play starts');
  await p.click('#prev'); await p.waitForTimeout(100); s = await st(p); assert.equal(s.active, 1, 'prev restarts the current moment when more than 3 s in');
  await p.keyboard.press('ArrowRight'); await p.waitForTimeout(100); s = await st(p); assert.equal(s.active, 2, 'right arrow steps');
  await p.keyboard.press(' '); await p.waitForTimeout(100); s = await st(p); assert.equal(s.playing, false, 'space pauses'); assert.equal(s.active, 2, 'space does not step');
  await p.evaluate(() => window.__p.__set(2341)); await p.waitForTimeout(700); s = await st(p);
  assert.equal(T[s.active], 2340, 'guide follows a seek made inside the player');
  const box = await p.locator('#timeline').boundingBox();
  await p.mouse.click(box.x + box.width * 0.5, box.y + box.height / 2); await p.waitForTimeout(300); s = await st(p);
  assert(/^58:1\d$/.test(s.cur), 'timeline click seeks to that point, got ' + s.cur);
  await p.locator('.m__time').nth(n - 1).click(); await p.waitForTimeout(300); s = await st(p); assert.equal(s.active, n - 1);
  await p.click('#next'); s = await st(p); assert.equal(s.active, n - 1, 'next stops at the last moment');
  const h = await open({ width: 1440, height: 900 }, '#t=2925'); s = await st(h); assert.equal(T[s.active], 2925, 'deep link');
  const m = await open({ width: 390, height: 844 });
  await m.click('#next'); await m.click('#next'); await m.waitForTimeout(900); s = await st(m);
  assert.equal(s.overflow, false, 'no sideways scroll on a phone'); assert(s.visible, 'stepping on a phone scrolls the moment into view');
  assert.deepEqual(errs, [], 'no page errors');
  await b.close(); server.close(); console.log('smoke: all checks passed (' + n + ' moments)');
})().catch(e => { console.error('SMOKE FAILED:', e.message); process.exit(1); });

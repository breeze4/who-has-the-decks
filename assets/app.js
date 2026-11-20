(function () {
  'use strict';

  var G = window.GUIDE;
  var M = G.moments;
  var duration = G.duration;
  var WHO = { fred: 'Fred', thomas: 'Thomas', both: 'Both', unknown: 'Not known yet' };
  var EV = { seen: 'Seen in the film', stated: 'Fred says so', inferred: 'Inferred', none: 'No source' };

  var $ = function (id) { return document.getElementById(id); };
  var app = $('app'), list = $('moments'), blocks = $('blocks'), pins = $('pins');
  var head = $('head'), timeline = $('timeline'), now = $('now');
  var curEl = $('cur'), durEl = $('dur'), counter = $('counter'), follow = $('follow');

  var player = null, ready = false, playing = false;
  var active = -1, lastTime = 0, pendingSeek = null;

  function fmt(s) {
    s = Math.max(0, Math.floor(s));
    var h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), sec = s % 60;
    return (h ? h + ':' + (m < 10 ? '0' : '') : '') + m + ':' + (sec < 10 ? '0' : '') + sec;
  }
  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }
  function chips(m, withTech) {
    var wrap = el('div', withTech ? 'm__meta' : 'now__meta');
    var w = el('span', 'chip chip--who', WHO[m.who]); w.dataset.who = m.who; wrap.appendChild(w);
    var e = el('span', 'chip chip--ev', EV[m.evidence]); e.dataset.evidence = m.evidence; wrap.appendChild(e);
    if (m.approx) wrap.appendChild(el('span', 'chip chip--approx', 'Time approx'));
    if (withTech) (m.tech || []).forEach(function (t) { wrap.appendChild(el('span', 'chip chip--tech', t)); });
    return wrap;
  }

  // ---------- build list ----------
  var mixIdx = [];
  M.forEach(function (m, i) {
    if (m.kind === 'mix') mixIdx.push(i);
    var li = el('li', 'm m--' + m.kind);
    li.dataset.who = m.who; li.dataset.i = i; li.id = 'm' + i;

    var time = el('button', 'm__time', (m.approx ? '~' : '') + fmt(m.t));
    time.type = 'button';
    time.setAttribute('aria-label', 'Play from ' + fmt(m.t) + ': ' + m.title);
    time.addEventListener('click', function () { go(i, true); });
    li.appendChild(time);

    var main = el('div', 'm__main');
    main.appendChild(el('div', 'm__kind', m.kind === 'mix' ? 'Track block ' + mixIdx.length : 'Note'));
    main.appendChild(el('h3', 'm__title', m.title));
    main.appendChild(chips(m, true));

    if (m.tracks && m.tracks.length) {
      var ul = el('ul', 'm__tracks');
      m.tracks.forEach(function (t) {
        var item = el('li');
        var txt = el('div');
        txt.appendChild(el('b', null, t[1]));
        if (t[0]) txt.appendChild(el('span', null, '  ' + t[0]));
        item.appendChild(txt);
        ul.appendChild(item);
      });
      main.appendChild(ul);
    }
    if (m.body) main.appendChild(el('p', 'm__body', m.body));
    if (m.quote) {
      var q = el('blockquote', 'm__quote');
      q.appendChild(el('cite', null, 'Fred’s note'));
      q.appendChild(document.createTextNode('“' + m.quote + '”'));
      main.appendChild(q);
    }
    var dl = el('dl');
    [['Who', m.why], ['Watch for', m.watch]].forEach(function (r) {
      if (!r[1]) return;
      var row = el('div', 'm__row');
      row.appendChild(el('dt', null, r[0]));
      row.appendChild(el('dd', null, r[1]));
      dl.appendChild(row);
    });
    if (dl.children.length) main.appendChild(dl);
    li.appendChild(main);
    list.appendChild(li);
  });

  // ---------- stats ----------
  (function () {
    var mixes = M.filter(function (m) { return m.kind === 'mix'; });
    var c = { seen: 0, stated: 0, inferred: 0, none: 0 };
    mixes.forEach(function (m) { c[m.evidence]++; });
    $('stats').textContent = 'Of ' + mixes.length + ' track blocks, ' + c.seen + ' are seen in the film, ' +
      c.stated + ' are attributed by Fred, ' + c.inferred + ' are inferred and ' + c.none + ' are still unknown.';
  })();

  // ---------- timeline ----------
  function buildTimeline() {
    blocks.textContent = ''; pins.textContent = '';
    mixIdx.forEach(function (i, k) {
      var m = M[i];
      var start = k === 0 ? 0 : m.t;
      var end = k + 1 < mixIdx.length ? M[mixIdx[k + 1]].t : duration;
      var b = el('div', 'blk');
      b.style.left = (start / duration * 100) + '%';
      b.style.width = ((end - start) / duration * 100) + '%';
      b.dataset.who = m.who; b.dataset.evidence = m.evidence; b.dataset.i = i;
      b.title = fmt(m.t) + '  ' + m.title + ' (' + WHO[m.who] + ')';
      blocks.appendChild(b);
    });
    M.forEach(function (m) {
      if (m.kind !== 'note') return;
      var p = el('div', 'pin'); p.style.left = (m.t / duration * 100) + '%'; p.dataset.who = m.who;
      pins.appendChild(p);
    });
    durEl.textContent = fmt(duration);
    timeline.setAttribute('aria-valuemax', Math.round(duration));
  }
  buildTimeline();

  function timeFromEvent(ev) {
    var r = timeline.getBoundingClientRect();
    return Math.min(1, Math.max(0, (ev.clientX - r.left) / r.width)) * duration;
  }
  var dragging = false;
  timeline.addEventListener('pointerdown', function (ev) {
    dragging = true; timeline.setPointerCapture(ev.pointerId); render(timeFromEvent(ev));
  });
  timeline.addEventListener('pointermove', function (ev) { if (dragging) render(timeFromEvent(ev)); });
  timeline.addEventListener('pointerup', function (ev) {
    if (!dragging) return; dragging = false; seek(timeFromEvent(ev), true);
  });
  timeline.addEventListener('pointercancel', function () { dragging = false; });
  timeline.addEventListener('keydown', function (ev) {
    if (ev.key === 'ArrowLeft') { seek(lastTime - 10); ev.preventDefault(); ev.stopPropagation(); }
    if (ev.key === 'ArrowRight') { seek(lastTime + 10); ev.preventDefault(); ev.stopPropagation(); }
  });

  // ---------- state ----------
  function indexAt(t) {
    var idx = 0;
    for (var i = 0; i < M.length; i++) { if (M[i].t <= t + 0.25) idx = i; else break; }
    return idx;
  }
  function blockOf(i) {
    for (var k = i; k >= 0; k--) if (M[k].kind === 'mix') return k;
    return 0;
  }

  function render(t) {
    lastTime = t;
    curEl.textContent = fmt(t);
    head.style.left = (Math.min(t, duration) / duration * 100) + '%';
    timeline.setAttribute('aria-valuenow', Math.round(t));
    timeline.setAttribute('aria-valuetext', fmt(t));
    var i = indexAt(t);
    if (i === active) return;
    active = i;
    var blk = blockOf(i);
    Array.prototype.forEach.call(list.children, function (li, k) {
      li.classList.toggle('is-active', k === i);
      li.classList.toggle('is-past', k < i);
    });
    Array.prototype.forEach.call(blocks.children, function (b) {
      b.classList.toggle('is-active', +b.dataset.i === blk);
    });
    counter.textContent = 'Moment ' + (i + 1) + ' / ' + M.length;
    renderNow(M[i], M[blk]);
    if (follow.checked && !dragging) scrollToActive();
  }

  function renderNow(m, block) {
    now.textContent = '';
    now.dataset.who = m.who;
    now.appendChild(el('div', 'now__label', 'Now · ' + fmt(m.t) + (m.kind === 'note' ? ' · during “' + block.title + '”' : '')));
    now.appendChild(el('div', 'now__title', m.title));
    now.appendChild(chips(m, false));
    if (m.why) now.appendChild(el('p', 'now__why', m.why));
  }

  function scrollToActive(force) {
    var li = list.children[active];
    if (!li) return;
    var r = li.getBoundingClientRect();
    var stage = document.querySelector('.stage');
    var stacked = window.matchMedia('(max-width: 1040px)').matches;
    var topLimit = stacked ? stage.getBoundingClientRect().bottom + 8 : 16;
    // Only move the page if the list is the thing on screen and the card is out of view.
    var listRect = list.getBoundingClientRect();
    if (!force && (listRect.bottom < 0 || listRect.top > window.innerHeight)) return;
    if (r.top >= topLimit && r.bottom <= window.innerHeight - 16) return;
    window.scrollTo({ top: window.scrollY + r.top - topLimit, behavior: 'smooth' });
  }

  // ---------- transport ----------
  function seek(t, play) {
    t = Math.max(0, Math.min(duration - 1, t));
    render(t);
    if (ready) {
      player.seekTo(t, true);
      if (play) player.playVideo();
    } else {
      pendingSeek = { t: t, play: !!play };
    }
  }
  function go(i, play) {
    i = Math.max(0, Math.min(M.length - 1, i));
    seek(M[i].t, play || playing);
    try { history.replaceState(null, '', '#t=' + M[i].t); } catch (e) { /* file:// */ }
    // Stepping is an explicit request to see that moment, whatever the Follow setting.
    scrollToActive(true);
  }
  function step(dir) {
    var i = indexAt(lastTime);
    if (dir < 0) {
      // Like a CD player: first press goes to the start of the current moment.
      go(lastTime - M[i].t > 3 ? i : i - 1);
    } else {
      go(i + 1);
    }
  }
  function toggle() {
    if (!ready) { pendingSeek = { t: lastTime, play: true }; return; }
    if (playing) player.pauseVideo(); else player.playVideo();
  }
  // After a mouse click, drop focus so the space bar goes back to play / pause.
  function bind(id, fn) {
    $(id).addEventListener('click', function (ev) { fn(); if (ev.detail > 0) this.blur(); });
  }
  bind('prev', function () { step(-1); });
  bind('next', function () { step(1); });
  bind('play', toggle);

  document.addEventListener('keydown', function (ev) {
    if (ev.metaKey || ev.ctrlKey || ev.altKey) return;
    var tag = (ev.target.tagName || '').toLowerCase();
    if (tag === 'input' || tag === 'textarea' || tag === 'select') return;
    var k = ev.key;
    if (k === 'ArrowLeft') { step(-1); ev.preventDefault(); }
    else if (k === 'ArrowRight') { step(1); ev.preventDefault(); }
    else if (k === ' ' && tag !== 'button' && tag !== 'a') { toggle(); ev.preventDefault(); }
    else if (k === 'j' || k === 'J') seek(lastTime - 10);
    else if (k === 'l' || k === 'L') seek(lastTime + 10);
  });

  // ---------- YouTube ----------
  function setPlaying(p) {
    playing = p;
    app.classList.toggle('is-playing', p);
    $('play').setAttribute('aria-label', p ? 'Pause' : 'Play');
  }
  function startAt() {
    var m = /[#&]t=(\d+)/.exec(location.hash);
    return m ? Math.min(+m[1], duration - 1) : 0;
  }
  var initial = startAt();

  window.onYouTubeIframeAPIReady = function () {
    var vars = { playsinline: 1, rel: 0, modestbranding: 1, start: Math.floor(initial) };
    if (/^https?:$/.test(location.protocol)) vars.origin = location.origin;
    player = new YT.Player('yt', {
      videoId: G.videoId, width: '100%', height: '100%', playerVars: vars,
      events: {
        onReady: function () {
          ready = true;
          var d = player.getDuration && player.getDuration();
          if (d && Math.abs(d - duration) > 1) { duration = d; buildTimeline(); active = -1; render(lastTime); }
          if (pendingSeek) {
            player.seekTo(pendingSeek.t, true);
            if (pendingSeek.play) player.playVideo();
            pendingSeek = null;
          }
          setInterval(tick, 250);
        },
        onStateChange: function (e) {
          setPlaying(e.data === 1 || e.data === 3);
          var d = player.getDuration && player.getDuration();
          if (d && Math.abs(d - duration) > 1) { duration = d; buildTimeline(); active = -1; render(lastTime); }
        },
        onError: function () { $('fallback').hidden = false; }
      }
    });
  };
  function tick() {
    if (dragging || !player.getCurrentTime) return;
    var t = player.getCurrentTime();
    if (typeof t === 'number' && !isNaN(t) && (playing || Math.abs(t - lastTime) > 0.5)) render(t);
  }

  var s = document.createElement('script');
  s.src = 'https://www.youtube.com/iframe_api';
  s.onerror = function () { $('fallback').hidden = false; };
  document.head.appendChild(s);
  setTimeout(function () { if (!window.YT || !window.YT.Player) $('fallback').hidden = false; }, 8000);

  follow.checked = !window.matchMedia('(max-width: 1040px)').matches;
  render(initial);
  if (initial) pendingSeek = null; // the player already starts there
})();

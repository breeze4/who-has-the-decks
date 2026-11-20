# Who has the decks?

An annotated, timestamped guide to the Fred again.. b2b Thomas Bangalter set
(USB002, Alexandra Palace, London, 27 February 2026). The page embeds the
[YouTube film](https://www.youtube.com/watch?v=gfF8jzBVWvM) and lets you step
through the set moment by moment: what is playing, how it was put together,
and which of the two is doing it.

## How attributions work

Each entry carries an evidence level, and the page states each claim only as
strongly as its evidence:

| Level | Meaning |
| --- | --- |
| Seen in the film | Read from frames of the film; the entry gives the frame times |
| Fred says so | Stated in Fred again..'s timestamped notes, pinned under the film |
| Inferred | Not seen or stated outright; the reasoning is shown |
| No source | Nobody says, and the frames don't show it |

When a track change falls in a wide, crowd, or dark shot, the entry stays
"Not known yet" or "Inferred", even if the surrounding frames suggest an
answer.

## Files

- `index.html` - the page
- `assets/guide-data.js` - every moment: time, tracks, who, evidence, notes. Edit this to correct or extend the guide.
- `assets/app.js` - player sync, stepping, timeline
- `assets/style.css` - styles
- `scripts/` - download the film locally and cut frames for review (output goes to `media/`, which is git-ignored)
- `sources/` - saved source text the guide is built from
- `tests/smoke.js` - page logic checks against a stand-in player
- `CLAUDE.md` - project state and next steps for Claude Code sessions

No build step. Open `index.html` through any static server.

## Publishing on GitHub Pages

GitHub Pages serves the `main` branch, `/ (root)` folder, at
https://breeze4.github.io/who-has-the-decks/. A push to `main` updates the site.

## Controls

`←` / `→` step between moments, `space` play / pause, `J` / `L` jump 10 seconds.
Add `#t=<seconds>` to the URL to link to a point in the set.

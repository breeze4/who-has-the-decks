# Who has the decks?

An annotated, timestamped guide to the Fred again.. b2b Thomas Bangalter set
(USB002, Alexandra Palace, London, 27 February 2026). The page embeds the
[YouTube film](https://www.youtube.com/watch?v=gfF8jzBVWvM) and lets you step
through the set moment by moment: what is playing, how it was put together,
and which of the two is doing it.

## Status

Draft 1. Attributions come from Fred again..'s own timestamped notes and from
reasoning that is printed next to each entry. **Nothing has been checked
against the picture or the sound yet**, so most track blocks are marked
"Not known yet". Each entry carries an evidence level:

| Level | Meaning |
| --- | --- |
| Fred says so | Stated in Fred's notes (read second-hand, see Sources on the page) |
| Inferred | Not stated; the reasoning is shown |
| No source | Nobody says, and the film has not been reviewed |

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

Settings -> Pages -> Build and deployment -> Source: "Deploy from a branch",
pick the branch that holds these files and the `/ (root)` folder.

## Controls

`←` / `→` step between moments, `space` play / pause, `J` / `L` jump 10 seconds.
Add `#t=<seconds>` to the URL to link to a point in the set.

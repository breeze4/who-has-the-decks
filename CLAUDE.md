# Who has the decks?

A GitHub Pages site: an annotated guide to the Fred again.. b2b Thomas Bangalter set
(USB002, Alexandra Palace, 27 Feb 2026, https://youtu.be/gfF8jzBVWvM). The owner wants to know
**which of the two is doing what on the equipment**, moment by moment, with the mixing, songs
and effects explained. It has to be polished.

## Where this stands

The visual and audio pass ran on 2026-11-20 on the owner's MacBook:

- Every block start was reviewed in frames (1 fps scans, closer looks where a hand was visible),
  and the key frames of each claim were checked a second time. Of 30 track blocks, 16 are
  `seen`, 2 `stated`, 3 `inferred`, 9 unknown. The page counts these live.
- The owner confirmed who is who: cap + glasses = Thomas, tour T-shirt = Fred.
- `sources/fred-notes.txt` holds Fred's notes first-hand, from his pinned YouTube comment. All
  times in `guide-data.js` match it.
- Block times were checked against the audio (`media/audio/`, spectral change). Les Amazones
  moved to 4578 s (audio change), still marked approximate.
- Real playback of the embed and arrow seeking were confirmed in a browser. `tests/smoke.js`
  passes. GitHub Pages serves the `main` branch, root folder.
- Frame review notes per segment are in `media/review/seg_NN.json` (git-ignored, local only).

Tools this needs on a Mac: `brew install yt-dlp ffmpeg ffmpeg-full` (ffmpeg-full has the
`drawtext` filter that `scripts/sheets.sh` needs), librosa in a venv for audio, and Playwright
installed with pnpm outside the repo for the smoke test
(`NODE_PATH=<dir>/node_modules node tests/smoke.js`).

## The job, as run (repeat it if the film or notes change)

1. `brew install yt-dlp ffmpeg`, then `scripts/fetch.sh`. Puts the film, audio, description and
   top comments in `media/` (git-ignored; never commit any of it).
2. Find Fred's notes first-hand in `media/set.description` or the comments JSON. Diff against
   `sources/fred-notes.txt` and fix any wording or times in `assets/guide-data.js`. Then change the
   "second-hand" wording in the Sources section of `index.html`.
3. Confirm who is who. Draft 1 assumes cap + glasses = Thomas, tour T-shirt with "again" on the
   sleeve = Fred, read from clothing in four thumbnails. Ask the owner to confirm at a glance;
   if it is the other way round every attribution flips.
4. `scripts/sheets.sh` makes timestamped contact sheets of the whole film (about 47 images).
   Read them all. Log which stretches show the booth and from which camera, and work out the
   booth layout: how many decks, which mixer, where the drum machine is, any effects unit.
   Tile timestamps are only accurate to about half the spacing.
5. For each block boundary in `guide-data.js`, run `scripts/clip_frames.sh <start> <end>` for
   roughly 45 s either side and read the frames. File names are exact times in seconds.
   Record who is cueing in headphones, whose hand is on which deck or mixer control, and what
   the other person is doing.
6. Audio (`media/set.wav`): check each block's start time by ear-equivalent analysis (onsets,
   tempo changes, spectral change). Look for percussion that is not in the records, which per
   Fred is Thomas's drum machine. `pip install librosa` works for this. No fingerprinting service
   is needed; the tracklist is already published (`sources/mixmag-tracklist.txt`).
7. Update `assets/guide-data.js`, then the counts and caveats in `index.html` and `README.md`
   follow from it (the status line counts are computed, the prose is not).
8. Open the page locally (`python3 -m http.server`), confirm the real video plays and the
   arrows seek it, run `node tests/smoke.js`, commit, push.

## Rules for attributions

The owner is strict about not being told things that are not known. Keep it that way.

- Every entry carries `who` and `evidence`. Add a new evidence level `seen` for things observed
  in frames, and give the timestamp of the frame in `why` so the owner can check it. Add the
  chip style and legend entry for it in `assets/style.css`, `assets/app.js` (`EV`) and the
  evidence section of `index.html`.
- Owning a record is not evidence of playing it.
- The film cuts between cameras and to the crowd. If the booth is not on screen at a
  transition, the answer stays "Not known yet". Do not fill gaps by guessing. One exception, used
  twice: when the change falls in a 10-15 s wide or dark shot and only one person works the
  controls on both sides of it, the entry is `inferred`, with the frames either side in `why`.
- Left and right swap between cameras. Identify by clothing, never by position. The tour
  T-shirt is merchandise that crowd members wear too; check the face. From behind, both shirts
  show a building print; Thomas has a small "Théâtre de la Ville" logo on the chest.
- Fred spends long stretches on a hand-held microphone, often away from the decks. Do not count
  him as playing then.
- Many "blends" are single prepared files (Fred: about 20 Technologic mash-ups, a file called
  "revolution yeah", the Billie x Digital Love mash-up). Three tracks at once does not imply
  three decks. Say which case it is only when the frames show it.
- Do not name equipment models unless the model is legible in a frame.
- Descriptions of what a blend sounds like must come from the audio, or be labelled as
  reasoning from the tracklist. Several draft-1 bodies say "on paper" for this reason; replace
  them once heard.

## What the visual pass settled, and what stays open

Settled:
- 7:37 and 1:09:07: frames show both on the controls, not Fred alone (draft 1 guessed Fred).
- 1:34:00 "Thomas playing (saying?)": Thomas is on a deck platter, not a microphone.
- 1:52:40 "dad on the table": Thomas does stand on the booth top.
- 53:18 "that face": the face on screen is Thomas's.

Open (the film and notes cannot answer them):
- 14:18: which vocal is "played by Thomas". Tracklist order suggests Renegade Master.
- 40:00-41:45: still inferred as Thomas's file; the change is in wide shots.
- 58:26: whether Fred's microphone moment at 59:11 is the list of teachers.
- "Femi" in the final block is unidentified.
- 3:16 and every layered block: one file or several channels. No screen or fader is legible.
- Whether the "novation" knob unit at Thomas's end is the drum machine. No model is legible.

## Files

- `index.html` – page and the essay sections (who is who, how to read the booth, sources, limits)
- `assets/guide-data.js` – all moments. Schema is documented at the top of the file.
- `assets/app.js` – YouTube IFrame API sync, stepping, timeline. `assets/style.css` – styles.
- `scripts/` – fetch and frame extraction. `sources/` – saved source text. `tests/smoke.js`.

No build step. Writing style on the page: plain, short, no superlatives, caveats stated once.

## Git

All work goes on `main`, the default branch. GitHub Pages serves `main`, root folder, at
https://breeze4.github.io/who-has-the-decks/. A push to `main` updates the live site.
Do not open a pull request unless asked.

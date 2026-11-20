# Lessons

## 2026-11-20: Pilot one frame-review agent before you fan out

- **Context:** The visual pass split the film into eight segments, one review agent each.
- **What happened:** A single pilot agent ran first on segment 1. Its findings were checked
  against full-size frames before seven more agents started. The pilot found a wrong frame width
  in the brief (the source is 1080x720, not 1280x720) and a second identity trap (both shirts show
  a building print from behind). Both fixes went into the shared brief before the fan-out.
- **Lesson:** Run one agent, check its key frames yourself, fix the brief, then fan out. Keep a
  shared brief file so every agent gets the same rules.
- **Status:** new

## 2026-11-20: Spot-check every agent's key frames

- **Context:** Eight agents returned "seen" verdicts for track changes.
- **What happened:** A second look at 23 key frames confirmed most claims, but one verdict was
  wrong: at 24:05 the agent gave Fred alone, and the frame shows both men's hands in the middle
  unit. The page now says "both".
- **Lesson:** Before an agent's "seen" claim goes on the page, extract its key frame at full size
  and look at it. Overrule the agent when the frame disagrees.
- **Status:** new

## 2026-11-20: Merchandise and microphones confuse identity and activity

- **Context:** Identifying Fred again.. and Thomas Bangalter by clothing.
- **What happened:** Crowd members wear the same tour T-shirt as Fred. Fred also spends long
  stretches on a hand-held microphone, away from the decks, which looks like activity in the
  booth.
- **Lesson:** Identify by face and clothing together. Treat "on the microphone" as a separate
  activity from "on the controls".
- **Status:** new

## 2026-11-20: Homebrew ffmpeg lacks drawtext

- **Context:** `scripts/sheets.sh` stamps times on contact-sheet tiles.
- **What happened:** The Homebrew `ffmpeg` formula has no `drawtext` filter, so the script
  failed. The keg-only `ffmpeg-full` formula has it. Separately, a `brew install` stopped making
  progress in the openssl post-install step; stopping it and running `brew postinstall openssl@4`
  fixed it.
- **Lesson:** Install `ffmpeg-full` for this project. The script now uses it when present.
- **Status:** new

## 2026-11-20: A headless browser kept playing the set after the session ended

- **Context:** The visual pass confirmed real playback of the embed with agent-browser, in a
  headless Chrome on `localhost:8765`.
- **What happened:** The session ended without closing that browser. Its daemon stayed alive with
  no parent, and the YouTube embed kept playing the set aloud. The owner turned off their own
  player and still heard the music.
- **Lesson:** After a playback check, pause the player and close the browser
  (`agent-browser close`). Before you end a session, confirm that no headless browser you started
  is still running.
- **Status:** new

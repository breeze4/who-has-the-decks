#!/usr/bin/env bash
# Pass 1: contact sheets of the whole film, to find when the camera is on the booth.
# Usage: scripts/sheets.sh [seconds_between_frames=5] [video=media/set.mp4]
# Each sheet is 6x5 tiles; every tile is stamped with its timestamp.
# Output: media/sheets/sheet_0001.jpg ... (at 5 s spacing, one sheet = 150 s, about 47 sheets)
set -euo pipefail
cd "$(dirname "$0")/.."
STEP="${1:-5}"; IN="${2:-media/set.mp4}"; OUT=media/sheets
mkdir -p "$OUT"
ffmpeg -hide_banner -loglevel error -y -i "$IN" -vf \
"fps=1/${STEP},scale=426:-2,drawtext=text='%{pts\:hms}':x=6:y=6:fontsize=18:fontcolor=white:box=1:boxcolor=black@0.6,tile=6x5" \
  -q:v 4 "$OUT/sheet_%04d.jpg"
ls "$OUT" | wc -l

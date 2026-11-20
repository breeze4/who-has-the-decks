#!/usr/bin/env bash
# Pass 2: full-size frames for one stretch, to read hands on the equipment.
# Usage: scripts/clip_frames.sh <start_seconds> <end_seconds> [fps=2] [video=media/set.mp4]
# Output: media/frames/<start>-<end>/f_<seconds>.jpg (file name = time in the film, in seconds)
set -euo pipefail
cd "$(dirname "$0")/.."
S="$1"; E="$2"; FPS="${3:-2}"; IN="${4:-media/set.mp4}"
OUT="media/frames/${S}-${E}"; mkdir -p "$OUT"
ffmpeg -hide_banner -loglevel error -y -ss "$S" -to "$E" -i "$IN" -vf "fps=${FPS},scale=1280:-2" \
  -q:v 3 -start_number 0 "$OUT/raw_%05d.jpg"
i=0
for f in "$OUT"/raw_*.jpg; do
  t=$(awk -v s="$S" -v i="$i" -v fps="$FPS" 'BEGIN{printf "%08.1f", s + i/fps}')
  mv "$f" "$OUT/f_${t}.jpg"; i=$((i+1))
done
ls "$OUT" | wc -l

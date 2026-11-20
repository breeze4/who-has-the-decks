#!/usr/bin/env bash
# Download the film (720p), its description and comments into media/.
# Needs: brew install yt-dlp ffmpeg
# Run on a home connection; YouTube refuses datacenter addresses.
set -euo pipefail
cd "$(dirname "$0")/.."
ID=gfF8jzBVWvM
mkdir -p media
yt-dlp -f "bv*[height<=720]+ba/b[height<=720]" --merge-output-format mp4 \
  --write-description --write-info-json --write-comments \
  --extractor-args "youtube:comment_sort=top;max_comments=200,all,0,0" \
  -o "media/set.%(ext)s" "https://www.youtube.com/watch?v=$ID"
# Mono 22.05 kHz audio for analysis (tempo, transitions, drum-machine layers).
ffmpeg -hide_banner -loglevel error -y -i media/set.mp4 -vn -ac 1 -ar 22050 media/set.wav
ffprobe -v error -show_entries format=duration -of default=nw=1:nk=1 media/set.mp4

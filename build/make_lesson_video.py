#!/usr/bin/env python3
"""Assemble a faceless video: branded caption slides + AI voiceover -> MP4.
Usage: python3 make_lesson_video.py <id> <audio.mp3> <slides.json> <out.mp4> [W H]
Default W H = 1920 1080 (horizontal course). Pass 1080 1920 for vertical social shorts.
slides.json = [{"eyebrow":"...","headline":"<html allowed>"}, ...]
"""
import sys, os, json, subprocess

LESSON_ID, AUDIO, SLIDES_JSON, OUT = sys.argv[1], sys.argv[2], sys.argv[3], sys.argv[4]
W = int(sys.argv[5]) if len(sys.argv) > 5 else 1920
H = int(sys.argv[6]) if len(sys.argv) > 6 else 1080
VERT = H > W
CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
WORK = os.path.join("build", "slides", LESSON_ID)
os.makedirs(WORK, exist_ok=True)
os.makedirs(os.path.dirname(OUT), exist_ok=True)

slides = json.load(open(SLIDES_JSON))

# size tuning per orientation
pad = "180px 90px" if VERT else "140px 150px"
eb = 36 if VERT else 30
hl = 86 if VERT else 96
sm = 56 if VERT else 60
lst = 60 if VERT else 52
brand_fs = 38 if VERT else 34
maxw = W - (180 if VERT else 300)

TEMPLATE = """<!DOCTYPE html><html><head><meta charset="utf-8"><style>
*{{margin:0;padding:0;box-sizing:border-box}}
body{{width:%(W)spx;height:%(H)spx;overflow:hidden;
  font-family:-apple-system,"Helvetica Neue",Arial,sans-serif;
  background:linear-gradient(150deg,#0b1f33 0%%,#10324f 55%%,#0a5e44 135%%);color:#fff}}
.stage{{width:%(W)spx;height:%(H)spx;padding:%(pad)s;position:relative;
  display:flex;flex-direction:column;justify-content:center}}
.stage::after{{content:"";position:absolute;right:-180px;top:-180px;width:720px;height:720px;
  background:radial-gradient(circle,rgba(242,183,5,.18),transparent 70%%)}}
.eyebrow{{color:#f2b705;font-weight:800;letter-spacing:.2em;text-transform:uppercase;
  font-size:%(eb)spx;margin-bottom:40px}}
.headline{{font-size:%(hl)spx;font-weight:900;line-height:1.08;letter-spacing:-.02em;max-width:%(maxw)spx}}
.headline .g{{color:#f2b705}}
.headline em{{font-style:italic}}
.headline .sm{{font-size:%(sm)spx;font-weight:800;line-height:1.25}}
.rule{{height:8px;width:180px;background:#f2b705;border-radius:4px;margin-top:50px}}
.brand{{position:absolute;left:%(bl)spx;bottom:%(bb)spx;font-size:%(brand_fs)spx;font-weight:900}}
.brand .g{{color:#f2b705}}
.pg{{position:absolute;right:%(bl)spx;bottom:%(bb2)spx;font-size:26px;color:#9fb2c4;font-weight:700}}
.list{{font-size:%(lst)spx;font-weight:800;line-height:1.7;margin-top:10px}}
.list .g{{color:#f2b705}}
</style></head><body>
<div class="stage">
  <div class="eyebrow">{eyebrow}</div>
  <div class="headline">{headline}</div>
  <div class="rule"></div>
  <div class="brand">The NIL <span class="g">Playbook</span></div>
  <div class="pg">{pg}</div>
</div></body></html>""" % {"W":W,"H":H,"pad":pad,"eb":eb,"hl":hl,"sm":sm,"lst":lst,
   "brand_fs":brand_fs,"maxw":maxw,"bl":90 if VERT else 150,
   "bb":120 if VERT else 90,"bb2":126 if VERT else 96}

# render each slide to PNG
pngs = []
for i, s in enumerate(slides):
    n = f"{i+1:02d}"
    htmlpath = os.path.join(WORK, f"{n}.html")
    pngpath = os.path.join(WORK, f"{n}.png")
    with open(htmlpath, "w") as f:
        f.write(TEMPLATE.format(eyebrow=s.get("eyebrow", "THE NIL PLAYBOOK"),
                                headline=s["headline"],
                                pg=f"{i+1}/{len(slides)}"))
    subprocess.run([CHROME, "--headless", "--disable-gpu", "--hide-scrollbars",
                    "--force-device-scale-factor=1", f"--window-size={W},{H}",
                    f"--screenshot={pngpath}", "file://" + os.path.abspath(htmlpath)],
                   stderr=subprocess.DEVNULL, check=True)
    pngs.append(pngpath)

# audio duration
dur = float(subprocess.check_output(
    ["ffprobe", "-v", "error", "-show_entries", "format=duration",
     "-of", "default=noprint_wrappers=1:nokey=1", AUDIO]).strip())
per = dur / len(pngs) + 0.05

# concat list
listpath = os.path.join(WORK, "list.txt")
with open(listpath, "w") as f:
    for p in pngs:
        f.write(f"file '{os.path.abspath(p)}'\n")
        f.write(f"duration {per:.3f}\n")
    f.write(f"file '{os.path.abspath(pngs[-1])}'\n")  # concat quirk: repeat last

# assemble: slides + audio, fade in/out, 1080p, H.264/AAC
subprocess.run([
    "ffmpeg", "-y", "-f", "concat", "-safe", "0", "-i", listpath,
    "-i", AUDIO,
    "-c:v", "libx264", "-pix_fmt", "yuv420p", "-r", "30",
    "-vf", f"scale={W}:{H},fade=t=in:st=0:d=0.5,fade=t=out:st={dur-0.5:.2f}:d=0.5",
    "-c:a", "aac", "-b:a", "192k", "-shortest", "-movflags", "+faststart", OUT
], stderr=subprocess.DEVNULL, check=True)

print(f"OK {OUT}  ({dur:.1f}s, {len(pngs)} slides)")

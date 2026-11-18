"""Downloads DEMO gym photography from Unsplash (free under the Unsplash License) into public/images
and regenerates src/lib/images.ts + public/images/CREDITS.md.
Run from the project root:  python -I scripts/fetch-photos.py
These are stand-ins. Replace any slot with the gym's own photographs by overwriting the file."""
import os, subprocess
from PIL import Image

# slot -> (unsplash id, download width, alt text)
SLOTS = {
    "hero": ("yqI0r1AMSsQ", 1600, "Athlete training with heavy dumbbells in a dark gym"),
    "gym-floor": ("rbSNsoXk-3A", 1400, "Dark gym floor with benches and warm lighting"),
    "strength": ("RcKnkaNmomg", 1200, "Lifter holding a loaded barbell"),
    "free-weights": ("1lkg9MLl_rU", 1000, "Dumbbell curl with a rack of dumbbells behind"),
    "personal-training": ("oMwR_dbfDkE", 1000, "Athlete training on gym equipment"),
    "group": ("cwhGcdX1ZDI", 1000, "Barbell on the training floor with athletes"),
    "warrior-1": ("mviOOZJ-dZA", 1400, "Muscular bodybuilder in a dark studio"),
    "warrior-2": ("MuEuNqySpO0", 1200, "Bodybuilder posing against a dark background"),
    "back": ("9W9BDUG7u9E", 1200, "Lifter's back under a barbell"),
    "rows": ("FeIVyHICRqY", 1000, "Athlete doing dumbbell rear-delt raises"),
    "women": ("Jx81mPHWnts", 1000, "Woman setting up a barbell with weight plates"),
    "rack": ("gzeTjGu3b_k", 1200, "Barbell rack and dumbbells in a gym"),
    "plates": ("80DPifHVF-Y", 1000, "Lifter loading weight plates"),
}

os.makedirs("public/images", exist_ok=True)
dims = {}
for slot, (pid, w, _) in SLOTS.items():
    path = f"public/images/{slot}.jpg"
    if not os.path.exists(path):
        subprocess.run(["curl", "-sL", "--fail", "-o", path, f"https://unsplash.com/photos/{pid}/download?force=true&w={w}"], check=True)
    with Image.open(path) as im:
        dims[slot] = im.size
    print(slot, dims[slot])

lines = ["/**", " * IMAGE SLOT SYSTEM", " * Every picture is referenced by a slot key. To use the gym's own photographs,",
         " * overwrite the file in /public/images (and update the size here). Nothing else changes.",
         " * Current files are free Unsplash DEMO photos - see public/images/CREDITS.md.", " */",
         "const slot = (name: string, alt: string, w: number, h: number) => ({ src: `/images/${name}.jpg`, alt, w, h });", "",
         "export const images = {"]
for slot, (_, _, alt) in SLOTS.items():
    w, h = dims[slot]
    lines.append(f'  "{slot}": slot("{slot}", "{alt}", {w}, {h}),')
lines += ["} as const;", "", "export type ImageKey = keyof typeof images;", ""]
open("src/lib/images.ts", "w", encoding="utf-8").write("\n".join(lines))

credits = ["# Photo credits (demo images)", "", "Free to use under the Unsplash License (https://unsplash.com/license). Demo only - replace with the gym's own photography.", ""]
credits += [f"- `{s}.jpg` - https://unsplash.com/photos/{pid}" for s, (pid, _, _) in SLOTS.items()]
open("public/images/CREDITS.md", "w", encoding="utf-8").write("\n".join(credits) + "\n")

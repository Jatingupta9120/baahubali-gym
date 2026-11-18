/**
 * IMAGE SLOT SYSTEM
 * Every picture is referenced by a slot key. To use the gym's own photographs,
 * overwrite the file in /public/images (and update the size here). Nothing else changes.
 * Current files are free Unsplash DEMO photos - see public/images/CREDITS.md.
 */
const slot = (name: string, alt: string, w: number, h: number) => ({ src: `/images/${name}.jpg`, alt, w, h });

export const images = {
  "hero": slot("hero", "Athlete training with heavy dumbbells in a dark gym", 1600, 2400),
  "gym-floor": slot("gym-floor", "Dark gym floor with benches and warm lighting", 1400, 2102),
  "strength": slot("strength", "Lifter holding a loaded barbell", 1200, 1800),
  "free-weights": slot("free-weights", "Dumbbell curl with a rack of dumbbells behind", 1000, 750),
  "personal-training": slot("personal-training", "Athlete training on gym equipment", 1000, 667),
  "group": slot("group", "Barbell on the training floor with athletes", 1000, 667),
  "warrior-1": slot("warrior-1", "Muscular bodybuilder in a dark studio", 1400, 2488),
  "warrior-2": slot("warrior-2", "Bodybuilder posing against a dark background", 1200, 2133),
  "back": slot("back", "Lifter's back under a barbell", 1200, 800),
  "rows": slot("rows", "Athlete doing dumbbell rear-delt raises", 1000, 1500),
  "women": slot("women", "Woman setting up a barbell with weight plates", 1000, 1499),
  "rack": slot("rack", "Barbell rack and dumbbells in a gym", 1200, 800),
  "plates": slot("plates", "Lifter loading weight plates", 1000, 750),
} as const;

export type ImageKey = keyof typeof images;

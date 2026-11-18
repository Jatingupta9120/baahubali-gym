import type { ImageKey } from "@/lib/images";

export type NavItem = { label: string; href: string; children?: { label: string; href: string; image?: ImageKey }[]; mega?: boolean };

/** Navigation organised by what the visitor wants to do (membership / training / facilities). */
export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Train", href: "/training", mega: true,
    children: [
      { label: "Strength Training", href: "/training#strength", image: "strength" },
      { label: "Bodybuilding", href: "/training#bodybuilding", image: "warrior-2" },
      { label: "Personal Training", href: "/training#personal", image: "personal-training" },
      { label: "Group Workouts", href: "/training#group", image: "group" },
    ],
  },
  { label: "Facilities", href: "/facilities" },
  {
    label: "Membership", href: "/membership",
    children: [
      { label: "Join Now", href: "/membership#join" },
      { label: "Book a Free Trial", href: "/membership#trial" },
      { label: "Membership Options", href: "/membership#plans" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

/** Programmes - generic training types from the brief. Confirm each with the gym. */
export const programs: { id: string; title: string; text: string; image: ImageKey; points: string[] }[] = [
  { id: "strength", title: "Strength Training", image: "strength",
    text: "Build real, functional strength with barbell and free-weight training, progressed with discipline.",
    points: ["Barbell & compound lifts", "Progressive overload", "Technique-first coaching"] },
  { id: "bodybuilding", title: "Bodybuilding", image: "warrior-2",
    text: "Train for size, shape and symmetry with structured muscle-building routines.",
    points: ["Split-based training", "Hypertrophy focus", "Consistency over shortcuts"] },
  { id: "personal", title: "Personal Training", image: "personal-training",
    text: "One-to-one guidance built around your goals, your level and your schedule.",
    points: ["Goal-based plans", "Form correction", "Accountability"] },
  { id: "group", title: "Group Workouts", image: "group",
    text: "Train alongside others and feed off the energy of the floor.",
    points: ["Train together", "Shared motivation", "All levels welcome"] },
];

/** Facilities - editable. Only generic equipment categories; the gym must confirm what it actually offers. */
export const facilityBlocks: { eyebrow: string; title: string; text: string; image: ImageKey; items: string[] }[] = [
  { eyebrow: "Your place to train", title: "The Strength Floor", image: "gym-floor",
    text: "A focused training floor built for heavy, honest work.",
    items: ["Barbells & weight plates", "Racks & benches", "Open lifting space"] },
  { eyebrow: "Your place to lift", title: "Free Weights", image: "rack",
    text: "Dumbbells and barbells for every level, from first-timers to seasoned lifters.",
    items: ["Dumbbell range", "Barbell training", "Plate-loaded work"] },
  { eyebrow: "Your place to be coached", title: "Personal Training", image: "personal-training",
    text: "Work one-to-one with a coach who keeps your form sharp and your goals in sight.",
    items: ["One-to-one sessions", "Programme design", "Progress check-ins"] },
  { eyebrow: "Your place to belong", title: "The Community", image: "group",
    text: "A training community that pushes each other forward.",
    items: ["Group workouts", "Training partners", "Shared goals"] },
];

export const goals = [
  "Build strength", "Bodybuilding", "Lose weight / get fit", "Personal training", "Group workouts", "Just getting started",
] as const;

export const values = [
  { n: "01", t: "Discipline", d: "Show up when motivation doesn't. That is where strength is built." },
  { n: "02", t: "Consistency", d: "Small efforts repeated every day outlast big efforts done once." },
  { n: "03", t: "Strength", d: "Stronger body, stronger mind, stronger will." },
  { n: "04", t: "Transformation", d: "Every rep is a step towards the strongest version of you." },
];

export const instagramGallery: ImageKey[] = ["warrior-1", "strength", "rack", "women", "back", "plates", "rows", "gym-floor", "free-weights"];

export const galleryItems: { image: ImageKey; category: "Strength" | "Bodybuilding" | "Gym Floor"; title: string }[] = [
  { image: "warrior-1", category: "Bodybuilding", title: "Built, not given" },
  { image: "strength", category: "Strength", title: "Heavy barbell work" },
  { image: "gym-floor", category: "Gym Floor", title: "The training floor" },
  { image: "back", category: "Strength", title: "Under the bar" },
  { image: "warrior-2", category: "Bodybuilding", title: "Discipline shows" },
  { image: "rack", category: "Gym Floor", title: "Racks & dumbbells" },
  { image: "women", category: "Strength", title: "Loading the plates" },
  { image: "rows", category: "Bodybuilding", title: "Rear-delt raises" },
  { image: "free-weights", category: "Gym Floor", title: "Dumbbell work" },
  { image: "plates", category: "Strength", title: "Plates on the bar" },
  { image: "group", category: "Gym Floor", title: "On the floor" },
  { image: "personal-training", category: "Bodybuilding", title: "Training session" },
];

/**
 * CENTRAL BUSINESS CONFIGURATION - BAAHUBALI GYM
 * Everything the client must confirm lives here. Items with `verified: false` are PLACEHOLDERS.
 */
export const site = {
  name: "Baahubali Gym",
  hindiName: "बाहुबली",
  fullName: "बाहुबली GYM",
  url: "https://www.example.com", // TODO: final domain

  /**
   * LOGO - the real emblem is not available as a clean file yet (only an Instagram profile screenshot).
   * Drop the client's logo into /public/brand (e.g. logo.png) and set `src` below.
   * Until then the header/hero show a plain gold wordmark - NOT a made-up emblem.
   */
  logo: { src: "" as string, width: 160, height: 56 },

  /**
   * TAGLINE - Instagram showed only "TRAIN LIKE A WARRIOR • FIGHT LIKE A K..." (cut off).
   * Leave empty until the client confirms the full line.
   */
  tagline: "",

  // PHONE - NOT PROVIDED YET. Placeholder only; every call/WhatsApp link is a dead number until set.
  phone: { display: "+91 00000 00000", tel: "+910000000000", whatsapp: "910000000000", verified: false },

  // ADDRESS - NOT PROVIDED YET.
  address: { line1: "Gym address - to be confirmed", city: "City - to be confirmed", state: "", pincode: "", verified: false },
  mapEmbedUrl: "", // paste the Google Maps embed src once the address is confirmed

  hours: [
    { days: "Monday - Saturday", time: "To be confirmed" },
    { days: "Sunday", time: "To be confirmed" },
  ],
  email: "", // TODO

  social: { instagram: "https://www.instagram.com/baahubaligym/" },

  /** Set NEXT_PUBLIC_FORM_ENDPOINT (Formspree / own API, JSON POST). While empty, forms hand off via WhatsApp. */
  formEndpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? "",
};

export const DEFAULT_WA_MESSAGE = "Hello Baahubali Gym, I would like to know more about joining. Please share the details.";

export const waLink = (message: string = DEFAULT_WA_MESSAGE) =>
  `https://wa.me/${site.phone.whatsapp}?text=${encodeURIComponent(message)}`;

import { site } from "@/config/site";

/** ExerciseGym structured data. Phone/address only included once marked verified. */
export default function JsonLd() {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "ExerciseGym",
    name: site.name,
    alternateName: site.fullName,
    url: site.url,
    description: "Baahubali Gym - strength training, bodybuilding, personal training and group workouts.",
    sameAs: [site.social.instagram],
  };
  if (site.phone.verified) data.telephone = site.phone.tel;
  if (site.address.verified) data.address = { "@type": "PostalAddress", streetAddress: site.address.line1, addressLocality: site.address.city, addressRegion: site.address.state, postalCode: site.address.pincode, addressCountry: "IN" };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

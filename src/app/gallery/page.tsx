import type { Metadata } from "next";
import { Camera } from "lucide-react";
import PageHero from "@/components/PageHero";
import GalleryGrid from "@/components/GalleryGrid";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Gallery - Training at Baahubali Gym",
  description: "Photos from Baahubali Gym - strength training, bodybuilding and the gym floor. Follow @baahubaligym on Instagram.",
  alternates: { canonical: "/gallery" },
};

export default function Gallery() {
  return (
    <>
      <PageHero eyebrow="Gallery" title="Built in the" accent="iron" image="rack" position="50% 50%">
        <p>Filter by category and tap any image to view it larger. Demo photos are shown until the gym&rsquo;s own photography is added.</p>
      </PageHero>
      <section className="section">
        <div className="container-x">
          <GalleryGrid />
          <div className="mt-14 text-center"><a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-gold"><Camera size={16} aria-hidden /> See more on Instagram</a></div>
        </div>
      </section>
    </>
  );
}

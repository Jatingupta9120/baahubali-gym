import type { Metadata, Viewport } from "next";
import { Anton, Barlow, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import { site } from "@/config/site";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import JsonLd from "@/components/JsonLd";

const display = Anton({ subsets: ["latin"], weight: "400", variable: "--font-anton", display: "swap" });
const sans = Barlow({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-barlow", display: "swap" });
const deva = Noto_Sans_Devanagari({ subsets: ["devanagari"], weight: ["700", "800"], variable: "--font-devanagari", display: "swap" });

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#090909" };

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Baahubali Gym | Train Like a Warrior", template: "%s | Baahubali Gym" },
  description: "Welcome to Baahubali Gym - where discipline meets determination and every workout brings you closer to your strongest self. Strength training, bodybuilding, personal training and group workouts.",
  keywords: ["Baahubali Gym", "बाहुबली जिम", "gym near me", "strength training", "bodybuilding", "personal training", "group workouts", "gym membership"],
  openGraph: { type: "website", siteName: site.name, locale: "en_IN", title: "Baahubali Gym - Train Like a Warrior", description: "Build strength. Break limits. Become unstoppable." },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${display.variable} ${sans.variable} ${deva.variable}`}>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-gold focus:px-4 focus:py-3 focus:text-ink">Skip to content</a>
        <TopBar />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <FloatingActions />
        <JsonLd />
      </body>
    </html>
  );
}

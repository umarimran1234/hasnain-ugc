import type { Metadata, Viewport } from "next";
import "@fontsource/unbounded/500.css";
import "@fontsource/unbounded/700.css";
import "@fontsource/unbounded/800.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "@fontsource/manrope/800.css";
import "@fontsource/caveat-brush/400.css";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? "https://" + process.env.VERCEL_PROJECT_PRODUCTION_URL : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Hasnain UGC — UGC Creator & Ad Editor",
  description:
    "Scroll-stopping UGC video ads, hooks, voiceovers and edits for TikTok, Instagram Reels, Meta and YouTube Shorts.",
  openGraph: {
    title: "Hasnain UGC — UGC Creator & Ad Editor",
    description: "Scroll-stopping UGC ads that actually sell.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#07050D",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

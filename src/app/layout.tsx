import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Serif, IBM_Plex_Mono } from "next/font/google";
import { CalInit } from "@/components/cal-init";
import "./globals.css";

const SITE_URL = "https://citeable.com";

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const plexSerif = IBM_Plex_Serif({
  variable: "--font-plex-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const title = "Citeable — The AEO Agency for B2B SaaS";
const description =
  "Buyers are asking AI for recommendations instead of Googling. Citeable is an Answer Engine Optimisation agency that gets B2B SaaS companies cited by ChatGPT, Perplexity, Gemini, and Google AI.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: "%s — Citeable",
  },
  description,
  applicationName: "Citeable",
  keywords: [
    "Answer Engine Optimisation",
    "AEO",
    "Generative Engine Optimisation",
    "GEO",
    "AI search visibility",
    "ChatGPT citations",
    "Perplexity citations",
    "Google AI Mode",
    "B2B SaaS marketing",
    "LLM SEO",
  ],
  authors: [{ name: "Citeable" }],
  creator: "Citeable",
  publisher: "Citeable",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Citeable",
    title,
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  category: "marketing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plexSans.variable} ${plexSerif.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CalInit />
        {children}
      </body>
    </html>
  );
}

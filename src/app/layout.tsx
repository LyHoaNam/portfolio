import type { Metadata } from "next";
import { Black_Ops_One } from "next/font/google";
import "./globals.css";
import Navigation from "@src/components/ui/Navigation";
import { FloatingContact } from "@src/features/contact/components/FloatingContact";

const PORTFOLIO_URL = "https://portfolio-six-rosy-05f50vyvrs.vercel.app";
const PORTFOLIO_TITLE = "Ly Hoa Nam | Frontend Developer";
const PORTFOLIO_DESCRIPTION =
  "Personal portfolio of Ly Hoa Nam — a Senior Frontend Engineer with 6+ years of experience building production web apps with React, Next.js, Vue, and Nuxt. Specialising in retro-inspired UI, interactive 3D experiences, and clean architecture.";

const blackOpsOne = Black_Ops_One({
  subsets: ["latin"],
  variable: "--font-black-ops-one",
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL(PORTFOLIO_URL),

  title: {
    default: PORTFOLIO_TITLE,
    template: "%s | Ly Hoa Nam",
  },
  description: PORTFOLIO_DESCRIPTION,
  applicationName: "Ly Hoa Nam Portfolio",
  category: "technology",

  keywords: [
    "Ly Hoa Nam",
    "Frontend Developer",
    "Senior Frontend Engineer",
    "Portfolio",
    "Next.js",
    "React",
    "Vue",
    "Nuxt",
    "TypeScript",
    "Three.js",
    "Tailwind CSS",
    "Web Development",
    "Ho Chi Minh City",
    "Vietnam",
  ],
  authors: [
    {
      name: "Ly Hoa Nam",
      url: "https://www.linkedin.com/in/nam-ly-587130208/",
    },
  ],
  creator: "Ly Hoa Nam",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "/",
  },

  icons: {
    shortcut: "/favicon/favicon.ico",
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      {
        url: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [{ rel: "mask-icon", url: "/favicon/favicon.ico" }],
  },

  manifest: "/favicon/site.webmanifest",

  openGraph: {
    type: "website",
    url: "/",
    title: PORTFOLIO_TITLE,
    description: PORTFOLIO_DESCRIPTION,
    siteName: "Ly Hoa Nam Portfolio",
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Ly Hoa Nam — Frontend Developer Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: PORTFOLIO_TITLE,
    description: PORTFOLIO_DESCRIPTION,
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${blackOpsOne.variable}`}>
        <Navigation />
        <FloatingContact />
        {children}
      </body>
    </html>
  );
}

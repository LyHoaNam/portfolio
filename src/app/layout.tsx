import type { Metadata } from "next";
import { Black_Ops_One } from "next/font/google";
import "./globals.css";

const PORTFOLIO_TITLE = "Ly Hoa Nam | Frontend Developer";
const PORTFOLIO_DESCRIPTION =
  "Personal portfolio of Ly Hoa Nam — a frontend developer specializing in modern web development with retro-inspired UI, interactive 3D experiences, and clean code architecture.";
const blackOpsOne = Black_Ops_One({
  subsets: ["latin"],
  variable: "--font-black-ops-one",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: PORTFOLIO_TITLE,
  description: PORTFOLIO_DESCRIPTION,
  keywords: [
    "Ly Hoa Nam",
    "Frontend Developer",
    "Portfolio",
    "Next.js",
    "React",
    "TypeScript",
    "Three.js",
    "Web Development",
  ],
  authors: [{ name: "Ly Hoa Nam" }],
  creator: "Ly Hoa Nam",
  openGraph: {
    type: "website",
    title: PORTFOLIO_TITLE,
    description: PORTFOLIO_DESCRIPTION,
    siteName: "Ly Hoa Nam Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: PORTFOLIO_TITLE,
    description: PORTFOLIO_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${blackOpsOne.variable}`}>{children}</body>
    </html>
  );
}

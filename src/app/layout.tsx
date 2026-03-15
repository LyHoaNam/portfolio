import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const PORTFOLIO_TITLE = "Ly Hoa Nam | Frontend Developer";
const PORTFOLIO_DESCRIPTION =
  "Personal portfolio of Ly Hoa Nam — a frontend developer specializing in modern web development with retro-inspired UI, interactive 3D experiences, and clean code architecture.";

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
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}

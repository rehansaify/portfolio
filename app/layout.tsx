import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rehan Saifi — Cloud / DevOps Engineer & SDET",
  description:
    "Portfolio of Rehan Saifi: Cloud / DevOps Engineer, SDET & Automation Engineer, and AI Systems Developer. Building reliable software systems, automation infrastructure, and developer tools.",
  keywords: [
    "Rehan Saifi",
    "Cloud Engineer",
    "DevOps Engineer",
    "SDET",
    "Automation Engineer",
    "AI Systems",
    "Android Quality",
    "WireGuard",
    "Linux Systems",
  ],
  authors: [{ name: "Rehan Saifi" }],
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#171816",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--color-paper)] text-[var(--color-ink)] selection:bg-[var(--color-accent)] selection:text-black">
        {children}
      </body>
    </html>
  );
}

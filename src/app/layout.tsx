import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Suarez Discount Flooring | Hardwood, LVP & Carpet Installation",
  description: "High-quality flooring installation services at discount prices. Specialist in Hardwood, Luxury Vinyl Plank (LVP), and Carpet.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
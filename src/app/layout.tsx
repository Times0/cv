import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "CV - Dorian Chevalérias",
  description: "My CV and link to other profiles, easily printable.",
};

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}

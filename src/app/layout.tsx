import type { Metadata } from "next";
import { Inter, Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import { polySans } from "./fonts";
import "./globals.css";
import Header from "@/components/Header";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const clash = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-clash",
  display: "swap"
});

const plex = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Sprinten Studio",
  description:
    "Sprinten helps Solana founders & developers ship market-ready products in weeks, recreating the Figma experience on the web."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${polySans.variable} ${inter.variable} ${clash.variable} ${plex.variable}`}>
      <body className={`${polySans.className} bg-[#021514] overflow-x-hidden`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
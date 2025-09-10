import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Permanent_Marker } from "next/font/google";


const permanentMarker = Permanent_Marker({
  subsets: ["latin"],
  weight: "400", 
  variable: "--font-permanent-marker",
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Renato's portfolio",
  description: "This is page is made by me, Renato de Bakker, to present myself, and my work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${permanentMarker.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}

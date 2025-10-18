import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/home/Header/Header";
import Footer from "@/home/Footer/Footer";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QuickLaunch - Launch Your Ideas Faster",
  description: "Create and deploy stunning business websites in minutes.",
  openGraph:{ url: 'https://quick-launch-ten.vercel.app/', title: 'QuickLaunch' , description: 'Launch your ideas faster with QuickLaunch.', images: [ { url: '/og-image.png', alt: 'QuickLaunch Preview' } ], },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}

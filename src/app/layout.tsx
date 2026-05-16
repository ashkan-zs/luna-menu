import type { Metadata, Viewport } from "next";
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

export const metadata: Metadata = {
  title: "Luna Bistro QR Menu",
  description:
    "A premium mobile-first QR menu experience for modern restaurants, cafés, and cocktail bars. Elegant design, cinematic visuals, smooth navigation, and multilingual digital menus built for upscale hospitality brands.",
};

export const viewport: Viewport = {
  themeColor: "#080705",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col bg-menu-night"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}

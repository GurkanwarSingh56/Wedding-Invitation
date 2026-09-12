import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans, Noto_Sans_Gurmukhi, Great_Vibes } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const notoGurmukhi = Noto_Sans_Gurmukhi({
  variable: "--font-noto-gurmukhi",
  subsets: ["gurmukhi"],
  weight: ["400", "500", "600"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Dilpreet Kaur | The Bride's Side",
  description: "With the blessings of Waheguru Ji, the Kaur family warmly invites you to celebrate Dilpreet Kaur's wedding festivities.",
  metadataBase: new URL('https://dilpreet-wedding.vercel.app'),
  openGraph: {
    title: "Dilpreet Kaur | The Bride's Side",
    description: "With the blessings of Waheguru Ji, the Kaur family warmly invites you to celebrate Dilpreet Kaur's wedding festivities.",
    images: [{ url: "/images/hero-placeholder.jpg" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#F7EFDF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable} ${notoGurmukhi.variable} ${greatVibes.variable} scroll-smooth`}>
      <body className="antialiased min-h-screen selection:bg-[#B08A45] selection:text-white">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

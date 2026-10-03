import type { Metadata, Viewport } from "next";
import { Cinzel, Cormorant_Garamond, DM_Sans, Noto_Sans_Gurmukhi, Great_Vibes } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

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
  title: "Dilpreet Kaur & Puneet Singh | Wedding Invitation",
  description: "With the blessings of Waheguru Ji, you are cordially invited to celebrate the wedding celebrations of Dilpreet Kaur and Puneet Singh on 13-14 November 2026.",
  metadataBase: new URL('https://dilpreet-wedding.vercel.app'),
  openGraph: {
    title: "Dilpreet Kaur & Puneet Singh | Wedding Invitation",
    description: "With the blessings of Waheguru Ji, you are cordially invited to celebrate the wedding celebrations of Dilpreet Kaur and Puneet Singh on 13-14 November 2026.",
    images: [{ url: "/images/gallery-1.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dilpreet Kaur & Puneet Singh | Wedding Invitation",
    description: "With the blessings of Waheguru Ji, you are cordially invited to celebrate the wedding celebrations of Dilpreet Kaur and Puneet Singh on 13-14 November 2026.",
    images: ["/images/gallery-1.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#FAF7F2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${cormorant.variable} ${dmSans.variable} ${notoGurmukhi.variable} ${greatVibes.variable} scroll-smooth`}>
      <body className="antialiased min-h-screen selection:bg-[#C5A880] selection:text-[#0F223D]">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

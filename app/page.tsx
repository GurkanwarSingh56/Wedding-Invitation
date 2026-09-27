"use client";

import Hero from "@/components/sections/Hero";
import Family from "@/components/sections/Family";
import Celebrations from "@/components/sections/Celebrations";
import WeddingDay from "@/components/sections/WeddingDay";
import Countdown from "@/components/sections/Countdown";
import RSVP from "@/components/sections/RSVP";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import MusicPlayer from "@/components/ui/MusicPlayer";

export default function Home() {
  return (
    <main className="relative bg-[#FAF7F2] text-[#0F223D] min-h-screen">
      {/* Floating Global Controls */}
      <LanguageSwitcher />
      <MusicPlayer />
      
      {/* Seamless Editorial Invitation Flow */}
      <div className="relative">
        {/* 1. Hero: Dilpreet Kaur & Puneet Singh with Sikh wedding artwork */}
        <Hero />
        
        {/* 2 & 3. Family: Grandparents, Parents & Warm Welcome Message for both sides */}
        <Family />
        
        {/* 4 & 5. 13 November: Path, Kirtan, Langar + Venue, followed by Jaggo & DJ */}
        <Celebrations />
        
        {/* Countdown Timer to the sacred Anand Karaj vows */}
        <Countdown />

        {/* 6, 7, 8 & 9. 14 November: Wedding Day, Barat, Anand Karaj @ Maharaja Farms & Followed by Lunch */}
        <WeddingDay />
        
        {/* 10 & 11. Closing family invitation & RSVP */}
        <RSVP />
      </div>
    </main>
  );
}

"use client";

import { useState } from "react";
import OpeningExperience from "@/components/sections/OpeningExperience";
import Hero from "@/components/sections/Hero";
import Family from "@/components/sections/Family";
import Celebrations from "@/components/sections/Celebrations";
import WeddingDay from "@/components/sections/WeddingDay";
import Venue from "@/components/sections/Venue";
import Countdown from "@/components/sections/Countdown";
import Gallery from "@/components/sections/Gallery";
import RSVP from "@/components/sections/RSVP";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import MusicPlayer from "@/components/ui/MusicPlayer";

export default function Home() {
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <main className="relative bg-[#F7EFDF]">
      <OpeningExperience onEnter={() => setHasEntered(true)} />
      
      {hasEntered && (
        <>
          <LanguageSwitcher />
          <MusicPlayer />
          
          <div className="animate-in fade-in duration-[1500ms]">
            <Hero />
            <Family />
            <Celebrations />
            <WeddingDay />
            <Venue />
            <Countdown />
            <Gallery />
            <RSVP />
          </div>
        </>
      )}
    </main>
  );
}

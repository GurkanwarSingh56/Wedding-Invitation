"use client";

import { useState, useEffect, useRef } from "react";
import { Music, Music3 } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function MusicPlayer() {
  const { isPunjabi } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // We create the audio element only on client side to avoid hydration mismatch
    audioRef.current = new Audio("/audio/wedding-music.mp3");
    audioRef.current.loop = true;
    
    // Check saved preference
    const savedPreference = localStorage.getItem("wedding-music-playing");
    if (savedPreference === "true") {
      // Browsers often block autoplay without interaction, but we can try
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        setIsPlaying(false);
      });
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      localStorage.setItem("wedding-music-playing", "false");
    } else {
      audioRef.current.play();
      setIsPlaying(true);
      localStorage.setItem("wedding-music-playing", "true");
    }
  };

  return (
    <button
      onClick={togglePlay}
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#F7EFDF]/80 backdrop-blur-md border border-[#B08A45]/30 px-4 py-2 rounded-full text-xs tracking-widest text-[#594337] hover:text-[#641F28] transition-colors shadow-sm ${isPunjabi ? 'font-punjabi' : ''}`}
    >
      {isPlaying ? <Music className="w-3 h-3 animate-pulse" /> : <Music3 className="w-3 h-3" />}
      {isPunjabi ? "ਸੰਗੀਤ" : "MUSIC"}
    </button>
  );
}

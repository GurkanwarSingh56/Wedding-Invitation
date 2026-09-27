"use client";

import { useState, useEffect, useRef } from "react";
import { Music, Music3 } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function MusicPlayer() {
  const { isPunjabi } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/audio/wedding-music.mp3");
    audioRef.current.loop = true;
    
    const savedPreference = localStorage.getItem("wedding-music-playing");
    if (savedPreference === "true") {
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
      className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-1.5 sm:gap-2 bg-[#FAF7F2]/95 backdrop-blur-md border border-[#C5A880]/40 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs tracking-widest text-[#536479] hover:text-[#0F223D] hover:border-[#0F223D]/50 transition-colors shadow-sm ${isPunjabi ? 'font-punjabi' : 'font-sans'}`}
      aria-label="Toggle ambient background music"
    >
      {isPlaying ? <Music className="w-3.5 h-3.5 animate-pulse text-[#C5A880]" /> : <Music3 className="w-3.5 h-3.5 text-[#536479]" />}
      <span className="font-semibold text-[10px] sm:text-[11px]">{isPunjabi ? "ਸੰਗੀਤ" : "MUSIC"}</span>
    </button>
  );
}

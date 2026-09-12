"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils"; // I'll need to create this util

export default function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="fixed top-6 right-6 z-50 flex items-center gap-2 text-sm tracking-widest text-[#594337]">
      <button 
        onClick={() => language !== 'en' && toggleLanguage()}
        className={cn(
          "transition-colors duration-300", 
          language === 'en' ? "text-[#641F28] font-medium" : "text-[#594337]/60 hover:text-[#594337]"
        )}
      >
        EN
      </button>
      <span className="text-[#B08A45] opacity-50">|</span>
      <button 
        onClick={() => language !== 'pa' && toggleLanguage()}
        className={cn(
          "font-punjabi transition-colors duration-300",
          language === 'pa' ? "text-[#641F28] font-medium" : "text-[#594337]/60 hover:text-[#594337]"
        )}
      >
        ਪੰਜਾਬੀ
      </button>
    </div>
  );
}

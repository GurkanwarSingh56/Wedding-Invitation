"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { cn } from "@/lib/utils";

export default function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="fixed top-6 right-6 z-50 flex items-center gap-2 bg-[#FAF7F2]/90 backdrop-blur-md border border-[#C5A880]/40 px-3 py-1.5 rounded-full shadow-sm text-xs tracking-widest text-[#536479]">
      <button 
        onClick={() => language !== 'en' && toggleLanguage()}
        className={cn(
          "transition-colors duration-200 px-1 py-0.5", 
          language === 'en' ? "text-[#0F223D] font-semibold" : "text-[#536479]/60 hover:text-[#0F223D]"
        )}
      >
        EN
      </button>
      <span className="text-[#C5A880] opacity-60 text-[10px]">|</span>
      <button 
        onClick={() => language !== 'pa' && toggleLanguage()}
        className={cn(
          "font-punjabi transition-colors duration-200 px-1 py-0.5 text-xs",
          language === 'pa' ? "text-[#0F223D] font-bold" : "text-[#536479]/60 hover:text-[#0F223D]"
        )}
      >
        ਪੰਜਾਬੀ
      </button>
    </div>
  );
}

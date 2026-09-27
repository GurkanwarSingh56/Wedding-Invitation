"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { weddingData } from "@/data/wedding";
import Image from "next/image";

export default function Hero() {
  const { isPunjabi } = useLanguage();

  return (
    <section className="relative min-h-[95vh] flex flex-col items-center justify-center px-4 pt-16 pb-20 md:py-24 overflow-hidden">
      {/* Decorative Outer Border Frame with Corner Flourishes */}
      <div className="absolute inset-3 sm:inset-6 md:inset-8 border border-[#C5A880]/30 pointer-events-none rounded-sm">
        <div className="absolute top-2 left-2 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-l-2 border-[#C5A880]/60"></div>
        <div className="absolute top-2 right-2 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-r-2 border-[#C5A880]/60"></div>
        <div className="absolute bottom-2 left-2 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-l-2 border-[#C5A880]/60"></div>
        <div className="absolute bottom-2 right-2 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-r-2 border-[#C5A880]/60"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto px-2 sm:px-6 w-full"
      >
        {/* Tasteful Sikh Wedding Artwork */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.15 }}
          className="relative w-full max-w-[320px] sm:max-w-[420px] md:max-w-[480px] aspect-[4/3] mx-auto mb-8 sm:mb-10 rounded-md overflow-hidden border border-[#C5A880]/40 shadow-sm bg-[#F4EFE6]"
        >
          <Image
            src={weddingData.images.heroIllustration}
            alt="Anand Karaj Sikh Wedding Ceremony"
            fill
            sizes="(max-width: 640px) 320px, (max-width: 768px) 420px, 480px"
            priority
            className="object-cover"
          />
        </motion.div>

        {/* Sacred Ik Onkar Symbol */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-4 flex flex-col items-center"
        >
          <span className="text-3xl sm:text-4xl text-[#C5A880] font-punjabi select-none">
            ੴ
          </span>
          <div className="w-8 h-[1px] bg-[#C5A880]/50 mt-3"></div>
        </motion.div>

        {/* Waheguru Blessings */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45 }}
          className="mb-6 sm:mb-7"
        >
          <p className={`text-[11px] sm:text-xs md:text-sm tracking-[0.25em] text-[#536479] uppercase ${isPunjabi ? 'font-punjabi font-medium' : 'font-sans'}`}>
            {isPunjabi ? "ਵਾਹਿਗੁਰੂ ਜੀ ਦੀ ਮੇਹਰ ਸਦਕਾ" : "WITH THE BLESSINGS OF WAHEGURU JI"}
          </p>
        </motion.div>

        {/* Couple Names */}
        <div className="space-y-2 sm:space-y-3 my-1">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.6 }}
            className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#0F223D] font-medium ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}
          >
            {isPunjabi ? weddingData.bride.punjabi : weddingData.bride.full}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.75 }}
            className="flex items-center justify-center gap-3 sm:gap-4 py-0.5"
          >
            <div className="w-10 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-[#C5A880]"></div>
            <span className="text-[#C5A880] font-serif italic text-2xl sm:text-3xl md:text-4xl font-light">
              &amp;
            </span>
            <div className="w-10 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-[#C5A880]"></div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.9 }}
            className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#0F223D] font-medium ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}
          >
            {isPunjabi ? weddingData.groom.punjabi : weddingData.groom.full}
          </motion.h1>
        </div>

        {/* Decorative Separator */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 1.05 }}
          className="mt-8 sm:mt-10 flex items-center justify-center gap-3 text-[#C5A880]/70"
        >
          <div className="w-12 sm:w-16 h-[1px] bg-[#C5A880]/40"></div>
          <span className="text-xs">✦</span>
          <div className="w-12 sm:w-16 h-[1px] bg-[#C5A880]/40"></div>
        </motion.div>

        {/* Warm invitation sub-line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, delay: 1.2 }}
          className={`mt-5 sm:mt-6 text-sm sm:text-base text-[#536479] italic max-w-md px-4 leading-relaxed ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}
        >
          {isPunjabi 
            ? "ਆਪ ਜੀ ਨੂੰ ਵਿਆਹ ਸਮਾਗਮਾਂ ਵਿੱਚ ਸ਼ਾਮਲ ਹੋਣ ਲਈ ਨਿੱਘਾ ਸੱਦਾ ਦਿੱਤਾ ਜਾਂਦਾ ਹੈ।"
            : "Cordially invite you to celebrate the joyous union and blessings of holy matrimony."}
        </motion.p>
      </motion.div>
    </section>
  );
}

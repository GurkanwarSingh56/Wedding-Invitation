"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { weddingData } from "@/data/wedding";

export default function Hero() {
  const { isPunjabi } = useLanguage();

  return (
    <section className="relative min-h-[92vh] md:min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Decorative Outer & Inner Border Frame (Sikh wedding stationery motif) */}
      <div className="absolute inset-4 md:inset-8 border border-[#C5A880]/30 pointer-events-none rounded-sm">
        {/* Subtle corner flourishes */}
        <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-[#C5A880]/60"></div>
        <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-[#C5A880]/60"></div>
        <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-[#C5A880]/60"></div>
        <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-[#C5A880]/60"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto px-6 py-12"
      >
        {/* Ik Onkar Sacred Symbol */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="mb-6 flex flex-col items-center"
        >
          <span className="text-4xl md:text-5xl text-[#C5A880] font-punjabi select-none">
            ੴ
          </span>
          <div className="w-10 h-[1px] bg-[#C5A880]/50 mt-4"></div>
        </motion.div>

        {/* Waheguru Blessings */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-8"
        >
          <p className={`text-xs md:text-sm tracking-[0.25em] text-[#536479] uppercase ${isPunjabi ? 'font-punjabi' : 'font-sans'}`}>
            {isPunjabi ? "ਵਾਹਿਗੁਰੂ ਜੀ ਦੀ ਮੇਹਰ ਸਦਕਾ" : "WITH THE BLESSINGS OF WAHEGURU JI"}
          </p>
        </motion.div>

        {/* Couple Names */}
        <div className="space-y-3 md:space-y-4 my-2">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#0F223D] font-medium ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}
          >
            {isPunjabi ? weddingData.bride.punjabi : weddingData.bride.full}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex items-center justify-center gap-4 py-1"
          >
            <div className="w-12 md:w-20 h-[1px] bg-gradient-to-r from-transparent to-[#C5A880]"></div>
            <span className="text-[#C5A880] font-serif italic text-3xl md:text-4xl font-light">
              &amp;
            </span>
            <div className="w-12 md:w-20 h-[1px] bg-gradient-to-l from-transparent to-[#C5A880]"></div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1 }}
            className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#0F223D] font-medium ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}
          >
            {isPunjabi ? weddingData.groom.punjabi : weddingData.groom.full}
          </motion.h1>
        </div>

        {/* Decorative Separator */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="mt-12 flex items-center justify-center gap-3 text-[#C5A880]/70"
        >
          <div className="w-16 h-[1px] bg-[#C5A880]/40"></div>
          <span className="text-xs">✦</span>
          <div className="w-16 h-[1px] bg-[#C5A880]/40"></div>
        </motion.div>

        {/* Warm invitation sub-note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.4 }}
          className={`mt-6 text-sm md:text-base text-[#536479] italic max-w-md ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}
        >
          {isPunjabi 
            ? "ਆਪ ਜੀ ਨੂੰ ਵਿਆਹ ਸਮਾਗਮਾਂ ਵਿੱਚ ਸ਼ਾਮਲ ਹੋਣ ਲਈ ਨਿੱਘਾ ਸੱਦਾ ਦਿੱਤਾ ਜਾਂਦਾ ਹੈ।"
            : "Cordially invite you to celebrate the joyous union and blessings of holy matrimony."}
        </motion.p>
      </motion.div>
    </section>
  );
}

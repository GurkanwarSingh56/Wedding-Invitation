"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { weddingData } from "@/data/wedding";
import Image from "next/image";

export default function Hero() {
  const { isPunjabi } = useLanguage();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center p-6 pt-24 overflow-hidden">
      {/* Decorative corners - subtle gold floral frame */}
      <div className="absolute inset-4 border border-[#B08A45]/20 pointer-events-none">
        <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-[#B08A45] -translate-x-[1px] -translate-y-[1px]"></div>
        <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-[#B08A45] translate-x-[1px] -translate-y-[1px]"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-[#B08A45] -translate-x-[1px] translate-y-[1px]"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-[#B08A45] translate-x-[1px] translate-y-[1px]"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center text-center max-w-3xl"
      >
        <div className="w-full aspect-[3/4] md:aspect-[4/3] max-w-md mx-auto mb-10 relative overflow-hidden bg-[#594337]/5">
          <Image
            src={weddingData.images.hero}
            alt="Dilpreet Kaur"
            fill
            className="object-cover opacity-90"
            priority
          />
          {/* Subtle vignette over the image */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#F7EFDF] via-transparent to-transparent opacity-60"></div>
        </div>

        <h1 className={`text-6xl md:text-8xl text-[#641F28] mb-4 ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}>
          {isPunjabi ? weddingData.bride.punjabi : weddingData.bride.full}
        </h1>

        <p className={`text-xl md:text-2xl text-[#B08A45] mb-8 font-great-vibes capitalize`}>
          {isPunjabi ? "ਦੁਲਹਨ" : "The Bride"}
        </p>

        <div className="w-12 h-[1px] bg-[#641F28]/30 mb-8"></div>

        <div className={`text-sm tracking-widest text-[#594337] uppercase space-y-2 ${isPunjabi ? 'font-punjabi' : ''}`}>
          <p>{isPunjabi ? weddingData.dates.eventsPunjabi : weddingData.dates.events}</p>
          <p>{isPunjabi ? weddingData.venues.wedding.cityPunjabi : weddingData.venues.wedding.city}</p>
        </div>
      </motion.div>
    </section>
  );
}

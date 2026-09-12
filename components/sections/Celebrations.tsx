"use client";

import { motion, Variants } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { weddingData } from "@/data/wedding";
import { MapPin, Sparkles } from "lucide-react";

export default function Celebrations() {
  const { isPunjabi } = useLanguage();
  const { day1Spiritual, jaggo } = weddingData.events;
  const { pathGurudwara } = weddingData.venues;

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
  };

  const jaggoTimeDisplay = jaggo.time
    ? (isPunjabi ? jaggo.timePunjabi : jaggo.time)
    : (isPunjabi ? jaggo.defaultTimeTextPunjabi : jaggo.defaultTimeText);

  return (
    <div className="relative">
      {/* ─────────────────────────────────────────────────────────────
          PART 1: 13 NOVEMBER — PATH • KIRTAN • LANGAR (Spiritual & Peaceful)
         ───────────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 px-4 relative bg-[#FAF7F2] border-t border-[#C5A880]/30 overflow-hidden">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          {/* Date & Day Header */}
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className={`text-xs md:text-sm tracking-[0.25em] text-[#536479] uppercase mb-3 ${isPunjabi ? 'font-punjabi font-medium' : 'font-sans'}`}
          >
            {isPunjabi ? `${day1Spiritual.datePunjabi} • ${day1Spiritual.dayPunjabi}` : `${day1Spiritual.date} • ${day1Spiritual.day}`}
          </motion.p>

          {/* Title */}
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className={`text-3xl md:text-5xl text-[#0F223D] font-medium tracking-wide mb-14 ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}
          >
            {isPunjabi ? day1Spiritual.titlePunjabi : day1Spiritual.title}
          </motion.h2>

          {/* Spiritual Events List - Flowing vertical design (not a generic grid) */}
          <div className="relative py-4 max-w-xl mx-auto">
            {/* Elegant vertical line connecting events */}
            <div className="absolute top-4 bottom-4 left-1/2 -translate-x-1/2 w-[1px] bg-[#C5A880]/30 hidden sm:block"></div>

            <div className="space-y-12 relative">
              {/* 1. Sukhmani Sahib */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-[#FAF7F2] relative z-10 px-4 py-2"
              >
                <h3 className={`text-xl md:text-2xl text-[#0F223D] font-medium mb-1 ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}>
                  {isPunjabi ? day1Spiritual.path.namePunjabi : day1Spiritual.path.name}
                </h3>
                <p className={`text-xs md:text-sm tracking-[0.2em] text-[#C5A880] uppercase font-medium ${isPunjabi ? 'font-punjabi' : 'font-sans'}`}>
                  {isPunjabi ? day1Spiritual.path.timePunjabi : day1Spiritual.path.time}
                </p>
              </motion.div>

              {/* 2. Kirtan */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-[#FAF7F2] relative z-10 px-4 py-2"
              >
                <h3 className={`text-xl md:text-2xl text-[#0F223D] font-medium mb-1 ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}>
                  {isPunjabi ? day1Spiritual.kirtan.namePunjabi : day1Spiritual.kirtan.name}
                </h3>
                <p className={`text-xs md:text-sm tracking-[0.2em] text-[#C5A880] uppercase font-medium ${isPunjabi ? 'font-punjabi' : 'font-sans'}`}>
                  {isPunjabi ? day1Spiritual.kirtan.timePunjabi : day1Spiritual.kirtan.time}
                </p>
              </motion.div>

              {/* 3. Guru Ka Langar */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-[#FAF7F2] relative z-10 px-4 py-2"
              >
                <h3 className={`text-xl md:text-2xl text-[#0F223D] font-medium mb-1 ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}>
                  {isPunjabi ? day1Spiritual.langar.namePunjabi : day1Spiritual.langar.name}
                </h3>
                <p className={`text-xs md:text-sm tracking-[0.2em] text-[#C5A880] uppercase font-medium ${isPunjabi ? 'font-punjabi' : 'font-sans'}`}>
                  {isPunjabi ? day1Spiritual.langar.timePunjabi : day1Spiritual.langar.time}
                </p>
              </motion.div>
            </div>
          </div>

          {/* Spiritual Venue Location Block */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mt-14 pt-10 border-t border-[#C5A880]/30 max-w-lg mx-auto"
          >
            <div className="flex items-center justify-center gap-2 mb-3 text-[#C5A880]">
              <MapPin className="w-4 h-4" />
              <span className={`text-xs tracking-[0.2em] uppercase font-medium ${isPunjabi ? 'font-punjabi' : 'font-sans'}`}>
                {isPunjabi ? "ਸਥਾਨ" : "LOCATION"}
              </span>
            </div>
            <p className={`text-xl md:text-2xl text-[#0F223D] font-medium mb-1 ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}>
              {isPunjabi ? pathGurudwara.namePunjabi : pathGurudwara.name}
            </p>
            <p className={`text-sm text-[#536479] mb-6 ${isPunjabi ? 'font-punjabi' : 'font-sans'}`}>
              {isPunjabi ? pathGurudwara.addressPunjabi : pathGurudwara.address}
            </p>

            {pathGurudwara.googleMapsUrl && (
              <a
                href={pathGurudwara.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block border border-[#0F223D]/30 px-6 py-2.5 text-xs tracking-[0.2em] text-[#0F223D] hover:bg-[#0F223D] hover:text-[#FAF7F2] transition-colors duration-300 uppercase ${isPunjabi ? 'font-punjabi' : 'font-sans'}`}
              >
                {isPunjabi ? "ਸਥਾਨ ਵੇਖੋ" : "VIEW LOCATION"}
              </a>
            )}
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          PART 2: 13 NOVEMBER — JAGGO & DJ (Energetic, Midnight Blue & Glow)
         ───────────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 px-4 relative bg-[#0F223D] text-[#FAF7F2] overflow-hidden">
        {/* Ambient Warm Golden & Powder Blue Glows */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#C5A880]/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-40 left-1/4 w-80 h-80 bg-[#8EA8C3]/15 rounded-full blur-3xl pointer-events-none"></div>

        {/* Delicate Punjabi Ornamental Pattern Border */}
        <div className="absolute inset-4 md:inset-8 border border-[#C5A880]/20 pointer-events-none rounded-sm">
          <div className="absolute top-2 left-2 w-6 h-6 border-t border-l border-[#C5A880]/40"></div>
          <div className="absolute top-2 right-2 w-6 h-6 border-t border-r border-[#C5A880]/40"></div>
          <div className="absolute bottom-2 left-2 w-6 h-6 border-b border-l border-[#C5A880]/40"></div>
          <div className="absolute bottom-2 right-2 w-6 h-6 border-b border-r border-[#C5A880]/40"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 max-w-2xl mx-auto text-center px-4"
        >
          {/* Subtle Celebration Icon */}
          <div className="flex items-center justify-center gap-2 mb-4 text-[#C5A880]">
            <Sparkles className="w-4 h-4" />
            <span className={`text-xs tracking-[0.25em] text-[#C5A880] uppercase ${isPunjabi ? 'font-punjabi' : 'font-sans'}`}>
              {isPunjabi ? `${jaggo.datePunjabi} • ${jaggo.dayPunjabi}` : `${jaggo.date} • ${jaggo.day}`}
            </span>
            <Sparkles className="w-4 h-4" />
          </div>

          {/* Main Title: JAGGO & DJ */}
          <h2 className={`text-4xl sm:text-6xl md:text-7xl text-[#FAF7F2] font-medium tracking-wide mb-4 ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}>
            {isPunjabi ? jaggo.titlePunjabi : jaggo.title}
          </h2>
          
          <p className="text-2xl md:text-3xl text-[#C5A880] font-serif italic mb-6">
            &amp; {isPunjabi ? jaggo.secondaryTitlePunjabi : jaggo.secondaryTitle}
          </p>

          <div className="w-16 h-[1px] bg-[#C5A880]/50 mx-auto mb-8"></div>

          {/* Energetic Punjabi Poetry / Quote */}
          <p className={`text-base md:text-lg text-[#D4E0EB]/90 leading-relaxed mb-10 italic max-w-lg mx-auto ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}>
            {isPunjabi
              ? "ਜਾਗੋ ਆਈ ਆ, ਸ਼ਗਨਾਂ ਦੀ ਰਾਤ ਆਈ ਆ। ਨੱਚਣ-ਗਾਉਣ ਤੇ ਖੁਸ਼ੀਆਂ ਮਨਾਉਣ ਲਈ ਸਭ ਨੂੰ ਖੁੱਲ੍ਹਾ ਸੱਦਾ!"
              : "Music, celebration, and festive cheer into the night. An evening of laughter, beats, and family joy."}
          </p>

          {/* Prominent Jaggo Time Display with fallback handling */}
          <div className="inline-block bg-[#162B4D]/70 border border-[#C5A880]/30 px-8 py-4 rounded-sm shadow-inner">
            <span className={`text-xs tracking-[0.25em] text-[#C5A880] uppercase block mb-1 font-medium ${isPunjabi ? 'font-punjabi' : 'font-sans'}`}>
              {isPunjabi ? "ਸਮਾਂ" : "TIME"}
            </span>
            <span className={`text-sm md:text-base tracking-[0.15em] font-medium text-[#FAF7F2] uppercase ${isPunjabi ? 'font-punjabi' : 'font-sans'}`}>
              {jaggoTimeDisplay}
            </span>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

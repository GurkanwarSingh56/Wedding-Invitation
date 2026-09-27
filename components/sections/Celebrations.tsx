"use client";

import { motion, Variants } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { weddingData } from "@/data/wedding";
import { MapPin } from "lucide-react";
import { PathIcon, KirtanIcon, LangarIcon, JaggoIcon } from "@/components/ui/EventIcons";

export default function Celebrations() {
  const { isPunjabi } = useLanguage();
  const { day1Spiritual, jaggo } = weddingData.events;
  const { pathGurudwara } = weddingData.venues;

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
  };

  const jaggoTimeDisplay = jaggo.time
    ? (isPunjabi ? jaggo.timePunjabi : jaggo.time)
    : (isPunjabi ? jaggo.defaultTimeTextPunjabi : jaggo.defaultTimeText);

  return (
    <div className="relative">
      {/* ─────────────────────────────────────────────────────────────
          PART 1: 13 NOVEMBER — PATH • KIRTAN • LANGAR (Spiritual Invitation Card)
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-4 relative bg-[#FAF7F2] border-t border-[#C5A880]/30 overflow-hidden">
        {/* Subtle Decorative Stationery Border Frame */}
        <div className="absolute inset-3 sm:inset-6 md:inset-8 border border-[#C5A880]/25 pointer-events-none rounded-sm">
          <div className="absolute top-2 left-2 w-5 h-5 border-t border-l border-[#C5A880]/50"></div>
          <div className="absolute top-2 right-2 w-5 h-5 border-t border-r border-[#C5A880]/50"></div>
          <div className="absolute bottom-2 left-2 w-5 h-5 border-b border-l border-[#C5A880]/50"></div>
          <div className="absolute bottom-2 right-2 w-5 h-5 border-b border-r border-[#C5A880]/50"></div>
        </div>

        <div className="max-w-3xl mx-auto text-center relative z-10 px-2 sm:px-6">
          {/* Date & Day Header */}
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className={`text-[11px] sm:text-xs md:text-sm tracking-[0.25em] text-[#536479] uppercase mb-3 ${isPunjabi ? 'font-punjabi font-medium' : 'font-sans'}`}
          >
            {isPunjabi ? `${day1Spiritual.datePunjabi} • ${day1Spiritual.dayPunjabi}` : `${day1Spiritual.date} • ${day1Spiritual.day}`}
          </motion.p>

          {/* Section Title */}
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className={`text-3xl sm:text-4xl md:text-5xl text-[#0F223D] font-medium tracking-wide mb-12 sm:mb-14 ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}
          >
            {isPunjabi ? day1Spiritual.titlePunjabi : day1Spiritual.title}
          </motion.h2>

          {/* Spiritual Events List with Custom Fine Gold Line-Art Icons */}
          <div className="relative py-2 max-w-xl mx-auto">
            {/* Elegant vertical guiding hairline */}
            <div className="absolute top-4 bottom-4 left-1/2 -translate-x-1/2 w-[1px] bg-[#C5A880]/30 hidden sm:block"></div>

            <div className="space-y-10 sm:space-y-12 relative">
              
              {/* 1. Path Shri Sukhmani Sahib */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-[#FAF7F2] relative z-10 px-4 py-2 flex flex-col items-center"
              >
                <div className="mb-2.5 text-[#C5A880] p-1.5 rounded-full border border-[#C5A880]/30 bg-[#F4EFE6]/60">
                  <PathIcon className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <h3 className={`text-xl sm:text-2xl text-[#0F223D] font-medium mb-1.5 ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}>
                  {isPunjabi ? day1Spiritual.path.namePunjabi : day1Spiritual.path.name}
                </h3>
                <p className={`text-xs sm:text-sm tracking-[0.2em] text-[#C5A880] uppercase font-semibold ${isPunjabi ? 'font-punjabi' : 'font-sans'}`}>
                  {isPunjabi ? day1Spiritual.path.timePunjabi : day1Spiritual.path.time}
                </p>
              </motion.div>

              {/* 2. Kirtan */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-[#FAF7F2] relative z-10 px-4 py-2 flex flex-col items-center"
              >
                <div className="mb-2.5 text-[#C5A880] p-1.5 rounded-full border border-[#C5A880]/30 bg-[#F4EFE6]/60">
                  <KirtanIcon className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <h3 className={`text-xl sm:text-2xl text-[#0F223D] font-medium mb-1.5 ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}>
                  {isPunjabi ? day1Spiritual.kirtan.namePunjabi : day1Spiritual.kirtan.name}
                </h3>
                <p className={`text-xs sm:text-sm tracking-[0.2em] text-[#C5A880] uppercase font-semibold ${isPunjabi ? 'font-punjabi' : 'font-sans'}`}>
                  {isPunjabi ? day1Spiritual.kirtan.timePunjabi : day1Spiritual.kirtan.time}
                </p>
              </motion.div>

              {/* 3. Guru Ka Langar */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-[#FAF7F2] relative z-10 px-4 py-2 flex flex-col items-center"
              >
                <div className="mb-2.5 text-[#C5A880] p-1.5 rounded-full border border-[#C5A880]/30 bg-[#F4EFE6]/60">
                  <LangarIcon className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <h3 className={`text-xl sm:text-2xl text-[#0F223D] font-medium mb-1.5 ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}>
                  {isPunjabi ? day1Spiritual.langar.namePunjabi : day1Spiritual.langar.name}
                </h3>
                <p className={`text-xs sm:text-sm tracking-[0.2em] text-[#C5A880] uppercase font-semibold ${isPunjabi ? 'font-punjabi' : 'font-sans'}`}>
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
            className="mt-12 sm:mt-14 pt-8 sm:pt-10 border-t border-[#C5A880]/30 max-w-lg mx-auto"
          >
            <div className="flex items-center justify-center gap-2 mb-2.5 text-[#C5A880]">
              <MapPin className="w-4 h-4" />
              <span className={`text-[11px] sm:text-xs tracking-[0.2em] uppercase font-semibold ${isPunjabi ? 'font-punjabi' : 'font-sans'}`}>
                {isPunjabi ? "ਸਥਾਨ" : "LOCATION"}
              </span>
            </div>
            <p className={`text-xl sm:text-2xl text-[#0F223D] font-medium mb-1 ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}>
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
                className={`inline-block border border-[#0F223D]/40 px-6 sm:px-7 py-2.5 text-xs tracking-[0.2em] text-[#0F223D] hover:bg-[#0F223D] hover:text-[#FAF7F2] transition-colors duration-300 uppercase font-semibold rounded-sm ${isPunjabi ? 'font-punjabi' : 'font-sans'}`}
              >
                {isPunjabi ? "ਸਥਾਨ ਵੇਖੋ" : "VIEW LOCATION"}
              </a>
            )}
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          PART 2: 13 NOVEMBER — JAGGO & DJ (Festive Elegance)
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-4 relative bg-[#0F223D] text-[#FAF7F2] overflow-hidden border-t border-[#C5A880]/20">
        {/* Soft Ambient Radiance */}
        <div className="absolute -top-36 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#C5A880]/15 rounded-full blur-3xl pointer-events-none"></div>

        {/* Decorative Inner Border */}
        <div className="absolute inset-3 sm:inset-6 md:inset-8 border border-[#C5A880]/20 pointer-events-none rounded-sm">
          <div className="absolute top-2 left-2 w-5 h-5 border-t border-l border-[#C5A880]/40"></div>
          <div className="absolute top-2 right-2 w-5 h-5 border-t border-r border-[#C5A880]/40"></div>
          <div className="absolute bottom-2 left-2 w-5 h-5 border-b border-l border-[#C5A880]/40"></div>
          <div className="absolute bottom-2 right-2 w-5 h-5 border-b border-r border-[#C5A880]/40"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="relative z-10 max-w-2xl mx-auto text-center px-4"
        >
          {/* Subtle Festive Jaggo Icon */}
          <div className="flex justify-center mb-3">
            <div className="text-[#C5A880] p-2 rounded-full border border-[#C5A880]/30 bg-[#162B4D]/60">
              <JaggoIcon className="w-8 h-8 sm:w-9 sm:h-9" />
            </div>
          </div>

          <p className={`text-[11px] sm:text-xs tracking-[0.25em] text-[#C5A880] uppercase mb-2 ${isPunjabi ? 'font-punjabi' : 'font-sans'}`}>
            {isPunjabi ? `${jaggo.datePunjabi} • ${jaggo.dayPunjabi}` : `${jaggo.date} • ${jaggo.day}`}
          </p>

          {/* Main Title: JAGGO & DJ */}
          <h2 className={`text-4xl sm:text-6xl md:text-7xl text-[#FAF7F2] font-medium tracking-wide mb-2 ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}>
            {isPunjabi ? jaggo.titlePunjabi : jaggo.title}
          </h2>
          
          <p className="text-2xl sm:text-3xl text-[#C5A880] font-serif italic mb-6">
            &amp; {isPunjabi ? jaggo.secondaryTitlePunjabi : jaggo.secondaryTitle}
          </p>

          <div className="w-14 h-[1px] bg-[#C5A880]/50 mx-auto mb-6"></div>

          {/* Short, elegant festive description */}
          <p className={`text-sm sm:text-base text-[#D4E0EB]/90 leading-relaxed mb-8 italic max-w-md mx-auto ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}>
            {isPunjabi
              ? "ਜਾਗੋ ਆਈ ਆ, ਸ਼ਗਨਾਂ ਦੀ ਰਾਤ ਆਈ ਆ। ਸੰਗੀਤ ਅਤੇ ਪਰਿਵਾਰਕ ਖੁਸ਼ੀਆਂ ਨਾਲ ਭਰੀ ਸ਼ਾਮ।"
              : "An auspicious evening of traditional celebration, joyful folk melodies, and shared family laughter."}
          </p>

          {/* Time Display Badge */}
          <div className="inline-block bg-[#162B4D]/80 border border-[#C5A880]/30 px-7 sm:px-8 py-3.5 rounded-sm shadow-sm">
            <span className={`text-[10px] sm:text-xs tracking-[0.25em] text-[#C5A880] uppercase block mb-1 font-semibold ${isPunjabi ? 'font-punjabi' : 'font-sans'}`}>
              {isPunjabi ? "ਸਮਾਂ" : "TIME"}
            </span>
            <span className={`text-sm sm:text-base tracking-[0.15em] font-semibold text-[#FAF7F2] uppercase ${isPunjabi ? 'font-punjabi' : 'font-sans'}`}>
              {jaggoTimeDisplay}
            </span>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

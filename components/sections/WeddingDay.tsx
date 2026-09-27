"use client";

import { motion, Variants } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { weddingData } from "@/data/wedding";
import { MapPin } from "lucide-react";
import { BaratIcon, AnandKarajIcon } from "@/components/ui/EventIcons";

export default function WeddingDay() {
  const { isPunjabi } = useLanguage();
  const { weddingDay } = weddingData.events;
  const { anandKaraj: venue } = weddingData.venues;

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
  };

  return (
    <section className="py-20 md:py-28 px-4 relative bg-[#FAF7F2] border-t border-[#C5A880]/30 overflow-hidden">
      {/* Outer Stationery Frame */}
      <div className="absolute inset-3 sm:inset-6 md:inset-8 border border-[#C5A880]/30 pointer-events-none rounded-sm">
        <div className="absolute top-2 left-2 w-5 h-5 sm:w-6 sm:h-6 border-t-2 border-l-2 border-[#C5A880]/50"></div>
        <div className="absolute top-2 right-2 w-5 h-5 sm:w-6 sm:h-6 border-t-2 border-r-2 border-[#C5A880]/50"></div>
        <div className="absolute bottom-2 left-2 w-5 h-5 sm:w-6 sm:h-6 border-b-2 border-l-2 border-[#C5A880]/50"></div>
        <div className="absolute bottom-2 right-2 w-5 h-5 sm:w-6 sm:h-6 border-b-2 border-r-2 border-[#C5A880]/50"></div>
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10 px-2 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-14 sm:mb-16"
        >
          <p className={`text-[11px] sm:text-xs md:text-sm tracking-[0.25em] text-[#536479] uppercase mb-3 ${isPunjabi ? 'font-punjabi font-medium' : 'font-sans'}`}>
            {isPunjabi ? `${weddingDay.datePunjabi} • ${weddingDay.dayPunjabi}` : `${weddingDay.date} • ${weddingDay.day}`}
          </p>

          <h2 className={`text-3xl sm:text-5xl md:text-6xl text-[#0F223D] font-medium tracking-wide mb-5 ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}>
            {isPunjabi ? weddingDay.sectionTitlePunjabi : weddingDay.sectionTitle}
          </h2>

          <div className="w-12 h-[1px] bg-[#C5A880]/60 mx-auto mb-5"></div>

          <p className={`text-base md:text-lg text-[#536479] italic max-w-lg mx-auto ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}>
            {isPunjabi
              ? "ਸ਼ਗਨਾਂ ਦਾ ਦਿਨ, ਅਰਦਾਸਾਂ ਦਾ ਸਾਥ ਅਤੇ ਦੋ ਰੂਹਾਂ ਦਾ ਇੱਕ ਪਵਿੱਤਰ ਬੰਧਨ।"
              : "The sacred day of love, solemn vows, and divine blessings."}
          </p>
        </motion.div>

        {/* Schedule & Unified Anand Karaj Section */}
        <div className="space-y-10 sm:space-y-12">

          {/* 1. Reception of Barat */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-[#FAF7F2] p-6 sm:p-7 border border-[#C5A880]/25 rounded-sm max-w-xl mx-auto flex flex-col items-center"
          >
            <div className="mb-2.5 text-[#C5A880] p-1.5 rounded-full border border-[#C5A880]/30 bg-[#F4EFE6]/60">
              <BaratIcon className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>
            <h3 className={`text-xl sm:text-2xl text-[#0F223D] font-medium mb-1.5 ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}>
              {isPunjabi ? weddingDay.barat.namePunjabi : weddingDay.barat.name}
            </h3>
            <p className={`text-xs sm:text-sm tracking-[0.2em] text-[#C5A880] uppercase font-semibold ${isPunjabi ? 'font-punjabi' : 'font-sans'}`}>
              {isPunjabi ? weddingDay.barat.timePunjabi : weddingDay.barat.time}
            </p>
          </motion.div>

          {/* 2. Anand Karaj (Main Focus with Golden Palki Icon, Location & Connected Lunch) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-[#F8F4EC] border-2 border-[#C5A880]/40 p-6 sm:p-10 md:p-12 relative rounded-sm shadow-sm max-w-2xl mx-auto"
          >
            {/* Elegant Palki Sahib Anand Karaj Icon */}
            <div className="flex justify-center mb-3">
              <div className="text-[#C5A880] p-2 rounded-full border border-[#C5A880]/40 bg-[#FAF7F2]">
                <AnandKarajIcon className="w-8 h-8 sm:w-9 sm:h-9" />
              </div>
            </div>

            <h3 className={`text-3xl sm:text-4xl md:text-5xl text-[#0F223D] font-medium tracking-wide mb-2 ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}>
              {isPunjabi ? weddingDay.anandKaraj.namePunjabi : weddingDay.anandKaraj.name}
            </h3>

            <p className={`text-xs sm:text-sm md:text-base tracking-[0.2em] text-[#C5A880] uppercase font-semibold mb-6 ${isPunjabi ? 'font-punjabi' : 'font-sans'}`}>
              {isPunjabi ? weddingDay.anandKaraj.timePunjabi : weddingDay.anandKaraj.time}
            </p>

            <div className="w-16 h-[1px] bg-[#C5A880]/50 mx-auto mb-8"></div>

            {/* Anand Karaj Location Display */}
            <div className="mb-8">
              <div className="flex items-center justify-center gap-1.5 mb-2 text-[#C5A880]">
                <MapPin className="w-4 h-4" />
                <span className={`text-[11px] sm:text-xs tracking-[0.2em] uppercase font-semibold ${isPunjabi ? 'font-punjabi' : 'font-sans'}`}>
                  {isPunjabi ? "ਸਥਾਨ" : "LOCATION"}
                </span>
              </div>
              <p className={`text-2xl sm:text-3xl text-[#0F223D] font-medium mb-1 ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}>
                {isPunjabi ? venue.namePunjabi : venue.name}
              </p>
              <p className={`text-sm text-[#536479] mb-6 ${isPunjabi ? 'font-punjabi' : 'font-sans'}`}>
                {isPunjabi ? venue.addressPunjabi : venue.address}
              </p>

              {venue.googleMapsUrl && (
                <a
                  href={venue.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-block border border-[#0F223D] px-7 py-3 text-xs tracking-[0.2em] text-[#0F223D] hover:bg-[#0F223D] hover:text-[#FAF7F2] transition-colors duration-300 uppercase font-semibold rounded-sm ${isPunjabi ? 'font-punjabi' : 'font-sans'}`}
                >
                  {isPunjabi ? "ਸਥਾਨ ਵੇਖੋ" : "VIEW LOCATION"}
                </a>
              )}
            </div>


          </motion.div>
        </div>
      </div>
    </section>
  );
}

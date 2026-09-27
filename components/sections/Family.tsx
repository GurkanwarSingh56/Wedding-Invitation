"use client";

import { motion, Variants } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { weddingData } from "@/data/wedding";

export default function Family() {
  const { isPunjabi } = useLanguage();
  const { family, invitationMessage } = weddingData;

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
  };

  return (
    <section className="py-20 md:py-28 px-4 relative overflow-hidden bg-[#0F223D] text-[#FAF7F2] border-t border-[#C5A880]/30">
      {/* Subtle Ambient Radiance */}
      <div className="absolute -top-36 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#C5A880]/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Decorative Inner Frame */}
      <div className="absolute inset-3 sm:inset-6 md:inset-8 border border-[#C5A880]/20 pointer-events-none rounded-sm">
        <div className="absolute top-2 left-2 w-5 h-5 border-t border-l border-[#C5A880]/50"></div>
        <div className="absolute top-2 right-2 w-5 h-5 border-t border-r border-[#C5A880]/50"></div>
        <div className="absolute bottom-2 left-2 w-5 h-5 border-b border-l border-[#C5A880]/50"></div>
        <div className="absolute bottom-2 right-2 w-5 h-5 border-b border-r border-[#C5A880]/50"></div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        className="max-w-3xl mx-auto text-center relative z-10 px-2 sm:px-6"
      >
        {/* Welcome / Invitation Message Lead */}
        <div className="mb-12 sm:mb-14">
          <span className={`text-[11px] sm:text-xs tracking-[0.25em] text-[#C5A880] uppercase block mb-3 font-semibold ${isPunjabi ? 'font-punjabi' : 'font-sans'}`}>
            {isPunjabi ? "ਪਰਿਵਾਰ ਵੱਲੋਂ ਨਿੱਘਾ ਸੱਦਾ" : "FAMILY INVITATION"}
          </span>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl text-[#FAF7F2] mb-5 font-medium tracking-wide ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}>
            {isPunjabi ? invitationMessage.titlePunjabi : invitationMessage.title}
          </h2>
          <div className="w-12 h-[1px] bg-[#C5A880]/60 mx-auto mb-5"></div>
          <p className={`text-base sm:text-lg text-[#D4E0EB]/90 leading-relaxed max-w-2xl mx-auto px-4 ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}>
            {isPunjabi ? invitationMessage.leadPunjabi : invitationMessage.lead}
          </p>
        </div>

        {/* Unified Luxury Family Hierarchy Card */}
        <div className="bg-[#162B4D]/60 border border-[#C5A880]/35 p-6 sm:p-10 md:p-12 rounded-sm shadow-md relative">
          {/* Corner Flourishes */}
          <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-[#C5A880]/50"></div>
          <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-[#C5A880]/50"></div>
          <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-[#C5A880]/50"></div>
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-[#C5A880]/50"></div>

          {/* 1. BELOVED GRANDPARENTS */}
          <div className="mb-8 sm:mb-10">
            <span className={`text-[10px] sm:text-xs tracking-[0.22em] text-[#C5A880] uppercase block mb-3 font-semibold ${isPunjabi ? 'font-punjabi' : 'font-sans'}`}>
              {isPunjabi ? family.grandparentsTitlePunjabi : family.grandparentsTitle}
            </span>
            <p className={`text-xl sm:text-2xl md:text-3xl text-[#FAF7F2] font-medium tracking-wide ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}>
              {isPunjabi ? family.grandparentsPunjabi : family.grandparents}
            </p>
          </div>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-3 my-6 sm:my-8 text-[#C5A880]/60">
            <div className="w-16 h-[1px] bg-[#C5A880]/40"></div>
            <span className="text-xs">✦</span>
            <div className="w-16 h-[1px] bg-[#C5A880]/40"></div>
          </div>

          {/* 2. Symmetrical DAUGHTER OF & SON OF Blocks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 text-center pt-2">
            
            {/* DAUGHTER OF */}
            <div className="bg-[#0F223D]/50 border border-[#C5A880]/20 p-5 rounded-sm flex flex-col justify-center">
              <span className={`text-[10px] sm:text-xs tracking-[0.22em] text-[#C5A880] uppercase block mb-2 font-semibold ${isPunjabi ? 'font-punjabi' : 'font-sans'}`}>
                {isPunjabi ? family.daughterTitlePunjabi : family.daughterTitle}
              </span>
              <p className={`text-base sm:text-lg md:text-xl text-[#FAF7F2] font-medium tracking-wide ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}>
                {isPunjabi ? family.daughterParentsPunjabi : family.daughterParents}
              </p>
            </div>

            {/* SON OF */}
            <div className="bg-[#0F223D]/50 border border-[#C5A880]/20 p-5 rounded-sm flex flex-col justify-center">
              <span className={`text-[10px] sm:text-xs tracking-[0.22em] text-[#C5A880] uppercase block mb-2 font-semibold ${isPunjabi ? 'font-punjabi' : 'font-sans'}`}>
                {isPunjabi ? family.sonTitlePunjabi : family.sonTitle}
              </span>
              <p className={`text-base sm:text-lg md:text-xl text-[#FAF7F2] font-medium tracking-wide ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}>
                {isPunjabi ? family.sonParentsPunjabi : family.sonParents}
              </p>
            </div>

          </div>
        </div>

        {/* Closing Warm Blessing Line */}
        <p className={`mt-10 sm:mt-12 text-sm sm:text-base md:text-lg text-[#D4E0EB] italic px-4 leading-relaxed ${isPunjabi ? 'font-punjabi' : 'font-serif font-bold'}`}>
          {isPunjabi ? invitationMessage.closingPunjabi : invitationMessage.closing}
        </p>
      </motion.div>
    </section>
  );
}

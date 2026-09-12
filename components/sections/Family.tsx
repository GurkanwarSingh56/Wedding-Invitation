"use client";

import { motion, Variants } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { weddingData } from "@/data/wedding";

export default function Family() {
  const { isPunjabi } = useLanguage();
  const { grandparents, parents, invitationMessage } = weddingData;

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
  };

  return (
    <section className="py-20 md:py-28 px-4 relative overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        className="max-w-2xl mx-auto text-center"
      >
        {/* Welcome / Invitation Message Lead */}
        <div className="mb-14">
          <span className={`text-xs tracking-[0.25em] text-[#C5A880] uppercase block mb-3 ${isPunjabi ? 'font-punjabi' : 'font-sans'}`}>
            {isPunjabi ? "ਪਰਿਵਾਰ ਵੱਲੋਂ ਨਿੱਘਾ ਸੱਦਾ" : "FAMILY INVITATION"}
          </span>
          <h2 className={`text-3xl md:text-5xl text-[#0F223D] mb-6 font-medium ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}>
            {isPunjabi ? invitationMessage.titlePunjabi : invitationMessage.title}
          </h2>
          <div className="w-12 h-[1px] bg-[#C5A880]/50 mx-auto mb-6"></div>
          <p className={`text-base md:text-lg text-[#536479] leading-relaxed max-w-xl mx-auto ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}>
            {isPunjabi ? invitationMessage.leadPunjabi : invitationMessage.lead}
          </p>
        </div>

        {/* Unified Family Hierarchy Card */}
        <div className="bg-[#FAF7F2] border border-[#C5A880]/30 p-8 md:p-12 relative shadow-sm">
          {/* Subtle Corner Accents */}
          <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-[#C5A880]/50"></div>
          <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-[#C5A880]/50"></div>
          <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-[#C5A880]/50"></div>
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-[#C5A880]/50"></div>

          {/* 1. Grandparents (Appears BEFORE parents as required) */}
          <div className="mb-10">
            <div className="space-y-1">
              <p className={`text-xl md:text-2xl text-[#0F223D] font-medium tracking-wide ${isPunjabi ? 'font-punjabi' : 'font-serif uppercase'}`}>
                {isPunjabi ? grandparents.grandmotherPunjabi : grandparents.grandmother}
              </p>
              <p className="text-[#C5A880] font-serif italic text-lg">&amp;</p>
              <p className={`text-xl md:text-2xl text-[#0F223D] font-medium tracking-wide ${isPunjabi ? 'font-punjabi' : 'font-serif uppercase'}`}>
                {isPunjabi ? grandparents.grandfatherPunjabi : grandparents.grandfather}
              </p>
            </div>
            <p className={`mt-3 text-xs tracking-[0.2em] text-[#C5A880] uppercase ${isPunjabi ? 'font-punjabi font-medium' : 'font-sans'}`}>
              {isPunjabi ? grandparents.titlePunjabi : grandparents.title}
            </p>
          </div>

          {/* Ornamental Divider */}
          <div className="flex items-center justify-center gap-3 my-8 text-[#C5A880]/60">
            <div className="w-16 h-[1px] bg-[#C5A880]/40"></div>
            <span className="text-xs">✦</span>
            <div className="w-16 h-[1px] bg-[#C5A880]/40"></div>
          </div>

          {/* 2. Parents */}
          <div>
            <div className="space-y-1">
              <p className={`text-xl md:text-2xl text-[#0F223D] font-medium tracking-wide ${isPunjabi ? 'font-punjabi' : 'font-serif uppercase'}`}>
                {isPunjabi ? parents.motherPunjabi : parents.mother}
              </p>
              <p className="text-[#C5A880] font-serif italic text-lg">&amp;</p>
              <p className={`text-xl md:text-2xl text-[#0F223D] font-medium tracking-wide ${isPunjabi ? 'font-punjabi' : 'font-serif uppercase'}`}>
                {isPunjabi ? parents.fatherPunjabi : parents.father}
              </p>
            </div>
            <p className={`mt-3 text-xs tracking-[0.2em] text-[#C5A880] uppercase ${isPunjabi ? 'font-punjabi font-medium' : 'font-sans'}`}>
              {isPunjabi ? parents.titlePunjabi : parents.title}
            </p>
          </div>
        </div>

        {/* Closing Warm Blessing Line */}
        <p className={`mt-10 text-sm md:text-base text-[#536479] italic ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}>
          {isPunjabi ? invitationMessage.closingPunjabi : invitationMessage.closing}
        </p>
      </motion.div>
    </section>
  );
}

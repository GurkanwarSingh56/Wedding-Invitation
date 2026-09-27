"use client";

import { motion, Variants } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { weddingData } from "@/data/wedding";

export default function Family() {
  const { isPunjabi } = useLanguage();
  const { family, invitationMessage } = weddingData;
  const { groom: groomFam, bride: brideFam } = family;

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
  };

  return (
    <section className="py-20 md:py-28 px-4 relative overflow-hidden bg-[#FAF7F2]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        className="max-w-4xl mx-auto text-center"
      >
        {/* Welcome / Invitation Message Lead */}
        <div className="mb-12 md:mb-16">
          <span className={`text-[11px] sm:text-xs tracking-[0.25em] text-[#C5A880] uppercase block mb-3 font-medium ${isPunjabi ? 'font-punjabi' : 'font-sans'}`}>
            {isPunjabi ? "ਪਰਿਵਾਰ ਵੱਲੋਂ ਨਿੱਘਾ ਸੱਦਾ" : "FAMILY INVITATION"}
          </span>
          <h2 className={`text-3xl md:text-5xl text-[#0F223D] mb-5 font-medium ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}>
            {isPunjabi ? invitationMessage.titlePunjabi : invitationMessage.title}
          </h2>
          <div className="w-12 h-[1px] bg-[#C5A880]/50 mx-auto mb-6"></div>
          <p className={`text-base md:text-lg text-[#536479] leading-relaxed max-w-2xl mx-auto px-4 ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}>
            {isPunjabi ? invitationMessage.leadPunjabi : invitationMessage.lead}
          </p>
        </div>

        {/* Symmetrical Family Hierarchy Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 text-center items-stretch">
          
          {/* ── Groom's Family Side ── */}
          <div className="bg-[#FAF7F2] border border-[#C5A880]/30 p-6 sm:p-8 rounded-sm shadow-sm relative flex flex-col justify-between">
            {/* Corner flourishes */}
            <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t border-l border-[#C5A880]/50"></div>
            <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t border-r border-[#C5A880]/50"></div>
            <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b border-l border-[#C5A880]/50"></div>
            <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b border-r border-[#C5A880]/50"></div>

            {/* Beloved Grandson of */}
            <div className="mb-8">
              <span className={`text-[10px] sm:text-xs tracking-[0.2em] text-[#C5A880] uppercase block mb-3 font-semibold ${isPunjabi ? 'font-punjabi' : 'font-sans'}`}>
                {isPunjabi ? groomFam.grandsonTitlePunjabi : groomFam.grandsonTitle}
              </span>

              {/* Dadi Ji & Dada Ji */}
              <div className="mb-4">
                <p className={`text-base sm:text-lg text-[#0F223D] font-medium tracking-wide ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}>
                  {isPunjabi ? groomFam.paternalGrandparents.namesPunjabi : groomFam.paternalGrandparents.names}
                </p>
                <p className={`text-[11px] text-[#536479] italic ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}>
                  ({isPunjabi ? groomFam.paternalGrandparents.relationPunjabi : groomFam.paternalGrandparents.relation})
                </p>
              </div>

              {/* Nani Ji & Nana Ji */}
              <div>
                <p className={`text-base sm:text-lg text-[#0F223D] font-medium tracking-wide ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}>
                  {isPunjabi ? groomFam.maternalGrandparents.namesPunjabi : groomFam.maternalGrandparents.names}
                </p>
                <p className={`text-[11px] text-[#536479] italic ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}>
                  ({isPunjabi ? groomFam.maternalGrandparents.relationPunjabi : groomFam.maternalGrandparents.relation})
                </p>
              </div>
            </div>

            {/* Decorative Divider */}
            <div className="flex items-center justify-center gap-3 my-4 text-[#C5A880]/50">
              <div className="w-12 h-[1px] bg-[#C5A880]/30"></div>
              <span className="text-[10px]">✦</span>
              <div className="w-12 h-[1px] bg-[#C5A880]/30"></div>
            </div>

            {/* Son of */}
            <div>
              <span className={`text-[10px] sm:text-xs tracking-[0.2em] text-[#C5A880] uppercase block mb-2 font-semibold ${isPunjabi ? 'font-punjabi' : 'font-sans'}`}>
                {isPunjabi ? groomFam.sonTitlePunjabi : groomFam.sonTitle}
              </span>
              <p className={`text-lg sm:text-xl text-[#0F223D] font-medium tracking-wide ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}>
                {isPunjabi 
                  ? `${groomFam.parents.motherPunjabi}  &  ${groomFam.parents.fatherPunjabi}`
                  : `${groomFam.parents.mother}  &  ${groomFam.parents.father}`}
              </p>
            </div>
          </div>

          {/* ── Bride's Family Side ── */}
          <div className="bg-[#FAF7F2] border border-[#C5A880]/30 p-6 sm:p-8 rounded-sm shadow-sm relative flex flex-col justify-between">
            {/* Corner flourishes */}
            <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t border-l border-[#C5A880]/50"></div>
            <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t border-r border-[#C5A880]/50"></div>
            <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b border-l border-[#C5A880]/50"></div>
            <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b border-r border-[#C5A880]/50"></div>

            {/* Daughter of */}
            <div className="mb-8">
              <span className={`text-[10px] sm:text-xs tracking-[0.2em] text-[#C5A880] uppercase block mb-3 font-semibold ${isPunjabi ? 'font-punjabi' : 'font-sans'}`}>
                {isPunjabi ? brideFam.daughterTitlePunjabi : brideFam.daughterTitle}
              </span>
              <p className={`text-lg sm:text-xl text-[#0F223D] font-medium tracking-wide ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}>
                {isPunjabi 
                  ? `${brideFam.parents.motherPunjabi}  &  ${brideFam.parents.fatherPunjabi}`
                  : `${brideFam.parents.mother}  &  ${brideFam.parents.father}`}
              </p>
            </div>

            {/* Decorative Divider */}
            <div className="flex items-center justify-center gap-3 my-4 text-[#C5A880]/50">
              <div className="w-12 h-[1px] bg-[#C5A880]/30"></div>
              <span className="text-[10px]">✦</span>
              <div className="w-12 h-[1px] bg-[#C5A880]/30"></div>
            </div>

            {/* Grandparents */}
            <div>
              <span className={`text-[10px] sm:text-xs tracking-[0.2em] text-[#C5A880] uppercase block mb-2 font-semibold ${isPunjabi ? 'font-punjabi' : 'font-sans'}`}>
                {isPunjabi ? brideFam.grandparentsTitlePunjabi : brideFam.grandparentsTitle}
              </span>
              <p className={`text-lg sm:text-xl text-[#0F223D] font-medium tracking-wide ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}>
                {isPunjabi ? brideFam.grandparents.namesPunjabi : brideFam.grandparents.names}
              </p>
            </div>
          </div>

        </div>

        {/* Closing Warm Blessing Line */}
        <p className={`mt-10 sm:mt-12 text-sm sm:text-base md:text-lg text-[#536479] italic px-4 leading-relaxed ${isPunjabi ? 'font-punjabi' : 'font-serif font-bold'}`}>
          {isPunjabi ? invitationMessage.closingPunjabi : invitationMessage.closing}
        </p>
      </motion.div>
    </section>
  );
}

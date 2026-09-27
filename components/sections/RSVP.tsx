"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { weddingData } from "@/data/wedding";
import { Phone } from "lucide-react";

export default function RSVP() {
  const { isPunjabi } = useLanguage();
  const { rsvp } = weddingData;

  return (
    <section className="py-20 md:py-28 px-4 bg-[#0F223D] text-[#FAF7F2] border-t border-[#C5A880]/30 relative overflow-hidden">
      {/* Subtle Ambient Radiance */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#C5A880]/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Decorative Transition Motif */}
      <div className="flex flex-col items-center justify-center mb-10 text-[#C5A880] relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 sm:w-20 h-[1px] bg-[#C5A880]/40"></div>
          <span className="text-sm">✦</span>
          <div className="w-12 sm:w-20 h-[1px] bg-[#C5A880]/40"></div>
        </div>
        {/* Subtle Sikh Wedding Floral Motif */}
        <svg
          viewBox="0 0 48 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-6 text-[#C5A880]/70"
          stroke="currentColor"
        >
          <path
            d="M24 6C20 12 14 16 8 16C14 18 20 22 24 28C28 22 34 18 40 16C34 16 28 12 24 6Z"
            strokeWidth="1.25"
            strokeLinejoin="round"
          />
          <circle cx="24" cy="17" r="1.5" fill="currentColor" />
        </svg>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-2xl mx-auto text-center relative z-10 px-2"
      >
        {/* Closing Blessing */}
        <p className={`text-[11px] sm:text-xs tracking-[0.25em] text-[#C5A880] uppercase mb-3 font-semibold ${isPunjabi ? 'font-punjabi' : 'font-sans'}`}>
          {isPunjabi ? "ਆਪ ਜੀ ਦੀ ਹਾਜ਼ਰੀ" : "GRACE THE OCCASION"}
        </p>

        <h2 className={`text-3xl sm:text-4xl md:text-5xl text-[#FAF7F2] font-medium mb-5 tracking-wide ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}>
          {isPunjabi ? "ਤੁਸੀਂ ਸਾਡੀ ਖੁਸ਼ੀ ਦਾ ਅਹਿਮ ਹਿੱਸਾ ਹੋ" : "YOUR PRESENCE IS OUR BLESSING"}
        </h2>

        <div className="w-12 h-[1px] bg-[#C5A880]/60 mx-auto mb-6"></div>

        <p className={`text-sm sm:text-base md:text-lg text-[#D4E0EB]/90 italic mb-12 leading-relaxed max-w-lg mx-auto ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}>
          {isPunjabi 
            ? "ਜਸ਼ਨ ਤਾਂ ਖਾਸ ਹੁੰਦੇ ਹੀ ਹਨ,\nਪਰ ਉਹ ਆਪਣੇ ਪਿਆਰਿਆਂ ਦੇ ਸਾਥ ਨਾਲ ਹੀ ਅਸਲ ਵਿੱਚ ਯਾਦਗਾਰ ਬਣਦੇ ਹਨ।" 
            : "Some celebrations are special because of the occasion.\nThey become unforgettable because of the loved ones who stand beside us."}
        </p>

        {/* ── Official RSVP Family Contact Information ── */}
        <div className="bg-[#162B4D]/70 border border-[#C5A880]/35 p-6 sm:p-8 rounded-sm shadow-md max-w-md mx-auto relative mb-12">
          {/* Subtle Corner Flourishes */}
          <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t border-l border-[#C5A880]/50"></div>
          <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t border-r border-[#C5A880]/50"></div>
          <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b border-l border-[#C5A880]/50"></div>
          <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b border-r border-[#C5A880]/50"></div>

          <span className={`text-xs sm:text-sm tracking-[0.25em] text-[#C5A880] uppercase block mb-1 font-semibold ${isPunjabi ? 'font-punjabi' : 'font-sans'}`}>
            RSVP
          </span>

          <h3 className={`text-2xl sm:text-3xl text-[#FAF7F2] font-medium tracking-wide mb-4 ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}>
            {isPunjabi ? rsvp.familyTitlePunjabi : rsvp.familyTitle}
          </h3>

          <div className="w-10 h-[1px] bg-[#C5A880]/40 mx-auto mb-4"></div>

          <div className="flex items-center justify-center gap-1.5 mb-2 text-[#C5A880]">
            <Phone className="w-3.5 h-3.5" />
            <span className={`text-[11px] sm:text-xs tracking-[0.2em] uppercase font-semibold ${isPunjabi ? 'font-punjabi' : 'font-sans'}`}>
              {isPunjabi ? rsvp.cellLabelPunjabi : rsvp.cellLabel}
            </span>
          </div>

          <div className="space-y-1.5">
            {rsvp.phones.map((phone, idx) => (
              <a
                key={idx}
                href={`tel:${phone.tel}`}
                className="text-lg sm:text-xl text-[#FAF7F2] hover:text-[#C5A880] transition-colors font-sans tracking-wider block font-medium"
              >
                {phone.display}
              </a>
            ))}
          </div>
        </div>

        {/* Final Sikh Greeting */}
        <div className="pt-6 text-[#D4E0EB]/70 text-xs sm:text-sm tracking-widest uppercase">
          <p className={isPunjabi ? 'font-punjabi' : 'font-sans'}>
            ੴ ਵਾਹਿਗੁਰੂ ਜੀ ਕਾ ਖ਼ਾਲਸਾ, ਵਾਹਿਗੁਰੂ ਜੀ ਕੀ ਫ਼ਤਹਿ ੴ
          </p>
        </div>
      </motion.div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { weddingData } from "@/data/wedding";

export default function Family() {
  const { isPunjabi } = useLanguage();

  return (
    <section className="py-24 px-6 relative bg-[#F7EFDF]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className={`text-3xl md:text-5xl text-[#641F28] mb-8 ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}>
          {isPunjabi ? "ਘਰ ਵੱਲੋਂ ਕੁਝ ਪਿਆਰ ਭਰੇ ਬੋਲ" : "A Few Words From Home"}
        </h2>

        <div className="w-8 h-[1px] bg-[#B08A45] mx-auto mb-10"></div>

        <p className={`text-lg md:text-xl text-[#594337] leading-relaxed mb-16 ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}>
          {isPunjabi ? 
            "ਖੁਸ਼ੀ ਅਤੇ ਸ਼ੁਕਰਾਨੇ ਨਾਲ ਭਰੇ ਦਿਲਾਂ ਨਾਲ, ਅਸੀਂ ਤੁਹਾਨੂੰ ਆਪਣੀ ਪਿਆਰੀ ਦਿਲਪ੍ਰੀਤ ਦੀ ਜ਼ਿੰਦਗੀ ਦੇ ਇੱਕ ਨਵੇਂ ਅਤੇ ਸੋਹਣੇ ਅਧਿਆਇ ਦੀ ਸ਼ੁਰੂਆਤ ਵਿੱਚ ਸ਼ਾਮਲ ਹੋਣ ਲਈ ਸੱਦਾ ਦਿੰਦੇ ਹਾਂ।" : 
            "With hearts full of happiness and gratitude, we invite you to join us as we celebrate our beloved Dilpreet and the beautiful beginning of a new chapter."
          }
        </p>

        <div className="flex flex-col items-center gap-4">
          <p className={`text-xl md:text-2xl text-[#641F28] ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}>
            {isPunjabi ? weddingData.parents.motherPunjabi : weddingData.parents.mother}
          </p>
          <span className="text-[#B08A45] font-great-vibes text-2xl">&amp;</span>
          <p className={`text-xl md:text-2xl text-[#641F28] ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}>
            {isPunjabi ? weddingData.parents.fatherPunjabi : weddingData.parents.father}
          </p>
        </div>
      </motion.div>
    </section>
  );
}

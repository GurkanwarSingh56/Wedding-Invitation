"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { weddingData } from "@/data/wedding";

export default function WeddingDay() {
  const { isPunjabi } = useLanguage();
  const day2 = weddingData.events.day2;

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
  };

  return (
    <section className="bg-white">
      {/* Intro */}
      <div className="py-32 px-6 text-center max-w-3xl mx-auto border-t border-[#B08A45]/20">
        <motion.p 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className={`text-sm tracking-widest text-[#B08A45] mb-4 uppercase ${isPunjabi ? 'font-punjabi' : ''}`}
        >
          {isPunjabi ? day2.titlePunjabi : day2.title} • {isPunjabi ? day2.subtitlePunjabi : day2.subtitle}
        </motion.p>
        
        <motion.h2 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className={`text-4xl md:text-6xl text-[#641F28] mb-8 ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}
        >
          {isPunjabi ? "ਵਿਆਹ ਦਾ ਦਿਨ" : "THE WEDDING DAY"}
        </motion.h2>

        <motion.p 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className={`text-xl text-[#594337] italic ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}
        >
          {isPunjabi ? "ਤੇ ਫਿਰ ਆਉਂਦਾ ਹੈ ਉਹ ਦਿਨ ਜਿਸ ਦੀ ਸਭ ਨੂੰ ਉਡੀਕ ਸੀ।" : "And then comes the day we've been waiting for."}
        </motion.p>
      </div>

      {/* Barat */}
      <div className="py-24 px-6 relative">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="max-w-xl mx-auto text-center"
        >
          <div className="w-12 h-[1px] bg-[#B08A45] mx-auto mb-8"></div>
          <h3 className={`text-3xl md:text-4xl text-[#641F28] mb-4 ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}>
            {isPunjabi ? day2.barat.namePunjabi : day2.barat.name}
          </h3>
          <p className={`text-[#B08A45] tracking-widest uppercase text-sm ${isPunjabi ? 'font-punjabi' : ''}`}>
            {isPunjabi ? day2.barat.timePunjabi : day2.barat.time}
          </p>
        </motion.div>
      </div>

      {/* Anand Karaj */}
      <div className="py-32 px-6 relative bg-[#F7EFDF]">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="max-w-xl mx-auto text-center"
        >
          <div className="text-4xl text-[#B08A45] mb-10 font-punjabi">ੴ</div>
          
          <h3 className={`text-4xl md:text-5xl text-[#641F28] mb-8 ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}>
            {isPunjabi ? day2.anandKaraj.namePunjabi : day2.anandKaraj.name}
          </h3>
          
          <p className={`text-[#B08A45] tracking-widest uppercase text-sm mb-12 ${isPunjabi ? 'font-punjabi' : ''}`}>
            {isPunjabi ? day2.anandKaraj.timePunjabi : day2.anandKaraj.time}
          </p>

          <p className={`text-xl text-[#594337] italic leading-relaxed ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}>
            {isPunjabi ? "ਦੋ ਰੂਹਾਂ, ਇੱਕ ਰਾਹ,\nਵਾਹਿਗੁਰੂ ਦੀ ਮੇਹਰ ਸਦਕਾ।" : "Two souls, one path,\nunder the blessings of Waheguru."}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

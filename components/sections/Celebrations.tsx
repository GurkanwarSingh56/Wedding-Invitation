"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { weddingData } from "@/data/wedding";

export default function Celebrations() {
  const { isPunjabi } = useLanguage();
  const day1 = weddingData.events.day1;

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
  };

  return (
    <section className="bg-[#F7EFDF] overflow-hidden">
      {/* Intro */}
      <div className="py-24 px-6 text-center max-w-3xl mx-auto">
        <motion.p 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className={`text-sm tracking-widest text-[#B08A45] mb-4 uppercase ${isPunjabi ? 'font-punjabi' : ''}`}
        >
          {isPunjabi ? day1.subtitlePunjabi : day1.subtitle} • {isPunjabi ? day1.titlePunjabi : day1.title}
        </motion.p>
        
        <motion.h2 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className={`text-4xl md:text-5xl text-[#641F28] mb-8 ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}
        >
          {isPunjabi ? "ਦੁਲਹਨ ਦੇ ਜਸ਼ਨ" : "THE BRIDE'S CELEBRATIONS"}
        </motion.h2>

        <motion.p 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className={`text-lg text-[#594337] italic ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}
        >
          {isPunjabi ? "ਅਰਦਾਸਾਂ, ਰੰਗਾਂ, ਹਾਸਿਆਂ ਅਤੇ ਪਰਿਵਾਰ ਦੀਆਂ ਖੂਬਸੂਰਤ ਸ਼ਰਾਰਤਾਂ ਨਾਲ ਭਰਿਆ ਦਿਨ।" : "A day filled with prayers, colour, laughter and the kind of madness only family can create."}
        </motion.p>
      </div>

      {/* Path - Peaceful */}
      <div className="py-24 px-6 relative border-t border-[#B08A45]/20 bg-gradient-to-b from-[#F7EFDF] to-white/30">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="max-w-xl mx-auto text-center"
        >
          <div className="text-3xl text-[#B08A45] mb-6 font-punjabi">ੴ</div>
          <h3 className={`text-3xl md:text-4xl text-[#641F28] mb-4 ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}>
            {isPunjabi ? day1.path.namePunjabi : day1.path.name}
          </h3>
          <p className={`text-[#B08A45] tracking-widest uppercase text-sm ${isPunjabi ? 'font-punjabi' : ''}`}>
            {isPunjabi ? day1.path.timePunjabi : day1.path.time}
          </p>
        </motion.div>
      </div>

      {/* Haldi - Warm */}
      <div className="py-24 px-6 relative border-t border-[#B08A45]/20 bg-[#fffdf5]">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="max-w-xl mx-auto text-center"
        >
          {/* Subtle marigold graphic placeholder */}
          <div className="w-16 h-16 rounded-full bg-[#fca311]/10 mx-auto mb-6 flex items-center justify-center border border-[#fca311]/30">
            <div className="w-8 h-8 rotate-45 border border-[#fca311]/40"></div>
          </div>
          
          <h3 className={`text-3xl md:text-4xl text-[#ca6702] mb-4 ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}>
            {isPunjabi ? day1.haldi.namePunjabi : day1.haldi.name}
          </h3>
          <p className={`text-lg text-[#594337] italic mb-6 ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}>
            {isPunjabi ? "ਆਓ ਖੁਸ਼ੀਆਂ ਦੀ ਸ਼ੁਰੂਆਤ ਕਰੀਏ।" : "Let the celebrations begin."}
          </p>
          <p className={`text-[#ca6702] tracking-widest uppercase text-sm ${isPunjabi ? 'font-punjabi' : ''}`}>
            {isPunjabi ? day1.haldi.timePunjabi : day1.haldi.time}
          </p>
        </motion.div>
      </div>

      {/* Jaggo - Energetic/Luxurious */}
      <div className="py-32 px-6 relative bg-[#641F28] overflow-hidden text-[#F7EFDF]">
        {/* Decorative pattern placeholder */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#B08A45] to-transparent"></div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-xl mx-auto text-center relative z-10"
        >
          <h3 className={`text-5xl md:text-7xl text-[#B08A45] mb-6 ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}>
            {isPunjabi ? day1.jaggo.namePunjabi : day1.jaggo.name}
          </h3>
          <p className={`text-xl md:text-2xl text-[#F7EFDF]/80 italic mb-10 leading-relaxed ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}>
            {isPunjabi ? "ਸੰਗੀਤ ਉੱਚਾ,\nਹਾਸੇ ਹੋਰ ਵੀ ਖੁੱਲ੍ਹ ਕੇ,\nਤੇ ਯਾਦਾਂ ਉਮਰ ਭਰ ਲਈ।" : "Music louder.\nLaughter longer.\nMemories forever."}
          </p>
          <div className="w-12 h-[1px] bg-[#B08A45]/50 mx-auto mb-10"></div>
          <p className={`text-[#B08A45] tracking-widest uppercase text-sm ${isPunjabi ? 'font-punjabi' : ''}`}>
            {isPunjabi ? day1.jaggo.timePunjabi : day1.jaggo.time}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

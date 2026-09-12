"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { weddingData } from "@/data/wedding";

export default function RSVP() {
  const { isPunjabi } = useLanguage();
  
  const handleRSVP = (status: 'yes' | 'no') => {
    const text = isPunjabi 
      ? `ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ ਜੀ, ਅਸੀਂ ਦਿਲਪ੍ਰੀਤ ਦੇ ਵਿਆਹ ਵਿੱਚ ${status === 'yes' ? 'ਜ਼ਰੂਰ ਆਵਾਂਗੇ' : 'ਸ਼ਾਮਲ ਨਹੀਂ ਹੋ ਸਕਾਂਗੇ'}`
      : `Hello, we ${status === 'yes' ? 'will definitely be there' : 'will not be able to make it'} for Dilpreet's wedding celebrations.`;
      
    const url = `https://wa.me/${weddingData.rsvp.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-32 px-6 bg-[#F7EFDF] relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className={`text-3xl md:text-5xl text-[#641F28] mb-8 ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}>
          {isPunjabi ? "ਤੁਸੀਂ ਸਾਡੀ ਕਹਾਣੀ ਦਾ ਹਿੱਸਾ ਹੋ" : "YOU ARE PART OF OUR STORY"}
        </h2>

        <p className={`text-lg md:text-xl text-[#594337] italic mb-6 leading-relaxed ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}>
          {isPunjabi 
            ? "ਕੁਝ ਜਸ਼ਨ ਮੌਕੇ ਕਰਕੇ ਖਾਸ ਹੁੰਦੇ ਹਨ,\nਤੇ ਕੁਝ ਉਹਨਾਂ ਲੋਕਾਂ ਕਰਕੇ ਯਾਦਗਾਰ ਬਣ ਜਾਂਦੇ ਹਨ\nਜੋ ਸਾਡੇ ਨਾਲ ਹੁੰਦੇ ਹਨ।" 
            : "Some celebrations are special because of the occasion.\nSome become unforgettable because of the people who are there."}
        </p>

        <p className={`text-xl md:text-2xl text-[#641F28] mb-12 ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}>
          {isPunjabi ? "ਤੁਹਾਡੀ ਹਾਜ਼ਰੀ ਸਾਡੀ ਖੁਸ਼ੀ ਨੂੰ ਪੂਰਾ ਕਰੇਗੀ।" : "Your presence will make our happiness complete."}
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => handleRSVP('yes')}
            className={`w-full md:w-auto border border-[#B08A45] bg-[#B08A45] px-8 py-4 text-xs tracking-widest text-[#F7EFDF] hover:bg-[#F7EFDF] hover:text-[#B08A45] transition-colors duration-500 uppercase ${isPunjabi ? 'font-punjabi' : ''}`}
          >
            {isPunjabi ? "ਮੈਂ ਜ਼ਰੂਰ ਆਵਾਂਗਾ / ਆਵਾਂਗੀ" : "I'LL BE THERE"}
          </button>
          
          <button 
            onClick={() => handleRSVP('no')}
            className={`w-full md:w-auto border border-[#B08A45]/50 px-8 py-4 text-xs tracking-widest text-[#594337] hover:bg-[#B08A45]/10 transition-colors duration-500 uppercase ${isPunjabi ? 'font-punjabi' : ''}`}
          >
            {isPunjabi ? "ਅਫ਼ਸੋਸ, ਸ਼ਾਮਲ ਨਹੀਂ ਹੋ ਸਕਾਂਗਾ / ਸਕਾਂਗੀ" : "SORRY, CAN'T MAKE IT"}
          </button>
        </div>
      </motion.div>
    </section>
  );
}

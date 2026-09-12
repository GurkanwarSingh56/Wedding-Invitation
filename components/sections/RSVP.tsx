"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { weddingData } from "@/data/wedding";

export default function RSVP() {
  const { isPunjabi } = useLanguage();
  
  const handleRSVP = (status: 'yes' | 'no') => {
    const text = isPunjabi 
      ? `ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ ਜੀ, ਅਸੀਂ ਦਿਲਪ੍ਰੀਤ ਅਤੇ ਪੁਨੀਤ ਦੇ ਵਿਆਹ ਵਿੱਚ ${status === 'yes' ? 'ਜ਼ਰੂਰ ਸ਼ਾਮਲ ਹੋਵਾਂਗੇ।' : 'ਕਿਸੇ ਕਾਰਨ ਸ਼ਾਮਲ ਨਹੀਂ ਹੋ ਸਕਾਂਗੇ।'}`
      : `Sat Sri Akal Ji, we ${status === 'yes' ? 'will be delighted to attend' : 'regret that we are unable to attend'} Dilpreet & Puneet's wedding celebrations.`;
      
    const url = `https://wa.me/${weddingData.rsvp.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-24 md:py-32 px-4 bg-[#FAF7F2] border-t border-[#C5A880]/30 relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-2xl mx-auto text-center"
      >
        <p className={`text-xs tracking-[0.25em] text-[#C5A880] uppercase mb-3 ${isPunjabi ? 'font-punjabi' : 'font-sans'}`}>
          {isPunjabi ? "ਆਪ ਜੀ ਦੀ ਹਾਜ਼ਰੀ" : "GRACE THE OCCASION"}
        </p>

        <h2 className={`text-3xl md:text-5xl text-[#0F223D] font-medium mb-6 ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}>
          {isPunjabi ? "ਤੁਸੀਂ ਸਾਡੀ ਖੁਸ਼ੀ ਦਾ ਅਹਿਮ ਹਿੱਸਾ ਹੋ" : "YOUR PRESENCE IS OUR BLESSING"}
        </h2>

        <div className="w-12 h-[1px] bg-[#C5A880]/60 mx-auto mb-8"></div>

        <p className={`text-base md:text-lg text-[#536479] italic mb-10 leading-relaxed max-w-lg mx-auto ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}>
          {isPunjabi 
            ? "ਜਸ਼ਨ ਤਾਂ ਖਾਸ ਹੁੰਦੇ ਹੀ ਹਨ,\nਪਰ ਉਹ ਆਪਣੇ ਪਿਆਰਿਆਂ ਦੇ ਸਾਥ ਨਾਲ ਹੀ ਅਸਲ ਵਿੱਚ ਯਾਦਗਾਰ ਬਣਦੇ ਹਨ।" 
            : "Some celebrations are special because of the occasion.\nThey become unforgettable because of the loved ones who stand beside us."}
        </p>

        {/* WhatsApp RSVP Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <button 
            onClick={() => handleRSVP('yes')}
            className={`w-full sm:w-auto flex-1 bg-[#0F223D] border border-[#0F223D] px-8 py-3.5 text-xs tracking-[0.2em] text-[#FAF7F2] hover:bg-[#162B4D] transition-colors duration-300 uppercase font-medium shadow-sm ${isPunjabi ? 'font-punjabi' : 'font-sans'}`}
          >
            {isPunjabi ? "ਮੈਂ ਜ਼ਰੂਰ ਆਵਾਂਗਾ / ਆਵਾਂਗੀ" : "I'LL BE THERE"}
          </button>
          
          <button 
            onClick={() => handleRSVP('no')}
            className={`w-full sm:w-auto flex-1 border border-[#0F223D]/30 bg-transparent px-8 py-3.5 text-xs tracking-[0.2em] text-[#536479] hover:bg-[#0F223D]/5 hover:text-[#0F223D] transition-colors duration-300 uppercase font-medium ${isPunjabi ? 'font-punjabi' : 'font-sans'}`}
          >
            {isPunjabi ? "ਅਫ਼ਸੋਸ, ਸ਼ਾਮਲ ਨਹੀਂ ਹੋ ਸਕਾਂਗੇ" : "CANNOT ATTEND"}
          </button>
        </div>

        {/* Footer closing blessing */}
        <div className="mt-16 pt-8 border-t border-[#C5A880]/20 text-[#536479] text-xs tracking-widest uppercase">
          <p className={isPunjabi ? 'font-punjabi' : 'font-sans'}>
            ੴ ਵਾਹਿਗੁਰੂ ਜੀ ਕਾ ਖ਼ਾਲਸਾ, ਵਾਹਿਗੁਰੂ ਜੀ ਕੀ ਫ਼ਤਹਿ ੴ
          </p>
        </div>
      </motion.div>
    </section>
  );
}

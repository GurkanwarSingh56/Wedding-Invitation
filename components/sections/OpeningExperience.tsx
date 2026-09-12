"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { weddingData } from "@/data/wedding";

interface Props {
  onEnter: () => void;
}

export default function OpeningExperience({ onEnter }: Props) {
  const { isPunjabi } = useLanguage();
  const [isExiting, setIsExiting] = useState(false);

  const handleEnter = () => {
    setIsExiting(true);
    setTimeout(() => {
      onEnter();
    }, 1500); // Wait for fade out
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div 
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="fixed inset-0 z-40 bg-[#F7EFDF] flex flex-col items-center justify-center p-6 text-center"
          style={{ backgroundImage: "url('/images/paper-texture.png')", backgroundBlendMode: "multiply" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex flex-col items-center"
          >
            <div className="text-3xl text-[#B08A45] mb-6 font-punjabi">ੴ</div>
            
            <p className={`text-sm tracking-widest text-[#594337] mb-8 uppercase ${isPunjabi ? 'font-punjabi' : ''}`}>
              {isPunjabi ? "ਪ੍ਰਮਾਤਮਾ ਦੀ ਮੇਹਰ ਸਦਕਾ" : "With the blessings of Waheguru Ji"}
            </p>

            <div className="w-[1px] h-12 bg-[#B08A45]/30 mb-8"></div>

            <p className={`text-xs tracking-[0.3em] text-[#B08A45] mb-4 uppercase ${isPunjabi ? 'font-punjabi' : ''}`}>
              {isPunjabi ? "ਦੁਲਹਨ ਦਾ ਪਰਿਵਾਰ" : "THE BRIDE'S SIDE"}
            </p>

            <h1 className={`text-5xl md:text-7xl text-[#641F28] mb-8 ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}>
              {isPunjabi ? weddingData.bride.punjabi : weddingData.bride.full}
            </h1>

            <p className={`text-sm italic text-[#594337] mb-12 ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}>
              {isPunjabi ? "ਦੋ ਪਰਿਵਾਰ,\nਇੱਕ ਸੋਹਣੀ ਸ਼ੁਰੂਆਤ।" : "Two families.\nOne beautiful beginning."}
            </p>

            <button 
              onClick={handleEnter}
              className={`border border-[#B08A45]/50 px-8 py-3 text-xs tracking-widest text-[#641F28] hover:bg-[#641F28] hover:text-[#F7EFDF] transition-colors duration-500 uppercase ${isPunjabi ? 'font-punjabi' : ''}`}
            >
              {isPunjabi ? "ਸੱਦਾ ਸਵੀਕਾਰ ਕਰੋ" : "ENTER INVITATION"}
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

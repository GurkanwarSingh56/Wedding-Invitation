"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { weddingData } from "@/data/wedding";
import Image from "next/image";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

export default function Gallery() {
  const { isPunjabi } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const galleryItems = weddingData.images.gallery;

  return (
    <section className="py-24 md:py-32 px-4 bg-[#FAF7F2] border-t border-[#C5A880]/30 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className={`text-xs tracking-[0.25em] text-[#C5A880] uppercase mb-2 font-medium ${isPunjabi ? 'font-punjabi' : 'font-sans'}`}>
            {isPunjabi ? "ਪਵਿੱਤਰ ਝਲਕੀਆਂ" : "SACRED BLESSINGS & CELEBRATIONS"}
          </p>
          <h2 className={`text-3xl md:text-5xl text-[#0F223D] font-medium mb-4 ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}>
            {isPunjabi ? "ਯਾਦਾਂ" : "GALLERY"}
          </h2>
          <div className="w-12 h-[1px] bg-[#C5A880]/60 mx-auto"></div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className={`relative cursor-pointer overflow-hidden border border-[#C5A880]/30 bg-[#FAF7F2] p-2.5 rounded-sm shadow-sm hover:shadow-md transition-shadow group flex flex-col ${
                idx === 0 ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
              onClick={() => setSelectedIndex(idx)}
            >
              <div className="relative w-full aspect-[4/3] sm:aspect-[3/4] overflow-hidden rounded-sm bg-[#F4EFE6]">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Subtle Hover Gradient & Zoom Indicator */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F223D]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                  <span className="text-xs text-[#FAF7F2] tracking-wider uppercase flex items-center gap-1.5 font-medium">
                    <ZoomIn className="w-3.5 h-3.5 text-[#C5A880]" />
                    {isPunjabi ? "ਵੱਡਾ ਕਰਕੇ ਵੇਖੋ" : "View Fullscreen"}
                  </span>
                </div>
              </div>

              {/* Artwork Label Caption */}
              <div className="pt-3 pb-1 text-center">
                <p className={`text-sm md:text-base text-[#0F223D] font-medium ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}>
                  {isPunjabi ? item.titlePunjabi : item.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0F223D]/95 backdrop-blur-md flex flex-col items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedIndex(null)}
          >
            <button 
              className="absolute top-6 right-6 text-[#FAF7F2]/70 hover:text-[#FAF7F2] transition-colors p-2"
              onClick={() => setSelectedIndex(null)}
              aria-label="Close preview"
            >
              <X className="w-8 h-8" strokeWidth={1.5} />
            </button>
            
            <div 
              className="relative w-full h-[75vh] max-w-4xl border border-[#C5A880]/40 rounded-sm overflow-hidden bg-black/20"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryItems[selectedIndex].src}
                alt={galleryItems[selectedIndex].title}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Bottom Caption in Lightbox */}
            <div className="mt-4 text-center text-[#FAF7F2]" onClick={(e) => e.stopPropagation()}>
              <p className={`text-lg md:text-xl text-[#FAF7F2] font-medium ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}>
                {isPunjabi ? galleryItems[selectedIndex].titlePunjabi : galleryItems[selectedIndex].title}
              </p>
              <p className="text-xs text-[#C5A880] tracking-widest uppercase mt-1">
                {selectedIndex + 1} / {galleryItems.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

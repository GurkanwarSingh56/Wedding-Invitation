"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { weddingData } from "@/data/wedding";
import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

export default function Gallery() {
  const { isPunjabi } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = weddingData.images.gallery;

  return (
    <section className="py-24 md:py-32 px-4 bg-[#FAF7F2] relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className={`text-xs tracking-[0.25em] text-[#C5A880] uppercase mb-2 ${isPunjabi ? 'font-punjabi' : 'font-sans'}`}>
            {isPunjabi ? "ਖੂਬਸੂਰਤ ਪਲ" : "CHERISHED MOMENTS"}
          </p>
          <h2 className={`text-3xl md:text-5xl text-[#0F223D] font-medium mb-4 ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}>
            {isPunjabi ? "ਯਾਦਾਂ" : "GALLERY"}
          </h2>
          <div className="w-12 h-[1px] bg-[#C5A880]/60 mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className={`relative cursor-pointer overflow-hidden border border-[#C5A880]/30 bg-[#F4EFE6] rounded-sm group ${
                idx === 0 || idx === 3 ? "col-span-2 row-span-2 aspect-square" : "aspect-[3/4]"
              }`}
              onClick={() => setSelectedImage(src)}
            >
              <Image
                src={src}
                alt="Celebration moment"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              {/* Subtle blue/gold hover overlay */}
              <div className="absolute inset-0 bg-[#0F223D]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0F223D]/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-[#FAF7F2]/70 hover:text-[#FAF7F2] transition-colors p-2"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image preview"
            >
              <X className="w-8 h-8" strokeWidth={1.5} />
            </button>
            <div className="relative w-full h-full max-w-4xl max-h-[85vh] border border-[#C5A880]/40 rounded-sm overflow-hidden">
              <Image
                src={selectedImage}
                alt="Selected photo"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

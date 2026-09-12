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
    <section className="py-24 px-6 bg-[#F7EFDF]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl text-[#641F28] mb-4 ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}>
            {isPunjabi ? "ਯਾਦਾਂ" : "GALLERY"}
          </h2>
          <div className="w-12 h-[1px] bg-[#B08A45] mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className={`relative cursor-pointer overflow-hidden bg-[#594337]/5 ${
                idx === 0 || idx === 3 ? "col-span-2 row-span-2 aspect-square" : "aspect-[3/4]"
              }`}
              onClick={() => setSelectedImage(src)}
            >
              <Image
                src={src}
                alt="Gallery Image"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
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
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" strokeWidth={1} />
            </button>
            <div className="relative w-full h-full max-w-4xl max-h-[80vh]">
              <Image
                src={selectedImage}
                alt="Selected Gallery Image"
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

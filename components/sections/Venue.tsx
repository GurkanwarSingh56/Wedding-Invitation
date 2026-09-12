"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { weddingData } from "@/data/wedding";
import { MapPin } from "lucide-react";

export default function Venue() {
  const { isPunjabi } = useLanguage();
  const venue = weddingData.venues.wedding;

  return (
    <section className="py-24 px-6 bg-white relative">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-md mx-auto text-center border border-[#B08A45]/30 p-10 relative bg-[#F7EFDF]/30"
      >
        <MapPin className="w-6 h-6 text-[#B08A45] mx-auto mb-6" strokeWidth={1.5} />
        
        <h3 className={`text-2xl md:text-3xl text-[#641F28] mb-4 ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}>
          {isPunjabi ? venue.namePunjabi : venue.name}
        </h3>
        
        <p className={`text-[#594337] mb-8 ${isPunjabi ? 'font-punjabi' : 'font-sans'}`}>
          {isPunjabi ? venue.addressPunjabi : venue.address}
        </p>

        <a 
          href={venue.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-block border border-[#641F28] px-6 py-3 text-xs tracking-widest text-[#641F28] hover:bg-[#641F28] hover:text-[#F7EFDF] transition-colors duration-500 uppercase ${isPunjabi ? 'font-punjabi' : ''}`}
        >
          {isPunjabi ? "ਸਥਾਨ ਵੇਖੋ" : "VIEW LOCATION"}
        </a>
      </motion.div>
    </section>
  );
}

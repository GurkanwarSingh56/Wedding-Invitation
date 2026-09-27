"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { weddingData } from "@/data/wedding";
import { useState, useEffect, useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

export default function Countdown() {
  const { isPunjabi } = useLanguage();
  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
  
  const calculateTimeLeft = () => {
    const target = new Date(weddingData.dates.countdownTarget).getTime();
    const now = new Date().getTime();
    const difference = target - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const isZero = timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0;

  if (!isClient) return null; // Avoid hydration mismatch

  return (
    <section className="py-14 sm:py-16 md:py-20 px-4 bg-[#0F223D] text-[#FAF7F2] text-center border-b border-[#C5A880]/30 relative overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#162B4D] via-[#0F223D] to-[#0A192F] opacity-70 pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-2xl mx-auto relative z-10 px-4"
      >
        <p className={`text-xs tracking-[0.25em] text-[#C5A880] uppercase mb-4 ${isPunjabi ? 'font-punjabi' : 'font-sans'}`}>
          {isPunjabi ? "ਸ਼ਗਨਾਂ ਦੇ ਪਲਾਂ ਦੀ ਉਡੀਕ" : "COUNTING DOWN TO THE BLESSED UNION"}
        </p>

        {isZero ? (
          <h3 className={`text-2xl md:text-3xl text-[#C5A880] ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}>
            {isPunjabi ? "ਅੱਜ ਦੋ ਪਰਿਵਾਰ ਇੱਕ ਹੋ ਰਹੇ ਹਨ।" : "Today, two families become one."}
          </h3>
        ) : (
          <div className="flex justify-center gap-4 sm:gap-8 md:gap-12 mt-6">
            {[
              { label: isPunjabi ? 'ਦਿਨ' : 'DAYS', value: timeLeft.days },
              { label: isPunjabi ? 'ਘੰਟੇ' : 'HOURS', value: timeLeft.hours },
              { label: isPunjabi ? 'ਮਿੰਟ' : 'MINS', value: timeLeft.minutes },
              { label: isPunjabi ? 'ਸਕਿੰਟ' : 'SECS', value: timeLeft.seconds }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center bg-[#162B4D]/60 border border-[#C5A880]/30 px-3 py-4 sm:px-5 sm:py-5 min-w-[64px] sm:min-w-[84px] rounded-sm shadow-sm">
                <span className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#C5A880] mb-1 font-light">
                  {item.value.toString().padStart(2, '0')}
                </span>
                <span className={`text-[9px] sm:text-[11px] tracking-[0.2em] text-[#D4E0EB]/70 uppercase font-medium ${isPunjabi ? 'font-punjabi' : 'font-sans'}`}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </section>
  );
}

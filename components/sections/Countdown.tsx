"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { weddingData } from "@/data/wedding";
import { useState, useEffect } from "react";

export default function Countdown() {
  const { isPunjabi } = useLanguage();
  
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
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const isZero = timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0;

  if (!isClient) return null; // Avoid hydration mismatch

  return (
    <section className="py-24 px-6 bg-[#641F28] text-[#F7EFDF] text-center border-y border-[#B08A45]/30">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-2xl mx-auto"
      >
        {isZero ? (
          <h3 className={`text-2xl md:text-4xl text-[#B08A45] ${isPunjabi ? 'font-punjabi' : 'font-serif'}`}>
            {isPunjabi ? "ਅੱਜ ਦੋ ਪਰਿਵਾਰ ਇੱਕ ਹੋ ਰਹੇ ਹਨ।" : "Today, two families become one."}
          </h3>
        ) : (
          <div className="flex justify-center gap-6 md:gap-12">
            {[
              { label: isPunjabi ? 'ਦਿਨ' : 'DAYS', value: timeLeft.days },
              { label: isPunjabi ? 'ਘੰਟੇ' : 'HOURS', value: timeLeft.hours },
              { label: isPunjabi ? 'ਮਿੰਟ' : 'MINUTES', value: timeLeft.minutes },
              { label: isPunjabi ? 'ਸਕਿੰਟ' : 'SECONDS', value: timeLeft.seconds }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="text-4xl md:text-6xl font-serif text-[#B08A45] mb-2">{item.value.toString().padStart(2, '0')}</span>
                <span className={`text-[10px] md:text-xs tracking-widest text-[#F7EFDF]/70 uppercase ${isPunjabi ? 'font-punjabi' : ''}`}>
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

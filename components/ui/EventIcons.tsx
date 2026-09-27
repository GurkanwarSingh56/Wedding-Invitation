import React from "react";

interface IconProps {
  className?: string;
}

// 1. Path Shri Sukhmani Sahib: Sacred Pothi Sahib on Rehal stand with holy scripture and delicate trim
export function PathIcon({ className = "w-8 h-8" }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      stroke="currentColor"
    >
      {/* Rehal Cross Stand */}
      <path
        d="M20 48L44 24M44 48L20 24"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      {/* Rehal Base Feet */}
      <path
        d="M17 50H23M41 50H47"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      {/* Open Holy Scripture (Pothi Sahib) Pages */}
      <path
        d="M32 24C27 20 18 20 12 22V36C18 34 27 34 32 38C37 34 46 34 52 36V22C46 20 37 20 32 24Z"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      {/* Central Spine */}
      <path d="M32 24V38" strokeWidth="1.75" strokeLinecap="round" />
      {/* Scripture Text Lines */}
      <path d="M18 26C22 25 26 25 28 26M18 30C22 29 26 29 28 30" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
      <path d="M36 26C38 25 42 25 46 26M36 30C38 29 42 29 46 30" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
      {/* Sacred Top Radiance Sparkle */}
      <path d="M32 10V14M30 12H34" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// 2. Kirtan: Harmonium & Tabla (Devotional Musical Setting)
export function KirtanIcon({ className = "w-8 h-8" }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      stroke="currentColor"
    >
      {/* Harmonium Body */}
      <rect x="8" y="24" width="30" height="22" rx="2" strokeWidth="1.75" />
      {/* Bellows lines */}
      <path d="M8 29H38M8 34H38" strokeWidth="1.2" opacity="0.7" />
      {/* Harmonium Keys */}
      <path d="M12 39H34V46H12V39Z" strokeWidth="1.5" />
      <path d="M16 39V44M20 39V44M24 39V44M28 39V44M30 39V44" strokeWidth="1.2" />
      {/* Tabla (Bayan & Dayan) */}
      {/* Bayan (Left larger drum) */}
      <ellipse cx="44" cy="30" rx="7" ry="4" strokeWidth="1.75" />
      <path d="M37 30C37 37 40 44 44 44C48 44 51 37 51 30" strokeWidth="1.5" />
      <circle cx="44" cy="30" r="2.5" fill="currentColor" fillOpacity="0.2" strokeWidth="1" />
      {/* Dayan (Right smaller drum) */}
      <ellipse cx="54" cy="26" rx="5" ry="3" strokeWidth="1.75" />
      <path d="M49 26C49 32 51.5 38 54 38C56.5 38 59 32 59 26" strokeWidth="1.5" />
      <circle cx="54" cy="26" r="1.75" fill="currentColor" fillOpacity="0.2" strokeWidth="1" />
      {/* Devotional Sound Notes / Aura */}
      <path d="M22 14C22 14 25 10 30 14" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />
      <circle cx="31" cy="14" r="1.5" fill="currentColor" />
    </svg>
  );
}

// 3. Guru Ka Langar: Traditional Serving / Deg & Thali
export function LangarIcon({ className = "w-8 h-8" }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      stroke="currentColor"
    >
      {/* Traditional Auspicious Serving Platter (Thali) */}
      <ellipse cx="32" cy="42" rx="22" ry="7" strokeWidth="1.75" />
      <ellipse cx="32" cy="42" rx="17" ry="5" strokeWidth="1.2" opacity="0.6" />
      {/* Traditional Katori / Sacred Deg Bowl */}
      <path
        d="M20 32C20 38 25 42 32 42C39 42 44 38 44 32H20Z"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      {/* Bowl Rim */}
      <ellipse cx="32" cy="32" rx="12" ry="3.5" strokeWidth="1.5" />
      {/* Sacred Nourishment / Rising Blessing Steam & Lotus Petals */}
      <path
        d="M32 14C32 20 28 22 28 26M36 17C36 21 34 23 34 26"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.8"
      />
      {/* Wheat Ears / Auspicious Grains on side */}
      <path d="M12 28C14 31 16 33 19 35" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M52 28C50 31 48 33 45 35" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

// 4. Jaggo & DJ: Traditional Illuminated Brass Jaggo with decorative lamps & festive stars
export function JaggoIcon({ className = "w-8 h-8" }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      stroke="currentColor"
    >
      {/* Base Pot (Ghaggar / Pitcher) */}
      <ellipse cx="32" cy="46" rx="14" ry="4" strokeWidth="1.75" />
      <path
        d="M18 45C18 36 23 33 26 31H38C41 33 46 36 46 45"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      {/* Decorative Traditional Bands */}
      <path d="M22 38H42M20 42H44" strokeWidth="1.2" opacity="0.6" strokeLinecap="round" />
      {/* Pitcher Neck */}
      <rect x="27" y="26" width="10" height="5" rx="1" strokeWidth="1.5" />
      {/* Tiered Diya / Candle Plate on top */}
      <ellipse cx="32" cy="25" rx="12" ry="3" strokeWidth="1.75" />
      {/* Central Flame / Jyoti */}
      <path
        d="M32 13C34 16 35.5 18 35.5 20C35.5 22 34 24 32 24C30 24 28.5 22 28.5 20C28.5 18 30 16 32 13Z"
        strokeWidth="1.5"
        fill="currentColor"
        fillOpacity="0.2"
      />
      {/* Left & Right Glowing Diyas */}
      <path d="M22 20C23 22 24 23 24 24M42 20C41 22 40 23 40 24" strokeWidth="1.2" strokeLinecap="round" />
      {/* Festive Shimmer Sparkles */}
      <path d="M12 18L14 18M13 17L13 19M51 18L53 18M52 17L52 19" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// 5. Reception of Barat: Auspicious Royal Kalgi / Ceremonial Welcome Toran
export function BaratIcon({ className = "w-8 h-8" }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      stroke="currentColor"
    >
      {/* Ceremonial Turban Arch / Royal Crown Crest */}
      <path
        d="M16 42C16 30 23 22 32 22C41 22 48 30 48 42"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      {/* Turban folds */}
      <path
        d="M20 40C24 33 29 27 38 25M26 42C29 36 34 32 44 32"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.6"
      />
      {/* Royal Brooch / Kalgi Plume */}
      <ellipse cx="32" cy="20" rx="3.5" ry="3.5" strokeWidth="1.5" />
      <path
        d="M32 16C31 11 28 8 26 6C30 9 34 11 32 16Z"
        strokeWidth="1.5"
        fill="currentColor"
        fillOpacity="0.25"
      />
      {/* Ceremonial Garland Swags */}
      <path
        d="M12 44C18 49 26 49 32 46C38 49 46 49 52 44"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

// 6. Anand Karaj: Golden Palki Sahib Canopy / Royal Chhatar
export function AnandKarajIcon({ className = "w-8 h-8" }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      stroke="currentColor"
    >
      {/* Golden Dome / Chhatar of Palki Sahib */}
      <path
        d="M20 28C20 18 26 14 32 12C38 14 44 18 44 28H20Z"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      {/* Kalas Finial at the pinnacle */}
      <path d="M32 7V12M30 9H34" strokeWidth="1.5" strokeLinecap="round" />
      {/* Ornate Scalloped Arch underneath */}
      <path
        d="M22 28C24 31 28 31 30 28C32 31 36 31 38 28C40 31 42 30 42 28"
        strokeWidth="1.2"
      />
      {/* Pillars */}
      <path d="M22 28V48M42 28V48" strokeWidth="1.75" strokeLinecap="round" />
      {/* Base Platform */}
      <path d="M16 48H48M14 52H50" strokeWidth="1.75" strokeLinecap="round" />
      {/* Sacred Floral Drapery in center */}
      <path
        d="M26 36C29 39 35 39 38 36"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.8"
      />
    </svg>
  );
}

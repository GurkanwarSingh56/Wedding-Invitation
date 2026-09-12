export interface EventItem {
  name: string;
  namePunjabi: string;
  time: string;
  timePunjabi: string;
  description?: string;
  descriptionPunjabi?: string;
}

export interface VenueInfo {
  name: string;
  namePunjabi: string;
  address: string;
  addressPunjabi: string;
  city: string;
  cityPunjabi: string;
  googleMapsUrl?: string;
}

export const weddingData = {
  bride: {
    first: "Dilpreet",
    last: "Kaur",
    full: "Dilpreet Kaur",
    punjabi: "ਦਿਲਪ੍ਰੀਤ ਕੌਰ",
  },
  groom: {
    first: "Puneet",
    last: "Saini",
    full: "Puneet Saini",
    punjabi: "ਪੁਨੀਤ ਸੈਣੀ",
  },
  // Grandparents must appear BEFORE parents as requested
  grandparents: {
    grandmother: "Sardarni Kulwant Kaur",
    grandfather: "Sr. Ajit Singh",
    grandmotherPunjabi: "ਸਰਦਾਰਨੀ ਕੁਲਵੰਤ ਕੌਰ",
    grandfatherPunjabi: "ਸ੍ਰ. ਅਜੀਤ ਸਿੰਘ",
    title: "Grandparents",
    titlePunjabi: "ਦਾਦਾ-ਦਾਦੀ ਜੀ",
  },
  parents: {
    mother: "Sdn. Amandeep Kaur",
    father: "S. Amarjit Singh",
    motherPunjabi: "ਸਰਦਾਰਨੀ ਅਮਨਦੀਪ ਕੌਰ",
    fatherPunjabi: "ਸ. ਅਮਰਜੀਤ ਸਿੰਘ",
    title: "Parents",
    titlePunjabi: "ਮਾਤਾ-ਪਿਤਾ ਜੀ",
  },
  dates: {
    day1Date: "13 NOVEMBER 2026",
    day1Day: "FRIDAY",
    day1DatePunjabi: "13 ਨਵੰਬਰ 2026",
    day1DayPunjabi: "ਸ਼ੁੱਕਰਵਾਰ",

    day2Date: "14 NOVEMBER 2026",
    day2Day: "SATURDAY",
    day2DatePunjabi: "14 ਨਵੰਬਰ 2026",
    day2DayPunjabi: "ਸ਼ਨੀਵਾਰ",

    countdownTarget: "2026-11-14T10:00:00+05:30", // IST time for Anand Karaj
  },
  venues: {
    pathGurudwara: {
      name: "Gurudwara Baba Baghel Singh",
      namePunjabi: "ਗੁਰਦੁਆਰਾ ਬਾਬਾ ਬਘੇਲ ਸਿੰਘ",
      address: "Hariana, Distt. Hoshiarpur",
      addressPunjabi: "ਹਰਿਆਣਾ, ਜ਼ਿਲ੍ਹਾ ਹੁਸ਼ਿਆਰਪੁਰ",
      city: "Hoshiarpur, Punjab",
      cityPunjabi: "ਹੁਸ਼ਿਆਰਪੁਰ, ਪੰਜਾਬ",
      googleMapsUrl: "https://maps.google.com/?q=Gurudwara+Baba+Baghel+Singh+Hariana+Hoshiarpur",
    },
    anandKaraj: {
      name: "Maharaja Farms",
      namePunjabi: "ਮਹਾਰਾਜਾ ਫਾਰਮਜ਼",
      address: "Tanda Road, Hoshiarpur",
      addressPunjabi: "ਟਾਂਡਾ ਰੋਡ, ਹੁਸ਼ਿਆਰਪੁਰ",
      city: "Hoshiarpur, Punjab",
      cityPunjabi: "ਹੁਸ਼ਿਆਰਪੁਰ, ਪੰਜਾਬ",
      googleMapsUrl: "https://maps.google.com/?q=Maharaja+Farms+Tanda+Road+Hoshiarpur",
    },
  },
  events: {
    // 13 November 2026 (Friday) - Path, Kirtan, Langar
    day1Spiritual: {
      date: "13 NOVEMBER 2026",
      day: "FRIDAY",
      datePunjabi: "13 ਨਵੰਬਰ 2026",
      dayPunjabi: "ਸ਼ੁੱਕਰਵਾਰ",
      title: "PATH • KIRTAN • LANGAR",
      titlePunjabi: "ਪਾਠ • ਕੀਰਤਨ • ਲੰਗਰ",
      path: {
        name: "PATH SHRI SUKHMANI SAHIB",
        namePunjabi: "ਸ੍ਰੀ ਸੁਖਮਨੀ ਸਾਹਿਬ ਪਾਠ",
        time: "10:00 AM",
        timePunjabi: "ਸਵੇਰੇ 10:00 ਵਜੇ",
      },
      kirtan: {
        name: "KIRTAN",
        namePunjabi: "ਕੀਰਤਨ",
        time: "11:00 AM",
        timePunjabi: "ਸਵੇਰੇ 11:00 ਵਜੇ",
      },
      langar: {
        name: "GURU KA LANGAR",
        namePunjabi: "ਗੁਰੂ ਕਾ ਲੰਗਰ",
        time: "1:00 PM",
        timePunjabi: "ਦੁਪਹਿਰ 1:00 ਵਜੇ",
      },
    },
    // 13 November 2026 (Friday) - Jaggo & DJ
    jaggo: {
      title: "JAGGO",
      titlePunjabi: "ਜਾਗੋ",
      secondaryTitle: "DJ",
      secondaryTitlePunjabi: "ਡੀਜੇ",
      date: "13 NOVEMBER 2026",
      day: "FRIDAY",
      datePunjabi: "13 ਨਵੰਬਰ 2026",
      dayPunjabi: "ਸ਼ੁੱਕਰਵਾਰ",
      // Important: time is unconfirmed, set to ""
      time: "6:00 PM",
      timePunjabi: "ਸ਼ਾਮ 6:00 ਵਜੇ",
      defaultTimeText: "TIME TO BE ANNOUNCED",
      defaultTimeTextPunjabi: "ਸਮਾਂ ਜਲਦੀ ਦੱਸਿਆ ਜਾਵੇਗਾ",
    },
    // 14 November 2026 (Saturday) - Anand Karaj
    weddingDay: {
      sectionTitle: "THE WEDDING DAY",
      sectionTitlePunjabi: "ਵਿਆਹ ਦਾ ਦਿਨ",
      date: "14 NOVEMBER 2026",
      day: "SATURDAY",
      datePunjabi: "14 ਨਵੰਬਰ 2026",
      dayPunjabi: "ਸ਼ਨੀਵਾਰ",
      barat: {
        name: "RECEPTION OF BARAT",
        namePunjabi: "ਬਾਰਾਤ ਦਾ ਸਵਾਗਤ",
        time: "9:00 AM",
        timePunjabi: "ਸਵੇਰੇ 9:00 ਵਜੇ",
      },
      anandKaraj: {
        name: "ANAND KARAJ",
        namePunjabi: "ਅਨੰਦ ਕਾਰਜ",
        time: "10:00 AM",
        timePunjabi: "ਸਵੇਰੇ 10:00 ਵਜੇ",
      },
      lunch: {
        name: "FOLLOWED BY LUNCH",
        namePunjabi: "ਅਨੰਦ ਕਾਰਜ ਉਪਰੰਤ ਲੰਗਰ / ਦੁਪਹਿਰ ਦਾ ਭੋਜਨ",
        venueName: "Maharaja Farms",
        venueNamePunjabi: "ਮਹਾਰਾਜਾ ਫਾਰਮਜ਼",
        address: "Tanda Road, Hoshiarpur",
        addressPunjabi: "ਟਾਂਡਾ ਰੋਡ, ਹੁਸ਼ਿਆਰਪੁਰ",
      },
    },
  },
  invitationMessage: {
    title: "With Joyous Hearts",
    titlePunjabi: "ਖੁਸ਼ੀਆਂ ਭਰਿਆ ਸੱਦਾ",
    lead: "With hearts full of gratitude and love, we warmly invite you to grace the wedding celebrations of our beloved Dilpreet with Puneet.",
    leadPunjabi: "ਵਾਹਿਗੁਰੂ ਜੀ ਦੀ ਅਪਾਰ ਕਿਰਪਾ ਸਦਕਾ, ਅਸੀਂ ਤੁਹਾਨੂੰ ਆਪਣੀ ਲਾਡਲੀ ਦਿਲਪ੍ਰੀਤ ਅਤੇ ਪੁਨੀਤ ਦੇ ਵਿਆਹ ਸਮਾਗਮਾਂ ਵਿੱਚ ਸ਼ਾਮਲ ਹੋ ਕੇ ਖੁਸ਼ੀਆਂ ਵਧਾਉਣ ਲਈ ਦਿਲੋਂ ਸੱਦਾ ਦਿੰਦੇ ਹਾਂ।",
    closing: "Your blessings and warm presence will make these auspicious moments truly memorable for our family.",
    closingPunjabi: "ਆਪ ਜੀ ਦੀਆਂ ਅਸੀਸਾਂ ਅਤੇ ਪਿਆਰੀ ਹਾਜ਼ਰੀ ਸਾਡੇ ਪਰਿਵਾਰ ਲਈ ਇਹਨਾਂ ਪਲਾਂ ਨੂੰ ਸਦਾ ਲਈ ਯਾਦਗਾਰ ਬਣਾ ਦੇਵੇਗੀ।",
  },
  rsvp: {
    whatsappNumber: "919876543210", // Easy to edit
  },
  images: {
    hero: "/images/hero.jpg",
    gallery: [
      {
        src: "/images/gallery-1.jpg",
        title: "Anand Karaj • Sacred Presence",
        titlePunjabi: "ਅਨੰਦ ਕਾਰਜ • ਗੁਰੂ ਹਜ਼ੂਰੀ",
      },
      {
        src: "/images/gallery-2.jpg",
        title: "The Sacred Palla Ceremony",
        titlePunjabi: "ਪੱਲੇ ਦੀ ਰਸਮ",
      },
      {
        src: "/images/gallery-3.jpg",
        title: "The Four Holy Laavan",
        titlePunjabi: "ਚਾਰ ਲਾਵਾਂ ਦੀ ਪਰਕਰਮਾ",
      },
      {
        src: "/images/gallery-4.jpg",
        title: "Dilpreet & Puneet",
        titlePunjabi: "ਦਿਲਪ੍ਰੀਤ ਅਤੇ ਪੁਨੀਤ",
      },
      {
        src: "/images/gallery-5.jpg",
        title: "Under Divine Grace",
        titlePunjabi: "ਗੁਰੂ ਸਾਹਿਬ ਦੀ ਅਪਾਰ ਕਿਰਪਾ",
      },
    ],
  },
};

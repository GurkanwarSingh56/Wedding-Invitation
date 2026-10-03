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
    last: "Singh",
    full: "Puneet Singh",
    punjabi: "ਪੁਨੀਤ ਸਿੰਘ",
  },

  // Family hierarchy with exact specified names
  family: {
    grandparentsTitle: "BELOVED GRANDPARENTS",
    grandparentsTitlePunjabi: "ਸਤਿਕਾਰਯੋਗ ਦਾਦਾ-ਦਾਦੀ ਜੀ",
    grandparents: "Sr. Ajit Singh & Sdn Kulwant Kaur",
    grandparentsPunjabi: "ਸਰਦਾਰ ਅਜੀਤ ਸਿੰਘ & ਸਰਦਾਰਨੀ ਕੁਲਵੰਤ ਕੌਰ",

    daughterTitle: "DAUGHTER OF",
    daughterTitlePunjabi: "ਸਪੁੱਤਰੀ",
    daughterParents: "Sdn Amandeep Kaur & Sr. Amarjit Singh",
    daughterParentsPunjabi: "ਸਰਦਾਰਨੀ ਅਮਨਦੀਪ ਕੌਰ & ਸਰਦਾਰ ਅਮਰਜੀਤ ਸਿੰਘ",

    sonTitle: "SON OF",
    sonTitlePunjabi: "ਸਪੁੱਤਰ",
    sonParents: "Sdn Jaswinder Kaur & Sr. Gurcharan Singh",
    sonParentsPunjabi: "ਸਰਦਾਰਨੀ ਜਸਵਿੰਦਰ ਕੌਰ & ਸਰਦਾਰ ਗੁਰਚਰਨ ਸਿੰਘ",
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
      gurudwaraSahib: "Kalgidhar Charan Pawan Gurudwara",
      gurudwaraSahibPunjabi: "ਕਾਲਗੀਧਰ ਚਰਨ ਪਵਨ ਗੁਰਦੁਆਰਾ",
      name: "Maharaja Farms",
      namePunjabi: "ਮਹਾਰਾਜਾ ਫਾਰਮਜ਼",
      address: "Tanda Road, Hoshiarpur",
      addressPunjabi: "ਟਾਂਡਾ ਰੋਡ, ਹੁਸ਼ਿਆਰਪੁਰ",
      city: "Hoshiarpur, Punjab",
      cityPunjabi: "ਹੁਸ਼ਿਆਰਪੁਰ, ਪੰਜਾਬ",
      googleMapsUrl: "https://maps.app.goo.gl/gcDBEcU1gmaTkmFU6",
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
    // 13 November 2026 (Friday) - Jaggo
    jaggo: {
      title: "JAGGO",
      titlePunjabi: "ਜਾਗੋ",
      date: "13 NOVEMBER 2026",
      day: "FRIDAY",
      datePunjabi: "13 ਨਵੰਬਰ 2026",
      dayPunjabi: "ਸ਼ੁੱਕਰਵਾਰ",
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

    },
  },
  invitationMessage: {
    title: "With Joyous Hearts",
    titlePunjabi: "ਖੁਸ਼ੀਆਂ ਭਰਿਆ ਸੱਦਾ",
    lead: "With hearts full of gratitude and love, we warmly invite you to grace the wedding celebrations of our beloved Dilpreet.",
    leadPunjabi: "ਵਾਹਿਗੁਰੂ ਜੀ ਦੀ ਅਪਾਰ ਕਿਰਪਾ ਸਦਕਾ, ਅਸੀਂ ਤੁਹਾਨੂੰ ਆਪਣੀ ਲਾਡਲੀ ਦਿਲਪ੍ਰੀਤ ਦੇ ਵਿਆਹ ਸਮਾਗਮਾਂ ਵਿੱਚ ਸ਼ਾਮਲ ਹੋ ਕੇ ਖੁਸ਼ੀਆਂ ਵਧਾਉਣ ਲਈ ਦਿਲੋਂ ਸੱਦਾ ਦਿੰਦੇ ਹਾਂ।",
    closing: "Your blessings and warm presence will make these auspicious moments truly memorable for our family.",
    closingPunjabi: "ਆਪ ਜੀ ਦੀਆਂ ਅਸੀਸਾਂ ਅਤੇ ਪਿਆਰੀ ਹਾਜ਼ਰੀ ਸਾਡੇ ਪਰਿਵਾਰ ਲਈ ਇਹਨਾਂ ਪਲਾਂ ਨੂੰ ਸਦਾ ਲਈ ਯਾਦਗਾਰ ਬਣਾ ਦੇਵੇਗੀ।",
  },
  rsvp: {
    whatsappNumber: "919876543210",
    familyTitle: "Dheri Family",
    familyTitlePunjabi: "ਢੇਰੀ ਪਰਿਵਾਰ",
    cellLabel: "Cell",
    cellLabelPunjabi: "ਫ਼ੋਨ ਨੰਬਰ",
    phones: [
      { display: "9463118080", tel: "9463118080" },
      { display: "9417836945", tel: "9417836945" },
    ],
  },
  images: {
    heroIllustration: "/images/gallery-1.jpg",
  },
};

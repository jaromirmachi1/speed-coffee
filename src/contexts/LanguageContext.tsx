import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

type Language = "en" | "cz";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // Get language from localStorage or default to English
    if (typeof window === "undefined") return "en";
    const saved = localStorage.getItem("language") as Language;
    // Only use saved language if it's valid, otherwise default to English
    return saved === "cz" || saved === "en" ? saved : "en";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
    // Update HTML lang attribute
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    // Set initial HTML lang attribute
    document.documentElement.lang = language;
  }, [language]);

  // Import translations
  const translations = {
    en: {
      // Navigation
      "nav.events": "EVENTS",
      "nav.reserve": "RESERVE",
      "nav.shop": "SHOP",

      // Hero
      "hero.discover": "DISCOVER OUR SPEED",

      // Hero Intro
      "heroIntro.text": "EVERY MOMENT WITH OUR COFFEE OR MATCHA IS AN",
      "heroIntro.highlight": "OPPORTUNITY TO CONNECT, SHARE, AND ENJOY",
      "heroIntro.textEnd": "THE POSITIVE ENERGY THAT BRIGHTENS YOUR DAY.",

      // About
      "about.title": "ABOUT OUR COFFEE HOUSE",
      "about.description":
        "COFFEE SPOT MADE FOR SLOW MOMENTS AND GOOD CONVERSATIONS. COZY, WELCOMING, AND FULL OF RICH COFFEE AROMAS, IT’S THE PERFECT PLACE TO MEET YOUR FRIENDS, CATCH UP, OR JUST ENJOY A QUIET BREAK FROM THE CITY. GREAT COFFEE, RELAXED VIBES, NO RUSH — JUST YOUR SPACE TO CHILL.",

      // Products
      "products.title": "OUR PRODUCTS",
      "products.appleGinger.title": "APPLE & GINGER",
      "products.appleGinger.subtitle": "FRUIT POWERED BOOST",
      "products.appleGinger.description":
        "APPLE GINGER JUICE MADE DIRECTLY FROM FRUIT BY COLD PRESSING SELECTED APPLE VARIETIES AND NATURAL GINGER JUICE.",
      "products.matcha.title": "MATCHA",
      "products.matcha.subtitle": "PLANT POWERED BOOST",
      "products.matcha.description":
        "NON-ALCOHOLIC CARBONATED BEVERAGE CONTAINING NATURAL CAFFEINE.",
      "products.coffee.title": "SPEED COFFEE",
      "products.coffee.subtitle": "PLANT POWERED BOOST",
      "products.coffee.description":
        "NON-ALCOHOLIC CARBONATED BEVERAGE CONTAINING NATURAL CAFFEINE.",
      "products.buyNow": "BUY NOW",

      // Locations
      "locations.title": "WHERE CAN YOU FIND US?",
      "locations.openingHours": "OPENING HOURS",
      "locations.weekdays": "WEEKDAYS",
      "locations.weekdaysHours": "7:30 - 19:00",
      "locations.weekends": "WEEKENDS",
      "locations.weekendsHours": "9:00 - 19:00",

      // Matcha
      "matcha.fallenFor": "Fallen for",
      "matcha.title": "MATCHA",
      "matcha.yet": "yet?",

      // Event Booking
      "event.title": "ANY EVENT YOU WANT US TO BE AT?",
      "event.description1":
        "Get in touch with us and let's bring good vibes, high-quality coffee, and matcha to your special occasion.",
      "event.description2":
        "We promise an unforgettable experience that will make your event memorable.",
      "event.bookUs": "Book us for your next event",
      "event.here": "HERE",

      // Footer
      "footer.madeBy": "Made by UITherapy",
    },
    cz: {
      // Navigation
      "nav.events": "AKCE",
      "nav.reserve": "REZERVACE",
      "nav.shop": "OBCHOD",

      // Hero
      "hero.discover": "OBJEVTE NAŠI RYCHLOST",

      // Hero Intro
      "heroIntro.text": "KAŽDÝ OKAMŽIK S NAŠÍ KÁVOU NEBO MATCHOU JE",
      "heroIntro.highlight": "PŘÍLEŽITOST K PROPOJENÍ, SDÍLENÍ A PROŽITÍ",
      "heroIntro.textEnd": "POZITIVNÍ ENERGIE, KTERÁ ROZSVÍTÍ VÁŠ DEN.",

      // About
      "about.title": "O NAŠEM KÁVOVÉM DOMU",
      "about.description":
        "SPEED COFFEE SHOP JE MOBILNÍ KAVÁRNA S DUŠÍ, KTERÁ CESTUJE PO CELÉ ČESKÉ REPUBLICE. NAJDETE NÁS NA RŮZNÝCH AKCÍCH, FIREMNÍCH SETKÁNÍCH, SVATBÁCH A SPECIÁLNÍCH PŘÍLEŽITOSTECH, KDE PŘINÁŠÍME VYSOKOKVALITNÍ KÁVU A MATCHA PŘÍMO K VÁM.",

      // Products
      "products.title": "NAŠE PRODUKTY",
      "products.appleGinger.title": "JABLKO & ZÁZVOR",
      "products.appleGinger.subtitle": "OVOCNÝ NÁBOJ",
      "products.appleGinger.description":
        "JABLEČNO-ZÁZVOROVÁ ŠŤÁVA VYROBENÁ PŘÍMO Z OVOCE ZA STUDENA LISOVÁNÍM VYBRANÝCH ODRŮD JABLEK A PŘÍRODNÍ ZÁZVOROVÉ ŠŤÁVY.",
      "products.matcha.title": "MATCHA",
      "products.matcha.subtitle": "ROSTLINNÝ NÁBOJ",
      "products.matcha.description":
        "NEOALKOHOLICKÝ PERLIVÝ NÁPOJ OBSAHUJÍCÍ PŘÍRODNÍ KOFEIN.",
      "products.coffee.title": "SPEED COFFEE",
      "products.coffee.subtitle": "ROSTLINNÝ NÁBOJ",
      "products.coffee.description":
        "NEOALKOHOLICKÝ PERLIVÝ NÁPOJ OBSAHUJÍCÍ PŘÍRODNÍ KOFEIN.",
      "products.buyNow": "KOUPIT",

      // Locations
      "locations.title": "KDE NÁS MŮŽETE NAJÍT?",
      "locations.openingHours": "OTEVÍRACÍ DOBA",
      "locations.weekdays": "VŠEDNÍ DNY",
      "locations.weekdaysHours": "8:00 - 18:00",
      "locations.weekends": "VÍKENDY",
      "locations.weekendsHours": "9:00 - 19:00",

      // Matcha
      "matcha.fallenFor": "Zamilovali jste si",
      "matcha.title": "MATCHA",
      "matcha.yet": "už?",

      // Event Booking
      "event.title": "MÁTE AKCI, KDE BYSTE NÁS CHTĚLI VIDĚT?",
      "event.description1":
        "Spojte se s námi a přineste na vaši speciální příležitost dobrou náladu, vysoce kvalitní kávu a matcha.",
      "event.description2":
        "Slibujeme nezapomenutelný zážitek, který učiní vaši akci nezapomenutelnou.",
      "event.bookUs": "Rezervujte nás na vaši další akci",
      "event.here": "ZDE",

      // Footer
      "footer.madeBy": "Vytvořeno UITherapy",
    },
  };

  const t = (key: string): string => {
    const langTranslations = translations[language];
    if (!langTranslations) return key;
    return langTranslations[key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

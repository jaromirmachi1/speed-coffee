"use client";

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
      "products.coffee.price": "€4.50",
      "products.matcha.price": "€4.50",
      "products.appleGinger.price": "€5.00",
      "products.buyNow": "BUY NOW",

      // Product advantages (product page)
      "products.advantages.greenTea.title": "Green tea",
      "products.advantages.greenTea.text": "Natural antioxidants and a gentle lift without the jitters.",
      "products.advantages.caffeine.title": "Natural caffeine",
      "products.advantages.caffeine.text": "Smooth energy from quality sources to keep you focused.",
      "products.advantages.matcha.title": "Matcha quality",
      "products.advantages.matcha.text": "Premium grade for a rich, balanced taste and lasting calm energy.",

      // Checkout success
      "checkout.success.title": "Thank you for your order",
      "checkout.success.paid":
        "Your payment was successful. We'll send you a confirmation email and ship your order soon.",
      "checkout.success.other":
        "We've received your order. You can pay on delivery or by bank transfer as agreed.",
      "checkout.success.trackOrder": "Track order status",
      "checkout.success.continueShopping": "Continue shopping",
      "checkout.success.backHome": "Back to home",

      // Cart modal
      "cart.addedToBasket": "Added to your basket",
      "cart.modalMessage": "Keep shopping or go to checkout?",
      "cart.goToCheckout": "Go to checkout",
      "cart.keepShopping": "Keep shopping",

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
      "footer.trackOrder": "Track order",

      // Order tracking (Sanity CMS)
      "orders.title": "Track your order",
      "orders.intro":
        "Enter the order number from your confirmation email and the email address you used at checkout. Order details are managed in Sanity Studio.",
      "orders.orderNumber": "Order number",
      "orders.orderNumberPlaceholder": "e.g. SC-1001",
      "orders.email": "Email",
      "orders.emailPlaceholder": "you@example.com",
      "orders.submit": "Look up order",
      "orders.searching": "Searching…",
      "orders.resultTitle": "Order",
      "orders.placedOn": "Placed on",
      "orders.customer": "Customer",
      "orders.shipping": "Shipping address",
      "orders.items": "Items",
      "orders.total": "Total",
      "orders.backShop": "Back to shop",
      "orders.cmsNote":
        "Orders are stored in your Sanity project. Create or update them in Studio; you can connect Stripe webhooks later to create orders automatically.",
      "orders.status.pending": "Pending",
      "orders.status.paid": "Paid",
      "orders.status.fulfilled": "Shipped / fulfilled",
      "orders.status.cancelled": "Cancelled",
      "orders.error.unavailable": "Order lookup is not configured. Add Sanity project ID (and read token if the dataset is private).",
      "orders.error.invalid": "Please enter a valid order number and email.",
      "orders.error.notFound": "No order matches those details. Check the number and email or contact us.",
      "orders.error.generic": "Something went wrong. Try again later.",
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
      "products.coffee.price": "120 Kč",
      "products.matcha.price": "120 Kč",
      "products.appleGinger.price": "130 Kč",
      "products.buyNow": "KOUPIT",

      // Product advantages (product page)
      "products.advantages.greenTea.title": "Zelený čaj",
      "products.advantages.greenTea.text": "Přírodní antioxidanty a jemná povzbuzení bez nervozity.",
      "products.advantages.caffeine.title": "Přírodní kofein",
      "products.advantages.caffeine.text": "Plynulá energie z kvalitních zdrojů pro soustředění.",
      "products.advantages.matcha.title": "Kvalita matcha",
      "products.advantages.matcha.text": "Prémiová jakost pro plnou, vyváženou chuť a klidnou energii.",

      // Checkout success
      "checkout.success.title": "Děkujeme za objednávku",
      "checkout.success.paid":
        "Platba proběhla v pořádku. Pošleme potvrzení e-mailem a brzy objednávku odešleme.",
      "checkout.success.other":
        "Objednávku jsme přijali. Platbu můžete provést při doručení nebo převodem podle domluvy.",
      "checkout.success.trackOrder": "Stav objednávky",
      "checkout.success.continueShopping": "Pokračovat v nákupu",
      "checkout.success.backHome": "Zpět na úvod",

      // Cart modal
      "cart.addedToBasket": "Přidáno do košíku",
      "cart.modalMessage": "Pokračovat v nákupu nebo přejít k platbě?",
      "cart.goToCheckout": "Přejít k platbě",
      "cart.keepShopping": "Pokračovat v nákupu",

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
      "footer.trackOrder": "Sledovat objednávku",

      // Order tracking (Sanity CMS)
      "orders.title": "Sledování objednávky",
      "orders.intro":
        "Zadejte číslo objednávky z potvrzovacího e-mailu a e-mail použitý při objednávce. Údaje spravujete v Sanity Studio.",
      "orders.orderNumber": "Číslo objednávky",
      "orders.orderNumberPlaceholder": "např. SC-1001",
      "orders.email": "E-mail",
      "orders.emailPlaceholder": "vy@example.com",
      "orders.submit": "Vyhledat objednávku",
      "orders.searching": "Hledám…",
      "orders.resultTitle": "Objednávka",
      "orders.placedOn": "Vytvořeno",
      "orders.customer": "Zákazník",
      "orders.shipping": "Doručovací adresa",
      "orders.items": "Položky",
      "orders.total": "Celkem",
      "orders.backShop": "Zpět do obchodu",
      "orders.cmsNote":
        "Objednávky jsou v projektu Sanity. Vytvářejte je nebo upravujte ve Studiu; později lze připojit Stripe webhook pro automatické zakládání.",
      "orders.status.pending": "Čeká na zpracování",
      "orders.status.paid": "Zaplaceno",
      "orders.status.fulfilled": "Odesláno",
      "orders.status.cancelled": "Zrušeno",
      "orders.error.unavailable": "Vyhledávání objednávek není nastaveno. Doplňte Sanity project ID (a read token u soukromého datasetu).",
      "orders.error.invalid": "Zadejte platné číslo objednávky a e-mail.",
      "orders.error.notFound": "Objednávku nenacházíme. Zkontrolujte údaje nebo nás kontaktujte.",
      "orders.error.generic": "Něco se pokazilo. Zkuste to později.",
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

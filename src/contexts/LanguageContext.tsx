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
  undefined,
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
  const [language, setLanguageState] = useState<Language>("cz");

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
    document.documentElement.lang = lang === "en" ? "en" : "cs";
  };

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language;
    if (saved === "cz" || saved === "en") {
      setLanguageState(saved);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === "en" ? "en" : "cs";
  }, [language]);

  // Import translations
  const translations = {
    en: {
      // Navigation
      "nav.events": "EVENTS",
      "nav.reserve": "RESERVE",
      "nav.contact": "CONTACT",
      "nav.cookies": "COOKIES",
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
      "products.advantages.greenTea.text":
        "Natural antioxidants and a gentle lift without the jitters.",
      "products.advantages.caffeine.title": "Natural caffeine",
      "products.advantages.caffeine.text":
        "Smooth energy from quality sources to keep you focused.",
      "products.advantages.matcha.title": "Matcha quality",
      "products.advantages.matcha.text":
        "Premium grade for a rich, balanced taste and lasting calm energy.",

      // Checkout success
      "checkout.success.title": "Thank you for your order",
      "checkout.success.paid":
        "Your payment was successful. We'll send you a confirmation email and ship your order soon.",
      "checkout.success.other":
        "We've received your order. You can pay on delivery as agreed.",
      "checkout.success.orderNumber": "Order number:",
      "checkout.success.orderPending":
        "Your order is being confirmed. Check your email or track it on the orders page in a moment.",
      "checkout.success.trackOrder": "Track order status",
      "checkout.success.continueShopping": "Continue shopping",
      "checkout.success.backHome": "Back to home",

      // Cart modal
      "cart.addedToBasket": "Added to your basket",
      "cart.modalMessage": "Keep shopping or go to checkout?",
      "cart.goToCheckout": "Go to checkout",
      "cart.keepShopping": "Keep shopping",

      // Checkout cart
      "checkout.cart.title": "Your shopping cart",
      "checkout.cart.backToShop": "← Back to shop",
      "checkout.cart.itemsCount": "Items",
      "checkout.cart.empty": "Your basket is empty.",
      "checkout.cart.continueShopping": "Continue shopping",
      "checkout.cart.orderSummary": "Order summary",
      "checkout.cart.subtotal": "Subtotal",
      "checkout.cart.item": "item",
      "checkout.cart.items": "items",
      "checkout.cart.shipping": "Shipping",
      "checkout.cart.total": "Total",
      "checkout.cart.proceed": "Proceed to checkout",
      "checkout.cart.payOnDelivery": "Pay on delivery instead",
      "checkout.cart.storeClosed":
        "The e-shop is currently in testing mode and not open for public orders yet.",
      "checkout.cart.decreaseQty": "Decrease quantity",
      "checkout.cart.increaseQty": "Increase quantity",
      "checkout.cart.removeItem": "Remove item",

      // Checkout shipping
      "checkout.shipping.backToCart": "← Back to cart",
      "checkout.shipping.deliveryTitle": "Pay on delivery",
      "checkout.shipping.deliverySubtitle":
        "Fill in your delivery details. You can pay in cash or by card when your order arrives (+20 Kč fee).",
      "checkout.shipping.title": "Payment & shipping",
      "checkout.shipping.addressTitle": "Shipping address",
      "checkout.shipping.fullName": "Full name",
      "checkout.shipping.email": "Email",
      "checkout.shipping.phone": "Phone",
      "checkout.shipping.street": "Street",
      "checkout.shipping.city": "City",
      "checkout.shipping.postalCode": "Postal code",
      "checkout.shipping.country": "Country",
      "checkout.shipping.paymentTitle": "Payment",
      "checkout.shipping.payCard": "Pay with card",
      "checkout.shipping.payDelivery": "Pay on delivery (cash or card)",
      "checkout.shipping.orderSummary": "Order summary",
      "checkout.shipping.subtotal": "Subtotal",
      "checkout.shipping.shipping": "Shipping",
      "checkout.shipping.podFee": "Pay on delivery fee",
      "checkout.shipping.total": "Total",
      "checkout.shipping.placeOrder": "Place order",
      "checkout.shipping.processing": "Processing…",
      "checkout.shipping.notOpenTitle": "E-shop not open yet",
      "checkout.shipping.notOpenText":
        "We are currently testing checkout and payments. Public ordering will open soon.",
      "checkout.shipping.backToShop": "Back to shop",
      "checkout.shipping.paymentLoading":
        "Payment form is still loading. Please wait.",
      "checkout.shipping.paymentInvalid":
        "Payment intent is invalid. Please refresh and try again.",
      "checkout.shipping.paymentFailed": "Payment failed. Please try again.",
      "checkout.shipping.paymentError":
        "Payment could not be completed. Try again.",
      "checkout.shipping.orderFailed": "Could not create order.",
      "checkout.shipping.orderError":
        "Could not place order. Please try again.",
      "checkout.shipping.prepareFailed": "Failed to prepare payment data.",
      "checkout.shipping.stripeLoadError":
        "The card form could not load. Privacy browser extensions (e.g. Avast AntiTrack) often block payment iframes — disable them for this site, use incognito, or pay on the secure Stripe page below.",
      "checkout.shipping.stripeRedirect": "Pay on secure Stripe page",

      // Rental inquiry form
      "form.rental.title": "Rental & services inquiry",
      "form.rental.subtitle":
        "Tell us a bit about your event and we'll get back to you.",
      "form.rental.name": "Name & surname",
      "form.rental.email": "Email",
      "form.rental.company": "Company (optional)",
      "form.rental.interested": "What are you interested in?",
      "form.rental.variantTrailer": "Rent coffee trailer with service",
      "form.rental.variantEvent": "Event in Speed Coffee House",
      "form.rental.country": "Country",
      "form.rental.city": "City",
      "form.rental.dateFrom": "Date from",
      "form.rental.dateTo": "Date to",
      "form.rental.note": "Note",
      "form.rental.submit": "Send inquiry",
      "form.rental.submitting": "Sending...",
      "form.rental.success":
        "Your inquiry has been sent. We will get back to you shortly.",
      "form.rental.error":
        "Something went wrong while sending your inquiry. Please try again later.",
      "form.rental.errorSend": "Failed to send inquiry. Please try again.",

      // Shop
      "shop.loading": "Loading products...",
      "shop.empty": "No products available at the moment.",

      // Events page
      "events.title": "EVENTS",
      "events.subtitle":
        "Festivals, markets, pop-ups and special appearances — find out where Speed Coffee is heading next.",
      "events.loading": "Loading events...",
      "events.empty": "No events scheduled right now. Check back soon or book us for your own.",
      "events.upcoming": "Upcoming",
      "events.past": "Past events",
      "events.pastBadge": "Past",
      "events.learnMore": "Learn more",
      "events.cta": "Want us at your event? Get in touch and we'll bring the coffee.",

      // Locations
      "locations.title": "WHERE CAN YOU FIND US?",
      "locations.openingHours": "OPENING HOURS",
      "locations.weekdays": "WEEKDAYS",
      "locations.weekdaysHours": "8:00 - 19:00",
      "locations.weekends": "WEEKENDS",
      "locations.weekendsHours": "10:00 - 19:00",

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
      "footer.gdpr": "GDPR",
      "footer.cookies": "Cookies",

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
        "Orders are stored in Sanity. Manage them in Studio under Orders.",
      "orders.status.pending": "Pending",
      "orders.status.paid": "Paid",
      "orders.status.fulfilled": "Shipped / fulfilled",
      "orders.status.cancelled": "Cancelled",
      "orders.error.unavailable":
        "Order lookup is not configured. Add Sanity project ID (and read token if the dataset is private).",
      "orders.error.invalid": "Please enter a valid order number and email.",
      "orders.error.notFound":
        "No order matches those details. Check the number and email or contact us.",
      "orders.error.generic": "Something went wrong. Try again later.",

      // Contact page
      "contact.title": "Contact us",
      "contact.intro":
        "For events, wholesale, collaborations, or support, send us a message and we will get back to you soon.",
      "contact.emailLabel": "Email",
      "contact.phoneLabel": "Phone",
      "contact.instagramLabel": "Instagram",
      "contact.addressLabel": "Registered seat",
      "contact.addressValue":
        "Špitálka 547/5a, Zábrdovice, Brno, Jihomoravský kraj",
      "contact.legalTitle": "Business details (ARES)",
      "contact.businessNameLabel": "Entrepreneur",
      "contact.icoLabel": "IČO",
      "contact.taxOfficeLabel": "Tax office",
      "contact.legalFormLabel": "Legal form",

      // Cookies page
      "cookies.title": "Cookies policy",
      "cookies.updated": "Last updated",
      "cookies.updatedDate": "21 July 2026",
      "cookies.intro":
        "This website uses cookies to keep essential features working, improve performance, and understand traffic.",
      "cookies.essentialTitle": "Essential cookies",
      "cookies.essentialText":
        "Required for core functionality such as language selection and secure checkout flow.",
      "cookies.analyticsTitle": "Analytics cookies",
      "cookies.analyticsText":
        "Help us understand how visitors use the site so we can improve content and user experience.",
      "cookies.marketingTitle": "Marketing cookies",
      "cookies.marketingText":
        "Can be used by third-party services to measure campaign performance and show relevant content.",
      "cookies.manageTitle": "Managing cookies",
      "cookies.manageText":
        "You can control or delete cookies in your browser settings at any time.",
    },
    cz: {
      // Navigation
      "nav.events": "EVENTY",
      "nav.reserve": "REZERVACE",
      "nav.contact": "KONTAKT",
      "nav.cookies": "COOKIES",
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
      "products.advantages.greenTea.text":
        "Přírodní antioxidanty a jemná povzbuzení bez nervozity.",
      "products.advantages.caffeine.title": "Přírodní kofein",
      "products.advantages.caffeine.text":
        "Plynulá energie z kvalitních zdrojů pro soustředění.",
      "products.advantages.matcha.title": "Kvalita matcha",
      "products.advantages.matcha.text":
        "Prémiová jakost pro plnou, vyváženou chuť a klidnou energii.",

      // Checkout success
      "checkout.success.title": "Děkujeme za objednávku",
      "checkout.success.paid":
        "Platba proběhla v pořádku. Pošleme potvrzení e-mailem a brzy objednávku odešleme.",
      "checkout.success.other":
        "Objednávku jsme přijali. Platbu můžete provést při doručení.",
      "checkout.success.orderNumber": "Číslo objednávky:",
      "checkout.success.orderPending":
        "Objednávku právě potvrzujeme. Za chvíli ji najdete v e-mailu nebo na stránce sledování objednávek.",
      "checkout.success.trackOrder": "Stav objednávky",
      "checkout.success.continueShopping": "Pokračovat v nákupu",
      "checkout.success.backHome": "Zpět na úvod",

      // Cart modal
      "cart.addedToBasket": "Přidáno do košíku",
      "cart.modalMessage": "Pokračovat v nákupu nebo přejít k platbě?",
      "cart.goToCheckout": "Přejít k platbě",
      "cart.keepShopping": "Pokračovat v nákupu",

      // Checkout cart
      "checkout.cart.title": "Váš nákupní košík",
      "checkout.cart.backToShop": "← Zpět do obchodu",
      "checkout.cart.itemsCount": "Položky",
      "checkout.cart.empty": "Váš košík je prázdný.",
      "checkout.cart.continueShopping": "Pokračovat v nákupu",
      "checkout.cart.orderSummary": "Souhrn objednávky",
      "checkout.cart.subtotal": "Mezisoučet",
      "checkout.cart.item": "položka",
      "checkout.cart.items": "položek",
      "checkout.cart.shipping": "Doprava",
      "checkout.cart.total": "Celkem",
      "checkout.cart.proceed": "Přejít k platbě",
      "checkout.cart.payOnDelivery": "Raději platba při doručení",
      "checkout.cart.storeClosed":
        "E-shop je momentálně v testovacím režimu a zatím nepřijímá veřejné objednávky.",
      "checkout.cart.decreaseQty": "Snížit množství",
      "checkout.cart.increaseQty": "Zvýšit množství",
      "checkout.cart.removeItem": "Odebrat položku",

      // Checkout shipping
      "checkout.shipping.backToCart": "← Zpět do košíku",
      "checkout.shipping.deliveryTitle": "Platba při doručení",
      "checkout.shipping.deliverySubtitle":
        "Vyplňte doručovací údaje. Zaplatíte hotově nebo kartou při doručení (+20 Kč poplatek).",
      "checkout.shipping.title": "Platba a doručení",
      "checkout.shipping.addressTitle": "Doručovací adresa",
      "checkout.shipping.fullName": "Jméno a příjmení",
      "checkout.shipping.email": "E-mail",
      "checkout.shipping.phone": "Telefon",
      "checkout.shipping.street": "Ulice",
      "checkout.shipping.city": "Město",
      "checkout.shipping.postalCode": "PSČ",
      "checkout.shipping.country": "Země",
      "checkout.shipping.paymentTitle": "Platba",
      "checkout.shipping.payCard": "Platba kartou",
      "checkout.shipping.payDelivery": "Platba při doručení (hotově nebo kartou)",
      "checkout.shipping.orderSummary": "Souhrn objednávky",
      "checkout.shipping.subtotal": "Mezisoučet",
      "checkout.shipping.shipping": "Doprava",
      "checkout.shipping.podFee": "Poplatek za platbu při doručení",
      "checkout.shipping.total": "Celkem",
      "checkout.shipping.placeOrder": "Odeslat objednávku",
      "checkout.shipping.processing": "Zpracovává se…",
      "checkout.shipping.notOpenTitle": "E-shop zatím není otevřen",
      "checkout.shipping.notOpenText":
        "Momentálně testujeme objednávky a platby. Veřejné objednávání brzy spustíme.",
      "checkout.shipping.backToShop": "Zpět do obchodu",
      "checkout.shipping.paymentLoading":
        "Platební formulář se stále načítá. Počkejte prosím.",
      "checkout.shipping.paymentInvalid":
        "Platební údaje jsou neplatné. Obnovte stránku a zkuste to znovu.",
      "checkout.shipping.paymentFailed": "Platba se nezdařila. Zkuste to znovu.",
      "checkout.shipping.paymentError":
        "Platbu se nepodařilo dokončit. Zkuste to znovu.",
      "checkout.shipping.orderFailed": "Objednávku se nepodařilo vytvořit.",
      "checkout.shipping.orderError":
        "Objednávku se nepodařilo odeslat. Zkuste to prosím znovu.",
      "checkout.shipping.prepareFailed": "Nepodařilo se připravit platební údaje.",
      "checkout.shipping.stripeLoadError":
        "Platební formulář se nepodařilo načíst. Rozšíření prohlížeče na ochranu soukromí (např. Avast AntiTrack) často blokují platební iframe — vypněte je pro tento web, zkuste anonymní okno, nebo zaplaťte na zabezpečené stránce Stripe níže.",
      "checkout.shipping.stripeRedirect": "Zaplatit na zabezpečené stránce Stripe",

      // Rental inquiry form
      "form.rental.title": "Poptávka pronájmu a služeb",
      "form.rental.subtitle":
        "Napište nám o vaší akci a co nejdříve se ozveme.",
      "form.rental.name": "Jméno a příjmení",
      "form.rental.email": "E-mail",
      "form.rental.company": "Firma (volitelné)",
      "form.rental.interested": "O co máte zájem?",
      "form.rental.variantTrailer": "Pronájem kávového přívěsu se servisem",
      "form.rental.variantEvent": "Akce v Speed Coffee House",
      "form.rental.country": "Země",
      "form.rental.city": "Město",
      "form.rental.dateFrom": "Datum od",
      "form.rental.dateTo": "Datum do",
      "form.rental.note": "Poznámka",
      "form.rental.submit": "Odeslat poptávku",
      "form.rental.submitting": "Odesílání...",
      "form.rental.success":
        "Vaše poptávka byla odeslána. Brzy se vám ozveme.",
      "form.rental.error":
        "Při odesílání poptávky se něco pokazilo. Zkuste to prosím později.",
      "form.rental.errorSend": "Poptávku se nepodařilo odeslat. Zkuste to znovu.",

      // Shop
      "shop.loading": "Načítání produktů...",
      "shop.empty": "Momentálně nejsou k dispozici žádné produkty.",

      // Events page
      "events.title": "AKCE",
      "events.subtitle":
        "Festivaly, trhy, pop-up akce a speciální události — zjistěte, kde se Speed Coffee objeví.",
      "events.loading": "Načítání akcí...",
      "events.empty":
        "Momentálně nemáme naplánované žádné akce. Zkuste to brzy znovu, nebo nás rezervujte na vlastní událost.",
      "events.upcoming": "Nadcházející",
      "events.past": "Proběhlé akce",
      "events.pastBadge": "Proběhlo",
      "events.learnMore": "Více informací",
      "events.cta": "Chcete nás na své akci? Ozvěte se a přivezeme kávu.",

      // Locations
      "locations.title": "KDE NÁS MŮŽETE NAJÍT?",
      "locations.openingHours": "OTEVÍRACÍ DOBA",
      "locations.weekdays": "VŠEDNÍ DNY",
      "locations.weekdaysHours": "8:00 - 19:00",
      "locations.weekends": "VÍKENDY",
      "locations.weekendsHours": "10:00 - 19:00",

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
      "footer.gdpr": "GDPR",
      "footer.cookies": "Cookies",

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
        "Objednávky jsou uložené v Sanity. Spravujte je ve Studiu v sekci Orders.",
      "orders.status.pending": "Čeká na zpracování",
      "orders.status.paid": "Zaplaceno",
      "orders.status.fulfilled": "Odesláno",
      "orders.status.cancelled": "Zrušeno",
      "orders.error.unavailable":
        "Vyhledávání objednávek není nastaveno. Doplňte Sanity project ID (a read token u soukromého datasetu).",
      "orders.error.invalid": "Zadejte platné číslo objednávky a e-mail.",
      "orders.error.notFound":
        "Objednávku nenacházíme. Zkontrolujte údaje nebo nás kontaktujte.",
      "orders.error.generic": "Něco se pokazilo. Zkuste to později.",

      // Contact page
      "contact.title": "Kontaktujte nás",
      "contact.intro":
        "Pro akce, velkoobchod, spolupráce nebo podporu nám napište a co nejdříve se ozveme.",
      "contact.emailLabel": "E-mail",
      "contact.phoneLabel": "Telefon",
      "contact.instagramLabel": "Instagram",
      "contact.addressLabel": "Sídlo",
      "contact.addressValue":
        "Špitálka 547/5a, Zábrdovice, Brno, Jihomoravský kraj",
      "contact.legalTitle": "Podnikatelské údaje (ARES)",
      "contact.businessNameLabel": "Podnikatel",
      "contact.icoLabel": "IČO",
      "contact.taxOfficeLabel": "Finanční úřad",
      "contact.legalFormLabel": "Právní forma",

      // Cookies page
      "cookies.title": "Zásady cookies",
      "cookies.updated": "Poslední aktualizace",
      "cookies.updatedDate": "21. července 2026",
      "cookies.intro":
        "Tento web používá cookies pro správné fungování, zlepšení výkonu a porozumění návštěvnosti.",
      "cookies.essentialTitle": "Nezbytné cookies",
      "cookies.essentialText":
        "Jsou nutné pro základní funkce, například volbu jazyka a bezpečný průchod objednávkou.",
      "cookies.analyticsTitle": "Analytické cookies",
      "cookies.analyticsText":
        "Pomáhají nám pochopit, jak návštěvníci web používají, abychom mohli zlepšovat obsah a uživatelský zážitek.",
      "cookies.marketingTitle": "Marketingové cookies",
      "cookies.marketingText":
        "Mohou být používány službami třetích stran pro měření kampaní a zobrazování relevantního obsahu.",
      "cookies.manageTitle": "Správa cookies",
      "cookies.manageText":
        "Cookies můžete kdykoli spravovat nebo smazat v nastavení svého prohlížeče.",
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

module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/contexts/LanguageContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageProvider",
    ()=>LanguageProvider,
    "useLanguage",
    ()=>useLanguage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const useLanguage = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};
const LanguageProvider = ({ children })=>{
    const [language, setLanguageState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        // Get language from localStorage or default to English
        if ("TURBOPACK compile-time truthy", 1) return "en";
        //TURBOPACK unreachable
        ;
        const saved = undefined;
    });
    const setLanguage = (lang)=>{
        setLanguageState(lang);
        localStorage.setItem("language", lang);
        // Update HTML lang attribute
        document.documentElement.lang = lang;
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Set initial HTML lang attribute
        document.documentElement.lang = language;
    }, [
        language
    ]);
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
            "about.description": "COFFEE SPOT MADE FOR SLOW MOMENTS AND GOOD CONVERSATIONS. COZY, WELCOMING, AND FULL OF RICH COFFEE AROMAS, IT’S THE PERFECT PLACE TO MEET YOUR FRIENDS, CATCH UP, OR JUST ENJOY A QUIET BREAK FROM THE CITY. GREAT COFFEE, RELAXED VIBES, NO RUSH — JUST YOUR SPACE TO CHILL.",
            // Products
            "products.title": "OUR PRODUCTS",
            "products.appleGinger.title": "APPLE & GINGER",
            "products.appleGinger.subtitle": "FRUIT POWERED BOOST",
            "products.appleGinger.description": "APPLE GINGER JUICE MADE DIRECTLY FROM FRUIT BY COLD PRESSING SELECTED APPLE VARIETIES AND NATURAL GINGER JUICE.",
            "products.matcha.title": "MATCHA",
            "products.matcha.subtitle": "PLANT POWERED BOOST",
            "products.matcha.description": "NON-ALCOHOLIC CARBONATED BEVERAGE CONTAINING NATURAL CAFFEINE.",
            "products.coffee.title": "SPEED COFFEE",
            "products.coffee.subtitle": "PLANT POWERED BOOST",
            "products.coffee.description": "NON-ALCOHOLIC CARBONATED BEVERAGE CONTAINING NATURAL CAFFEINE.",
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
            "event.description1": "Get in touch with us and let's bring good vibes, high-quality coffee, and matcha to your special occasion.",
            "event.description2": "We promise an unforgettable experience that will make your event memorable.",
            "event.bookUs": "Book us for your next event",
            "event.here": "HERE",
            // Footer
            "footer.madeBy": "Made by UITherapy"
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
            "about.description": "SPEED COFFEE SHOP JE MOBILNÍ KAVÁRNA S DUŠÍ, KTERÁ CESTUJE PO CELÉ ČESKÉ REPUBLICE. NAJDETE NÁS NA RŮZNÝCH AKCÍCH, FIREMNÍCH SETKÁNÍCH, SVATBÁCH A SPECIÁLNÍCH PŘÍLEŽITOSTECH, KDE PŘINÁŠÍME VYSOKOKVALITNÍ KÁVU A MATCHA PŘÍMO K VÁM.",
            // Products
            "products.title": "NAŠE PRODUKTY",
            "products.appleGinger.title": "JABLKO & ZÁZVOR",
            "products.appleGinger.subtitle": "OVOCNÝ NÁBOJ",
            "products.appleGinger.description": "JABLEČNO-ZÁZVOROVÁ ŠŤÁVA VYROBENÁ PŘÍMO Z OVOCE ZA STUDENA LISOVÁNÍM VYBRANÝCH ODRŮD JABLEK A PŘÍRODNÍ ZÁZVOROVÉ ŠŤÁVY.",
            "products.matcha.title": "MATCHA",
            "products.matcha.subtitle": "ROSTLINNÝ NÁBOJ",
            "products.matcha.description": "NEOALKOHOLICKÝ PERLIVÝ NÁPOJ OBSAHUJÍCÍ PŘÍRODNÍ KOFEIN.",
            "products.coffee.title": "SPEED COFFEE",
            "products.coffee.subtitle": "ROSTLINNÝ NÁBOJ",
            "products.coffee.description": "NEOALKOHOLICKÝ PERLIVÝ NÁPOJ OBSAHUJÍCÍ PŘÍRODNÍ KOFEIN.",
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
            "event.description1": "Spojte se s námi a přineste na vaši speciální příležitost dobrou náladu, vysoce kvalitní kávu a matcha.",
            "event.description2": "Slibujeme nezapomenutelný zážitek, který učiní vaši akci nezapomenutelnou.",
            "event.bookUs": "Rezervujte nás na vaši další akci",
            "event.here": "ZDE",
            // Footer
            "footer.madeBy": "Vytvořeno UITherapy"
        }
    };
    const t = (key)=>{
        const langTranslations = translations[language];
        if (!langTranslations) return key;
        return langTranslations[key] || key;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: {
            language,
            setLanguage,
            t
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/contexts/LanguageContext.tsx",
        lineNumber: 187,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__300c2b92._.js.map
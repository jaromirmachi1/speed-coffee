(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/Container.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const Container = ({ children, className = "", maxWidth = "full", style })=>{
    const maxWidthClasses = {
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-lg",
        xl: "max-w-xl",
        "2xl": "max-w-2xl",
        "7xl": "max-w-7xl",
        full: "max-w-full"
    };
    const classes = [
        "mx-auto",
        maxWidthClasses[maxWidth],
        className
    ].filter(Boolean).join(" ");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: classes,
        style: style,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/Container.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Container;
const __TURBOPACK__default__export__ = Container;
var _c;
__turbopack_context__.k.register(_c, "Container");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/constants/typography.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Typography System - Centralized font size rules
 *
 * Usage:
 * import { typography } from '@/lib/constants/typography';
 * className={typography.manuka.hero}
 */ __turbopack_context__.s([
    "fontWeights",
    ()=>fontWeights,
    "lineHeights",
    ()=>lineHeights,
    "typography",
    ()=>typography
]);
const typography = {
    // Manuka Font (Condensed) - Used for headings, navigation, hero text
    manuka: {
        // Hero Section - Main "SPEED COFFEE" heading
        hero: "text-[100px] sm:text-[180px] md:text-[220px] lg:text-[380px]",
        // HeroIntro - Large paragraph text
        heroIntro: "text-4xl sm:text-4xl md:text-[64px] lg:text-[104px]",
        // HeroIntro CTA - "DISCOVER OUR SPEED" link
        heroIntroCta: "text-3xl sm:text-4xl md:text-4xl lg:text-[64px]",
        // Navigation Links (Desktop)
        navDesktop: "text-3xl md:text-4xl lg:text-5xl",
        // Navigation Links (Mobile Menu)
        navMobile: "text-xl md:text-2xl",
        // Mobile Logo
        mobileLogo: "clamp(20px, 5vw, 24px)",
        // Language Switcher Label
        languageLabel: "text-xl"
    },
    // Agright Font - Used for section headings and product titles
    agright: {
        // Section Headings (About, Locations, Event Booking)
        sectionHeading: "text-2xl sm:text-3xl md:text-4xl lg:text-[64px]",
        // Products Section Main Heading
        productsMain: "text-3xl sm:text-4xl md:text-6xl lg:text-7xl",
        // Product Titles (Apple & Ginger, Matcha, Speed Coffee)
        productTitle: "text-2xl sm:text-3xl md:text-5xl lg:text-6xl",
        // Footer Brand Name
        footerBrand: "text-4xl sm:text-6xl md:text-5xl lg:text-[164px]"
    },
    // Manrope Font - Used for body text, descriptions, buttons
    manrope: {
        // Body Text / Descriptions (About, Locations, Event Booking)
        body: "text-sm sm:text-base md:text-lg lg:text-[24px]",
        // Product Subtitles (e.g., "FRUIT POWERED BOOST")
        productSubtitle: "text-base sm:text-lg md:text-[24px]",
        // Product Descriptions
        productDescription: "text-sm sm:text-base md:text-[24px]",
        // Button Text
        button: "text-sm md:text-[18px]",
        // Footer Small Text (Copyright, Made by)
        footerSmall: "text-xs md:text-lg"
    }
};
const fontWeights = {
    manuka: {
        normal: "font-normal",
        medium: "font-medium",
        bold: "font-bold"
    },
    agright: {
        normal: "font-normal",
        extrabold: "font-extrabold"
    },
    manrope: {
        light: "font-light",
        normal: "font-normal",
        bold: "font-bold"
    }
};
const lineHeights = {
    tight: "leading-tight",
    none: "leading-none",
    relaxed: "leading-relaxed",
    custom: {
        hero: "leading-none",
        heroIntro: "leading-[1.1] md:leading-[0.8] lg:leading-[0.8]",
        sectionHeading: "leading-[1]",
        body: "leading-relaxed",
        bodyCompact: "leading-[1.2]",
        bodyTight: "leading-[1.0]"
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/assets/images/logoSc.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/logoSc.9a26a985.webp");}),
"[project]/src/assets/images/logoSc.webp.mjs { IMAGE => \"[project]/src/assets/images/logoSc.webp (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$logoSc$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/images/logoSc.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$logoSc$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 915,
    height: 840,
    blurWidth: 8,
    blurHeight: 7,
    blurDataURL: "data:image/webp;base64,UklGRm4AAABXRUJQVlA4TGIAAAAvB4ABEM1VICICEeGBAOQgAAAAnH9pJBIGBCEIwgYBIEAIAAQAAAAAAAAAAAAABAIkACKAMAhRCVUWuv9sCu9BeM6ZKlWSV/qL2pUcWLEgkDBv6tfxtd8HW5d/ME2m74ZxIw=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Header/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Container.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants/typography.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$logoSc$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$logoSc$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/images/logoSc.webp.mjs { IMAGE => "[project]/src/assets/images/logoSc.webp (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const NavLink = ({ href, children, onClick, isMobile = false })=>{
    const baseClasses = isMobile ? `text-dark font-manuka ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fontWeights"].manuka.normal} uppercase hover:text-accent transition-colors block ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].manuka.navMobile}` : `text-dark font-manuka ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fontWeights"].manuka.normal} uppercase hover:text-accent transition-colors ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].manuka.navDesktop}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: href,
        onClick: onClick,
        className: baseClasses,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/Header/Header.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = NavLink;
const MenuButton = ({ isOpen, onClick })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: "p-2 focus:outline-none focus:ring-2 focus:ring-accent rounded",
        "aria-label": "Toggle menu",
        "aria-expanded": isOpen,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-8 h-8 text-dark",
            fill: "none",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6 18L18 6M6 6l12 12"
            }, void 0, false, {
                fileName: "[project]/src/components/Header/Header.tsx",
                lineNumber: 56,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 6h16M4 12h16M4 18h16"
            }, void 0, false, {
                fileName: "[project]/src/components/Header/Header.tsx",
                lineNumber: 58,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Header/Header.tsx",
            lineNumber: 46,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/Header/Header.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = MenuButton;
const Header = ()=>{
    _s();
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { language, setLanguage, t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const toggleMenu = ()=>{
        setIsMenuOpen(!isMenuOpen);
    };
    const closeMenu = ()=>{
        setIsMenuOpen(false);
    };
    const handleLanguageChange = (lang)=>{
        setLanguage(lang);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "bg-beige pt-4 relative z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "py-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between w-full sm:hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#top",
                                        className: "flex items-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: typeof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$logoSc$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$logoSc$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"] === 'string' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$logoSc$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$logoSc$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$logoSc$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$logoSc$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
                                            alt: "Speed Coffee",
                                            className: "h-auto w-auto max-h-[80px] sm:hidden"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header/Header.tsx",
                                            lineNumber: 89,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header/Header.tsx",
                                        lineNumber: 88,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MenuButton, {
                                        isOpen: isMenuOpen,
                                        onClick: toggleMenu
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header/Header.tsx",
                                        lineNumber: 95,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Header/Header.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden sm:flex items-center justify-between w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MenuButton, {
                                        isOpen: isMenuOpen,
                                        onClick: toggleMenu
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header/Header.tsx",
                                        lineNumber: 100,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header/Header.tsx",
                                        lineNumber: 101,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4 md:gap-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavLink, {
                                                href: "#events",
                                                children: t("nav.events")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Header/Header.tsx",
                                                lineNumber: 103,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavLink, {
                                                href: "#reserve",
                                                children: t("nav.reserve")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Header/Header.tsx",
                                                lineNumber: 104,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavLink, {
                                                href: "#shop",
                                                children: t("nav.shop")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Header/Header.tsx",
                                                lineNumber: 105,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Header/Header.tsx",
                                        lineNumber: 102,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Header/Header.tsx",
                                lineNumber: 99,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Header/Header.tsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "py-4 space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavLink, {
                                    href: "#events",
                                    onClick: closeMenu,
                                    isMobile: true,
                                    children: t("nav.events")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header/Header.tsx",
                                    lineNumber: 118,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavLink, {
                                    href: "#reserve",
                                    onClick: closeMenu,
                                    isMobile: true,
                                    children: t("nav.reserve")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header/Header.tsx",
                                    lineNumber: 121,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavLink, {
                                    href: "#shop",
                                    onClick: closeMenu,
                                    isMobile: true,
                                    children: t("nav.shop")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header/Header.tsx",
                                    lineNumber: 124,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pt-4 border-t border-dark/20",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-dark font-manuka ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fontWeights"].manuka.normal} uppercase ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].manuka.languageLabel}`,
                                                children: "Language:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Header/Header.tsx",
                                                lineNumber: 131,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleLanguageChange("en"),
                                                className: `px-4 py-2 rounded font-manuka font-normal uppercase transition-colors ${language === "en" ? "bg-dark text-beige" : "bg-beige text-dark border-2 border-dark hover:bg-dark hover:text-beige"}`,
                                                children: "EN"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Header/Header.tsx",
                                                lineNumber: 136,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleLanguageChange("cz"),
                                                className: `px-4 py-2 rounded font-manuka font-normal uppercase transition-colors ${language === "cz" ? "bg-dark text-beige" : "bg-beige text-dark border-2 border-dark hover:bg-dark hover:text-beige"}`,
                                                children: "CZ"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Header/Header.tsx",
                                                lineNumber: 146,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Header/Header.tsx",
                                        lineNumber: 130,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header/Header.tsx",
                                    lineNumber: 129,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Header/Header.tsx",
                            lineNumber: 117,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header/Header.tsx",
                        lineNumber: 110,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Header/Header.tsx",
                lineNumber: 84,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Header/Header.tsx",
            lineNumber: 83,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/Header/Header.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Header, "fiPY9Cd8fv5hH1k+UrWPtj2JExU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c2 = Header;
const __TURBOPACK__default__export__ = Header;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "NavLink");
__turbopack_context__.k.register(_c1, "MenuButton");
__turbopack_context__.k.register(_c2, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/assets/images/igLogo.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/igLogo.6bcdb6fd.svg");}),
"[project]/src/assets/images/igLogo.svg.mjs { IMAGE => \"[project]/src/assets/images/igLogo.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$igLogo$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/images/igLogo.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$igLogo$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 60,
    height: 60,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/assets/images/ttSvg.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/ttSvg.9e8ae617.svg");}),
"[project]/src/assets/images/ttSvg.svg.mjs { IMAGE => \"[project]/src/assets/images/ttSvg.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$ttSvg$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/images/ttSvg.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$ttSvg$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 49,
    height: 57,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants/typography.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$igLogo$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$igLogo$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/images/igLogo.svg.mjs { IMAGE => "[project]/src/assets/images/igLogo.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$ttSvg$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$ttSvg$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/images/ttSvg.svg.mjs { IMAGE => "[project]/src/assets/images/ttSvg.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const Footer = ()=>{
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-[#BEA791] text-white py-20 relative overflow-hidden footer-full-width min-h-[60vh] flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-1/3 top-0 bottom-0 w-px bg-white/10"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Footer.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-2/3 top-0 bottom-0 w-px bg-white/10"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Footer.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Footer.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full px-4 md:px-[100px] relative h-full flex flex-col justify-between min-h-[60vh]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "text-center",
                            initial: {
                                opacity: 0,
                                y: 10
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.8,
                                ease: [
                                    0.25,
                                    0.46,
                                    0.45,
                                    0.94
                                ],
                                delay: 0.2
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `text-5xl sm:text-6xl md:text-5xl lg:text-[164px] font-agright ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fontWeights"].agright.normal} text-white tracking-tight ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lineHeights"].tight}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: "SPEED"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 40,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: "COFFEE"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 41,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Footer.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-3  md:gap-0 mt-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0
                                },
                                whileInView: {
                                    opacity: 1
                                },
                                viewport: {
                                    once: true
                                },
                                transition: {
                                    duration: 0.6,
                                    ease: "easeOut",
                                    delay: 0.4
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].manrope.footerSmall} font-manrope ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fontWeights"].manrope.light} text-white`,
                                    children: [
                                        "© ",
                                        new Date().getFullYear()
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "flex items-center justify-center gap-3 md:gap-4",
                                initial: {
                                    opacity: 0
                                },
                                whileInView: {
                                    opacity: 1
                                },
                                viewport: {
                                    once: true
                                },
                                transition: {
                                    duration: 0.6,
                                    ease: "easeOut",
                                    delay: 0.45
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://instagram.com",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "hover:opacity-80 transition-opacity",
                                        "aria-label": "Instagram",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: typeof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$igLogo$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$igLogo$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"] === 'string' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$igLogo$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$igLogo$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$igLogo$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$igLogo$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
                                            alt: "Instagram",
                                            className: "h-5 w-5 md:h-6 md:w-6"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 77,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 70,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://tiktok.com",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "hover:opacity-80 transition-opacity",
                                        "aria-label": "TikTok",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: typeof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$ttSvg$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$ttSvg$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"] === 'string' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$ttSvg$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$ttSvg$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$ttSvg$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$ttSvg$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
                                            alt: "TikTok",
                                            className: "h-5 w-5 md:h-6 md:w-6"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 90,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 83,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "text-left md:text-right",
                                initial: {
                                    opacity: 0
                                },
                                whileInView: {
                                    opacity: 1
                                },
                                viewport: {
                                    once: true
                                },
                                transition: {
                                    duration: 0.6,
                                    ease: "easeOut",
                                    delay: 0.5
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].manrope.footerSmall} font-manrope ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fontWeights"].manrope.light} text-white`,
                                    children: t("footer.madeBy")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Footer.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Footer.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Footer.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Footer, "ot2YhC7pP10gRrIouBKIa40vomw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = Footer;
const __TURBOPACK__default__export__ = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/assets/images/mainPh.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/mainPh.67a04efe.webp");}),
"[project]/src/assets/images/mainPh.webp.mjs { IMAGE => \"[project]/src/assets/images/mainPh.webp (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$mainPh$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/images/mainPh.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$mainPh$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1381,
    height: 999,
    blurWidth: 8,
    blurHeight: 6,
    blurDataURL: "data:image/webp;base64,UklGRv4AAABXRUJQVlA4TPIAAAAvB0ABAM1VICICHghADgIAAICGAgtCICZDAAEAQAwAAAAAACAAAAAAAAAAAAADGAqwCEpDwTO1nE8AAAAeCEAKAwAAwPn/9q+RCABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPYRl+5Ow8EIAcBAADg/N/vG/22SRAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAEQgQEAATLv/VuR4X/nBLvWBtAUlCKD1FeMY6OoEkyj5p6UZ5MZi08RySTMJMPu5nIgUac7NPvv2Z6wYRtq/9d3lUA0a1G6GC4bb/mijCO/Lq+vR9bO+no+9ita4CTn0AQ=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/TextReveal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
const TextReveal = ({ children, animateOnScroll = true, delay = 0 })=>{
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const letters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "TextReveal.useGSAP": ()=>{
            if (!containerRef.current) return;
            letters.current = [];
            const element = containerRef.current;
            const existingLetters = Array.from(element.querySelectorAll(".letter"));
            if (existingLetters.length === 0) {
                const splitTextIntoLetters = {
                    "TextReveal.useGSAP.splitTextIntoLetters": (node)=>{
                        if (node.nodeType === Node.TEXT_NODE) {
                            const text = node.textContent || "";
                            const nodes = [];
                            for(let i = 0; i < text.length; i++){
                                const char = text[i];
                                if (char === " ") {
                                    nodes.push(document.createTextNode(" "));
                                } else {
                                    const span = document.createElement("span");
                                    span.className = "letter";
                                    span.style.display = "inline-block";
                                    span.style.overflow = "hidden";
                                    span.style.verticalAlign = "top";
                                    span.textContent = char;
                                    nodes.push(span);
                                }
                            }
                            return nodes;
                        } else if (node.nodeType === Node.ELEMENT_NODE) {
                            const element = node;
                            const newElement = element.cloneNode(false);
                            // Preserve all attributes including style
                            Array.from(element.attributes).forEach({
                                "TextReveal.useGSAP.splitTextIntoLetters": (attr)=>{
                                    newElement.setAttribute(attr.name, attr.value);
                                }
                            }["TextReveal.useGSAP.splitTextIntoLetters"]);
                            // Preserve inline styles explicitly
                            if (element.style.cssText) {
                                newElement.style.cssText = element.style.cssText;
                            }
                            Array.from(element.childNodes).forEach({
                                "TextReveal.useGSAP.splitTextIntoLetters": (child)=>{
                                    const splitNodes = splitTextIntoLetters(child);
                                    splitNodes.forEach({
                                        "TextReveal.useGSAP.splitTextIntoLetters": (splitNode)=>{
                                            newElement.appendChild(splitNode);
                                        }
                                    }["TextReveal.useGSAP.splitTextIntoLetters"]);
                                }
                            }["TextReveal.useGSAP.splitTextIntoLetters"]);
                            // Ensure the element maintains its display property for flex layouts
                            const computedStyle = window.getComputedStyle(element);
                            if (computedStyle.display === 'flex' || computedStyle.display === 'inline-flex') {
                                newElement.style.display = computedStyle.display;
                            }
                            return [
                                newElement
                            ];
                        }
                        return [
                            node
                        ];
                    }
                }["TextReveal.useGSAP.splitTextIntoLetters"];
                const newNodes = [];
                Array.from(element.childNodes).forEach({
                    "TextReveal.useGSAP": (node)=>{
                        const splitNodes = splitTextIntoLetters(node);
                        newNodes.push(...splitNodes);
                    }
                }["TextReveal.useGSAP"]);
                element.innerHTML = "";
                newNodes.forEach({
                    "TextReveal.useGSAP": (node)=>{
                        element.appendChild(node);
                        if (node instanceof HTMLElement) {
                            const letterElements = node.querySelectorAll(".letter");
                            if (letterElements.length > 0) {
                                letters.current.push(...Array.from(letterElements));
                            } else if (node.classList.contains("letter")) {
                                letters.current.push(node);
                            }
                        }
                    }
                }["TextReveal.useGSAP"]);
            } else {
                letters.current = existingLetters;
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(letters.current, {
                opacity: 0,
                y: -40
            });
            const animationProps = {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: {
                    amount: 0.8,
                    from: "start"
                },
                ease: "expo.out",
                delay: delay
            };
            if (animateOnScroll) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(letters.current, {
                    ...animationProps,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                        once: true
                    }
                });
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(letters.current, animationProps);
            }
        }
    }["TextReveal.useGSAP"], {
        scope: containerRef,
        dependencies: [
            animateOnScroll,
            delay
        ]
    });
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Children.count(children) === 1) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cloneElement(children, {
            ref: containerRef
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        "data-text-reveal-wrapper": "true",
        children: children
    }, void 0, false, {
        fileName: "[project]/src/lib/TextReveal.tsx",
        lineNumber: 151,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(TextReveal, "ZEXh+uvKWSr9EmmbPvWYAZHhk38=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
_c = TextReveal;
const __TURBOPACK__default__export__ = TextReveal;
var _c;
__turbopack_context__.k.register(_c, "TextReveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components-pages/Home/hooks/useImageReveal.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useImageReveal",
    ()=>useImageReveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
const useImageReveal = ({ duration = 1.2, delay = 0.8, y = -80 } = {})=>{
    _s();
    const imageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "useImageReveal.useGSAP": ()=>{
            if (!imageRef.current) return;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(imageRef.current, {
                opacity: 0,
                y: y
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(imageRef.current, {
                opacity: 1,
                y: 0,
                duration,
                delay,
                ease: "expo.out"
            });
        }
    }["useImageReveal.useGSAP"], {
        scope: imageRef
    });
    return imageRef;
};
_s(useImageReveal, "c1TAyxUg2Rl4PwtLA4bKfRrwrtc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components-pages/Home/components/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$mainPh$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$mainPh$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/images/mainPh.webp.mjs { IMAGE => "[project]/src/assets/images/mainPh.webp (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$TextReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/TextReveal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Container.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2d$pages$2f$Home$2f$hooks$2f$useImageReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components-pages/Home/hooks/useImageReveal.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants/typography.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const Hero = ()=>{
    _s();
    const imageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2d$pages$2f$Home$2f$hooks$2f$useImageReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImageReveal"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-beige -mt-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pt-0 pb-0 hidden sm:block",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$TextReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        animateOnScroll: false,
                        delay: 0.3,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: `text-dark uppercase flex justify-between items-center w-full font-manuka ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].manuka.hero} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fontWeights"].manuka.medium} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lineHeights"].custom.hero}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "SPEED"
                                }, void 0, false, {
                                    fileName: "[project]/src/components-pages/Home/components/Hero.tsx",
                                    lineNumber: 24,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "COFFEE"
                                }, void 0, false, {
                                    fileName: "[project]/src/components-pages/Home/components/Hero.tsx",
                                    lineNumber: 25,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components-pages/Home/components/Hero.tsx",
                            lineNumber: 21,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components-pages/Home/components/Hero.tsx",
                        lineNumber: 20,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components-pages/Home/components/Hero.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pb-16 md:pb-16",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "-mt-1 pt-12 md:pt-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: imageRef,
                            className: "rounded-2xl overflow-hidden shadow-lg h-[85vh] md:h-[calc(100vh-300px)] w-full max-w-md mx-auto md:max-w-none md:mx-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: typeof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$mainPh$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$mainPh$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"] === 'string' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$mainPh$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$mainPh$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$mainPh$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$mainPh$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
                                alt: "Speed Coffee mobile van with chalkboard sign",
                                className: "w-full h-full object-cover lg:object-[center_center]",
                                loading: "eager"
                            }, void 0, false, {
                                fileName: "[project]/src/components-pages/Home/components/Hero.tsx",
                                lineNumber: 36,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components-pages/Home/components/Hero.tsx",
                            lineNumber: 32,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components-pages/Home/components/Hero.tsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components-pages/Home/components/Hero.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components-pages/Home/components/Hero.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components-pages/Home/components/Hero.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Hero, "f2SylVYnbY5RAcbrHiVeDLzOQrM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2d$pages$2f$Home$2f$hooks$2f$useImageReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImageReveal"]
    ];
});
_c = Hero;
const __TURBOPACK__default__export__ = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/TextRevealLines.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
const TextRevealLines = ({ children, animateOnScroll = true, delay = 0 })=>{
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lines = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const lastWidth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "TextRevealLines.useGSAP": ()=>{
            if (!containerRef.current || !(containerRef.current instanceof Element)) return;
            const element = containerRef.current;
            let tween = null;
            const createLines = {
                "TextRevealLines.useGSAP.createLines": ()=>{
                    if (!element || !(element instanceof Element)) return [];
                    const containerWidth = element.offsetWidth;
                    if (!containerWidth) return [];
                    const lineSpans = [];
                    const segments = [];
                    // Collect text segments with their active inline classes (e.g. spans).
                    // Important: ignore our own wrappers so we can rebuild on resize / layout changes.
                    const collectSegments = {
                        "TextRevealLines.useGSAP.createLines.collectSegments": (node, activeClasses = [])=>{
                            if (node.nodeType === Node.TEXT_NODE) {
                                const text = node.textContent || "";
                                if (text) {
                                    segments.push({
                                        text,
                                        classes: activeClasses.join(" ")
                                    });
                                }
                                return;
                            }
                            if (node.nodeType !== Node.ELEMENT_NODE) return;
                            const el = node;
                            const newActive = [
                                ...activeClasses
                            ];
                            const isInlineStyleCarrier = el.tagName === "SPAN" || el.tagName === "STRONG" || el.tagName === "EM" || el.tagName === "B" || el.tagName === "I";
                            const isInternalLineWrapper = el.tagName === "SPAN" && el.classList.contains("text-reveal-line");
                            if (isInlineStyleCarrier && !isInternalLineWrapper) {
                                if (el.className) newActive.push(el.className);
                            }
                            Array.from(el.childNodes).forEach({
                                "TextRevealLines.useGSAP.createLines.collectSegments": (child)=>collectSegments(child, newActive)
                            }["TextRevealLines.useGSAP.createLines.collectSegments"]);
                        }
                    }["TextRevealLines.useGSAP.createLines.collectSegments"];
                    Array.from(element.childNodes).forEach({
                        "TextRevealLines.useGSAP.createLines": (child)=>collectSegments(child)
                    }["TextRevealLines.useGSAP.createLines"]);
                    const units = [];
                    // Split segments into word/space units so we can rebuild lines with styling
                    segments.forEach({
                        "TextRevealLines.useGSAP.createLines": (seg)=>{
                            const parts = seg.text.split(/(\s+)/);
                            parts.forEach({
                                "TextRevealLines.useGSAP.createLines": (part)=>{
                                    if (!part) return;
                                    units.push({
                                        text: part,
                                        classes: seg.classes
                                    });
                                }
                            }["TextRevealLines.useGSAP.createLines"]);
                        }
                    }["TextRevealLines.useGSAP.createLines"]);
                    const tempDiv = document.createElement("div");
                    const computed = window.getComputedStyle(element);
                    tempDiv.style.cssText = `
          position: absolute;
          visibility: hidden;
          white-space: nowrap;
          font-size: ${computed.fontSize};
          font-family: ${computed.fontFamily};
          font-weight: ${computed.fontWeight};
          letter-spacing: ${computed.letterSpacing};
        `;
                    document.body.appendChild(tempDiv);
                    const buildHTML = {
                        "TextRevealLines.useGSAP.createLines.buildHTML": (lineUnits)=>lineUnits.map({
                                "TextRevealLines.useGSAP.createLines.buildHTML": (unit)=>{
                                    if (unit.text.trim() === "") {
                                        // Preserve whitespace as-is
                                        return unit.text;
                                    }
                                    const escaped = unit.text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
                                    if (unit.classes) {
                                        return `<span class="${unit.classes}">${escaped}</span>`;
                                    }
                                    return escaped;
                                }
                            }["TextRevealLines.useGSAP.createLines.buildHTML"]).join("")
                    }["TextRevealLines.useGSAP.createLines.buildHTML"];
                    element.innerHTML = "";
                    let currentUnits = [];
                    units.forEach({
                        "TextRevealLines.useGSAP.createLines": (unit, index)=>{
                            const testUnits = [
                                ...currentUnits,
                                unit
                            ];
                            tempDiv.innerHTML = buildHTML(testUnits);
                            const testWidth = tempDiv.offsetWidth;
                            if (testWidth > containerWidth && currentUnits.length > 0) {
                                const lineContainer = document.createElement("span");
                                lineContainer.className = "text-reveal-line";
                                lineContainer.style.display = "block";
                                lineContainer.style.overflow = "hidden";
                                lineContainer.style.position = "relative";
                                const lineInner = document.createElement("span");
                                lineInner.style.display = "inline-block";
                                lineInner.style.width = "100%";
                                lineInner.innerHTML = buildHTML(currentUnits);
                                lineContainer.appendChild(lineInner);
                                element.appendChild(lineContainer);
                                lineSpans.push(lineInner);
                                currentUnits = [
                                    unit
                                ];
                            } else {
                                currentUnits = testUnits;
                            }
                            if (index === units.length - 1 && currentUnits.length > 0) {
                                const lineContainer = document.createElement("span");
                                lineContainer.className = "text-reveal-line";
                                lineContainer.style.display = "block";
                                lineContainer.style.overflow = "hidden";
                                lineContainer.style.position = "relative";
                                const lineInner = document.createElement("span");
                                lineInner.style.display = "inline-block";
                                lineInner.style.width = "100%";
                                lineInner.innerHTML = buildHTML(currentUnits);
                                lineContainer.appendChild(lineInner);
                                element.appendChild(lineContainer);
                                lineSpans.push(lineInner);
                            }
                        }
                    }["TextRevealLines.useGSAP.createLines"]);
                    document.body.removeChild(tempDiv);
                    return lineSpans;
                }
            }["TextRevealLines.useGSAP.createLines"];
            const applyAnimation = {
                "TextRevealLines.useGSAP.applyAnimation": ()=>{
                    lines.current.forEach({
                        "TextRevealLines.useGSAP.applyAnimation": (line)=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(line, {
                                y: "100%"
                            });
                        }
                    }["TextRevealLines.useGSAP.applyAnimation"]);
                    const animationProps = {
                        y: "0%",
                        duration: 0.8,
                        stagger: {
                            amount: 0.4,
                            from: "start"
                        },
                        ease: "expo.out",
                        delay: delay
                    };
                    if (tween) {
                        tween.scrollTrigger?.kill();
                        tween.kill();
                        tween = null;
                    }
                    if (animateOnScroll) {
                        tween = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(lines.current, {
                            ...animationProps,
                            scrollTrigger: {
                                trigger: containerRef.current,
                                start: "top 80%",
                                once: true
                            }
                        });
                    } else {
                        tween = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(lines.current, animationProps);
                    }
                }
            }["TextRevealLines.useGSAP.applyAnimation"];
            const rebuild = {
                "TextRevealLines.useGSAP.rebuild": ()=>{
                    if (!element || !(element instanceof Element)) return;
                    const currentWidth = element.offsetWidth;
                    if (!currentWidth) return;
                    // Avoid thrashing; only rebuild when width changes meaningfully.
                    if (Math.abs(currentWidth - lastWidth.current) <= 1) return;
                    lastWidth.current = currentWidth;
                    lines.current = createLines();
                    applyAnimation();
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].refresh();
                }
            }["TextRevealLines.useGSAP.rebuild"];
            // Initial build (next frame, so layout is settled)
            requestAnimationFrame({
                "TextRevealLines.useGSAP": ()=>{
                    // Force first build even if lastWidth starts at 0
                    lastWidth.current = 0;
                    rebuild();
                }
            }["TextRevealLines.useGSAP"]);
            // Rebuild after fonts are ready (common cause of “looks fine then refresh breaks”)
            const fontsReady = document.fonts?.ready;
            fontsReady?.then({
                "TextRevealLines.useGSAP": ()=>rebuild()
            }["TextRevealLines.useGSAP"]).catch({
                "TextRevealLines.useGSAP": ()=>{}
            }["TextRevealLines.useGSAP"]);
            // Rebuild on element resize (e.g., responsive layout / container changes)
            const ro = typeof ResizeObserver !== "undefined" && element instanceof Element ? new ResizeObserver({
                "TextRevealLines.useGSAP": ()=>rebuild()
            }["TextRevealLines.useGSAP"]) : null;
            if (ro && element instanceof Element) {
                ro.observe(element);
            }
            return ({
                "TextRevealLines.useGSAP": ()=>{
                    ro?.disconnect();
                    if (tween) {
                        tween.scrollTrigger?.kill();
                        tween.kill();
                    }
                }
            })["TextRevealLines.useGSAP"];
        }
    }["TextRevealLines.useGSAP"], {
        scope: containerRef,
        dependencies: [
            animateOnScroll,
            delay
        ]
    });
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Children.count(children) === 1) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cloneElement(children, {
            ref: containerRef
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        "data-text-reveal-lines-wrapper": "true",
        children: children
    }, void 0, false, {
        fileName: "[project]/src/lib/TextRevealLines.tsx",
        lineNumber: 272,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(TextRevealLines, "RlpQYS15m1oPDB+Ks9uFahw61R4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
_c = TextRevealLines;
const __TURBOPACK__default__export__ = TextRevealLines;
var _c;
__turbopack_context__.k.register(_c, "TextRevealLines");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components-pages/Home/components/HeroIntro.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$TextRevealLines$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/TextRevealLines.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants/typography.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const HeroIntro = ()=>{
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const textContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Force a resize event after mount to ensure TextRevealLines measures correctly
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroIntro.useEffect": ()=>{
            const timer = setTimeout({
                "HeroIntro.useEffect.timer": ()=>{
                    if (textContainerRef.current) {
                        window.dispatchEvent(new Event('resize'));
                    }
                }
            }["HeroIntro.useEffect.timer"], 100);
            return ({
                "HeroIntro.useEffect": ()=>clearTimeout(timer)
            })["HeroIntro.useEffect"];
        }
    }["HeroIntro.useEffect"], []);
    return(// NOTE: use min-height (not fixed height) so font-load reflow can’t push
    // “DISCOVER OUR SPEED” outside the section on some refreshes.
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-beige min-h-[70vh] px-0 md:px-[130px] py-12 md:py-[100px] -mx-4 sm:-mx-6 lg:-mx-8 md:mx-0",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-full px-4 sm:px-6 lg:px-8 md:px-0 mx-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-[70vh] flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex items-center justify-center py-6 md:py-10 w-full",
                        style: {
                            minWidth: 0,
                            width: '100%'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: textContainerRef,
                            className: "text-center w-full",
                            style: {
                                width: '100%',
                                maxWidth: '100%',
                                minWidth: 0,
                                flexBasis: '100%',
                                flexShrink: 1,
                                flexGrow: 0
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$TextRevealLines$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `hero-intro-text text-5xl sm:text-4xl md:text-[64px] lg:text-[104px] font-manuka ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fontWeights"].manuka.bold} text-dark ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lineHeights"].custom.heroIntro}`,
                                    style: {
                                        width: '100%',
                                        maxWidth: '100%',
                                        minWidth: 0,
                                        boxSizing: 'border-box',
                                        display: 'block',
                                        margin: 0,
                                        padding: 0
                                    },
                                    children: [
                                        t("heroIntro.text"),
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-accent font-bold",
                                            children: t("heroIntro.highlight")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components-pages/Home/components/HeroIntro.tsx",
                                            lineNumber: 57,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " ",
                                        t("heroIntro.textEnd")
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components-pages/Home/components/HeroIntro.tsx",
                                    lineNumber: 44,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components-pages/Home/components/HeroIntro.tsx",
                                lineNumber: 43,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components-pages/Home/components/HeroIntro.tsx",
                            lineNumber: 31,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components-pages/Home/components/HeroIntro.tsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center pb-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#about",
                            className: `inline-block text-4xl sm:text-4xl md:text-4xl lg:text-[64px] font-manuka ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fontWeights"].manuka.bold} text-dark hover:text-white transition-colors`,
                            children: t("hero.discover")
                        }, void 0, false, {
                            fileName: "[project]/src/components-pages/Home/components/HeroIntro.tsx",
                            lineNumber: 67,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components-pages/Home/components/HeroIntro.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components-pages/Home/components/HeroIntro.tsx",
                lineNumber: 29,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components-pages/Home/components/HeroIntro.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components-pages/Home/components/HeroIntro.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
};
_s(HeroIntro, "aMvlLw8zGPAJsJ5dXcYRZ1tRWDc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = HeroIntro;
const __TURBOPACK__default__export__ = HeroIntro;
var _c;
__turbopack_context__.k.register(_c, "HeroIntro");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/assets/images/openSc.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/openSc.7d8bfeda.png");}),
"[project]/src/assets/images/openSc.png.mjs { IMAGE => \"[project]/src/assets/images/openSc.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$openSc$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/images/openSc.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$openSc$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 826,
    height: 609,
    blurWidth: 8,
    blurHeight: 6,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAA0UlEQVR42gHGADn/AOO+kf7uz6r/4sem/6eJbP+Sc1n/oYBl/9i2l//Ep4T+ANq7nf/t1rD/0bCG/4BXOf+LbFP/nXxk/7iSb/+qf1//AJmFdP+9pov/mnNU/3BOOf+IZU3/dVpK/2xQPf98Ujb/AJCCgv+ej5P/imdc/4BjX/+BYEz/cl5O/1xJOf9TQzT/AGtfW/9vX1f/SDk0/yofHv9sXEr/f3Fd/3BZRf9oU0P/AIN5df59cWr/YlpM/zkxJv9dUDz/blxG/2ROO/9hTT7+cU1xDzcYXXgAAAAASUVORK5CYII="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components-pages/Home/components/About.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$TextRevealLines$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/TextRevealLines.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Container.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$openSc$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$openSc$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/images/openSc.png.mjs { IMAGE => "[project]/src/assets/images/openSc.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants/typography.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const About = ()=>{
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const imgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "About.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "About.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                }
            }["About.useEffect"], {
                threshold: 0.2
            });
            if (imgRef.current) {
                observer.observe(imgRef.current);
            }
            return ({
                "About.useEffect": ()=>{
                    if (imgRef.current) {
                        observer.unobserve(imgRef.current);
                    }
                }
            })["About.useEffect"];
        }
    }["About.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "about",
        className: "py-8 md:py-16 bg-beige",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-2 gap-6 md:gap-12 items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-4xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].agright.sectionHeading} font-agright ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fontWeights"].agright.normal} text-dark ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lineHeights"].custom.sectionHeading} mb-4 md:mb-6`,
                                style: {
                                    lineHeight: 1
                                },
                                children: t("about.title")
                            }, void 0, false, {
                                fileName: "[project]/src/components-pages/Home/components/About.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$TextRevealLines$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].manrope.body} font-manrope ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fontWeights"].manrope.normal} text-dark ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lineHeights"].custom.body}`,
                                    style: {
                                        fontFamily: "Manrope, sans-serif",
                                        fontWeight: 400,
                                        lineHeight: 1.0
                                    },
                                    children: t("about.description")
                                }, void 0, false, {
                                    fileName: "[project]/src/components-pages/Home/components/About.tsx",
                                    lineNumber: 51,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components-pages/Home/components/About.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components-pages/Home/components/About.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: imgRef,
                        className: `rounded-lg overflow-hidden shadow-lg max-w-4xl md:ml-auto transition-all duration-[600ms] ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: typeof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$openSc$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$openSc$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"] === 'string' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$openSc$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$openSc$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$openSc$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$openSc$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
                            alt: "Barista holding coffee cups and pastries",
                            className: "w-full h-auto object-cover",
                            loading: "lazy",
                            decoding: "async"
                        }, void 0, false, {
                            fileName: "[project]/src/components-pages/Home/components/About.tsx",
                            lineNumber: 72,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components-pages/Home/components/About.tsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components-pages/Home/components/About.tsx",
                lineNumber: 42,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components-pages/Home/components/About.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components-pages/Home/components/About.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(About, "pXoL8j5SZxhAj8L548i9SThuVm0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = About;
const __TURBOPACK__default__export__ = About;
var _c;
__turbopack_context__.k.register(_c, "About");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components-pages/Home/utils/locations.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "locations",
    ()=>locations
]);
const locations = [
    "Brno, Kounicova 271/13"
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/assets/images/twoImgs.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/twoImgs.499e5046.webp");}),
"[project]/src/assets/images/twoImgs.webp.mjs { IMAGE => \"[project]/src/assets/images/twoImgs.webp (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$twoImgs$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/images/twoImgs.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$twoImgs$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 880,
    height: 820,
    blurWidth: 8,
    blurHeight: 7,
    blurDataURL: "data:image/webp;base64,UklGRkQBAABXRUJQVlA4TDcBAAAvB4ABEM1VICICHgiADQIAAIB/LyIQOCIi5FCEAACAwwUAAAAAAAAAAAAAAAAAAAABQgjBxPmf35cAAAA8ELQjBAAAgPN/W/9aBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBcW5280CAilgBAADO/5Xq77bDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGCfU708EAIUBgAAgPO/fwAAAAAgAAAwAAAAwAIgAAAAQAEwaAMAMAAAAAAAAAAAAMinvr4KIFypzo8j72ffMRgoBpxzxzMfIRfspTVrC9qnwT4Eb39QBgSC2q3Etblt0/Hq8o/O9JpIDJ4GR8YV/7T3yeZBFkoeIOBDRG/Oi1WJUUYNcEpOtZqoUG5TCXiqe/n8jQvUKzN/P39n/jf1vuR3FQA="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components-pages/Home/components/Locations.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Container.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2d$pages$2f$Home$2f$utils$2f$locations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components-pages/Home/utils/locations.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$twoImgs$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$twoImgs$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/images/twoImgs.webp.mjs { IMAGE => "[project]/src/assets/images/twoImgs.webp (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$TextRevealLines$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/TextRevealLines.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants/typography.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const Locations = ()=>{
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "events",
        className: "py-8 md:py-16 bg-beige",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-2 gap-6 md:gap-12 items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto md:mx-0 order-2 md:order-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].img, {
                            src: typeof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$twoImgs$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$twoImgs$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"] === 'string' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$twoImgs$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$twoImgs$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$twoImgs$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$twoImgs$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
                            alt: "Speed Coffee sign and drinks",
                            className: "w-full h-auto object-cover",
                            loading: "lazy",
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true,
                                amount: 0.2
                            },
                            transition: {
                                duration: 0.6,
                                ease: "easeOut"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components-pages/Home/components/Locations.tsx",
                            lineNumber: 22,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components-pages/Home/components/Locations.tsx",
                        lineNumber: 21,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center max-w-2xl mx-auto order-1 md:order-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].agright.sectionHeading} font-agright ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fontWeights"].agright.normal} text-dark ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lineHeights"].custom.sectionHeading} mb-4 md:mb-6`,
                                style: {
                                    lineHeight: 1
                                },
                                children: t("locations.title")
                            }, void 0, false, {
                                fileName: "[project]/src/components-pages/Home/components/Locations.tsx",
                                lineNumber: 35,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6 md:space-y-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$TextRevealLines$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].manrope.body} font-manrope ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fontWeights"].manrope.normal} text-dark`,
                                            style: {
                                                fontFamily: "Manrope, sans-serif",
                                                fontWeight: 400,
                                                lineHeight: 1.0
                                            },
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2d$pages$2f$Home$2f$utils$2f$locations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["locations"][0]
                                        }, void 0, false, {
                                            fileName: "[project]/src/components-pages/Home/components/Locations.tsx",
                                            lineNumber: 43,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components-pages/Home/components/Locations.tsx",
                                        lineNumber: 42,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-6 md:mt-8 pt-6 md:pt-8 border-t border-dark/10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$TextRevealLines$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                delay: 0.1,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].manrope.body} font-manrope ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fontWeights"].manrope.bold} text-dark uppercase mb-6 md:mb-8 tracking-wider`,
                                                    style: {
                                                        fontFamily: "Manrope, sans-serif",
                                                        fontWeight: 700,
                                                        lineHeight: 1.0,
                                                        letterSpacing: "0.1em"
                                                    },
                                                    children: t("locations.openingHours")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components-pages/Home/components/Locations.tsx",
                                                    lineNumber: 57,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components-pages/Home/components/Locations.tsx",
                                                lineNumber: 56,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-5 md:space-y-6 flex flex-col items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        className: "inline-flex flex-col items-center justify-center gap-3 md:gap-8 pb-5 md:pb-6 border-b border-dark/10 w-fit",
                                                        initial: {
                                                            opacity: 0,
                                                            y: 10
                                                        },
                                                        whileInView: {
                                                            opacity: 1,
                                                            y: 0
                                                        },
                                                        viewport: {
                                                            once: true
                                                        },
                                                        transition: {
                                                            duration: 0.6,
                                                            delay: 0.15,
                                                            ease: "easeOut"
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$TextRevealLines$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            delay: 0.15,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-col items-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].manrope.body} font-manrope ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fontWeights"].manrope.bold} text-dark uppercase tracking-wide mb-1`,
                                                                        style: {
                                                                            fontFamily: "Manrope, sans-serif",
                                                                            fontWeight: 700,
                                                                            lineHeight: 1.0,
                                                                            letterSpacing: "0.08em",
                                                                            fontSize: "0.875rem"
                                                                        },
                                                                        children: t("locations.weekdays")
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components-pages/Home/components/Locations.tsx",
                                                                        lineNumber: 79,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].manrope.body} font-manrope ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fontWeights"].manrope.normal} text-dark`,
                                                                        style: {
                                                                            fontFamily: "Manrope, sans-serif",
                                                                            fontWeight: 400,
                                                                            lineHeight: 1.2,
                                                                            letterSpacing: "0.02em",
                                                                            fontSize: "1rem"
                                                                        },
                                                                        children: t("locations.weekdaysHours")
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components-pages/Home/components/Locations.tsx",
                                                                        lineNumber: 91,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components-pages/Home/components/Locations.tsx",
                                                                lineNumber: 78,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components-pages/Home/components/Locations.tsx",
                                                            lineNumber: 77,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components-pages/Home/components/Locations.tsx",
                                                        lineNumber: 70,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        className: "inline-flex flex-col items-center justify-center gap-3 md:gap-8 w-fit",
                                                        initial: {
                                                            opacity: 0,
                                                            y: 10
                                                        },
                                                        whileInView: {
                                                            opacity: 1,
                                                            y: 0
                                                        },
                                                        viewport: {
                                                            once: true
                                                        },
                                                        transition: {
                                                            duration: 0.6,
                                                            delay: 0.25,
                                                            ease: "easeOut"
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$TextRevealLines$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            delay: 0.2,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-col items-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].manrope.body} font-manrope ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fontWeights"].manrope.bold} text-dark uppercase tracking-wide mb-1`,
                                                                        style: {
                                                                            fontFamily: "Manrope, sans-serif",
                                                                            fontWeight: 700,
                                                                            lineHeight: 1.0,
                                                                            letterSpacing: "0.08em",
                                                                            fontSize: "0.875rem"
                                                                        },
                                                                        children: t("locations.weekends")
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components-pages/Home/components/Locations.tsx",
                                                                        lineNumber: 115,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].manrope.body} font-manrope ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fontWeights"].manrope.normal} text-dark`,
                                                                        style: {
                                                                            fontFamily: "Manrope, sans-serif",
                                                                            fontWeight: 400,
                                                                            lineHeight: 1.2,
                                                                            letterSpacing: "0.02em",
                                                                            fontSize: "1rem"
                                                                        },
                                                                        children: t("locations.weekendsHours")
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components-pages/Home/components/Locations.tsx",
                                                                        lineNumber: 127,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components-pages/Home/components/Locations.tsx",
                                                                lineNumber: 114,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components-pages/Home/components/Locations.tsx",
                                                            lineNumber: 113,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components-pages/Home/components/Locations.tsx",
                                                        lineNumber: 106,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components-pages/Home/components/Locations.tsx",
                                                lineNumber: 69,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components-pages/Home/components/Locations.tsx",
                                        lineNumber: 55,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components-pages/Home/components/Locations.tsx",
                                lineNumber: 41,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components-pages/Home/components/Locations.tsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components-pages/Home/components/Locations.tsx",
                lineNumber: 20,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components-pages/Home/components/Locations.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components-pages/Home/components/Locations.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Locations, "ot2YhC7pP10gRrIouBKIa40vomw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = Locations;
const __TURBOPACK__default__export__ = Locations;
var _c;
__turbopack_context__.k.register(_c, "Locations");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/assets/images/coffeeVan.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/coffeeVan.7ddcee05.png");}),
"[project]/src/assets/images/coffeeVan.png.mjs { IMAGE => \"[project]/src/assets/images/coffeeVan.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$coffeeVan$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/images/coffeeVan.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$coffeeVan$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1920,
    height: 1282,
    blurWidth: 8,
    blurHeight: 5,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAoElEQVR42g3DWwvBYACA4e+PUBQRyhxijsUaxlDkFBkXlCVlTQ6FiVZu+McvF4+oZoJspwqONef7svk8D1z2a5bjFo45QAzUFI+NjmsbnHcL3neLnlZi1pQ5GXXERC/SqSbIJwN01SxXc8jR0BjKftZaHDFS0/SUNEouRjLq47Zq4Jo6KzXMRPYi2vkw7VIc/a8s+elXJGq5CN1CiLrk4QdE603FjscowQAAAABJRU5ErkJggg=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components-pages/Home/components/EventBooking.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Container.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$TextRevealLines$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/TextRevealLines.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$coffeeVan$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$coffeeVan$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/images/coffeeVan.png.mjs { IMAGE => "[project]/src/assets/images/coffeeVan.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants/typography.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const EventBooking = ()=>{
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const imgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EventBooking.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "EventBooking.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                }
            }["EventBooking.useEffect"], {
                threshold: 0.2
            });
            if (imgRef.current) {
                observer.observe(imgRef.current);
            }
            return ({
                "EventBooking.useEffect": ()=>{
                    if (imgRef.current) {
                        observer.unobserve(imgRef.current);
                    }
                }
            })["EventBooking.useEffect"];
        }
    }["EventBooking.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "reserve",
        className: "py-8 md:py-16 bg-beige",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-2 gap-6 md:gap-12 items-center mb-8 md:mb-24",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-4xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].agright.sectionHeading} font-agright ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fontWeights"].agright.normal} text-dark ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lineHeights"].custom.sectionHeading} mb-4 md:mb-6`,
                                    style: {
                                        lineHeight: 1
                                    },
                                    children: t("event.title")
                                }, void 0, false, {
                                    fileName: "[project]/src/components-pages/Home/components/EventBooking.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$TextRevealLines$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].manrope.body} font-manrope ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fontWeights"].manrope.normal} text-dark ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lineHeights"].custom.bodyCompact} uppercase`,
                                                style: {
                                                    fontFamily: "Manrope, sans-serif",
                                                    fontWeight: 400,
                                                    lineHeight: 1.2
                                                },
                                                children: t("event.description1")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components-pages/Home/components/EventBooking.tsx",
                                                lineNumber: 52,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].manrope.body} font-manrope ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fontWeights"].manrope.normal} text-dark ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lineHeights"].custom.bodyCompact} uppercase`,
                                                style: {
                                                    fontFamily: "Manrope, sans-serif",
                                                    fontWeight: 400,
                                                    lineHeight: 1.2
                                                },
                                                children: t("event.description2")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components-pages/Home/components/EventBooking.tsx",
                                                lineNumber: 62,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/src/components-pages/Home/components/EventBooking.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components-pages/Home/components/EventBooking.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: imgRef,
                            className: `rounded-lg overflow-hidden shadow-lg max-w-4xl md:ml-auto transition-all duration-[600ms] ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: typeof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$coffeeVan$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$coffeeVan$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"] === 'string' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$coffeeVan$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$coffeeVan$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$coffeeVan$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$coffeeVan$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
                                alt: "Outdoor event with coffee van and people",
                                className: "w-full h-auto object-cover",
                                loading: "lazy",
                                decoding: "async"
                            }, void 0, false, {
                                fileName: "[project]/src/components-pages/Home/components/EventBooking.tsx",
                                lineNumber: 84,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components-pages/Home/components/EventBooking.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components-pages/Home/components/EventBooking.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].manrope.body} font-manrope ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fontWeights"].manrope.normal} text-dark mb-4 uppercase`,
                            style: {
                                fontFamily: "Manrope, sans-serif",
                                fontWeight: 400,
                                lineHeight: 1.0
                            },
                            children: t("event.bookUs")
                        }, void 0, false, {
                            fileName: "[project]/src/components-pages/Home/components/EventBooking.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: `px-6 md:px-8 py-2 md:py-3 ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].manrope.button} border-2 border-white text-dark font-manrope ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fontWeights"].manrope.bold} rounded-3xl hover:bg-white hover:text-dark transition-colors`,
                            style: {
                                fontFamily: "Manrope, sans-serif"
                            },
                            children: t("event.here")
                        }, void 0, false, {
                            fileName: "[project]/src/components-pages/Home/components/EventBooking.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components-pages/Home/components/EventBooking.tsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components-pages/Home/components/EventBooking.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components-pages/Home/components/EventBooking.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(EventBooking, "pXoL8j5SZxhAj8L548i9SThuVm0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = EventBooking;
const __TURBOPACK__default__export__ = EventBooking;
var _c;
__turbopack_context__.k.register(_c, "EventBooking");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/assets/images/matchaSc.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/matchaSc.4d218943.webp");}),
"[project]/src/assets/images/matchaSc.webp.mjs { IMAGE => \"[project]/src/assets/images/matchaSc.webp (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$matchaSc$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/images/matchaSc.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$matchaSc$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1326,
    height: 1326,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/webp;base64,UklGRgABAABXRUJQVlA4TPMAAAAvB8ABAM1VICICHgjsDiIAAIDvFSm4AAAAAgCAAACgAAAAAAAAAAAAAAAAAACAAwBhcNCUtAil2P8OAADwQAiMEAAAAM7/VikBECCAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHlSXrDmgaDsIAAAAJz/uw1JRAASQASAAAAAAAAAAAAAAAAAAAAAAAAAAAAIFgBAFFXLd5G/9RAkrAzBFhkCyx9zL0ff/Px2VQAhlkJ+V15Pnm/eAjBUkdfoUvmuqpAR8BY2jfWy5HnQ2EDAy2Db+u8xTee67zMM/g3SG+FOUZuHBPzD/fOP7R3a0121KAEA"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/assets/images/coffeeSell.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/coffeeSell.171a7a68.png");}),
"[project]/src/assets/images/coffeeSell.png.mjs { IMAGE => \"[project]/src/assets/images/coffeeSell.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$coffeeSell$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/images/coffeeSell.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$coffeeSell$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1326,
    height: 1326,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA0UlEQVR42lWPvWrCYBSGvZyM9p5KbEqHUmmHTqV0KBZ6BV2sErRdAw6ign8gItGon2j8i1HRL/EaHhMdosM5ZzgP709MOibS6SJdgdyM8bcTvODKlUX4i4VrYlURQwv/cMD3w/Hw1iICioZONpvBtqcsndUJkO4gAsqFHKnUJ/m/f9LpX+azaWDRj4B23eDlOYmqJtA0jXxOZ+9cZGjXDO4St8TjNyiKQvLpkd2yd63w/fXB+9srD/cqeuYnULgAXLvFyKywEA1Ep8Ri1ORc3+QII7jRhCuOakYAAAAASUVORK5CYII="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components-pages/Home/components/CoffeeSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$coffeeSell$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$coffeeSell$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/images/coffeeSell.png.mjs { IMAGE => "[project]/src/assets/images/coffeeSell.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const CoffeeSection = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = _s((_, ref)=>{
    _s();
    const wrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const bgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const imageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const textRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const prefixRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cameraRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const startPxRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Mobile detection for performance optimization
    const isMobileRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(window.innerWidth < 768);
    // Cache for getBoundingClientRect on mobile
    const cachedImgBottomRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const rectCacheFrameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const clamp01 = (v)=>Math.min(1, Math.max(0, v));
    const easeOut = (t)=>1 - Math.pow(1 - t, 2);
    const lerp = (a, b, t)=>a + (b - a) * t;
    const reset = ()=>{
        startPxRef.current = null;
        wrapperRef.current.style.transform = "translate3d(0,0,0)";
        bgRef.current.style.transform = "translate3d(0,100%,0)";
        imageRef.current.style.opacity = "0";
        textRef.current.style.opacity = "0";
        prefixRef.current.style.opacity = "0";
        prefixRef.current.style.display = "block";
        cameraRef.current.style.transform = "translateX(0px) scale(1)";
    };
    const update = ({ scrolledPx, vh, matchaImgBottom, sectionHeight })=>{
        if (!wrapperRef.current || !bgRef.current || !imageRef.current || !textRef.current || !prefixRef.current || !cameraRef.current) return;
        // Arm after Matcha exits
        if (startPxRef.current === null && matchaImgBottom <= -40) {
            startPxRef.current = scrolledPx;
        }
        if (startPxRef.current === null) return;
        const elapsed = Math.max(0, scrolledPx - startPxRef.current);
        // Phase durations for other elements
        const BG_PX = 260;
        const TEXT_PX = 220;
        // Image movement - wait for BG and TEXT, then move slowly like MatchaSection
        // Use a large scroll distance to match MatchaSection's speed
        // MatchaSection uses the full section height (520vh), so use a similar large distance
        const IMAGE_PX = Math.max(3000, sectionHeight * 0.5); // Large distance for slow movement
        const imageStartPx = BG_PX + TEXT_PX;
        const imageElapsed = Math.max(0, elapsed - imageStartPx);
        const imgT = easeOut(clamp01(imageElapsed / IMAGE_PX));
        const bgT = easeOut(clamp01(elapsed / BG_PX));
        const textT = easeOut(clamp01((elapsed - BG_PX) / TEXT_PX));
        /* ---------------- BACKGROUND ---------------- */ bgRef.current.style.transform = `translate3d(0, ${(1 - bgT) * 100}%, 0)`;
        /* ---------------- IMAGE ---------------- */ // Use EXACT same calculation as MatchaSection for image movement
        // MatchaSection: lerp(vh * 0.9, -vh * 1.25, easeOut(p))
        // Image only starts moving after BG + TEXT phases complete, then moves slowly
        const imgY = lerp(vh * 0.9, -vh * 1.25, imgT);
        // Reduce precision on mobile for better performance
        const precision = isMobileRef.current ? 0 : 2;
        imageRef.current.style.transform = `translate3d(-50%, calc(-50% + ${imgY.toFixed(precision)}px), 0)`;
        // Get image position after transform to check when it goes above viewport
        // On mobile: cache getBoundingClientRect to reduce reflows (only update every few frames)
        let imgRectBottom;
        if (isMobileRef.current && rectCacheFrameRef.current % 3 !== 0) {
            // Use cached value on mobile, estimate based on transform
            imgRectBottom = cachedImgBottomRef.current + (imgY - (cachedImgBottomRef.current - vh * 0.5));
        } else {
            const imgRect = imageRef.current.getBoundingClientRect();
            imgRectBottom = imgRect.bottom;
            cachedImgBottomRef.current = imgRectBottom;
            rectCacheFrameRef.current++;
        }
        // ZOOM phase starts when image bottom goes above viewport top (similar to MatchaSection)
        // Increased distance for slower, smoother zoom: starts at ~40px above, ends by ~400px above
        const zoomProgress = clamp01((-40 - imgRectBottom) / 360);
        // Use smoother easing for zoom (easeOut is already smooth, but we can make it even smoother)
        const zoomT = easeOut(zoomProgress);
        // Only start zoom when image bottom is above viewport top (imgRectBottom <= -40)
        // Before that, zoomT will be 0, so zoom won't happen
        const finalZoomT = imgRectBottom <= -40 ? zoomT : 0;
        // Round opacity on mobile for better performance
        imageRef.current.style.opacity = String(isMobileRef.current ? Math.round((1 - finalZoomT) * 100) / 100 : 1 - finalZoomT);
        /* ---------------- TEXT ---------------- */ textRef.current.style.opacity = String(isMobileRef.current ? Math.round(textT * 100) / 100 : textT);
        // Prefix fades out right before zoom begins (when image approaches viewport top)
        // Start fading when image bottom reaches ~20px above viewport, complete by ~40px (when zoom starts)
        const prefixFadeProgress = clamp01((-20 - imgRectBottom) / 20);
        const prefixFadeT = easeOut(prefixFadeProgress);
        prefixRef.current.style.opacity = String(isMobileRef.current ? Math.round((1 - prefixFadeT) * 100) / 100 : 1 - prefixFadeT);
        // Hide prefix when zoom starts (image above viewport)
        prefixRef.current.style.display = finalZoomT >= 1 ? "none" : "block";
        /* ---------------- CAMERA ZOOM (yamamatcha-style) ---------------- */ // Zoom only happens when image is above viewport top
        // On mobile, use larger scale to ensure full coverage and hide brown background
        const maxScale = isMobileRef.current ? 80 : 48;
        const scale = lerp(1, maxScale, finalZoomT);
        const offsetX = lerp(0, -10, finalZoomT); // only bias DURING zoom
        // Reduce precision on mobile for better performance
        cameraRef.current.style.transform = `
      translateX(${offsetX.toFixed(precision)}px)
      scale(${scale.toFixed(precision)})
    `;
        // On mobile, also scale the background to ensure it covers during zoom and hides brown background
        if (isMobileRef.current && finalZoomT > 0) {
            const bgScale = lerp(1, maxScale * 0.8, finalZoomT);
            bgRef.current.style.transform = `translate3d(0, ${(1 - bgT) * 100}%, 0) scale(${bgScale.toFixed(precision)})`;
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, {
        "CoffeeSection.useImperativeHandle": ()=>({
                update,
                reset
            })
    }["CoffeeSection.useImperativeHandle"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: wrapperRef,
        style: {
            position: "fixed",
            inset: 0,
            pointerEvents: "none",
            zIndex: 30
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: bgRef,
                style: {
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "#BEA791",
                    transform: "translate3d(0,100%,0)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components-pages/Home/components/CoffeeSection.tsx",
                lineNumber: 181,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                ref: textRef,
                style: {
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    whiteSpace: "nowrap",
                    textAlign: "center",
                    opacity: 0
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        ref: prefixRef,
                        style: {
                            fontFamily: "Agright, sans-serif",
                            fontSize: "min(6vw, 60px)",
                            color: "#EAE1CF",
                            display: "block",
                            marginBottom: "-0.2em"
                        },
                        children: "Or sticking with"
                    }, void 0, false, {
                        fileName: "[project]/src/components-pages/Home/components/CoffeeSection.tsx",
                        lineNumber: 203,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        ref: cameraRef,
                        style: {
                            display: "inline-block",
                            transformOrigin: "58% 50%",
                            willChange: "transform"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontSize: "min(26vw, 520px)",
                                letterSpacing: "0.04em",
                                lineHeight: 0.9,
                                color: "#EAE1CF",
                                display: "inline-block"
                            },
                            children: "COFFEE"
                        }, void 0, false, {
                            fileName: "[project]/src/components-pages/Home/components/CoffeeSection.tsx",
                            lineNumber: 225,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components-pages/Home/components/CoffeeSection.tsx",
                        lineNumber: 217,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components-pages/Home/components/CoffeeSection.tsx",
                lineNumber: 191,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                ref: imageRef,
                src: typeof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$coffeeSell$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$coffeeSell$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"] === 'string' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$coffeeSell$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$coffeeSell$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$coffeeSell$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$coffeeSell$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
                alt: "",
                "aria-hidden": true,
                className: "w-[min(280px,70vw)] md:w-[min(420px,95vw)]",
                style: {
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    borderRadius: 20,
                    boxShadow: "0 10px 30px rgba(0,0,0,.18)",
                    opacity: 0
                }
            }, void 0, false, {
                fileName: "[project]/src/components-pages/Home/components/CoffeeSection.tsx",
                lineNumber: 239,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components-pages/Home/components/CoffeeSection.tsx",
        lineNumber: 172,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
}, "OGWXYFDyAzL25Jj5emwISNYJ88U=")), "OGWXYFDyAzL25Jj5emwISNYJ88U=");
_c1 = CoffeeSection;
CoffeeSection.displayName = "CoffeeSection";
const __TURBOPACK__default__export__ = CoffeeSection;
var _c, _c1;
__turbopack_context__.k.register(_c, "CoffeeSection$forwardRef");
__turbopack_context__.k.register(_c1, "CoffeeSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components-pages/Home/components/MatchaSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Container.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$matchaSc$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$matchaSc$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/images/matchaSc.webp.mjs { IMAGE => "[project]/src/assets/images/matchaSc.webp (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2d$pages$2f$Home$2f$components$2f$CoffeeSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components-pages/Home/components/CoffeeSection.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const MatchaSection = ()=>{
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const bgImageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const textRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const coffeeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MatchaSection.useEffect": ()=>{
            const section = sectionRef.current;
            const bgImage = bgImageRef.current;
            const text = textRef.current;
            if (!section || !bgImage || !text) return;
            let rafId = 0;
            // Mobile detection for performance optimization
            const isMobile = window.innerWidth < 768;
            // Cache for getBoundingClientRect on mobile to reduce reflows
            let cachedImgBottom = 0;
            let cachedRectHeight = 0;
            let rectCacheFrame = 0;
            // Ease-out only (per spec); no spring/bounce.
            const easeOut = {
                "MatchaSection.useEffect.easeOut": (t)=>1 - Math.pow(1 - t, 2)
            }["MatchaSection.useEffect.easeOut"];
            const clamp01 = {
                "MatchaSection.useEffect.clamp01": (v)=>Math.min(1, Math.max(0, v))
            }["MatchaSection.useEffect.clamp01"];
            const lerp = {
                "MatchaSection.useEffect.lerp": (a, b, t)=>a + (b - a) * t
            }["MatchaSection.useEffect.lerp"];
            const update = {
                "MatchaSection.useEffect.update": ()=>{
                    const vh = window.innerHeight || 1;
                    const rect = section.getBoundingClientRect();
                    const scrollable = Math.max(1, rect.height - vh);
                    const scrolled = -rect.top;
                    /**
       * Scroll progress across this section:
       * - 0 when section top hits viewport top
       * - 1 when section bottom hits viewport bottom
       */ const p = clamp01(scrolled / scrollable);
                    // Background image parallax: moves bottom -> top while the section background color stays static.
                    // No opacity changes; subtle motion only.
                    // Start lower, then travel upward (per request).
                    // Travel far enough that the image fully exits the top of the viewport.
                    const bgTranslateY = lerp(vh * 0.9, -vh * 1.25, easeOut(p));
                    // Reduce precision on mobile for better performance
                    const precision = isMobile ? 0 : 2;
                    bgImage.style.transform = `translate3d(-50%, calc(-50% + ${bgTranslateY.toFixed(precision)}px), 0)`;
                    // 4️⃣ TEXT APPEARANCE: only after scroll begins.
                    // Show sooner: start essentially immediately as the user begins to scroll this section.
                    const textT = clamp01((p - 0.0) / 0.18);
                    const textOpacityIn = lerp(0, 1, easeOut(textT));
                    const textY = lerp(20, 0, easeOut(textT));
                    // Fade OUT once the image is out of sight (top). We use the image's actual rect (post-transform).
                    // On mobile: cache getBoundingClientRect to reduce reflows (only update every few frames)
                    let imgRectBottom;
                    if (isMobile && rectCacheFrame % 3 !== 0) {
                        // Use cached value on mobile, only update every 3rd frame
                        imgRectBottom = cachedImgBottom + (bgTranslateY - (cachedImgBottom - vh * 0.5));
                    } else {
                        const imgRect = bgImage.getBoundingClientRect();
                        imgRectBottom = imgRect.bottom;
                        cachedImgBottom = imgRectBottom;
                        cachedRectHeight = rect.height;
                        rectCacheFrame++;
                    }
                    const outT = clamp01((-40 - imgRectBottom) / 120);
                    const textOpacityOut = 1 - easeOut(outT);
                    text.style.opacity = String(Math.round(textOpacityIn * textOpacityOut * 100) / 100);
                    // Keep the heading centered (base -50%) while animating only the extra Y offset.
                    text.style.transform = `translate3d(-50%, calc(-50% + ${textY.toFixed(precision)}px), 0)`;
                    // Coffee stage is handled by CoffeeSection (separate file).
                    coffeeRef.current?.update({
                        scrolledPx: scrolled,
                        vh,
                        matchaImgBottom: imgRectBottom,
                        sectionHeight: cachedRectHeight || rect.height
                    });
                    rafId = 0;
                }
            }["MatchaSection.useEffect.update"];
            // Full-bleed WITHOUT viewport units:
            // Instead of width:100vw/dvw (which can cause 1–2px overflow), we “cancel out”
            // the global `#top` padding by applying equal negative margins on this section.
            const syncFullBleedToRootPadding = {
                "MatchaSection.useEffect.syncFullBleedToRootPadding": ()=>{
                    const rootEl = document.getElementById("top");
                    if (!rootEl) return;
                    const cs = window.getComputedStyle(rootEl);
                    const pl = Number.parseFloat(cs.paddingLeft) || 0;
                    const pr = Number.parseFloat(cs.paddingRight) || 0;
                    section.style.marginLeft = `${-pl}px`;
                    section.style.marginRight = `${-pr}px`;
                }
            }["MatchaSection.useEffect.syncFullBleedToRootPadding"];
            const onScroll = {
                "MatchaSection.useEffect.onScroll": ()=>{
                    if (rafId) return;
                    rafId = window.requestAnimationFrame(update);
                }
            }["MatchaSection.useEffect.onScroll"];
            const onResize = {
                "MatchaSection.useEffect.onResize": ()=>{
                    syncFullBleedToRootPadding();
                    onScroll();
                }
            }["MatchaSection.useEffect.onResize"];
            // Initial paint
            syncFullBleedToRootPadding();
            update();
            window.addEventListener("scroll", onScroll, {
                passive: true
            });
            window.addEventListener("resize", onResize);
            return ({
                "MatchaSection.useEffect": ()=>{
                    window.removeEventListener("scroll", onScroll);
                    window.removeEventListener("resize", onResize);
                    if (rafId) window.cancelAnimationFrame(rafId);
                    // Cleanup inline margins
                    section.style.marginLeft = "";
                    section.style.marginRight = "";
                    coffeeRef.current?.reset();
                }
            })["MatchaSection.useEffect"];
        }
    }["MatchaSection.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "shop",
        ref: sectionRef,
        className: "py-16 bg-matcha",
        // Provide scroll room for the "scene" without global CSS or extra wrappers.
        style: {
            // More runway so you can add another image underneath and keep the scroll feeling long/smooth.
            // Increased height to wait more time before ProductsSection appears
            minHeight: "700vh"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: "text-center",
            // Sticky viewport-centered stage (respects the existing py-16 via top/height math).
            style: {
                position: "sticky",
                top: "4rem",
                height: "calc(100vh - 8rem)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    ref: bgImageRef,
                    src: typeof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$matchaSc$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$matchaSc$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"] === 'string' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$matchaSc$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$matchaSc$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$matchaSc$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$matchaSc$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
                    alt: "",
                    "aria-hidden": "true",
                    className: "w-[min(280px,70vw)] md:w-[min(400px,95vw)]",
                    style: {
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                        height: "auto",
                        transform: "translate3d(-50%, -50%, 0)",
                        borderRadius: "20px",
                        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.12)",
                        willChange: "transform",
                        zIndex: 2,
                        pointerEvents: "none",
                        userSelect: "none"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components-pages/Home/components/MatchaSection.tsx",
                    lineNumber: 165,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    ref: textRef,
                    className: "text-beige",
                    style: {
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                        transform: "translate3d(-50%, calc(-50% + 20px), 0)",
                        opacity: 0,
                        display: "flex",
                        flexDirection: "column",
                        gap: 0,
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        zIndex: 1,
                        pointerEvents: "none",
                        // Keep typography tight and stable (no wrapping)
                        whiteSpace: "nowrap",
                        willChange: "transform, opacity"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontFamily: "Agright, sans-serif",
                                fontWeight: 400,
                                fontSize: "min(6vw, 60px)",
                                lineHeight: 1,
                                marginBottom: "-0.45em"
                            },
                            children: t("matcha.fallenFor")
                        }, void 0, false, {
                            fileName: "[project]/src/components-pages/Home/components/MatchaSection.tsx",
                            lineNumber: 209,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-sans font-black",
                            style: {
                                // Keep the big MATCHA exactly as the main visual
                                fontSize: "min(26vw, 520px)",
                                lineHeight: 0.9,
                                letterSpacing: "0.02em"
                            },
                            children: t("matcha.title")
                        }, void 0, false, {
                            fileName: "[project]/src/components-pages/Home/components/MatchaSection.tsx",
                            lineNumber: 220,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontFamily: "Agright, sans-serif",
                                fontWeight: 400,
                                fontSize: "min(6vw, 60px)",
                                lineHeight: 1,
                                marginTop: "-0.25em"
                            },
                            children: t("matcha.yet")
                        }, void 0, false, {
                            fileName: "[project]/src/components-pages/Home/components/MatchaSection.tsx",
                            lineNumber: 231,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components-pages/Home/components/MatchaSection.tsx",
                    lineNumber: 187,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2d$pages$2f$Home$2f$components$2f$CoffeeSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    ref: coffeeRef
                }, void 0, false, {
                    fileName: "[project]/src/components-pages/Home/components/MatchaSection.tsx",
                    lineNumber: 244,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components-pages/Home/components/MatchaSection.tsx",
            lineNumber: 151,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components-pages/Home/components/MatchaSection.tsx",
        lineNumber: 140,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(MatchaSection, "/IIyQGLKbcsmcXMyMgIJfsBL9Rw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = MatchaSection;
const __TURBOPACK__default__export__ = MatchaSection;
var _c;
__turbopack_context__.k.register(_c, "MatchaSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/assets/images/ScAppleGinger.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/ScAppleGinger.97ceba3d.webp");}),
"[project]/src/assets/images/ScAppleGinger.webp.mjs { IMAGE => \"[project]/src/assets/images/ScAppleGinger.webp (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$ScAppleGinger$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/images/ScAppleGinger.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$ScAppleGinger$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 594,
    height: 852,
    blurWidth: 6,
    blurHeight: 8,
    blurDataURL: "data:image/webp;base64,UklGRiwBAABXRUJQVlA4TB8BAAAvBcABEM1VICICHgiACQMAAADm6Y4IONI54ByAAAAAAAAAEAAAAAAAAAAAAABAIAcCBASIjs1fZwcAAOCBAKQwAAAAnH/cf3wjBQhAMwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQBIMHvoPBCAHAQAAIDzv98LM2IAABDAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAcAMgEi+3/c/D0QCAAAAAOD8MwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACW3uu3eIQF6RYYIAb7siaOj7ldnKva9t56X/ZxMuWhyiQBgqSTGL50VLLdGDAxwfdwzeb5s9k3r4QiIVcRriVn1WBSH+rTURKoJh0WnaGYz1Q/aQ4w4Ib+gO5nDAA="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/assets/images/ScMatchaCan.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/ScMatchaCan.588acae1.webp");}),
"[project]/src/assets/images/ScMatchaCan.webp.mjs { IMAGE => \"[project]/src/assets/images/ScMatchaCan.webp (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$ScMatchaCan$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/images/ScMatchaCan.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$ScMatchaCan$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 594,
    height: 852,
    blurWidth: 6,
    blurHeight: 8,
    blurDataURL: "data:image/webp;base64,UklGRjIBAABXRUJQVlA4TCUBAAAvBcABEM1VICICHghADgIAAIDbfjKAsiWAGAICAAAAAAAAEAAAAAAAAAAAAAAAIDUYMALwAbCtRzAAAAAPBCCFAQAA4Pz/fv1qwyAb4QEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAABhgAIC02noPBCAHAQAA4Pz9148iCAMAQDAAAAAAAAAAAAAAAAAAAAAAAAAAAEAA1ERUYKq3278HIgEAAAAAcP4ZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMujzRduwRj9ThnrqI/paDtvofdCD9Yhpk/adbVc2Wwn6x4DCBGp78AP5eZOtENEzGTPncRnAR/9YSRisnMpFlf8sFe8Xu6yqTlrAg3ulMlbqy/8sL/AWC8gR4PNGAbABgA="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/assets/images/ScCoffeeProduct.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/ScCoffeeProduct.9186c853.webp");}),
"[project]/src/assets/images/ScCoffeeProduct.webp.mjs { IMAGE => \"[project]/src/assets/images/ScCoffeeProduct.webp (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$ScCoffeeProduct$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/images/ScCoffeeProduct.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$ScCoffeeProduct$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 594,
    height: 852,
    blurWidth: 6,
    blurHeight: 8,
    blurDataURL: "data:image/webp;base64,UklGRi4BAABXRUJQVlA4TCIBAAAvBcABEM1VICICHgiADQIAAIA+QH4EQOgAEAAOAACAAAAAAAgAAAcAAAAAAABAQjvguDiOgtYzTgYAAMADATBhAAAAOP+8PdO4BD8AAAAABwAAAAAAAAAAAAAAAAAAAAAAABAQCAB+vNVHmwcCcIQAAABw/jnTpkICED6AAAAAAAAAAAAAAAAAAAAAAAAAAADgAQAAAEz0za1/D0QCAAAAAOD8MwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACW/q73a3SVW/gXiDRYn969v17g24wiHCvL1tlOeyvKc5j7ah1iGcpMYVVM4VcdiM6UwePh3ibBD3EBiiKD93IpNtERQJJA2+mYPpwfXXqVozmQMoUmGHbSGD4MCRKzDQ=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components-pages/Home/components/ProductsSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Container.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$TextRevealLines$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/TextRevealLines.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$ScAppleGinger$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$ScAppleGinger$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/images/ScAppleGinger.webp.mjs { IMAGE => "[project]/src/assets/images/ScAppleGinger.webp (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$ScMatchaCan$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$ScMatchaCan$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/images/ScMatchaCan.webp.mjs { IMAGE => "[project]/src/assets/images/ScMatchaCan.webp (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$ScCoffeeProduct$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$ScCoffeeProduct$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/images/ScCoffeeProduct.webp.mjs { IMAGE => "[project]/src/assets/images/ScCoffeeProduct.webp (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants/typography.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
const ProductsSection = ()=>{
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const opacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductsSection.useEffect": ()=>{
            const section = sectionRef.current;
            if (!section) return;
            const update = {
                "ProductsSection.useEffect.update": ()=>{
                    const vh = window.innerHeight || 1;
                    // Check MatchaSection scroll progress to determine when to fade in ProductsSection
                    const matchaSection = document.getElementById("shop");
                    if (matchaSection) {
                        const matchaRect = matchaSection.getBoundingClientRect();
                        const scrollable = Math.max(1, matchaRect.height - vh);
                        const scrolled = -matchaRect.top;
                        const p = Math.min(1, Math.max(0, scrolled / scrollable));
                        // Start fading in when MatchaSection progress is high (near completion)
                        // Fade in over the last 30% of MatchaSection scroll (from 0.7 to 1.0)
                        const fadeStart = 0.7;
                        const fadeProgress = Math.max(0, Math.min(1, (p - fadeStart) / (1 - fadeStart)));
                        // Smooth fade animation (easeOut)
                        const easeOut = {
                            "ProductsSection.useEffect.update.easeOut": (t)=>1 - Math.pow(1 - t, 2)
                        }["ProductsSection.useEffect.update.easeOut"];
                        const easedProgress = easeOut(fadeProgress);
                        opacity.set(easedProgress);
                    }
                }
            }["ProductsSection.useEffect.update"];
            const onScroll = {
                "ProductsSection.useEffect.onScroll": ()=>{
                    requestAnimationFrame(update);
                }
            }["ProductsSection.useEffect.onScroll"];
            update();
            window.addEventListener("scroll", onScroll, {
                passive: true
            });
            return ({
                "ProductsSection.useEffect": ()=>{
                    window.removeEventListener("scroll", onScroll);
                }
            })["ProductsSection.useEffect"];
        }
    }["ProductsSection.useEffect"], [
        opacity
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
        ref: sectionRef,
        className: "bg-beige py-12 md:py-24 relative z-40",
        style: {
            opacity,
            y: 0,
            position: "relative"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: `text-center ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].agright.productsMain} font-agright ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fontWeights"].agright.extrabold} text-dark mb-12 md:mb-20`,
                        children: t("products.title")
                    }, void 0, false, {
                        fileName: "[project]/src/components-pages/Home/components/ProductsSection.tsx",
                        lineNumber: 77,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-12 md:space-y-28",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid md:grid-cols-2 gap-8 md:gap-12 items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "order-2 md:order-1 flex justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 md:p-8 space-y-4 text-center",
                                            style: {
                                                maxWidth: "48rem"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].agright.productTitle} font-agright ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fontWeights"].agright.normal} text-dark mb-6 md:mb-10`,
                                                    children: t("products.coffee.title")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components-pages/Home/components/ProductsSection.tsx",
                                                    lineNumber: 91,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$TextRevealLines$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: `font-manrope ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fontWeights"].manrope.bold} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].manrope.productSubtitle}`,
                                                        children: t("products.coffee.subtitle")
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components-pages/Home/components/ProductsSection.tsx",
                                                        lineNumber: 97,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components-pages/Home/components/ProductsSection.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$TextRevealLines$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fontWeights"].manrope.normal} w-full max-w-[600px] ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].manrope.productDescription} font-manrope text-dark ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lineHeights"].custom.body} text-center`,
                                                            children: t("products.coffee.description")
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components-pages/Home/components/ProductsSection.tsx",
                                                            lineNumber: 105,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components-pages/Home/components/ProductsSection.tsx",
                                                        lineNumber: 104,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components-pages/Home/components/ProductsSection.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "pt-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: `px-6 md:px-8 py-2 md:py-3 ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].manrope.button} border-2 border-white text-dark font-manrope ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fontWeights"].manrope.bold} rounded-3xl hover:bg-white hover:text-dark transition-colors`,
                                                        children: t("products.buyNow")
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components-pages/Home/components/ProductsSection.tsx",
                                                        lineNumber: 113,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components-pages/Home/components/ProductsSection.tsx",
                                                    lineNumber: 112,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components-pages/Home/components/ProductsSection.tsx",
                                            lineNumber: 87,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components-pages/Home/components/ProductsSection.tsx",
                                        lineNumber: 86,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "order-1 md:order-2 flex justify-center ",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].img, {
                                            src: typeof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$ScCoffeeProduct$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$ScCoffeeProduct$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"] === 'string' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$ScCoffeeProduct$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$ScCoffeeProduct$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$ScCoffeeProduct$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$ScCoffeeProduct$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
                                            alt: "Speed Coffee product",
                                            className: "w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] h-auto object-contain",
                                            initial: {
                                                opacity: 0,
                                                scale: 0.8,
                                                filter: "blur(10px)",
                                                y: 30
                                            },
                                            whileInView: {
                                                opacity: 1,
                                                scale: 1,
                                                filter: "blur(0px)",
                                                y: 0
                                            },
                                            viewport: {
                                                once: true,
                                                amount: 0.2
                                            },
                                            transition: {
                                                duration: 0.8,
                                                ease: [
                                                    0.25,
                                                    0.46,
                                                    0.45,
                                                    0.94
                                                ],
                                                scale: {
                                                    duration: 0.6
                                                },
                                                filter: {
                                                    duration: 0.5
                                                }
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components-pages/Home/components/ProductsSection.tsx",
                                            lineNumber: 122,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components-pages/Home/components/ProductsSection.tsx",
                                        lineNumber: 121,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components-pages/Home/components/ProductsSection.tsx",
                                lineNumber: 85,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid md:grid-cols-2 gap-8 md:gap-12 items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "order-1 flex justify-center md:justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].img, {
                                            src: typeof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$ScMatchaCan$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$ScMatchaCan$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"] === 'string' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$ScMatchaCan$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$ScMatchaCan$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$ScMatchaCan$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$ScMatchaCan$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
                                            alt: "Matcha product",
                                            className: "w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] h-auto object-contain",
                                            initial: {
                                                opacity: 0,
                                                scale: 0.8,
                                                filter: "blur(10px)",
                                                y: 30
                                            },
                                            whileInView: {
                                                opacity: 1,
                                                scale: 1,
                                                filter: "blur(0px)",
                                                y: 0
                                            },
                                            viewport: {
                                                once: true,
                                                amount: 0.2
                                            },
                                            transition: {
                                                duration: 0.8,
                                                ease: [
                                                    0.25,
                                                    0.46,
                                                    0.45,
                                                    0.94
                                                ],
                                                scale: {
                                                    duration: 0.6
                                                },
                                                filter: {
                                                    duration: 0.5
                                                }
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components-pages/Home/components/ProductsSection.tsx",
                                            lineNumber: 151,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components-pages/Home/components/ProductsSection.tsx",
                                        lineNumber: 150,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "order-2 flex justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 md:p-8 space-y-4 text-center",
                                            style: {
                                                maxWidth: "48rem"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].agright.productTitle} font-agright ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fontWeights"].agright.normal} text-dark mb-6 md:mb-10`,
                                                    children: t("products.matcha.title")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components-pages/Home/components/ProductsSection.tsx",
                                                    lineNumber: 181,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$TextRevealLines$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: `font-manrope ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fontWeights"].manrope.bold} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].manrope.productSubtitle}`,
                                                        children: t("products.matcha.subtitle")
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components-pages/Home/components/ProductsSection.tsx",
                                                        lineNumber: 187,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components-pages/Home/components/ProductsSection.tsx",
                                                    lineNumber: 186,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$TextRevealLines$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fontWeights"].manrope.normal} w-full max-w-[600px] ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].manrope.productDescription} font-manrope text-dark ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lineHeights"].custom.body} text-center`,
                                                            children: t("products.matcha.description")
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components-pages/Home/components/ProductsSection.tsx",
                                                            lineNumber: 195,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components-pages/Home/components/ProductsSection.tsx",
                                                        lineNumber: 194,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components-pages/Home/components/ProductsSection.tsx",
                                                    lineNumber: 193,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "pt-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: `px-6 md:px-8 py-2 md:py-3 ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].manrope.button} border-2 border-white text-dark font-manrope ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fontWeights"].manrope.bold} rounded-3xl hover:bg-white hover:text-dark transition-colors`,
                                                        children: t("products.buyNow")
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components-pages/Home/components/ProductsSection.tsx",
                                                        lineNumber: 203,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components-pages/Home/components/ProductsSection.tsx",
                                                    lineNumber: 202,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components-pages/Home/components/ProductsSection.tsx",
                                            lineNumber: 177,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components-pages/Home/components/ProductsSection.tsx",
                                        lineNumber: 176,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components-pages/Home/components/ProductsSection.tsx",
                                lineNumber: 149,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid md:grid-cols-2 gap-8 md:gap-12 items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "order-2 md:order-1 flex justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 md:p-8 space-y-4 text-center",
                                            style: {
                                                maxWidth: "48rem"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].agright.productTitle} font-agright ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fontWeights"].agright.normal} text-dark mb-6 md:mb-10`,
                                                    children: t("products.appleGinger.title")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components-pages/Home/components/ProductsSection.tsx",
                                                    lineNumber: 219,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$TextRevealLines$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: `font-manrope ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fontWeights"].manrope.bold} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].manrope.productSubtitle}`,
                                                        children: t("products.appleGinger.subtitle")
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components-pages/Home/components/ProductsSection.tsx",
                                                        lineNumber: 225,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components-pages/Home/components/ProductsSection.tsx",
                                                    lineNumber: 224,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$TextRevealLines$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fontWeights"].manrope.normal} w-full max-w-[600px] ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].manrope.productDescription} font-manrope text-dark ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lineHeights"].custom.body} text-center`,
                                                            children: t("products.appleGinger.description")
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components-pages/Home/components/ProductsSection.tsx",
                                                            lineNumber: 233,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components-pages/Home/components/ProductsSection.tsx",
                                                        lineNumber: 232,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components-pages/Home/components/ProductsSection.tsx",
                                                    lineNumber: 231,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "pt-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: `px-6 md:px-8 py-2 md:py-3 ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].manrope.button} border-2 border-white text-dark font-manrope ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fontWeights"].manrope.bold} rounded-3xl hover:bg-white hover:text-dark transition-colors`,
                                                        children: t("products.buyNow")
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components-pages/Home/components/ProductsSection.tsx",
                                                        lineNumber: 241,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components-pages/Home/components/ProductsSection.tsx",
                                                    lineNumber: 240,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components-pages/Home/components/ProductsSection.tsx",
                                            lineNumber: 215,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components-pages/Home/components/ProductsSection.tsx",
                                        lineNumber: 214,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "order-1 md:order-2 flex justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].img, {
                                            src: typeof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$ScAppleGinger$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$ScAppleGinger$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"] === 'string' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$ScAppleGinger$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$ScAppleGinger$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$ScAppleGinger$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$ScAppleGinger$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
                                            alt: "Apple & Ginger product",
                                            className: "w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] h-auto object-contain",
                                            initial: {
                                                opacity: 0,
                                                scale: 0.8,
                                                filter: "blur(10px)",
                                                y: 30
                                            },
                                            whileInView: {
                                                opacity: 1,
                                                scale: 1,
                                                filter: "blur(0px)",
                                                y: 0
                                            },
                                            viewport: {
                                                once: true,
                                                amount: 0.2
                                            },
                                            transition: {
                                                duration: 0.8,
                                                ease: [
                                                    0.25,
                                                    0.46,
                                                    0.45,
                                                    0.94
                                                ],
                                                scale: {
                                                    duration: 0.6
                                                },
                                                filter: {
                                                    duration: 0.5
                                                }
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components-pages/Home/components/ProductsSection.tsx",
                                            lineNumber: 250,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components-pages/Home/components/ProductsSection.tsx",
                                        lineNumber: 249,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components-pages/Home/components/ProductsSection.tsx",
                                lineNumber: 213,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components-pages/Home/components/ProductsSection.tsx",
                        lineNumber: 83,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components-pages/Home/components/ProductsSection.tsx",
                lineNumber: 76,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components-pages/Home/components/ProductsSection.tsx",
            lineNumber: 75,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components-pages/Home/components/ProductsSection.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ProductsSection, "nLCVcQM9O9P92L5N/NhZQjVFppI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"]
    ];
});
_c = ProductsSection;
const __TURBOPACK__default__export__ = ProductsSection;
var _c;
__turbopack_context__.k.register(_c, "ProductsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components-pages/Home/components/ScrollVelocity.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollVelocity",
    ()=>ScrollVelocity,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$velocity$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-velocity.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$animation$2d$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-animation-frame.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
function useElementWidth(ref) {
    _s();
    const [width, setWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "useElementWidth.useLayoutEffect": ()=>{
            function updateWidth() {
                if (ref.current) {
                    setWidth(ref.current.offsetWidth);
                }
            }
            updateWidth();
            window.addEventListener("resize", updateWidth);
            return ({
                "useElementWidth.useLayoutEffect": ()=>window.removeEventListener("resize", updateWidth)
            })["useElementWidth.useLayoutEffect"];
        }
    }["useElementWidth.useLayoutEffect"], [
        ref
    ]);
    return width;
}
_s(useElementWidth, "Zox8iQeCjOxJKLNPL5iAhTzGKnQ=");
const ScrollVelocity = ({ scrollContainerRef, texts = [], velocity = 100, className = "", rowGap, sectionClassName = "", sectionStyle, damping = 50, stiffness = 400, numCopies = 6, velocityMapping = {
    input: [
        0,
        1000
    ],
    output: [
        0,
        5
    ]
}, parallaxClassName = "parallax", scrollerClassName = "scroller", parallaxStyle, scrollerStyle })=>{
    _s1();
    var _s = __turbopack_context__.k.signature();
    // Responsive rowGap: 80px on mobile, 125px on larger screens
    const [responsiveRowGap, setResponsiveRowGap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(125);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollVelocity.useEffect": ()=>{
            const updateGap = {
                "ScrollVelocity.useEffect.updateGap": ()=>{
                    setResponsiveRowGap(window.innerWidth < 768 ? 80 : 125);
                }
            }["ScrollVelocity.useEffect.updateGap"];
            updateGap();
            window.addEventListener("resize", updateGap);
            return ({
                "ScrollVelocity.useEffect": ()=>window.removeEventListener("resize", updateGap)
            })["ScrollVelocity.useEffect"];
        }
    }["ScrollVelocity.useEffect"], []);
    const finalRowGap = rowGap !== undefined ? rowGap : responsiveRowGap;
    function VelocityText({ children, baseVelocity = velocity, scrollContainerRef, className = "", damping, stiffness, numCopies, velocityMapping, parallaxClassName, scrollerClassName, parallaxStyle, scrollerStyle }) {
        _s();
        const baseX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
        const scrollOptions = scrollContainerRef ? {
            container: scrollContainerRef
        } : {};
        const { scrollY } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])(scrollOptions);
        const scrollVelocity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$velocity$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVelocity"])(scrollY);
        const smoothVelocity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(scrollVelocity, {
            damping: damping ?? 50,
            stiffness: stiffness ?? 400
        });
        const velocityFactor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(smoothVelocity, velocityMapping?.input || [
            0,
            1000
        ], velocityMapping?.output || [
            0,
            5
        ], {
            clamp: false
        });
        const copyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
        const copyWidth = useElementWidth(copyRef);
        function wrap(min, max, v) {
            const range = max - min;
            const mod = ((v - min) % range + range) % range;
            return mod + min;
        }
        const x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(baseX, {
            "ScrollVelocity.VelocityText.useTransform[x]": (v)=>{
                if (copyWidth === 0) return "0px";
                return `${wrap(-copyWidth, 0, v)}px`;
            }
        }["ScrollVelocity.VelocityText.useTransform[x]"]);
        const directionFactor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(1);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$animation$2d$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimationFrame"])({
            "ScrollVelocity.VelocityText.useAnimationFrame": (_t, delta)=>{
                let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
                if (velocityFactor.get() < 0) {
                    directionFactor.current = -1;
                } else if (velocityFactor.get() > 0) {
                    directionFactor.current = 1;
                }
                moveBy += directionFactor.current * moveBy * velocityFactor.get();
                baseX.set(baseX.get() + moveBy);
            }
        }["ScrollVelocity.VelocityText.useAnimationFrame"]);
        const spans = [];
        for(let i = 0; i < numCopies; i++){
            spans.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: className,
                ref: i === 0 ? copyRef : null,
                children: children
            }, i, false, {
                fileName: "[project]/src/components-pages/Home/components/ScrollVelocity.tsx",
                lineNumber: 165,
                columnNumber: 9
            }, this));
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: parallaxClassName,
            style: {
                ...parallaxStyle,
                lineHeight: 0,
                display: "block"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: scrollerClassName,
                style: {
                    x,
                    ...scrollerStyle
                },
                children: spans
            }, void 0, false, {
                fileName: "[project]/src/components-pages/Home/components/ScrollVelocity.tsx",
                lineNumber: 180,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components-pages/Home/components/ScrollVelocity.tsx",
            lineNumber: 172,
            columnNumber: 7
        }, this);
    }
    _s(VelocityText, "iUcSI+gAHe4r7p60kbGx4qbjHQM=", false, function() {
        return [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$velocity$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVelocity"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
            useElementWidth,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$animation$2d$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimationFrame"]
        ];
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: sectionClassName,
        style: {
            display: "flex",
            flexDirection: "column",
            ...finalRowGap !== undefined && finalRowGap !== null && {
                gap: typeof finalRowGap === "number" ? `${finalRowGap}px` : finalRowGap
            },
            ...sectionStyle
        },
        children: texts.map((text, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VelocityText, {
                className: className,
                baseVelocity: index % 2 !== 0 ? -velocity : velocity,
                scrollContainerRef: scrollContainerRef,
                damping: damping,
                stiffness: stiffness,
                numCopies: numCopies,
                velocityMapping: velocityMapping,
                parallaxClassName: parallaxClassName,
                scrollerClassName: scrollerClassName,
                parallaxStyle: parallaxStyle,
                scrollerStyle: scrollerStyle,
                children: [
                    text,
                    " "
                ]
            }, index, true, {
                fileName: "[project]/src/components-pages/Home/components/ScrollVelocity.tsx",
                lineNumber: 204,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/src/components-pages/Home/components/ScrollVelocity.tsx",
        lineNumber: 191,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(ScrollVelocity, "4+p3vTU2MthooVMHKD3OU3dWPJc=");
_c = ScrollVelocity;
const __TURBOPACK__default__export__ = ScrollVelocity;
var _c;
__turbopack_context__.k.register(_c, "ScrollVelocity");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components-pages/Home/components/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
// Home page components
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2d$pages$2f$Home$2f$components$2f$Hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components-pages/Home/components/Hero.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2d$pages$2f$Home$2f$components$2f$HeroIntro$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components-pages/Home/components/HeroIntro.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2d$pages$2f$Home$2f$components$2f$About$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components-pages/Home/components/About.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2d$pages$2f$Home$2f$components$2f$Locations$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components-pages/Home/components/Locations.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2d$pages$2f$Home$2f$components$2f$EventBooking$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components-pages/Home/components/EventBooking.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2d$pages$2f$Home$2f$components$2f$MatchaSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components-pages/Home/components/MatchaSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2d$pages$2f$Home$2f$components$2f$CoffeeSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components-pages/Home/components/CoffeeSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2d$pages$2f$Home$2f$components$2f$ProductsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components-pages/Home/components/ProductsSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2d$pages$2f$Home$2f$components$2f$ScrollVelocity$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components-pages/Home/components/ScrollVelocity.tsx [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components-pages/Home/components/Hero.tsx [app-client] (ecmascript) <export default as Hero>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hero",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2d$pages$2f$Home$2f$components$2f$Hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2d$pages$2f$Home$2f$components$2f$Hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components-pages/Home/components/Hero.tsx [app-client] (ecmascript)");
}),
"[project]/src/components-pages/Home/components/HeroIntro.tsx [app-client] (ecmascript) <export default as HeroIntro>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroIntro",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2d$pages$2f$Home$2f$components$2f$HeroIntro$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2d$pages$2f$Home$2f$components$2f$HeroIntro$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components-pages/Home/components/HeroIntro.tsx [app-client] (ecmascript)");
}),
"[project]/src/components-pages/Home/components/About.tsx [app-client] (ecmascript) <export default as About>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "About",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2d$pages$2f$Home$2f$components$2f$About$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2d$pages$2f$Home$2f$components$2f$About$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components-pages/Home/components/About.tsx [app-client] (ecmascript)");
}),
"[project]/src/components-pages/Home/components/Locations.tsx [app-client] (ecmascript) <export default as Locations>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Locations",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2d$pages$2f$Home$2f$components$2f$Locations$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2d$pages$2f$Home$2f$components$2f$Locations$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components-pages/Home/components/Locations.tsx [app-client] (ecmascript)");
}),
"[project]/src/components-pages/Home/components/EventBooking.tsx [app-client] (ecmascript) <export default as EventBooking>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EventBooking",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2d$pages$2f$Home$2f$components$2f$EventBooking$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2d$pages$2f$Home$2f$components$2f$EventBooking$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components-pages/Home/components/EventBooking.tsx [app-client] (ecmascript)");
}),
"[project]/src/components-pages/Home/components/MatchaSection.tsx [app-client] (ecmascript) <export default as MatchaSection>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MatchaSection",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2d$pages$2f$Home$2f$components$2f$MatchaSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2d$pages$2f$Home$2f$components$2f$MatchaSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components-pages/Home/components/MatchaSection.tsx [app-client] (ecmascript)");
}),
"[project]/src/components-pages/Home/components/ProductsSection.tsx [app-client] (ecmascript) <export default as ProductsSection>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductsSection",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2d$pages$2f$Home$2f$components$2f$ProductsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2d$pages$2f$Home$2f$components$2f$ProductsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components-pages/Home/components/ProductsSection.tsx [app-client] (ecmascript)");
}),
"[project]/src/components-pages/Home/components/ScrollVelocity.tsx [app-client] (ecmascript) <export default as ScrollVelocity>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollVelocity",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2d$pages$2f$Home$2f$components$2f$ScrollVelocity$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2d$pages$2f$Home$2f$components$2f$ScrollVelocity$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components-pages/Home/components/ScrollVelocity.tsx [app-client] (ecmascript)");
}),
"[project]/src/components-pages/Home/Home.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Header/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2d$pages$2f$Home$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components-pages/Home/components/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2d$pages$2f$Home$2f$components$2f$Hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hero$3e$__ = __turbopack_context__.i("[project]/src/components-pages/Home/components/Hero.tsx [app-client] (ecmascript) <export default as Hero>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2d$pages$2f$Home$2f$components$2f$HeroIntro$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeroIntro$3e$__ = __turbopack_context__.i("[project]/src/components-pages/Home/components/HeroIntro.tsx [app-client] (ecmascript) <export default as HeroIntro>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2d$pages$2f$Home$2f$components$2f$About$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__About$3e$__ = __turbopack_context__.i("[project]/src/components-pages/Home/components/About.tsx [app-client] (ecmascript) <export default as About>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2d$pages$2f$Home$2f$components$2f$Locations$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Locations$3e$__ = __turbopack_context__.i("[project]/src/components-pages/Home/components/Locations.tsx [app-client] (ecmascript) <export default as Locations>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2d$pages$2f$Home$2f$components$2f$EventBooking$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EventBooking$3e$__ = __turbopack_context__.i("[project]/src/components-pages/Home/components/EventBooking.tsx [app-client] (ecmascript) <export default as EventBooking>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2d$pages$2f$Home$2f$components$2f$MatchaSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MatchaSection$3e$__ = __turbopack_context__.i("[project]/src/components-pages/Home/components/MatchaSection.tsx [app-client] (ecmascript) <export default as MatchaSection>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2d$pages$2f$Home$2f$components$2f$ProductsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ProductsSection$3e$__ = __turbopack_context__.i("[project]/src/components-pages/Home/components/ProductsSection.tsx [app-client] (ecmascript) <export default as ProductsSection>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2d$pages$2f$Home$2f$components$2f$ScrollVelocity$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ScrollVelocity$3e$__ = __turbopack_context__.i("[project]/src/components-pages/Home/components/ScrollVelocity.tsx [app-client] (ecmascript) <export default as ScrollVelocity>");
"use client";
;
;
;
;
const Home = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-beige",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components-pages/Home/Home.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2d$pages$2f$Home$2f$components$2f$Hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hero$3e$__["Hero"], {}, void 0, false, {
                        fileName: "[project]/src/components-pages/Home/Home.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2d$pages$2f$Home$2f$components$2f$HeroIntro$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeroIntro$3e$__["HeroIntro"], {}, void 0, false, {
                        fileName: "[project]/src/components-pages/Home/Home.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2d$pages$2f$Home$2f$components$2f$About$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__About$3e$__["About"], {}, void 0, false, {
                        fileName: "[project]/src/components-pages/Home/Home.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2d$pages$2f$Home$2f$components$2f$Locations$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Locations$3e$__["Locations"], {}, void 0, false, {
                        fileName: "[project]/src/components-pages/Home/Home.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2d$pages$2f$Home$2f$components$2f$EventBooking$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EventBooking$3e$__["EventBooking"], {}, void 0, false, {
                        fileName: "[project]/src/components-pages/Home/Home.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2d$pages$2f$Home$2f$components$2f$MatchaSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MatchaSection$3e$__["MatchaSection"], {}, void 0, false, {
                        fileName: "[project]/src/components-pages/Home/Home.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2d$pages$2f$Home$2f$components$2f$ProductsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ProductsSection$3e$__["ProductsSection"], {}, void 0, false, {
                        fileName: "[project]/src/components-pages/Home/Home.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "bg-beige w-full mt-16 md:mt-24",
                        style: {
                            height: "50vh",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            gap: "0px",
                            padding: "0 100px"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2d$pages$2f$Home$2f$components$2f$ScrollVelocity$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ScrollVelocity$3e$__["ScrollVelocity"], {
                            texts: [
                                "SPEED COFFEE",
                                "SPEED COFFEE"
                            ],
                            velocity: 120,
                            className: "font-agright text-white text-[60px] leading-[0] md:text-[96px] lg:text-[120px]",
                            numCopies: 6,
                            damping: 50,
                            stiffness: 400,
                            velocityMapping: {
                                input: [
                                    0,
                                    1000
                                ],
                                output: [
                                    0,
                                    5
                                ]
                            },
                            parallaxClassName: "parallax",
                            scrollerClassName: "scroller"
                        }, void 0, false, {
                            fileName: "[project]/src/components-pages/Home/Home.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components-pages/Home/Home.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components-pages/Home/Home.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components-pages/Home/Home.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components-pages/Home/Home.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Home;
const __TURBOPACK__default__export__ = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useSpeedCoffeeMotion.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSpeedCoffeeMotion",
    ()=>useSpeedCoffeeMotion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lenis/dist/lenis.mjs [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
function useSpeedCoffeeMotion(rootRef, enabled = true) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "useSpeedCoffeeMotion.useLayoutEffect": ()=>{
            if (!enabled) return;
            const root = rootRef?.current;
            if (!root) return;
            // By default, browsers restore scroll position on refresh/back-forward.
            // For this site we want a clean "start at top" on reload, but still respect deep links (#hash).
            const hasHash = Boolean(window.location.hash && window.location.hash !== "#");
            const canControlRestoration = "scrollRestoration" in window.history;
            const prevRestoration = canControlRestoration && window.history.scrollRestoration ? window.history.scrollRestoration : null;
            if (!hasHash && canControlRestoration) {
                window.history.scrollRestoration = "manual";
            }
            const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
            if (reduceMotion) {
                // Ensure we also reset scroll on refresh even when motion system is disabled.
                if (!hasHash) window.scrollTo(0, 0);
                const onPageShow = {
                    "useSpeedCoffeeMotion.useLayoutEffect.onPageShow": (e)=>{
                        if (!hasHash && e.persisted) window.scrollTo(0, 0);
                    }
                }["useSpeedCoffeeMotion.useLayoutEffect.onPageShow"];
                window.addEventListener("pageshow", onPageShow);
                return ({
                    "useSpeedCoffeeMotion.useLayoutEffect": ()=>{
                        window.removeEventListener("pageshow", onPageShow);
                        if (!hasHash && canControlRestoration && prevRestoration) {
                            window.history.scrollRestoration = prevRestoration;
                        }
                    }
                })["useSpeedCoffeeMotion.useLayoutEffect"];
            }
            const lenis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
                duration: 1.18,
                smoothWheel: true,
                // Lenis v1.3.x: `smoothTouch` is not a valid option; `syncTouch` controls touch-style syncing.
                // We keep touch syncing disabled (default) to avoid altering native touch scrolling behavior.
                syncTouch: false,
                easing: {
                    "useSpeedCoffeeMotion.useLayoutEffect": (t)=>1 - Math.pow(1 - t, 3)
                }["useSpeedCoffeeMotion.useLayoutEffect"]
            });
            // Force top on refresh/load (unless URL has a hash deep link).
            if (!hasHash) {
                window.scrollTo(0, 0);
                // Lenis may apply its own internal scroll state; sync it immediately.
                try {
                    lenis.scrollTo(0, {
                        immediate: true
                    });
                } catch  {
                // ignore
                }
            }
            // Keep ScrollTrigger synced with Lenis scroll.
            const onLenisScroll = {
                "useSpeedCoffeeMotion.useLayoutEffect.onLenisScroll": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].update()
            }["useSpeedCoffeeMotion.useLayoutEffect.onLenisScroll"];
            lenis.on("scroll", onLenisScroll);
            // Drive Lenis via GSAP ticker (standard integration).
            const onTick = {
                "useSpeedCoffeeMotion.useLayoutEffect.onTick": (time)=>lenis.raf(time * 1000)
            }["useSpeedCoffeeMotion.useLayoutEffect.onTick"];
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].ticker.add(onTick);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].ticker.lagSmoothing(0);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].defaults({
                ease: "power2.out"
            });
            // Optional selector-based animations (safe if elements don’t exist).
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "useSpeedCoffeeMotion.useLayoutEffect.ctx": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(".site-header", {
                        autoAlpha: 0,
                        y: -10
                    }, {
                        autoAlpha: 1,
                        y: 0,
                        duration: 1.6,
                        ease: "power2.out",
                        delay: 0.05
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(".hero-content", {
                        autoAlpha: 0,
                        y: 16
                    }, {
                        autoAlpha: 1,
                        y: 0,
                        duration: 2.1,
                        ease: "power2.out",
                        delay: 0.15
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(".hero-media img", {
                        scale: 1.02
                    }, {
                        scale: 1.12,
                        ease: "none",
                        scrollTrigger: {
                            trigger: ".hero",
                            start: "top top",
                            end: "bottom top",
                            scrub: 1.2
                        }
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(".material-card", {
                        autoAlpha: 0,
                        y: 20
                    }, {
                        autoAlpha: 1,
                        y: 0,
                        duration: 1.7,
                        stagger: 0.12,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: "#materials",
                            start: "top 72%",
                            once: true
                        }
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(".process-copy > *", {
                        autoAlpha: 0,
                        y: 16
                    }, {
                        autoAlpha: 1,
                        y: 0,
                        duration: 1.7,
                        stagger: 0.08,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: ".process",
                            start: "top 75%",
                            once: true
                        }
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(".process-media", {
                        clipPath: "inset(0 0 100% 0 round 22px)"
                    }, {
                        clipPath: "inset(0 0 0% 0 round 22px)",
                        duration: 2.3,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: ".process",
                            start: "top 72%",
                            end: "bottom 55%"
                        }
                    });
                    const panels = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.toArray(".gallery-panel");
                    if (panels.length) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(panels, {
                            autoAlpha: 0,
                            scale: 1.04,
                            transformOrigin: "center"
                        });
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(panels[0], {
                            autoAlpha: 1,
                            scale: 1.01
                        });
                        const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                            defaults: {
                                ease: "power1.out"
                            },
                            scrollTrigger: {
                                trigger: ".gallery",
                                start: "top top",
                                end: `+=${Math.max(2400, panels.length * 1200)}`,
                                scrub: 1.15,
                                pin: ".gallery-pin",
                                anticipatePin: 1,
                                invalidateOnRefresh: true
                            }
                        });
                        for(let i = 1; i < panels.length; i += 1){
                            tl.to(panels[i - 1], {
                                autoAlpha: 0,
                                scale: 1.02,
                                duration: 1.1
                            }, "+=0.35");
                            tl.to(panels[i], {
                                autoAlpha: 1,
                                scale: 1.0,
                                duration: 1.2
                            }, "<");
                        }
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(".gallery-copy", {
                            autoAlpha: 0
                        }, {
                            autoAlpha: 1,
                            duration: 1.8,
                            ease: "power1.out",
                            scrollTrigger: {
                                trigger: ".gallery",
                                start: "top 90%",
                                once: true
                            }
                        });
                    }
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(".cta-inner", {
                        autoAlpha: 0,
                        y: 14
                    }, {
                        autoAlpha: 1,
                        y: 0,
                        duration: 1.7,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: ".cta",
                            start: "top 78%",
                            once: true
                        }
                    });
                }
            }["useSpeedCoffeeMotion.useLayoutEffect.ctx"], root);
            // Smooth anchor clicks with Lenis (keeps the same eased feel as wheel).
            const onClick = {
                "useSpeedCoffeeMotion.useLayoutEffect.onClick": (e)=>{
                    const target = e.target;
                    const a = target?.closest?.("a[href^='#']");
                    if (!a) return;
                    const href = a.getAttribute("href") || "";
                    if (!href.startsWith("#") || href === "#") return;
                    const id = href.slice(1);
                    const el = document.getElementById(id);
                    if (!el) return;
                    e.preventDefault();
                    lenis.scrollTo(el, {
                        duration: 1.18,
                        easing: {
                            "useSpeedCoffeeMotion.useLayoutEffect.onClick": (t)=>1 - Math.pow(1 - t, 3)
                        }["useSpeedCoffeeMotion.useLayoutEffect.onClick"]
                    });
                    history.pushState(null, "", href);
                }
            }["useSpeedCoffeeMotion.useLayoutEffect.onClick"];
            root.addEventListener("click", onClick);
            const onLoad = {
                "useSpeedCoffeeMotion.useLayoutEffect.onLoad": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].refresh()
            }["useSpeedCoffeeMotion.useLayoutEffect.onLoad"];
            window.addEventListener("load", onLoad);
            const onPageShow = {
                "useSpeedCoffeeMotion.useLayoutEffect.onPageShow": (e)=>{
                    // When coming from bfcache, the browser may restore scroll. Keep it consistent.
                    if (!hasHash && e.persisted) {
                        window.scrollTo(0, 0);
                        try {
                            lenis.scrollTo(0, {
                                immediate: true
                            });
                        } catch  {
                        // ignore
                        }
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].refresh();
                    }
                }
            }["useSpeedCoffeeMotion.useLayoutEffect.onPageShow"];
            window.addEventListener("pageshow", onPageShow);
            return ({
                "useSpeedCoffeeMotion.useLayoutEffect": ()=>{
                    window.removeEventListener("load", onLoad);
                    window.removeEventListener("pageshow", onPageShow);
                    root.removeEventListener("click", onClick);
                    ctx.revert();
                    lenis.off("scroll", onLenisScroll);
                    try {
                        lenis.destroy();
                    } catch  {
                    // ignore
                    }
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].ticker.remove(onTick);
                    if (!hasHash && canControlRestoration && prevRestoration) {
                        window.history.scrollRestoration = prevRestoration;
                    }
                }
            })["useSpeedCoffeeMotion.useLayoutEffect"];
        }
    }["useSpeedCoffeeMotion.useLayoutEffect"], [
        rootRef,
        enabled
    ]);
}
_s(useSpeedCoffeeMotion, "n7/vCynhJvM+pLkyL2DMQUF0odM=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useCustomCursor.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCustomCursor",
    ()=>useCustomCursor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const useCustomCursor = (options = {})=>{
    _s();
    const { size = 20, hoverSize = 40, color = "rgba(0, 0, 0, 0.3)", transitionSpeed = 0.15, smoothing = 0.15 } = options;
    const cursorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isHoveringRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const animationFrameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCustomCursor.useEffect": ()=>{
            // Skip on touch devices
            if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) {
                return;
            }
            // Get initial mouse position (center of screen)
            const initialX = window.innerWidth / 2;
            const initialY = window.innerHeight / 2;
            // Create cursor element
            const cursor = document.createElement("div");
            cursor.id = "custom-cursor";
            cursor.style.cssText = `
      position: fixed;
      width: ${size}px;
      height: ${size}px;
      border-radius: 50%;
      background: ${color};
      pointer-events: none;
      z-index: 99999;
      transform: translate(-50%, -50%);
      transition: width ${transitionSpeed}s ease-out, height ${transitionSpeed}s ease-out;
      left: ${initialX}px;
      top: ${initialY}px;
      opacity: 1;
      will-change: transform;
    `;
            document.body.appendChild(cursor);
            cursorRef.current = cursor;
            // Track mouse position
            let mouseX = initialX;
            let mouseY = initialY;
            let cursorX = initialX;
            let cursorY = initialY;
            const updateCursor = {
                "useCustomCursor.useEffect.updateCursor": ()=>{
                    // Smooth interpolation for cursor position
                    cursorX += (mouseX - cursorX) * smoothing;
                    cursorY += (mouseY - cursorY) * smoothing;
                    cursor.style.left = `${cursorX}px`;
                    cursor.style.top = `${cursorY}px`;
                    animationFrameRef.current = requestAnimationFrame(updateCursor);
                }
            }["useCustomCursor.useEffect.updateCursor"];
            const handleMouseMove = {
                "useCustomCursor.useEffect.handleMouseMove": (e)=>{
                    mouseX = e.clientX;
                    mouseY = e.clientY;
                }
            }["useCustomCursor.useEffect.handleMouseMove"];
            const handleMouseEnter = {
                "useCustomCursor.useEffect.handleMouseEnter": (e)=>{
                    const target = e.target;
                    // Check if element is actually interactive
                    if (target.tagName === "A" || target.tagName === "BUTTON" || target.tagName === "INPUT" || target.getAttribute("role") === "button" || target.closest("a") || target.closest("button")) {
                        if (cursor) {
                            isHoveringRef.current = true;
                            cursor.style.width = `${hoverSize}px`;
                            cursor.style.height = `${hoverSize}px`;
                            cursor.style.background = color; // Ensure color stays the same on hover
                        }
                    }
                }
            }["useCustomCursor.useEffect.handleMouseEnter"];
            const handleMouseLeave = {
                "useCustomCursor.useEffect.handleMouseLeave": ()=>{
                    if (cursor) {
                        isHoveringRef.current = false;
                        cursor.style.width = `${size}px`;
                        cursor.style.height = `${size}px`;
                    }
                }
            }["useCustomCursor.useEffect.handleMouseLeave"];
            // Use event delegation for dynamic elements
            const handleMouseOver = {
                "useCustomCursor.useEffect.handleMouseOver": (e)=>{
                    const target = e.target;
                    if (target.tagName === "A" || target.tagName === "BUTTON" || target.tagName === "INPUT" || target.getAttribute("role") === "button" || target.closest("a") || target.closest("button")) {
                        handleMouseEnter(e);
                    }
                }
            }["useCustomCursor.useEffect.handleMouseOver"];
            const handleMouseOut = {
                "useCustomCursor.useEffect.handleMouseOut": ()=>{
                    handleMouseLeave();
                }
            }["useCustomCursor.useEffect.handleMouseOut"];
            // Add event listeners
            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseover", handleMouseOver);
            document.addEventListener("mouseout", handleMouseOut);
            // Start animation loop
            updateCursor();
            // Hide cursor when mouse leaves window
            const handleMouseLeaveWindow = {
                "useCustomCursor.useEffect.handleMouseLeaveWindow": ()=>{
                    if (cursor) {
                        cursor.style.opacity = "0";
                    }
                }
            }["useCustomCursor.useEffect.handleMouseLeaveWindow"];
            const handleMouseEnterWindow = {
                "useCustomCursor.useEffect.handleMouseEnterWindow": ()=>{
                    if (cursor) {
                        cursor.style.opacity = "1";
                    }
                }
            }["useCustomCursor.useEffect.handleMouseEnterWindow"];
            document.addEventListener("mouseleave", handleMouseLeaveWindow);
            document.addEventListener("mouseenter", handleMouseEnterWindow);
            // Cleanup
            return ({
                "useCustomCursor.useEffect": ()=>{
                    document.removeEventListener("mousemove", handleMouseMove);
                    document.removeEventListener("mouseover", handleMouseOver);
                    document.removeEventListener("mouseout", handleMouseOut);
                    document.removeEventListener("mouseleave", handleMouseLeaveWindow);
                    document.removeEventListener("mouseenter", handleMouseEnterWindow);
                    if (animationFrameRef.current) {
                        cancelAnimationFrame(animationFrameRef.current);
                    }
                    if (cursor && cursor.parentNode) {
                        cursor.parentNode.removeChild(cursor);
                    }
                }
            })["useCustomCursor.useEffect"];
        }
    }["useCustomCursor.useEffect"], [
        size,
        hoverSize,
        color,
        transitionSpeed,
        smoothing
    ]);
    return cursorRef;
};
_s(useCustomCursor, "RZRA6Mr5BBb6LN5jX/QrlS8NZ24=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/assets/images/star1.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/star1.a143180a.svg");}),
"[project]/src/assets/images/star1.svg.mjs { IMAGE => \"[project]/src/assets/images/star1.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$star1$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/images/star1.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$star1$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 424,
    height: 424,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/IntroLoader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$star1$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$star1$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/images/star1.svg.mjs { IMAGE => "[project]/src/assets/images/star1.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const IntroLoader = ({ onComplete, duration = 3500 })=>{
    _s();
    // Check sessionStorage synchronously before first render
    const sessionKey = "speed-coffee-intro-seen";
    // TEMPORARY: Force show intro for testing - REMOVE THIS LINE when done testing
    if ("TURBOPACK compile-time truthy", 1) sessionStorage.removeItem(sessionKey);
    const hasSeenIntroSync = ("TURBOPACK compile-time value", "object") !== "undefined" && !!sessionStorage.getItem(sessionKey);
    const prefersReducedMotionSync = ("TURBOPACK compile-time value", "object") !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!hasSeenIntroSync && !prefersReducedMotionSync);
    const [shouldReduceMotion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(prefersReducedMotionSync);
    const [hasSeenIntro] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(hasSeenIntroSync);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "IntroLoader.useEffect": ()=>{
            // If already seen or reduced motion, skip immediately
            if (hasSeenIntroSync || prefersReducedMotionSync) {
                setIsVisible(false);
                onComplete?.();
                return;
            }
            // Mark as seen in session
            sessionStorage.setItem(sessionKey, "true");
            // Fade out after duration
            const timer = setTimeout({
                "IntroLoader.useEffect.timer": ()=>{
                    setIsVisible(false);
                    onComplete?.();
                }
            }["IntroLoader.useEffect.timer"], duration);
            return ({
                "IntroLoader.useEffect": ()=>{
                    clearTimeout(timer);
                }
            })["IntroLoader.useEffect"];
        }
    }["IntroLoader.useEffect"], [
        duration,
        onComplete,
        hasSeenIntroSync,
        prefersReducedMotionSync
    ]);
    // Skip animation if reduced motion is preferred or already seen
    if (shouldReduceMotion || hasSeenIntro || !isVisible) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "fixed inset-0 z-[9999] bg-beige flex items-center justify-center overflow-hidden",
            initial: {
                opacity: 1,
                backdropFilter: "blur(0px)"
            },
            exit: {
                opacity: 0,
                backdropFilter: "blur(20px)",
                transition: {
                    duration: 0.6,
                    ease: [
                        0,
                        0,
                        1,
                        1
                    ]
                }
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "relative",
                initial: {
                    opacity: 0,
                    scale: 0.3,
                    rotate: 0
                },
                animate: {
                    // Scene 1: Arrival → Scene 2: Scale breathing → Scene 3: Moving Away
                    opacity: [
                        0,
                        1,
                        1,
                        1,
                        0
                    ],
                    scale: [
                        0.3,
                        0.85,
                        1.1,
                        0.4,
                        0.05
                    ],
                    rotate: [
                        0,
                        180,
                        360,
                        540,
                        720
                    ]
                },
                transition: {
                    duration: duration / 1000,
                    times: [
                        0,
                        0.17,
                        0.5,
                        0.8,
                        1
                    ],
                    ease: [
                        [
                            0.4,
                            0,
                            0.2,
                            1
                        ],
                        [
                            0.4,
                            0,
                            0.6,
                            1
                        ],
                        [
                            0.4,
                            0,
                            0.6,
                            1
                        ],
                        [
                            0.5,
                            0,
                            0.8,
                            1
                        ]
                    ]
                },
                style: {
                    transformOrigin: "center center"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].img, {
                    src: typeof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$star1$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$star1$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"] === 'string' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$star1$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$star1$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$star1$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$star1$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
                    alt: "",
                    className: "relative w-full h-full object-contain",
                    style: {
                        width: "240px",
                        height: "240px"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/IntroLoader.tsx",
                    lineNumber: 94,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/IntroLoader.tsx",
                lineNumber: 66,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/IntroLoader.tsx",
            lineNumber: 56,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/IntroLoader.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(IntroLoader, "ZLqSf0IM8+G1qFEs2cNkuR30HAY=");
_c = IntroLoader;
const __TURBOPACK__default__export__ = IntroLoader;
var _c;
__turbopack_context__.k.register(_c, "IntroLoader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2d$pages$2f$Home$2f$Home$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components-pages/Home/Home.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSpeedCoffeeMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useSpeedCoffeeMotion.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCustomCursor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useCustomCursor.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$IntroLoader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/IntroLoader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Page() {
    _s();
    const rootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [introComplete, setIntroComplete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Initialize custom cursor
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCustomCursor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCustomCursor"])({
        size: 20,
        hoverSize: 40,
        color: "rgba(111, 50, 65, 0.4)",
        transitionSpeed: 0.15,
        smoothing: 0.15
    });
    // Initialize smooth scroll - pass introComplete so hook re-runs when element mounts
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSpeedCoffeeMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpeedCoffeeMotion"])(rootRef, introComplete);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$IntroLoader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onComplete: ()=>setIntroComplete(true),
                duration: 3500
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            introComplete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                ref: rootRef,
                id: "top",
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    duration: 0.6,
                    ease: "easeInOut"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2d$pages$2f$Home$2f$Home$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 37,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 30,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(Page, "p+SyxniEqqcrKH0iW8Q4t3dWHsY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCustomCursor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCustomCursor"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSpeedCoffeeMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpeedCoffeeMotion"]
    ];
});
_c = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_a7a31bd6._.js.map
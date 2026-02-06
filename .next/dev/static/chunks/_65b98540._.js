(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageProvider",
    ()=>LanguageProvider,
    "useLanguage",
    ()=>useLanguage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const useLanguage = ()=>{
    _s();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};
_s(useLanguage, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
const LanguageProvider = ({ children })=>{
    _s1();
    const [language, setLanguageState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "LanguageProvider.useState": ()=>{
            // Get language from localStorage or default to English
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const saved = localStorage.getItem("language");
            // Only use saved language if it's valid, otherwise default to English
            return saved === "cz" || saved === "en" ? saved : "en";
        }
    }["LanguageProvider.useState"]);
    const setLanguage = (lang)=>{
        setLanguageState(lang);
        localStorage.setItem("language", lang);
        // Update HTML lang attribute
        document.documentElement.lang = lang;
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LanguageProvider.useEffect": ()=>{
            // Set initial HTML lang attribute
            document.documentElement.lang = language;
        }
    }["LanguageProvider.useEffect"], [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
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
_s1(LanguageProvider, "rFssZcg1tPmnOIT/eNWucxmQCZI=");
_c = LanguageProvider;
var _c;
__turbopack_context__.k.register(_c, "LanguageProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=_65b98540._.js.map
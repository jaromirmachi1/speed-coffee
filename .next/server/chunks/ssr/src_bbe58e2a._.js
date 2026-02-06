module.exports=[33889,a=>{"use strict";a.s(["LanguageProvider",()=>c,"useLanguage",()=>d]);var b=a.i(11857);let c=(0,b.registerClientReference)(function(){throw Error("Attempted to call LanguageProvider() from the server but LanguageProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/src/contexts/LanguageContext.tsx <module evaluation>","LanguageProvider"),d=(0,b.registerClientReference)(function(){throw Error("Attempted to call useLanguage() from the server but useLanguage is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/src/contexts/LanguageContext.tsx <module evaluation>","useLanguage")},77166,a=>{"use strict";a.s(["LanguageProvider",()=>c,"useLanguage",()=>d]);var b=a.i(11857);let c=(0,b.registerClientReference)(function(){throw Error("Attempted to call LanguageProvider() from the server but LanguageProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/src/contexts/LanguageContext.tsx","LanguageProvider"),d=(0,b.registerClientReference)(function(){throw Error("Attempted to call useLanguage() from the server but useLanguage is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/src/contexts/LanguageContext.tsx","useLanguage")},34957,a=>{"use strict";a.i(33889);var b=a.i(77166);a.n(b)},27572,a=>{"use strict";var b=a.i(7997),c=a.i(34957);function d({children:a}){return(0,b.jsxs)("html",{lang:"en",children:[(0,b.jsxs)("head",{children:[(0,b.jsx)("link",{rel:"icon",type:"image/svg+xml",href:"/vite.svg"}),(0,b.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,b.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"}),(0,b.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Open+Sans:wght@400;600;700&display=swap",rel:"stylesheet"}),(0,b.jsx)("script",{dangerouslySetInnerHTML:{__html:`
              // Ensure refresh always starts at the top (unless a deep link hash is present).
              // This must run BEFORE React/Lenis mount, otherwise the browser may already restore scroll.
              (function () {
                try {
                  var hasHash = !!(window.location.hash && window.location.hash !== "#");
                  if ("scrollRestoration" in window.history && !hasHash) {
                    window.history.scrollRestoration = "manual";
                  }

                  var scrollTop = function () {
                    if (hasHash) return;
                    window.scrollTo(0, 0);
                  };

                  // Run multiple times to beat any late restoration/layout shifts.
                  scrollTop();
                  document.addEventListener("DOMContentLoaded", scrollTop, { once: true });
                  window.addEventListener("load", scrollTop, { once: true });
                  window.addEventListener("pageshow", function (e) {
                    if (!hasHash && e && e.persisted) scrollTop();
                  });
                  requestAnimationFrame(scrollTop);
                  requestAnimationFrame(function () {
                    requestAnimationFrame(scrollTop);
                  });
                } catch (e) {
                  // ignore
                }
              })();
            `}})]}),(0,b.jsx)("body",{children:(0,b.jsx)(c.LanguageProvider,{children:a})})]})}a.s(["default",()=>d,"metadata",0,{title:"Speed Coffee - Mobile Coffee Van",description:"Speed Coffee - Mobile Coffee Van"}])}];

//# sourceMappingURL=src_bbe58e2a._.js.map
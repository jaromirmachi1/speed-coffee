1:"$Sreact.fragment"
3:I[11110,["/_next/static/chunks/3ac7786262d7c7dc.js"],"LanguageProvider"]
4:I[39756,["/_next/static/chunks/2f236954d6a65e12.js"],"default"]
5:I[37457,["/_next/static/chunks/2f236954d6a65e12.js"],"default"]
6:I[47257,["/_next/static/chunks/2f236954d6a65e12.js"],"ClientPageRoot"]
7:I[52683,["/_next/static/chunks/3ac7786262d7c7dc.js","/_next/static/chunks/cca1a3499961ce7f.js","/_next/static/chunks/5a94481e146800f5.js"],"default"]
d:I[68027,["/_next/static/chunks/2f236954d6a65e12.js"],"default"]
:HL["/_next/static/chunks/fcb8ab401f916f1a.css","style"]
:HC["/",""]
:HL["/_next/static/chunks/8b729a8854940227.css","style"]
:HL["https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Open+Sans:wght@400;600;700&display=swap","style"]
2:T570,
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
            0:{"P":null,"b":"fgYlUmEWL5X9TacjUu185","c":["",""],"q":"","i":false,"f":[[["",{"children":["__PAGE__",{}]},"$undefined","$undefined",true],[["$","$1","c",{"children":[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/chunks/fcb8ab401f916f1a.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}],["$","script","script-0",{"src":"/_next/static/chunks/3ac7786262d7c7dc.js","async":true,"nonce":"$undefined"}]],["$","html",null,{"lang":"en","children":[["$","head",null,{"children":[["$","link",null,{"rel":"icon","type":"image/svg+xml","href":"/vite.svg"}],["$","link",null,{"rel":"preconnect","href":"https://fonts.googleapis.com"}],["$","link",null,{"rel":"preconnect","href":"https://fonts.gstatic.com","crossOrigin":"anonymous"}],["$","link",null,{"href":"https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Open+Sans:wght@400;600;700&display=swap","rel":"stylesheet"}],["$","script",null,{"dangerouslySetInnerHTML":{"__html":"$2"}}]]}],["$","body",null,{"children":["$","$L3",null,{"children":["$","$L4",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L5",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[[["$","title",null,{"children":"404: This page could not be found."}],["$","div",null,{"style":{"fontFamily":"system-ui,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\"","height":"100vh","textAlign":"center","display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"center"},"children":["$","div",null,{"children":[["$","style",null,{"dangerouslySetInnerHTML":{"__html":"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"}}],["$","h1",null,{"className":"next-error-h1","style":{"display":"inline-block","margin":"0 20px 0 0","padding":"0 23px 0 0","fontSize":24,"fontWeight":500,"verticalAlign":"top","lineHeight":"49px"},"children":404}],["$","div",null,{"style":{"display":"inline-block"},"children":["$","h2",null,{"style":{"fontSize":14,"fontWeight":400,"lineHeight":"49px","margin":0},"children":"This page could not be found."}]}]]}]}]],[]],"forbidden":"$undefined","unauthorized":"$undefined"}]}]}]]}]]}],{"children":[["$","$1","c",{"children":[["$","$L6",null,{"Component":"$7","serverProvidedParams":{"searchParams":{},"params":{},"promises":["$@8","$@9"]}}],[["$","link","0",{"rel":"stylesheet","href":"/_next/static/chunks/8b729a8854940227.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}],["$","script","script-0",{"src":"/_next/static/chunks/cca1a3499961ce7f.js","async":true,"nonce":"$undefined"}],"$La"],"$Lb"]}],{},null,false,false]},null,false,false],"$Lc",false]],"m":"$undefined","G":["$d",[]],"S":true}
e:I[97367,["/_next/static/chunks/2f236954d6a65e12.js"],"OutletBoundary"]
f:"$Sreact.suspense"
11:I[97367,["/_next/static/chunks/2f236954d6a65e12.js"],"ViewportBoundary"]
13:I[97367,["/_next/static/chunks/2f236954d6a65e12.js"],"MetadataBoundary"]
a:["$","script","script-1",{"src":"/_next/static/chunks/5a94481e146800f5.js","async":true,"nonce":"$undefined"}]
b:["$","$Le",null,{"children":["$","$f",null,{"name":"Next.MetadataOutlet","children":"$@10"}]}]
c:["$","$1","h",{"children":[null,["$","$L11",null,{"children":"$L12"}],["$","div",null,{"hidden":true,"children":["$","$L13",null,{"children":["$","$f",null,{"name":"Next.Metadata","children":"$L14"}]}]}],["$","meta",null,{"name":"next-size-adjust","content":""}]]}]
8:{}
9:"$0:f:0:1:1:children:0:props:children:0:props:serverProvidedParams:params"
12:[["$","meta","0",{"charSet":"utf-8"}],["$","meta","1",{"name":"viewport","content":"width=device-width, initial-scale=1"}]]
10:null
14:[["$","title","0",{"children":"Speed Coffee - Mobile Coffee Van"}],["$","meta","1",{"name":"description","content":"Speed Coffee - Mobile Coffee Van"}]]

import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { CartProvider } from "@/contexts/CartContext";
import CartModal from "@/components/CartModal";

export const metadata: Metadata = {
  title: "Speed Coffee - Mobile Coffee Van",
  description: "Speed Coffee - Mobile Coffee Van",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Open+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
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
            `,
          }}
        />
      </head>
      <body>
        <LanguageProvider>
          <CartProvider>
            {children}
            <CartModal />
          </CartProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}

import { useEffect, useRef } from "react";
import Container from "../../../components/Container";
import TextRevealLines from "../../../lib/TextRevealLines";
import scAppleGinger from "../../../assets/ScAppleGinger.webp";
import scMatchaCan from "../../../assets/ScMatchaCan.webp";
import scCoffeeProduct from "../../../assets/ScCoffeeProduct.webp";

const ProductsSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const matchaSectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    if (!section || !content) return;

    let rafId = 0;

    const update = () => {
      // Find MatchaSection to calculate when Coffee zoom completes
      const matchaSection =
        matchaSectionRef.current ||
        document.getElementById("shop") ||
        document.querySelector("section.bg-matcha");
      if (!matchaSection) {
        rafId = 0;
        return;
      }
      matchaSectionRef.current = matchaSection;

      const matchaRect = matchaSection.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const scrollable = Math.max(1, matchaRect.height - vh);
      const scrolled = -matchaRect.top;

      // CoffeeSection phases (same as CoffeeSection.tsx):
      // - Starts when matchaImgBottom <= -40 (roughly when scrolled ~0.3-0.4 through Matcha)
      // - BG_PX = 260, TEXT_PX = 220, IMAGE_PX = 600, ZOOM_PX = 520
      // - Total Coffee duration = 1600px
      // Coffee zoom completes when: coffeeStartPx + 1600px

      // Estimate when Coffee zoom completes: Matcha section is mostly done
      // Matcha section height is 520vh, so Coffee zoom completes near the end
      // Use the same scroll-based approach: fade in Products when Matcha section is ~90% scrolled
      const matchaProgress = Math.min(1, Math.max(0, scrolled / scrollable));

      // Coffee zoom completes roughly when matchaProgress reaches ~0.92
      // Fade in ProductsSection over the next 8% of scroll
      const fadeStartProgress = 0.92;
      const fadeDuration = 0.08;
      const productsFadeT = Math.min(
        1,
        Math.max(0, (matchaProgress - fadeStartProgress) / fadeDuration)
      );

      content.style.opacity = String(productsFadeT);
      rafId = 0;
    };

    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(update);
    };

    // Initial paint
    update();
    content.style.opacity = "0";

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-beige py-24">
      <Container maxWidth="7xl" className="px-4 sm:px-6 lg:px-8">
        <div ref={contentRef} style={{ opacity: 0 }}>
          <TextRevealLines>
            <h2 className="text-center text-5xl md:text-6xl lg:text-7xl font-agright font-bold text-dark mb-16 md:mb-20">
              OUR PRODUCTS
            </h2>
          </TextRevealLines>

          <div className="space-y-24 md:space-y-32">
            {/* 1. Apple & Ginger */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 md:order-1">
                <TextRevealLines>
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-agright font-bold text-dark mb-2">
                    APPLE & GINGER
                  </h3>
                </TextRevealLines>
                <TextRevealLines>
                  <p className="text-lg md:text-xl font-manuka font-semibold text-accent mb-6">
                    FRUIT POWERED BOOST
                  </p>
                </TextRevealLines>
                <TextRevealLines>
                  <p className="text-base md:text-lg font-manrope text-dark leading-relaxed mb-8">
                    APPLE GINGER JUICE MADE DIRECTLY FROM FRUIT BY COLD PRESSING
                    SELECTED APPLE VARIETIES AND NATURAL GINGER JUICE.
                  </p>
                </TextRevealLines>
                <button className="px-8 py-3 border-2 border-dark text-dark font-manrope font-semibold rounded-lg hover:bg-dark hover:text-beige transition-colors">
                  BUY NOW
                </button>
              </div>
              <div className="order-1 md:order-2 flex justify-center md:justify-end">
                <img
                  src={scAppleGinger}
                  alt="Apple & Ginger product"
                  className="w-32 h-96 object-contain"
                />
              </div>
            </div>

            {/* 2. Matcha */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 flex justify-center md:justify-start">
                <img
                  src={scMatchaCan}
                  alt="Matcha product"
                  className="w-32 h-96 object-contain"
                />
              </div>
              <div className="order-1">
                <TextRevealLines>
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-agright font-bold text-dark mb-2">
                    MATCHA
                  </h3>
                </TextRevealLines>
                <TextRevealLines>
                  <p className="text-lg md:text-xl font-manrope font-semibold text-accent mb-6">
                    PLANT POWERED BOOST
                  </p>
                </TextRevealLines>
                <TextRevealLines>
                  <p className="text-base md:text-lg font-manrope text-dark leading-relaxed mb-8">
                    NON-ALCOHOLIC CARBONATED BEVERAGE CONTAINING NATURAL
                    CAFFEINE.
                  </p>
                </TextRevealLines>
                <button className="px-8 py-3 border-2 border-dark text-dark font-manrope font-semibold rounded-lg hover:bg-dark hover:text-beige transition-colors">
                  BUY NOW
                </button>
              </div>
            </div>

            {/* 3. Speed Coffee */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 md:order-1">
                <TextRevealLines>
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-agright font-bold text-dark mb-2">
                    SPEED COFFEE
                  </h3>
                </TextRevealLines>
                <TextRevealLines>
                  <p className="text-lg md:text-xl font-manrope font-semibold text-accent mb-6">
                    PLANT POWERED BOOST
                  </p>
                </TextRevealLines>
                <TextRevealLines>
                  <p className="text-base md:text-lg font-manrope text-dark leading-relaxed mb-8">
                    NON-ALCOHOLIC CARBONATED BEVERAGE CONTAINING NATURAL
                    CAFFEINE.
                  </p>
                </TextRevealLines>
                <button className="px-8 py-3 border-2 border-dark text-dark font-manrope font-semibold rounded-lg hover:bg-dark hover:text-beige transition-colors">
                  BUY NOW
                </button>
              </div>
              <div className="order-1 md:order-2 flex justify-center md:justify-end">
                <img
                  src={scCoffeeProduct}
                  alt="Speed Coffee product"
                  className="w-32 h-96 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProductsSection;

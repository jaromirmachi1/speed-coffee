import Container from "../../../components/Container";
import TextRevealLines from "../../../lib/TextRevealLines";
import { motion, useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";
import { useLanguage } from "../../../contexts/LanguageContext";
import scAppleGinger from "../../../assets/images/ScAppleGinger.webp";
import scMatchaCan from "../../../assets/images/ScMatchaCan.webp";
import scCoffeeProduct from "../../../assets/images/ScCoffeeProduct.webp";
import {
  typography,
  fontWeights,
  lineHeights,
} from "../../../lib/constants/typography";

const ProductsSection = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement | null>(null);
  const opacity = useMotionValue(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const update = () => {
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
        const fadeProgress = Math.max(
          0,
          Math.min(1, (p - fadeStart) / (1 - fadeStart))
        );

        // Smooth fade animation (easeOut)
        const easeOut = (t: number) => 1 - Math.pow(1 - t, 2);
        const easedProgress = easeOut(fadeProgress);

        opacity.set(easedProgress);
      }
    };

    const onScroll = () => {
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [opacity]);

  return (
    <motion.section
      ref={sectionRef}
      className="bg-beige py-12 md:py-24 relative z-40"
      style={{
        opacity,
        y: 0,
        position: "relative",
      }}
    >
      <Container>
        <div>
          <h2
            className={`text-center ${typography.agright.productsMain} font-agright ${fontWeights.agright.extrabold} text-dark mb-12 md:mb-20`}
          >
            {t("products.title")}
          </h2>

          <div className="space-y-12 md:space-y-28">
            {/* 3. Speed Coffee */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 md:order-1 flex justify-center">
                <div
                  className="p-4 md:p-8 space-y-4 text-center"
                  style={{ maxWidth: "48rem" }}
                >
                  <h3
                    className={`${typography.agright.productTitle} font-agright ${fontWeights.agright.normal} text-dark mb-6 md:mb-10`}
                  >
                    {t("products.coffee.title")}
                  </h3>
                  <TextRevealLines>
                    <p
                      className={`font-manrope ${fontWeights.manrope.bold} ${typography.manrope.productSubtitle}`}
                    >
                      {t("products.coffee.subtitle")}
                    </p>
                  </TextRevealLines>
                  <div className="flex justify-center">
                    <TextRevealLines>
                      <p
                        className={`${fontWeights.manrope.normal} w-full max-w-[600px] ${typography.manrope.productDescription} font-manrope text-dark ${lineHeights.custom.body} text-center`}
                      >
                        {t("products.coffee.description")}
                      </p>
                    </TextRevealLines>
                  </div>
                  <div className="pt-4">
                    <button
                      className={`px-6 md:px-8 py-2 md:py-3 ${typography.manrope.button} border-2 border-white text-dark font-manrope ${fontWeights.manrope.bold} rounded-3xl hover:bg-white hover:text-dark transition-colors`}
                    >
                      {t("products.buyNow")}
                    </button>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2 flex justify-center ">
                <motion.img
                  src={scCoffeeProduct}
                  alt="Speed Coffee product"
                  className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] h-auto object-contain"
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                    filter: "blur(10px)",
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    filter: "blur(0px)",
                    y: 0,
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    scale: { duration: 0.6 },
                    filter: { duration: 0.5 },
                  }}
                />
              </div>
            </div>
            {/* 2. Matcha */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-1 flex justify-center md:justify-center">
                <motion.img
                  src={scMatchaCan}
                  alt="Matcha product"
                  className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] h-auto object-contain"
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                    filter: "blur(10px)",
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    filter: "blur(0px)",
                    y: 0,
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    scale: { duration: 0.6 },
                    filter: { duration: 0.5 },
                  }}
                />
              </div>
              <div className="order-2 flex justify-center">
                <div
                  className="p-4 md:p-8 space-y-4 text-center"
                  style={{ maxWidth: "48rem" }}
                >
                  <h3
                    className={`${typography.agright.productTitle} font-agright ${fontWeights.agright.normal} text-dark mb-6 md:mb-10`}
                  >
                    {t("products.matcha.title")}
                  </h3>
                  <TextRevealLines>
                    <p
                      className={`font-manrope ${fontWeights.manrope.bold} ${typography.manrope.productSubtitle}`}
                    >
                      {t("products.matcha.subtitle")}
                    </p>
                  </TextRevealLines>
                  <div className="flex justify-center">
                    <TextRevealLines>
                      <p
                        className={`${fontWeights.manrope.normal} w-full max-w-[600px] ${typography.manrope.productDescription} font-manrope text-dark ${lineHeights.custom.body} text-center`}
                      >
                        {t("products.matcha.description")}
                      </p>
                    </TextRevealLines>
                  </div>
                  <div className="pt-4">
                    <button
                      className={`px-6 md:px-8 py-2 md:py-3 ${typography.manrope.button} border-2 border-white text-dark font-manrope ${fontWeights.manrope.bold} rounded-3xl hover:bg-white hover:text-dark transition-colors`}
                    >
                      {t("products.buyNow")}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* 1. Apple & Ginger */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 md:order-1 flex justify-center">
                <div
                  className="p-4 md:p-8 space-y-4 text-center"
                  style={{ maxWidth: "48rem" }}
                >
                  <h3
                    className={`${typography.agright.productTitle} font-agright ${fontWeights.agright.normal} text-dark mb-6 md:mb-10`}
                  >
                    {t("products.appleGinger.title")}
                  </h3>
                  <TextRevealLines>
                    <p
                      className={`font-manrope ${fontWeights.manrope.bold} ${typography.manrope.productSubtitle}`}
                    >
                      {t("products.appleGinger.subtitle")}
                    </p>
                  </TextRevealLines>
                  <div className="flex justify-center">
                    <TextRevealLines>
                      <p
                        className={`${fontWeights.manrope.normal} w-full max-w-[600px] ${typography.manrope.productDescription} font-manrope text-dark ${lineHeights.custom.body} text-center`}
                      >
                        {t("products.appleGinger.description")}
                      </p>
                    </TextRevealLines>
                  </div>
                  <div className="pt-4">
                    <button
                      className={`px-6 md:px-8 py-2 md:py-3 ${typography.manrope.button} border-2 border-white text-dark font-manrope ${fontWeights.manrope.bold} rounded-3xl hover:bg-white hover:text-dark transition-colors`}
                    >
                      {t("products.buyNow")}
                    </button>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2 flex justify-center">
                <motion.img
                  src={scAppleGinger}
                  alt="Apple & Ginger product"
                  className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] h-auto object-contain"
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                    filter: "blur(10px)",
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    filter: "blur(0px)",
                    y: 0,
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    scale: { duration: 0.6 },
                    filter: { duration: 0.5 },
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </motion.section>
  );
};

export default ProductsSection;

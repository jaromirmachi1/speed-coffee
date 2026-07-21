"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin", "latin-ext"],
});

const HeroIntro = () => {
  const { t } = useLanguage();

  return (
    // NOTE: use min-height (not fixed height) so font-load reflow can’t push
    // “DISCOVER OUR SPEED” outside the section on some refreshes.
    <section className="bg-beige min-h-[70vh] px-0 md:px-[130px] py-12 md:py-[100px] -mx-4 sm:-mx-6 lg:-mx-8 md:mx-0">
      <div className="w-full max-w-full px-4 sm:px-6 lg:px-8 md:px-0 mx-auto">
        <div className="min-h-[70vh] flex flex-col">
          <div
            className="flex-1 flex items-center justify-center py-6 md:py-10 w-full"
            style={{ minWidth: 0, width: "100%" }}
          >
            <div
              className="text-center w-full"
              style={{
                width: "100%",
                maxWidth: "100%",
                minWidth: 0,
                flexBasis: "100%",
                flexShrink: 1,
                flexGrow: 0,
              }}
            >
              <motion.p
                className={`hero-intro-text text-5xl sm:text-4xl md:text-[54px] lg:text-[86px] ${bebasNeue.className} text-dark tracking-[-0.01em]`}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  width: "100%",
                  maxWidth: "100%",
                  minWidth: 0,
                  boxSizing: "border-box",
                  display: "block",
                  lineHeight: 1.32,
                  margin: 0,
                  padding: 0,
                }}
              >
                {t("heroIntro.text")}{" "}
                <span className="font-bold hero-intro-highlight">
                  {t("heroIntro.highlight")}
                </span>{" "}
                {t("heroIntro.textEnd")}
              </motion.p>
            </div>
          </div>

          <div className="text-center pb-10">
            <a
              href="#about"
              className={`inline-block text-4xl sm:text-4xl md:text-4xl lg:text-[44px] ${bebasNeue.className} text-dark leading-[2] tracking-[-0.01em] hover:text-white transition-colors`}
            >
              {t("hero.discover")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroIntro;

"use client";

import Container from "@/components/Container";
import { locations } from "../utils/locations";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import Img2and3 from "@/assets/images/twoImgs.webp";
import TextRevealLines from "@/lib/TextRevealLines";
import {
  typography,
  fontWeights,
  lineHeights,
} from "@/lib/constants/typography";

const Locations = () => {
  const { t } = useLanguage();
  return (
    <section id="events" className="py-8 md:py-16 bg-beige">
      <Container>
        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
          <div className="relative max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto md:mx-0 order-2 md:order-1">
            <motion.img
              src={typeof Img2and3 === "string" ? Img2and3 : Img2and3.src}
              alt="Speed Coffee sign and drinks"
              className="w-full h-auto object-cover"
              loading="lazy"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </div>

          <div className="text-center w-full max-w-3xl mx-auto order-1 md:order-2">
            <h2
              className={`${typography.agright.sectionHeading} font-agright ${fontWeights.agright.normal} text-dark ${lineHeights.custom.sectionHeading} mb-4 md:mb-6`}
              style={{ lineHeight: 1 }}
            >
              {t("locations.title")}
            </h2>
            <div className="space-y-6 md:space-y-8">
              <TextRevealLines>
                <p
                  className={`${typography.manrope.body} font-manrope ${fontWeights.manrope.normal} text-dark`}
                  style={{
                    fontFamily: "Manrope, sans-serif",
                    fontWeight: 400,
                    lineHeight: 1.0,
                  }}
                >
                  {locations[0]}
                </p>
              </TextRevealLines>

              <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-dark/10">
                <TextRevealLines delay={0.1}>
                  <h3
                    className={`${typography.manrope.body} font-manrope ${fontWeights.manrope.bold} text-dark uppercase mb-6 md:mb-8 tracking-wider`}
                    style={{
                      fontFamily: "Manrope, sans-serif",
                      fontWeight: 700,
                      lineHeight: 1.0,
                      letterSpacing: "0.1em",
                    }}
                  >
                    {t("locations.openingHours")}
                  </h3>
                </TextRevealLines>
                <div className="space-y-5 md:space-y-6 flex flex-col items-center w-full max-w-md mx-auto">
                  <motion.div
                    className="flex w-full min-w-[14rem] max-w-md flex-col items-center justify-center gap-2 pb-5 md:pb-6 border-b border-dark/10"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
                  >
                    <span
                      className={`${typography.manrope.body} font-manrope ${fontWeights.manrope.bold} text-dark uppercase tracking-wide whitespace-nowrap`}
                      style={{
                        fontFamily: "Manrope, sans-serif",
                        fontWeight: 700,
                        lineHeight: 1.0,
                        letterSpacing: "0.08em",
                      }}
                    >
                      {t("locations.weekdays")}
                    </span>
                    <span
                      className={`${typography.manrope.body} font-manrope ${fontWeights.manrope.normal} text-dark whitespace-nowrap`}
                      style={{
                        fontFamily: "Manrope, sans-serif",
                        fontWeight: 400,
                        lineHeight: 1.2,
                        letterSpacing: "0.02em",
                      }}
                    >
                      {t("locations.weekdaysHours")}
                    </span>
                  </motion.div>
                  <motion.div
                    className="flex w-full min-w-[14rem] max-w-md flex-col items-center justify-center gap-2"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
                  >
                    <span
                      className={`${typography.manrope.body} font-manrope ${fontWeights.manrope.bold} text-dark uppercase tracking-wide whitespace-nowrap`}
                      style={{
                        fontFamily: "Manrope, sans-serif",
                        fontWeight: 700,
                        lineHeight: 1.0,
                        letterSpacing: "0.08em",
                      }}
                    >
                      {t("locations.weekends")}
                    </span>
                    <span
                      className={`${typography.manrope.body} font-manrope ${fontWeights.manrope.normal} text-dark whitespace-nowrap`}
                      style={{
                        fontFamily: "Manrope, sans-serif",
                        fontWeight: 400,
                        lineHeight: 1.2,
                        letterSpacing: "0.02em",
                      }}
                    >
                      {t("locations.weekendsHours")}
                    </span>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Locations;

import Container from "../../../components/Container";
import { locations } from "../utils/locations";
import { useLanguage } from "../../../contexts/LanguageContext";
import { motion } from "framer-motion";
import Img2and3 from "../../../assets/twoImgs.webp";
import TextRevealLines from "../../../lib/TextRevealLines";
import {
  typography,
  fontWeights,
  lineHeights,
} from "../../../lib/constants/typography";

const Locations = () => {
  const { t } = useLanguage();
  return (
    <section id="events" className="py-8 md:py-16 bg-beige">
      <Container>
        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
          <div className="relative max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto md:mx-0">
            <motion.img
              src={Img2and3}
              alt="Speed Coffee sign and drinks"
              className="w-full h-auto object-cover"
              loading="lazy"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </div>

          <div className="text-center max-w-2xl mx-auto">
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
                <div className="space-y-5 md:space-y-6 flex flex-col items-center">
                  <motion.div
                    className="inline-flex flex-col items-center justify-center gap-3 md:gap-8 pb-5 md:pb-6 border-b border-dark/10 w-fit"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
                  >
                    <TextRevealLines delay={0.15}>
                      <div className="flex flex-col items-center">
                        <span
                          className={`${typography.manrope.body} font-manrope ${fontWeights.manrope.bold} text-dark uppercase tracking-wide mb-1`}
                          style={{
                            fontFamily: "Manrope, sans-serif",
                            fontWeight: 700,
                            lineHeight: 1.0,
                            letterSpacing: "0.08em",
                            fontSize: "0.875rem",
                          }}
                        >
                          {t("locations.weekdays")}
                        </span>
                        <span
                          className={`${typography.manrope.body} font-manrope ${fontWeights.manrope.normal} text-dark`}
                          style={{
                            fontFamily: "Manrope, sans-serif",
                            fontWeight: 400,
                            lineHeight: 1.2,
                            letterSpacing: "0.02em",
                            fontSize: "1rem",
                          }}
                        >
                          {t("locations.weekdaysHours")}
                        </span>
                      </div>
                    </TextRevealLines>
                  </motion.div>
                  <motion.div
                    className="inline-flex flex-col items-center justify-center gap-3 md:gap-8 w-fit"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
                  >
                    <TextRevealLines delay={0.2}>
                      <div className="flex flex-col items-center">
                        <span
                          className={`${typography.manrope.body} font-manrope ${fontWeights.manrope.bold} text-dark uppercase tracking-wide mb-1`}
                          style={{
                            fontFamily: "Manrope, sans-serif",
                            fontWeight: 700,
                            lineHeight: 1.0,
                            letterSpacing: "0.08em",
                            fontSize: "0.875rem",
                          }}
                        >
                          {t("locations.weekends")}
                        </span>
                        <span
                          className={`${typography.manrope.body} font-manrope ${fontWeights.manrope.normal} text-dark`}
                          style={{
                            fontFamily: "Manrope, sans-serif",
                            fontWeight: 400,
                            lineHeight: 1.2,
                            letterSpacing: "0.02em",
                            fontSize: "1rem",
                          }}
                        >
                          {t("locations.weekendsHours")}
                        </span>
                      </div>
                    </TextRevealLines>
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

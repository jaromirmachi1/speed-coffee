import Container from "../../../components/Container";
import TextRevealLines from "../../../lib/TextRevealLines";
import { useLanguage } from "../../../contexts/LanguageContext";
import { motion } from "framer-motion";
import coffeeVan from "../../../assets/images/coffeeVan.png";
import {
  typography,
  fontWeights,
  lineHeights,
} from "../../../lib/constants/typography";

const EventBooking = () => {
  const { t } = useLanguage();
  return (
    <section id="reserve" className="py-8 md:py-16 bg-beige">
      <Container>
        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center mb-8 md:mb-24">
          <div className="max-w-4xl">
            <h2
              className={`${typography.agright.sectionHeading} font-agright ${fontWeights.agright.normal} text-dark ${lineHeights.custom.sectionHeading} mb-4 md:mb-6`}
              style={{ lineHeight: 1 }}
            >
              {t("event.title")}
            </h2>
            <TextRevealLines>
              <>
                <p
                  className={`${typography.manrope.body} font-manrope ${fontWeights.manrope.normal} text-dark ${lineHeights.custom.bodyCompact} uppercase`}
                  style={{
                    fontFamily: "Manrope, sans-serif",
                    fontWeight: 400,
                    lineHeight: 1.2,
                  }}
                >
                  {t("event.description1")}
                </p>
                <p
                  className={`${typography.manrope.body} font-manrope ${fontWeights.manrope.normal} text-dark ${lineHeights.custom.bodyCompact} uppercase`}
                  style={{
                    fontFamily: "Manrope, sans-serif",
                    fontWeight: 400,
                    lineHeight: 1.2,
                  }}
                >
                  {t("event.description2")}
                </p>
              </>
            </TextRevealLines>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg max-w-4xl md:ml-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <img
                src={coffeeVan}
                alt="Outdoor event with coffee van and people"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>

        <div className="text-center">
          <p
            className={`${typography.manrope.body} font-manrope ${fontWeights.manrope.normal} text-dark mb-4 uppercase`}
            style={{
              fontFamily: "Manrope, sans-serif",
              fontWeight: 400,
              lineHeight: 1.0,
            }}
          >
            {t("event.bookUs")}
          </p>
          <button
            className={`px-6 md:px-8 py-2 md:py-3 ${typography.manrope.button} border-2 border-white text-dark font-manrope ${fontWeights.manrope.bold} rounded-3xl hover:bg-white hover:text-dark transition-colors`}
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            {t("event.here")}
          </button>
        </div>
      </Container>
    </section>
  );
};

export default EventBooking;

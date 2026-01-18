import TextRevealLines from "../../../lib/TextRevealLines";
import Container from "../../../components/Container";
import { useLanguage } from "../../../contexts/LanguageContext";
import { motion } from "framer-motion";
import aboutImg from "../../../assets/images/openSc.png";
import {
  typography,
  fontWeights,
  lineHeights,
} from "../../../lib/constants/typography";

const About = () => {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-8 md:py-16 bg-beige">
      <Container>
        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
          <div className="max-w-4xl">
            <h2
              className={`${typography.agright.sectionHeading} font-agright ${fontWeights.agright.normal} text-dark ${lineHeights.custom.sectionHeading} mb-4 md:mb-6`}
              style={{ lineHeight: 1 }}
            >
              {t("about.title")}
            </h2>
            <TextRevealLines>
              <p
                className={`${typography.manrope.body} font-manrope ${fontWeights.manrope.normal} text-dark ${lineHeights.custom.body}`}
                style={{
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: 400,
                  lineHeight: 1.0,
                }}
              >
                {t("about.description")}
              </p>
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
                src={aboutImg}
                alt="Barista holding coffee cups and pastries"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;

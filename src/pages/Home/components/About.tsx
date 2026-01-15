import TextRevealLines from "../../../lib/TextRevealLines";
import Container from "../../../components/Container";
import { useLanguage } from "../../../contexts/LanguageContext";
import { motion } from "framer-motion";
import aboutImg from "../../../assets/openSc_4x.webp";

const About = () => {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-8 md:py-16 bg-beige">
      <Container>
        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
          <div>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[64px] !font-['Agright'] font-normal text-dark leading-[1] mb-4 md:mb-6"
              style={{ lineHeight: 1 }}
            >
              {t("about.title")}
            </h2>
            <TextRevealLines>
              <p
                className="text-sm sm:text-base md:text-lg lg:text-[24px] text-dark leading-relaxed "
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

          <div className="rounded-lg overflow-hidden shadow-lg">
            <motion.img
              src={aboutImg}
              alt="Barista holding coffee cups and pastries"
              className="w-full h-auto object-cover"
              loading="lazy"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;

import TextRevealLines from "../../../lib/TextRevealLines";
import Container from "../../../components/Container";
import { useLanguage } from "../../../contexts/LanguageContext";
import aboutImg from "../../../assets/openSc_4x.webp";

const About = () => {
  const { t } = useLanguage();
  return (
    <section
      id="about"
      className="py-16 bg-beige border-t border-dashed border-gray-300"
    >
      <Container>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2
              className="text-3xl md:text-4xl  lg:text-[64px] !font-['Agright'] font-normal text-dark leading-[1] mb-6"
              style={{ lineHeight: 1 }}
            >
              {t("about.title")}
            </h2>
            <TextRevealLines>
              <p
                className="text-base md:text-lg lg:text-[24px] text-dark leading-relaxed "
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
            <img
              src={aboutImg}
              alt="Barista holding coffee cups and pastries"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;

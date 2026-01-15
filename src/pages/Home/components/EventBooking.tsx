import Container from "../../../components/Container";
import TextRevealLines from "../../../lib/TextRevealLines";
import { useLanguage } from "../../../contexts/LanguageContext";
import { motion } from "framer-motion";
import coffeeVan from "../../../assets/coffeeVan.webp";

const EventBooking = () => {
  const { t } = useLanguage();
  return (
    <section id="reserve" className="py-8 md:py-16 bg-beige">
      <Container>
        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center mb-8 md:mb-24">
          <div>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[64px] !font-['Agright'] font-normal text-dark leading-[1] mb-4 md:mb-6"
              style={{ lineHeight: 1 }}
            >
              {t("event.title")}
            </h2>
            <TextRevealLines>
              <>
                <p
                  className="text-sm sm:text-base md:text-lg lg:text-[24px] text-dark leading-[1.2] uppercase"
                  style={{
                    fontFamily: "Manrope, sans-serif",
                    fontWeight: 400,
                    lineHeight: 1.2,
                  }}
                >
                  {t("event.description1")}
                </p>
                <p
                  className="text-sm sm:text-base md:text-lg lg:text-[24px] text-dark leading-[1.2] uppercase"
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

          <div className="rounded-lg overflow-hidden shadow-lg">
            <motion.img
              src={coffeeVan}
              alt="Outdoor event with coffee van and people"
              className="w-full h-auto object-cover"
              loading="lazy"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </div>
        </div>

        <div className="text-center">
          <p
            className="text-sm sm:text-base md:text-lg lg:text-[24px] !font-['Manrope'] text-dark mb-4 uppercase"
            style={{
              fontFamily: "Manrope, sans-serif",
              fontWeight: 400,
              lineHeight: 1.0,
            }}
          >
            {t("event.bookUs")}
          </p>
          <button
            className="px-6 md:px-8 py-2 md:py-3 text-sm md:text-[18px] border-2 border-white text-dark font-manrope font-bold rounded-3xl hover:bg-white hover:text-dark transition-colors"
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

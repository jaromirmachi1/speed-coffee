import Container from "../../../components/Container";
import TextRevealLines from "../../../lib/TextRevealLines";
import { motion } from "framer-motion";
import { useLanguage } from "../../../contexts/LanguageContext";
import scAppleGinger from "../../../assets/ScAppleGinger.webp";
import scMatchaCan from "../../../assets/ScMatchaCan.webp";
import scCoffeeProduct from "../../../assets/ScCoffeeProduct.webp";

const ProductsSection = () => {
  const { t } = useLanguage();
  return (
    <section className="bg-beige py-12 md:py-24 relative z-40">
      <Container>
        <div>
          <motion.h2
            className="text-center text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-agright font-extrabold text-dark mb-12 md:mb-20"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {t("products.title")}
          </motion.h2>

          <div className="space-y-12 md:space-y-28">
            {/* 1. Apple & Ginger */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 md:order-1 flex justify-center">
                <div
                  className="p-4 md:p-8 space-y-4 text-center"
                  style={{ maxWidth: "48rem" }}
                >
                  <h3 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-agright font-normal text-dark mb-6 md:mb-10">
                    {t("products.appleGinger.title")}
                  </h3>
                  <TextRevealLines>
                    <p className="font-manrope font-bold text-base sm:text-lg md:text-[24px]">
                      {t("products.appleGinger.subtitle")}
                    </p>
                  </TextRevealLines>
                  <div className="flex justify-center">
                    <TextRevealLines>
                      <p className="font-normal w-full max-w-[600px] text-sm sm:text-base md:text-[24px] font-manrope text-dark leading-relaxed text-center">
                        {t("products.appleGinger.description")}
                      </p>
                    </TextRevealLines>
                  </div>
                  <div className="pt-4">
                    <button className="px-6 md:px-8 py-2 md:py-3 text-sm md:text-[18px] border-2 border-white text-dark font-manrope font-bold rounded-3xl hover:bg-white hover:text-dark transition-colors">
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
                  <h3 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-agright font-normal text-dark mb-6 md:mb-10">
                    {t("products.matcha.title")}
                  </h3>
                  <TextRevealLines>
                    <p className="font-manrope font-bold text-base sm:text-lg md:text-[24px]">
                      {t("products.matcha.subtitle")}
                    </p>
                  </TextRevealLines>
                  <div className="flex justify-center">
                    <TextRevealLines>
                      <p className="font-normal w-full max-w-[600px] text-sm sm:text-base md:text-[24px] font-manrope text-dark leading-relaxed text-center">
                        {t("products.matcha.description")}
                      </p>
                    </TextRevealLines>
                  </div>
                  <div className="pt-4">
                    <button className="px-6 md:px-8 py-2 md:py-3 text-sm md:text-[18px] border-2 border-white text-dark font-manrope font-bold rounded-3xl hover:bg-white hover:text-dark transition-colors">
                      {t("products.buyNow")}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Speed Coffee */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 md:order-1 flex justify-center">
                <div
                  className="p-4 md:p-8 space-y-4 text-center"
                  style={{ maxWidth: "48rem" }}
                >
                  <h3 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-agright font-normal text-dark mb-6 md:mb-10">
                    {t("products.coffee.title")}
                  </h3>
                  <TextRevealLines>
                    <p className="font-manrope font-bold text-base sm:text-lg md:text-[24px]">
                      {t("products.coffee.subtitle")}
                    </p>
                  </TextRevealLines>
                  <div className="flex justify-center">
                    <TextRevealLines>
                      <p className="font-normal w-full max-w-[600px] text-sm sm:text-base md:text-[24px] font-manrope text-dark leading-relaxed text-center">
                        {t("products.coffee.description")}
                      </p>
                    </TextRevealLines>
                  </div>
                  <div className="pt-4">
                    <button className="px-6 md:px-8 py-2 md:py-3 text-sm md:text-[18px] border-2 border-white text-dark font-manrope font-bold rounded-3xl hover:bg-white hover:text-dark transition-colors">
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
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProductsSection;

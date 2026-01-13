import Container from "../../../components/Container";
import TextRevealLines from "../../../lib/TextRevealLines";
import scAppleGinger from "../../../assets/ScAppleGinger.webp";
import scMatchaCan from "../../../assets/ScMatchaCan.webp";
import scCoffeeProduct from "../../../assets/ScCoffeeProduct.webp";

const ProductsSection = () => {
  return (
    <section className="bg-beige py-24 relative z-40">
      <Container>
        <div>
          <h2 className="text-center text-5xl md:text-6xl lg:text-7xl font-agright font-extrabold text-dark mb-16 md:mb-20">
            OUR PRODUCTS
          </h2>

          <div className="space-y-20 md:space-y-28">
            {/* 1. Apple & Ginger */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 md:order-1 flex justify-center">
                <div
                  className="p-8 space-y-4 text-center"
                  style={{ maxWidth: "48rem" }}
                >
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-agright font-normal text-dark mb-10">
                    APPLE & GINGER
                  </h3>
                  <TextRevealLines>
                    <p className="font-manrope font-bold text-[24px]">
                      FRUIT POWERED BOOST
                    </p>
                  </TextRevealLines>
                  <div className="flex justify-center">
                    <TextRevealLines>
                      <p className="font-normal w-[600px] md:text-[24px] font-manrope text-dark leading-relaxed text-center">
                        APPLE GINGER JUICE MADE DIRECTLY FROM FRUIT BY COLD
                        PRESSING SELECTED APPLE VARIETIES AND NATURAL GINGER
                        JUICE.
                      </p>
                    </TextRevealLines>
                  </div>
                  <div className="pt-4">
                    <button className="px-8 py-3 w-2xl border-2 md:text-[18px] border-white text-dark font-manrope font-bold rounded-3xl hover:bg-white hover:text-dark transition-colors">
                      BUY NOW
                    </button>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2 flex justify-center">
                <img
                  src={scAppleGinger}
                  alt="Apple & Ginger product"
                  className="w-[500px] h-auto object-contain"
                />
              </div>
            </div>

            {/* 2. Matcha */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-1 flex justify-center md:justify-center">
                <img
                  src={scMatchaCan}
                  alt="Matcha product"
                  className="w-[500px] h-auto object-contain"
                />
              </div>
              <div className="order-2 flex justify-center">
                <div
                  className="p-8 space-y-4 text-center"
                  style={{ maxWidth: "48rem" }}
                >
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-agright font-normal text-dark mb-10">
                    MATCHA
                  </h3>
                  <TextRevealLines>
                    <p className="font-manrope font-bold text-[24px]">
                      PLANT POWERED BOOST
                    </p>
                  </TextRevealLines>
                  <div className="flex justify-center">
                    <TextRevealLines>
                      <p className="font-normal w-[600px] md:text-[24px] font-manrope text-dark leading-relaxed text-center">
                        NON-ALCOHOLIC CARBONATED BEVERAGE CONTAINING NATURAL
                        CAFFEINE.
                      </p>
                    </TextRevealLines>
                  </div>
                  <div className="pt-4">
                    <button className="px-8 py-3 w-2xl border-2 md:text-[18px] border-white text-dark font-manrope font-bold rounded-3xl hover:bg-white hover:text-dark transition-colors">
                      BUY NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Speed Coffee */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 md:order-1 flex justify-center">
                <div
                  className="p-8 space-y-4 text-center"
                  style={{ maxWidth: "48rem" }}
                >
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-agright font-normal text-dark mb-10">
                    SPEED COFFEE
                  </h3>
                  <TextRevealLines>
                    <p className="font-manrope font-bold text-[24px]">
                      PLANT POWERED BOOST
                    </p>
                  </TextRevealLines>
                  <div className="flex justify-center">
                    <TextRevealLines>
                      <p className="font-normal w-[600px] md:text-[24px] font-manrope text-dark leading-relaxed text-center">
                        NON-ALCOHOLIC CARBONATED BEVERAGE CONTAINING NATURAL
                        CAFFEINE.
                      </p>
                    </TextRevealLines>
                  </div>
                  <div className="pt-4">
                    <button className="px-8 py-3 w-2xl border-2 md:text-[18px] border-white text-dark font-manrope font-bold rounded-3xl hover:bg-white hover:text-dark transition-colors">
                      BUY NOW
                    </button>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2 flex justify-center ">
                <img
                  src={scCoffeeProduct}
                  alt="Speed Coffee product"
                  className="w-[500px] h-auto object-contain"
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

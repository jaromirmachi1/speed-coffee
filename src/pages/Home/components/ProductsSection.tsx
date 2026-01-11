import Container from "../../../components/Container";
import TextRevealLines from "../../../lib/TextRevealLines";
import scAppleGinger from "../../../assets/ScAppleGinger.webp";
import scMatchaCan from "../../../assets/ScMatchaCan.webp";
import scCoffeeProduct from "../../../assets/ScCoffeeProduct.webp";

const ProductsSection = () => {
  return (
    <section className="bg-beige py-24 relative z-40">
      <Container maxWidth="7xl" className="px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-center text-5xl md:text-6xl lg:text-7xl font-agright font-bold text-dark mb-16 md:mb-20">
            OUR PRODUCTS
          </h2>

          <div className="space-y-24 md:space-y-32">
            {/* 1. Apple & Ginger */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-agright font-bold text-dark mb-2">
                  APPLE & GINGER
                </h3>
                <TextRevealLines>
                  <p className="text-lg md:text-xl font-manuka font-semibold text-accent mb-6">
                    FRUIT POWERED BOOST
                  </p>
                </TextRevealLines>
                <TextRevealLines>
                  <p className="text-base md:text-lg font-manrope text-dark leading-relaxed mb-8">
                    APPLE GINGER JUICE MADE DIRECTLY FROM FRUIT BY COLD PRESSING
                    SELECTED APPLE VARIETIES AND NATURAL GINGER JUICE.
                  </p>
                </TextRevealLines>
                <button className="px-8 py-3 border-2 border-dark text-dark font-manrope font-semibold rounded-lg hover:bg-dark hover:text-beige transition-colors">
                  BUY NOW
                </button>
              </div>
              <div className="order-1 md:order-2 flex justify-center md:justify-end">
                <img
                  src={scAppleGinger}
                  alt="Apple & Ginger product"
                  className="w-32 h-96 object-contain"
                />
              </div>
            </div>

            {/* 2. Matcha */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 flex justify-center md:justify-start">
                <img
                  src={scMatchaCan}
                  alt="Matcha product"
                  className="w-32 h-96 object-contain"
                />
              </div>
              <div className="order-1">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-agright font-bold text-dark mb-2">
                  MATCHA
                </h3>
                <TextRevealLines>
                  <p className="text-lg md:text-xl font-manrope font-semibold text-accent mb-6">
                    PLANT POWERED BOOST
                  </p>
                </TextRevealLines>
                <TextRevealLines>
                  <p className="text-base md:text-lg font-manrope text-dark leading-relaxed mb-8">
                    NON-ALCOHOLIC CARBONATED BEVERAGE CONTAINING NATURAL
                    CAFFEINE.
                  </p>
                </TextRevealLines>
                <button className="px-8 py-3 border-2 border-dark text-dark font-manrope font-semibold rounded-lg hover:bg-dark hover:text-beige transition-colors">
                  BUY NOW
                </button>
              </div>
            </div>

            {/* 3. Speed Coffee */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-agright font-bold text-dark mb-2">
                  SPEED COFFEE
                </h3>
                <TextRevealLines>
                  <p className="text-lg md:text-xl font-manrope font-semibold text-accent mb-6">
                    PLANT POWERED BOOST
                  </p>
                </TextRevealLines>
                <TextRevealLines>
                  <p className="text-base md:text-lg font-manrope text-dark leading-relaxed mb-8">
                    NON-ALCOHOLIC CARBONATED BEVERAGE CONTAINING NATURAL
                    CAFFEINE.
                  </p>
                </TextRevealLines>
                <button className="px-8 py-3 border-2 border-dark text-dark font-manrope font-semibold rounded-lg hover:bg-dark hover:text-beige transition-colors">
                  BUY NOW
                </button>
              </div>
              <div className="order-1 md:order-2 flex justify-center md:justify-end">
                <img
                  src={scCoffeeProduct}
                  alt="Speed Coffee product"
                  className="w-32 h-96 object-contain"
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

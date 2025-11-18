import TextRevealLines from "../../../lib/TextRevealLines";
import Container from "../../../components/Container";

const HeroIntro = () => {
  return (
    <section className="bg-beige h-[70vh] flex items-center justify-center">
      <Container>
        <div className="text-center max-w-4xl mx-auto mb-12">
          <TextRevealLines>
            <p className="text-lg md:text-xl lg:text-5xl font-sans text-dark leading-relaxed">
              EVERY MOMENT WITH OUR COFFEE OR MATCHA IS AN{" "}
              <span className="text-accent font-bold">
                OPPORTUNITY TO CONNECT, SHARE, AND ENJOY
              </span>{" "}
              THE POSITIVE ENERGY THAT BRIGHTENS YOUR DAY.
            </p>
          </TextRevealLines>
        </div>

        <div className="text-center">
          <a
            href="#about"
            className="mt-20 inline-block text-lg lg:text-2xl font-sans font-bold text-dark hover:text-accent transition-colors"
          >
            DISCOVER OUR SPEED
          </a>
        </div>
      </Container>
    </section>
  );
};

export default HeroIntro;

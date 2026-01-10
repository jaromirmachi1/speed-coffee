import TextRevealLines from "../../../lib/TextRevealLines";
import Container from "../../../components/Container";

const HeroIntro = () => {
  return (
    <section className="bg-beige h-[70vh] flex items-center justify-center">
      <Container className="w-full">
        <div className="text-center max-w-7xl mx-auto mb-12">
          <TextRevealLines>
            <p className="text-[96px] font-manuka font-medium text-dark leading-[0.80]">
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
            className="mt-[220px] inline-block text-lg lg:text-[64px] font-medium font-manuka font-bold text-dark hover:text-white transition-colors"
          >
            DISCOVER OUR SPEED
          </a>
        </div>
      </Container>
    </section>
  );
};

export default HeroIntro;

import TextRevealLines from "../../../lib/TextRevealLines";
import Container from "../../../components/Container";

const HeroIntro = () => {
  return (
    // NOTE: use min-height (not fixed height) so font-load reflow can’t push
    // “DISCOVER OUR SPEED” outside the section on some refreshes.
    <section className="bg-beige min-h-[70vh]">
      <Container className="w-full">
        <div className="min-h-[70vh] flex flex-col">
          <div className="flex-1 flex items-center justify-center py-10">
            <div className="text-center max-w-7xl mx-auto">
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
          </div>

          <div className="text-center pb-10">
            <a
              href="#about"
              className="inline-block text-lg lg:text-[64px] font-manuka font-bold text-dark hover:text-white transition-colors"
            >
              DISCOVER OUR SPEED
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroIntro;

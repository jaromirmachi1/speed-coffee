import TextRevealLines from "../../../lib/TextRevealLines";
import Container from "../../../components/Container";
import { useLanguage } from "../../../contexts/LanguageContext";

const HeroIntro = () => {
  const { t } = useLanguage();
  return (
    // NOTE: use min-height (not fixed height) so font-load reflow can’t push
    // “DISCOVER OUR SPEED” outside the section on some refreshes.
    <section className="bg-beige min-h-[70vh]">
      <Container className="w-full">
        <div className="min-h-[70vh] flex flex-col">
          <div className="flex-1 flex items-center justify-center py-10">
            <div className="text-center w-full max-w-none mx-auto">
              <TextRevealLines>
                <p className="text-[48px] font-manrope font-bold text-dark leading-[0.90]">
                  {t("heroIntro.text")}{" "}
                  <span className="text-accent font-bold">
                    {t("heroIntro.highlight")}
                  </span>{" "}
                  {t("heroIntro.textEnd")}
                </p>
              </TextRevealLines>
            </div>
          </div>

          <div className="text-center pb-10">
            <a
              href="#about"
              className="inline-block text-lg lg:text-[36px] font-manrope font-bold text-dark hover:text-white transition-colors"
            >
              {t("hero.discover")}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroIntro;

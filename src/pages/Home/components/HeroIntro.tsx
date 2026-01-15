import Container from "../../../components/Container";
import { useLanguage } from "../../../contexts/LanguageContext";

const HeroIntro = () => {
  const { t } = useLanguage();
  return (
    // NOTE: use min-height (not fixed height) so font-load reflow can’t push
    // “DISCOVER OUR SPEED” outside the section on some refreshes.
    <section className="bg-beige min-h-[70vh] px-4 md:px-[130px] py-12 md:py-[100px]">
      <Container className="w-full">
        <div className="min-h-[70vh] flex flex-col">
          <div className="flex-1 flex items-center justify-center py-6 md:py-10">
            <div className="text-center w-full max-w-none mx-auto">
              <p className="text-2xl sm:text-3xl md:text-[64px] lg:text-[124px] font-manuka font-bold text-dark leading-[1.1] md:leading-[0.8] lg:leading-[0.8]">
                {t("heroIntro.text")}{" "}
                <span className="text-accent font-bold">
                  {t("heroIntro.highlight")}
                </span>{" "}
                {t("heroIntro.textEnd")}
              </p>
            </div>
          </div>

          <div className="text-center pb-10">
            <a
              href="#about"
              className="inline-block text-lg lg:text-[64px] font-manuka font-bold text-dark hover:text-white transition-colors"
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

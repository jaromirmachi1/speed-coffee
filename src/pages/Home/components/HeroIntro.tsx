import Container from "../../../components/Container";
import { useLanguage } from "../../../contexts/LanguageContext";
import TextRevealLines from "../../../lib/TextRevealLines";
import {
  fontWeights,
  lineHeights,
} from "../../../lib/constants/typography";

const HeroIntro = () => {
  const { t } = useLanguage();
  return (
    // NOTE: use min-height (not fixed height) so font-load reflow can’t push
    // “DISCOVER OUR SPEED” outside the section on some refreshes.
    <section className="bg-beige min-h-[70vh] px-0 md:px-[130px] py-12 md:py-[100px]">
      <Container className="w-full max-w-full px-4 md:px-0">
        <div className="min-h-[70vh] flex flex-col">
          <div className="flex-1 flex items-center justify-center py-6 md:py-10 w-full">
            <div className="text-center w-full max-w-full mx-auto" style={{ width: '100%', minWidth: 0 }}>
              <TextRevealLines>
                <p
                  className={`text-5xl sm:text-4xl md:text-[64px] lg:text-[104px] font-manuka ${fontWeights.manuka.bold} text-dark ${lineHeights.custom.heroIntro}`}
                  style={{ 
                    width: '100%', 
                    maxWidth: '100%',
                    minWidth: 0,
                    boxSizing: 'border-box'
                  }}
                >
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
              className={`inline-block text-4xl sm:text-4xl md:text-4xl lg:text-[64px] font-manuka ${fontWeights.manuka.bold} text-dark hover:text-white transition-colors`}
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

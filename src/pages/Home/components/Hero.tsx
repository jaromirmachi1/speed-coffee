import headerph from "../../../assets/images/mainPh.webp";
import TextReveal from "../../../lib/TextReveal";
import Container from "../../../components/Container";
import { useImageReveal } from "../hooks/useImageReveal";
import {
  typography,
  fontWeights,
  lineHeights,
} from "../../../lib/constants/typography";

const Hero = () => {
  const imageRef = useImageReveal();

  return (
    <section className="bg-beige -mt-8">
      <Container>
        <div className="pt-0 pb-0 hidden sm:block">
          <TextReveal animateOnScroll={false} delay={0.3}>
            <h1
              className={`text-dark uppercase flex justify-between items-center w-full font-manuka ${typography.manuka.hero} ${fontWeights.manuka.medium} ${lineHeights.custom.hero}`}
            >
              <span>SPEED</span>
              <span>COFFEE</span>
            </h1>
          </TextReveal>
        </div>

        <div className="pb-16">
          <div className="-mt-1">
            <div
              ref={imageRef}
              className="rounded-2xl overflow-hidden shadow-lg h-[calc(100vh-300px)]"
            >
              <img
                src={headerph}
                alt="Speed Coffee mobile van with chalkboard sign"
                className="w-full h-full object-cover lg:object-[center_center]"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;

import headerph from "../../../assets/headerph.png";
import TextReveal from "../../../lib/TextReveal";
import Container from "../../../components/Container";
import { useImageReveal } from "../hooks/useImageReveal";

const Hero = () => {
  const imageRef = useImageReveal();

  return (
    <section className="bg-beige -mt-8">
      <Container>
        <div className="pt-0 pb-0">
          <TextReveal animateOnScroll={false} delay={0.3}>
            <h1
              className="text-dark uppercase flex justify-between items-center w-full font-manuka font-medium leading-none"
              style={{ fontSize: "clamp(120px, 20vw, 330px)" }}
            >
              <span>SPEED</span>
              <span>COFFEE</span>
            </h1>
          </TextReveal>
        </div>

        <div className="pb-16">
          <div className="-mt-2">
            <div
              ref={imageRef}
              className="rounded-lg overflow-hidden shadow-lg h-[calc(100vh-300px)]"
            >
              <img
                src={headerph}
                alt="Speed Coffee mobile van with chalkboard sign"
                className="w-full h-auto object-cover"
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

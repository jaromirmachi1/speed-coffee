"use client";

import headerph from "@/assets/images/mainPh.webp";
import TextReveal from "@/lib/TextReveal";
import Container from "@/components/Container";
import { useImageReveal } from "../hooks/useImageReveal";
import {
  typography,
  fontWeights,
  lineHeights,
} from "@/lib/constants/typography";

const Hero = () => {
  const imageRef = useImageReveal();

  return (
    <section className="bg-beige -mt-10">
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

        <div className="pb-16 md:pb-16">
          <div className="-mt-1 pt-12 md:pt-0">
            <div
              ref={imageRef}
              className="rounded-2xl overflow-hidden shadow-lg h-[85vh] md:h-[calc(100vh-300px)] w-full max-w-md mx-auto md:max-w-none md:mx-0"
            >
              <img
                src={typeof headerph === "string" ? headerph : headerph.src}
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

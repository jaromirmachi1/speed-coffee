"use client";

import TextRevealLines from "@/lib/TextRevealLines";
import Container from "@/components/Container";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useRef, useState } from "react";
import aboutImg from "@/assets/images/openSc.png";
import {
  typography,
  fontWeights,
  lineHeights,
} from "@/lib/constants/typography";

const About = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);
  return (
    <section id="about" className="py-8 md:py-16 bg-beige">
      <Container>
        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
          <div className="max-w-4xl">
            <h2
              className={`${typography.agright.sectionHeading} font-agright ${fontWeights.agright.normal} text-dark ${lineHeights.custom.sectionHeading} mb-4 md:mb-6`}
              style={{ lineHeight: 1 }}
            >
              {t("about.title")}
            </h2>
            <TextRevealLines>
              <p
                className={`${typography.manrope.body} font-manrope ${fontWeights.manrope.normal} text-dark ${lineHeights.custom.body}`}
                style={{
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: 400,
                  lineHeight: 1.0,
                }}
              >
                {t("about.description")}
              </p>
            </TextRevealLines>
          </div>

          <div
            ref={imgRef}
            className={`rounded-lg overflow-hidden shadow-lg max-w-4xl md:ml-auto transition-all duration-[600ms] ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
          >
            <img
              src={typeof aboutImg === 'string' ? aboutImg : aboutImg.src}
              alt="Barista holding coffee cups and pastries"
              className="w-full h-auto object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;

"use client";

import { useRef } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCustomCursor } from "@/hooks/useCustomCursor";
import { useSpeedCoffeeMotion } from "@/hooks/useSpeedCoffeeMotion";
import { typography, fontWeights } from "@/lib/constants/typography";

export default function CookiesPage() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const { t } = useLanguage();

  useCustomCursor({
    size: 20,
    hoverSize: 40,
    color: "rgba(139, 90, 60, 0.4)",
    transitionSpeed: 0.15,
    smoothing: 0.15,
  });
  useSpeedCoffeeMotion(rootRef, true);

  return (
    <div ref={rootRef} className="min-h-screen bg-beige flex flex-col">
      <Header />
      <main className="flex-1 py-16 md:py-24">
        <Container className="px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h1
            className={`${typography.agright.sectionHeading} font-agright ${fontWeights.agright.normal} text-dark mb-4`}
          >
            {t("cookies.title")}
          </h1>
          <p className="font-manrope text-dark/60 text-sm mb-2">
            {t("cookies.updated")}: {t("cookies.updatedDate")}
          </p>
          <p className="font-manrope text-dark/75 text-sm md:text-base mb-10">
            {t("cookies.intro")}
          </p>

          <section className="space-y-5">
            <article className="p-6 md:p-8 bg-white/40 rounded-2xl border border-dark/10">
              <h2 className={`font-manrope ${fontWeights.manrope.bold} text-dark mb-2`}>
                {t("cookies.essentialTitle")}
              </h2>
              <p className="font-manrope text-dark/80 text-sm md:text-base">
                {t("cookies.essentialText")}
              </p>
            </article>

            <article className="p-6 md:p-8 bg-white/40 rounded-2xl border border-dark/10">
              <h2 className={`font-manrope ${fontWeights.manrope.bold} text-dark mb-2`}>
                {t("cookies.analyticsTitle")}
              </h2>
              <p className="font-manrope text-dark/80 text-sm md:text-base">
                {t("cookies.analyticsText")}
              </p>
            </article>

            <article className="p-6 md:p-8 bg-white/40 rounded-2xl border border-dark/10">
              <h2 className={`font-manrope ${fontWeights.manrope.bold} text-dark mb-2`}>
                {t("cookies.marketingTitle")}
              </h2>
              <p className="font-manrope text-dark/80 text-sm md:text-base">
                {t("cookies.marketingText")}
              </p>
            </article>

            <article className="p-6 md:p-8 bg-white/40 rounded-2xl border border-dark/10">
              <h2 className={`font-manrope ${fontWeights.manrope.bold} text-dark mb-2`}>
                {t("cookies.manageTitle")}
              </h2>
              <p className="font-manrope text-dark/80 text-sm md:text-base">
                {t("cookies.manageText")}
              </p>
            </article>
          </section>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

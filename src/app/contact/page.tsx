"use client";

import { useRef } from "react";
import Link from "next/link";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCustomCursor } from "@/hooks/useCustomCursor";
import { useSpeedCoffeeMotion } from "@/hooks/useSpeedCoffeeMotion";
import { typography, fontWeights } from "@/lib/constants/typography";

export default function ContactPage() {
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
            {t("contact.title")}
          </h1>
          <p className="font-manrope text-dark/75 text-sm md:text-base mb-10">
            {t("contact.intro")}
          </p>

          <section className="p-6 md:p-8 bg-white/40 rounded-2xl border border-dark/10">
            <ul className="space-y-5">
              <li className="font-manrope text-dark">
                <p className="text-xs uppercase tracking-wide text-dark/60 mb-1">
                  {t("contact.emailLabel")}
                </p>
                <a
                  href="mailto:orders@speedcoffee.shop"
                  className="underline underline-offset-4 hover:text-accent transition-colors"
                >
                  orders@speedcoffee.shop
                </a>
              </li>

              <li className="font-manrope text-dark">
                <p className="text-xs uppercase tracking-wide text-dark/60 mb-1">
                  {t("contact.phoneLabel")}
                </p>
                <a
                  href="tel:+420605295099"
                  className="underline underline-offset-4 hover:text-accent transition-colors"
                >
                  +420 605 295 099
                </a>
              </li>

              <li className="font-manrope text-dark">
                <p className="text-xs uppercase tracking-wide text-dark/60 mb-1">
                  {t("contact.instagramLabel")}
                </p>
                <a
                  href="https://www.instagram.com/speedcoffeehouse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-accent transition-colors"
                >
                  @speedcoffeehouse
                </a>
              </li>

              <li className="font-manrope text-dark">
                <p className="text-xs uppercase tracking-wide text-dark/60 mb-1">
                  {t("contact.addressLabel")}
                </p>
                <p>{t("contact.addressValue")}</p>
              </li>
            </ul>
          </section>

          <section className="mt-6 p-6 md:p-8 bg-white/40 rounded-2xl border border-dark/10">
            <h2
              className={`${typography.manrope.body} font-manrope ${fontWeights.manrope.bold} text-dark mb-4 uppercase tracking-wide`}
            >
              {t("contact.legalTitle")}
            </h2>
            <ul className="space-y-3">
              <li className="font-manrope text-dark">
                <p className="text-xs uppercase tracking-wide text-dark/60 mb-1">
                  {t("contact.businessNameLabel")}
                </p>
                <p>Michaela Sedláková</p>
              </li>
              <li className="font-manrope text-dark">
                <p className="text-xs uppercase tracking-wide text-dark/60 mb-1">
                  {t("contact.icoLabel")}
                </p>
                <p>22332570</p>
              </li>
              <li className="font-manrope text-dark">
                <p className="text-xs uppercase tracking-wide text-dark/60 mb-1">
                  {t("contact.taxOfficeLabel")}
                </p>
                <p>Finanční úřad Brno I</p>
              </li>
              <li className="font-manrope text-dark">
                <p className="text-xs uppercase tracking-wide text-dark/60 mb-1">
                  {t("contact.legalFormLabel")}
                </p>
                <p>Fyzická osoba podnikající dle živnostenského zákona</p>
              </li>
            </ul>
          </section>

          <Link
            href="/form"
            className={`inline-block mt-8 py-3 px-6 ${typography.manrope.button} font-manrope ${fontWeights.manrope.bold} rounded-full bg-dark text-beige hover:bg-dark/90 transition-colors`}
          >
            {t("nav.reserve")}
          </Link>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

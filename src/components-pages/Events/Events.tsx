"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/Container";
import { useLanguage } from "@/contexts/LanguageContext";
import type { EventDisplay } from "@/types/event";
import {
  typography,
  fontWeights,
} from "@/lib/constants/typography";

function EventCard({
  event,
  learnMoreLabel,
  pastLabel,
  index,
}: {
  event: EventDisplay;
  learnMoreLabel: string;
  pastLabel: string;
  index: number;
}) {
  const cardContent = (
    <article
      className={`group relative overflow-hidden rounded-3xl bg-dark/5 ${
        event.featured ? "md:col-span-2 md:row-span-2" : ""
      }`}
    >
      <div
        className={`relative w-full overflow-hidden ${
          event.featured ? "aspect-[16/10] md:aspect-auto md:min-h-[520px]" : "aspect-[4/5]"
        }`}
      >
        {event.image ? (
          <img
            src={event.image}
            alt={event.alt}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading={index < 3 ? "eager" : "lazy"}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[#BEA791]/30">
            <span className="font-agright text-5xl text-dark/20">SC</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-dark/85 via-dark/25 to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-beige/95 px-3 py-1 font-manrope text-[11px] font-semibold uppercase tracking-wide text-dark">
              {event.dateLabel}
            </span>
            {event.isPast && (
              <span className="rounded-full border border-beige/40 px-3 py-1 font-manrope text-[11px] uppercase tracking-wide text-beige/80">
                {pastLabel}
              </span>
            )}
          </div>

          <h3
            className={`font-agright ${fontWeights.agright.normal} text-beige ${
              event.featured
                ? "text-4xl md:text-6xl lg:text-7xl"
                : "text-3xl md:text-4xl"
            }`}
          >
            {event.title}
          </h3>

          {event.location && (
            <p className="mt-2 font-manrope text-sm text-beige/80 md:text-base">
              {event.location}
            </p>
          )}

          {event.description && (
            <p
              className={`mt-3 font-manrope text-beige/75 ${
                event.featured ? "max-w-2xl text-sm md:text-base" : "line-clamp-2 text-sm"
              }`}
            >
              {event.description}
            </p>
          )}

          {event.externalUrl && (
            <span className="mt-5 inline-flex items-center gap-2 font-manrope text-sm font-semibold uppercase tracking-wide text-beige underline underline-offset-4">
              {event.linkLabel || learnMoreLabel}
              <span aria-hidden className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </span>
          )}
        </div>
      </div>
    </article>
  );

  if (event.externalUrl) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
      >
        <a
          href={event.externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-dark/30 rounded-3xl"
        >
          {cardContent}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      {cardContent}
    </motion.div>
  );
}

const Events = () => {
  const { language, t } = useLanguage();
  const [events, setEvents] = useState<EventDisplay[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadEvents() {
      try {
        setIsLoading(true);
        const res = await fetch(`/api/events?lang=${language}`, { cache: "no-store" });
        const data = await res.json();
        if (!res.ok || !data?.ok) {
          throw new Error(data?.error || "Failed to fetch events");
        }
        setEvents(Array.isArray(data.events) ? data.events : []);
      } catch (error) {
        console.error("Failed to load events:", error);
        setEvents([]);
      } finally {
        setIsLoading(false);
      }
    }

    loadEvents();
  }, [language]);

  const { upcoming, past } = useMemo(() => {
    const upcomingEvents = events.filter((event) => !event.isPast);
    const pastEvents = events.filter((event) => event.isPast);
    return { upcoming: upcomingEvents, past: pastEvents };
  }, [events]);

  if (isLoading) {
    return (
      <section className="bg-beige py-16 md:py-24 lg:py-32">
        <Container className="px-4 sm:px-6 lg:px-8">
          <div className="flex min-h-[400px] items-center justify-center">
            <p className="font-manrope text-dark">{t("events.loading")}</p>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="bg-beige py-16 md:py-24 lg:py-32">
      <Container className="px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 lg:mb-20"
        >
          <h1
            className={`${typography.agright.sectionHeading} font-agright ${fontWeights.agright.normal} text-dark mb-4`}
          >
            {t("events.title")}
          </h1>
          <p className="max-w-2xl font-manrope text-dark/70 text-sm md:text-base">
            {t("events.subtitle")}
          </p>
        </motion.div>

        {events.length === 0 ? (
          <div className="rounded-3xl border border-dark/10 bg-white/30 px-6 py-16 text-center">
            <p className="font-manrope text-dark">{t("events.empty")}</p>
            <Link
              href="/form"
              className={`mt-6 inline-flex items-center justify-center rounded-full bg-dark px-6 py-3 font-manrope ${fontWeights.manrope.bold} text-beige transition-colors hover:bg-dark/90`}
            >
              {t("nav.reserve")}
            </Link>
          </div>
        ) : (
          <div className="space-y-16 md:space-y-20">
            {upcoming.length > 0 && (
              <div>
                <h2
                  className={`mb-8 font-manrope ${fontWeights.manrope.bold} text-xs uppercase tracking-[0.2em] text-dark/50`}
                >
                  {t("events.upcoming")}
                </h2>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
                  {upcoming.map((event, index) => (
                    <EventCard
                      key={event.id}
                      event={event}
                      index={index}
                      learnMoreLabel={t("events.learnMore")}
                      pastLabel={t("events.pastBadge")}
                    />
                  ))}
                </div>
              </div>
            )}

            {past.length > 0 && (
              <div>
                <h2
                  className={`mb-8 font-manrope ${fontWeights.manrope.bold} text-xs uppercase tracking-[0.2em] text-dark/50`}
                >
                  {t("events.past")}
                </h2>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
                  {past.map((event, index) => (
                    <EventCard
                      key={event.id}
                      event={event}
                      index={index}
                      learnMoreLabel={t("events.learnMore")}
                      pastLabel={t("events.pastBadge")}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        <div className="mt-16 md:mt-20 rounded-3xl border border-dark/10 bg-[#BEA791]/20 px-6 py-10 md:px-10 text-center">
          <p className="font-manrope text-dark/80 mb-5">{t("events.cta")}</p>
          <Link
            href="/form"
            className={`inline-flex items-center justify-center rounded-full border-2 border-dark px-8 py-3 font-manrope ${fontWeights.manrope.bold} text-dark transition-colors hover:bg-dark hover:text-beige`}
          >
            {t("nav.reserve")}
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Events;

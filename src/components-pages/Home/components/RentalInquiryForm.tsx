"use client";

import { useState, type FormEvent } from "react";
import Container from "@/components/Container";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  typography,
  fontWeights,
  lineHeights,
} from "@/lib/constants/typography";

type Variant = "trailer" | "event";

export default function RentalInquiryForm() {
  const { t } = useLanguage();
  const [variant, setVariant] = useState<Variant>("trailer");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatusMessage(null);
    setErrorMessage(null);
    setIsSubmitting(true);

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);

      const payload = {
        name: formData.get("name")?.toString() ?? "",
        email: formData.get("email")?.toString() ?? "",
        company: formData.get("company")?.toString() ?? "",
        variant: formData.get("variant")?.toString() as Variant,
        country: formData.get("country")?.toString() ?? "",
        city: formData.get("city")?.toString() ?? "",
        dateFrom: formData.get("dateFrom")?.toString() ?? "",
        dateTo: formData.get("dateTo")?.toString() ?? "",
        note: formData.get("note")?.toString() ?? "",
      };

      const res = await fetch("/api/rental-inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? t("form.rental.errorSend"));
      }

      setStatusMessage(t("form.rental.success"));
      form.reset();
      setVariant("trailer");
    } catch (error) {
      console.error(error);
      setErrorMessage(
        error instanceof Error ? error.message : t("form.rental.error"),
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-beige py-12 md:py-20">
      <Container className="max-w-4xl">
        <div className="mb-8 md:mb-10 text-center">
          <h2
            className={`font-agright ${fontWeights.agright.normal} text-dark ${typography.agright.sectionHeading} ${lineHeights.custom.sectionHeading}`}
          >
            {t("form.rental.title")}
          </h2>
          <p
            className={`mt-3 md:mt-4 font-manrope ${fontWeights.manrope.normal} text-dark/70 ${typography.manrope.body} ${lineHeights.custom.bodyCompact} uppercase`}
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            {t("form.rental.subtitle")}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 md:space-y-8 font-manrope"
        >
          <input type="hidden" name="variant" value={variant} />
          <div className="grid gap-4 md:gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase text-dark/70">
                {t("form.rental.name")}
              </label>
              <input
                type="text"
                required
                name="name"
                className="w-full rounded-xl border border-dark/20 bg-beige px-3 py-2.5 text-sm sm:text-base text-dark placeholder:text-dark/30 focus:outline-none focus:ring-2 focus:ring-dark/30 focus:border-dark"
                placeholder="Jan Novák"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase text-dark/70">
                {t("form.rental.email")}
              </label>
              <input
                type="email"
                required
                name="email"
                className="w-full rounded-xl border border-dark/20 bg-beige px-3 py-2.5 text-sm sm:text-base text-dark placeholder:text-dark/30 focus:outline-none focus:ring-2 focus:ring-dark/30 focus:border-dark"
                placeholder="jan@example.com"
              />
            </div>
          </div>

          <div className="grid gap-4 md:gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase text-dark/70">
                {t("form.rental.company")}
              </label>
              <input
                type="text"
                name="company"
                className="w-full rounded-xl border border-dark/20 bg-beige px-3 py-2.5 text-sm sm:text-base text-dark placeholder:text-dark/30 focus:outline-none focus:ring-2 focus:ring-dark/30 focus:border-dark"
                placeholder="Speed Coffee s.r.o."
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase text-dark/70">
                {t("form.rental.interested")}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setVariant("trailer")}
                  className={`w-full rounded-3xl border-2 px-4 py-2.5 text-xs sm:text-sm md:text-base uppercase tracking-[0.16em] transition-colors ${
                    variant === "trailer"
                      ? "bg-dark text-beige border-dark"
                      : "bg-beige text-dark border-dark/40 hover:bg-dark hover:text-beige hover:border-dark"
                  }`}
                >
                  {t("form.rental.variantTrailer")}
                </button>
                <button
                  type="button"
                  onClick={() => setVariant("event")}
                  className={`w-full rounded-3xl border-2 px-4 py-2.5 text-xs sm:text-sm md:text-base uppercase tracking-[0.16em] transition-colors ${
                    variant === "event"
                      ? "bg-dark text-beige border-dark"
                      : "bg-beige text-dark border-dark/40 hover:bg-dark hover:text-beige hover:border-dark"
                  }`}
                >
                  {t("form.rental.variantEvent")}
                </button>
              </div>
            </div>
          </div>

          {variant === "trailer" && (
            <div className="grid gap-4 md:gap-6 md:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase text-dark/70">
                  {t("form.rental.country")}
                </label>
                <input
                  type="text"
                  name="country"
                  className="w-full rounded-xl border border-dark/20 bg-beige px-3 py-2.5 text-sm sm:text-base text-dark placeholder:text-dark/30 focus:outline-none focus:ring-2 focus:ring-dark/30 focus:border-dark"
                  placeholder="Česká republika"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase text-dark/70">
                  {t("form.rental.city")}
                </label>
                <input
                  type="text"
                  name="city"
                  className="w-full rounded-xl border border-dark/20 bg-beige px-3 py-2.5 text-sm sm:text-base text-dark placeholder:text-dark/30 focus:outline-none focus:ring-2 focus:ring-dark/30 focus:border-dark"
                  placeholder="Praha"
                />
              </div>
            </div>
          )}

          <div className="grid gap-4 md:gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase text-dark/70">
                {t("form.rental.dateFrom")}
              </label>
              <input
                type="date"
                name="dateFrom"
                className="w-full rounded-xl border border-dark/20 bg-beige px-3 py-2.5 text-sm sm:text-base text-dark placeholder:text-dark/30 focus:outline-none focus:ring-2 focus:ring-dark/30 focus:border-dark"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase text-dark/70">
                {t("form.rental.dateTo")}
              </label>
              <input
                type="date"
                name="dateTo"
                className="w-full rounded-xl border border-dark/20 bg-beige px-3 py-2.5 text-sm sm:text-base text-dark placeholder:text-dark/30 focus:outline-none focus:ring-2 focus:ring-dark/30 focus:border-dark"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase text-dark/70">
              {t("form.rental.note")}
            </label>
            <textarea
              rows={4}
              name="note"
              className="w-full rounded-xl border border-dark/20 bg-beige px-3 py-2.5 text-sm sm:text-base text-dark placeholder:text-dark/30 focus:outline-none focus:ring-2 focus:ring-dark/30 focus:border-dark resize-none"
            />
          </div>

          <div className="pt-2 text-center md:text-right space-y-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`inline-flex items-center justify-center px-8 md:px-10 py-3 md:py-3.5 rounded-full border-2 border-dark bg-transparent text-dark hover:bg-white hover:text-dark transition-colors font-manrope ${fontWeights.manrope.bold} ${typography.manrope.button} tracking-[0.2em] uppercase ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : ""
              }`}
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              {isSubmitting ? t("form.rental.submitting") : t("form.rental.submit")}
            </button>
            {statusMessage && (
              <p className="text-xs sm:text-sm text-green-700 text-center md:text-right">
                {statusMessage}
              </p>
            )}
            {errorMessage && (
              <p className="text-xs sm:text-sm text-red-700 text-center md:text-right">
                {errorMessage}
              </p>
            )}
          </div>
        </form>
      </Container>
    </section>
  );
}

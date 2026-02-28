"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCart } from "@/contexts/CartContext";
import { fetchProduct } from "@/app/actions/products";
import type { ProductDisplay } from "@/types/product";
import { useSpeedCoffeeMotion } from "@/hooks/useSpeedCoffeeMotion";
import { useCustomCursor } from "@/hooks/useCustomCursor";
import {
  typography,
  fontWeights,
  lineHeights,
} from "@/lib/constants/typography";
import { motion } from "framer-motion";
import { FaLeaf, FaBolt, FaMugHot } from "react-icons/fa6";

export default function ProductPage() {
  const params = useParams();
  const router = useRouter();
  const rootRef = useRef<HTMLDivElement | null>(null);
  const { language, t } = useLanguage();
  const { addItem } = useCart();
  const [product, setProduct] = useState<ProductDisplay | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const id = typeof params.id === "string" ? params.id : null;

  useCustomCursor({
    size: 20,
    hoverSize: 40,
    color: "rgba(139, 90, 60, 0.4)",
    transitionSpeed: 0.15,
    smoothing: 0.15,
  });
  useSpeedCoffeeMotion(rootRef, true);

  useEffect(() => {
    if (!id) {
      setIsLoading(false);
      return;
    }
    async function load() {
      try {
        setIsLoading(true);
        const p = await fetchProduct(id, language);
        setProduct(p);
      } catch (e) {
        console.error(e);
        setProduct(null);
      } finally {
        setIsLoading(false);
      }
    }
    load();
  }, [id, language]);

  const handleAddToCart = () => {
    if (product) {
      addItem(product);
      router.push("/checkout");
    }
  };

  if (!id || (!isLoading && !product)) {
    return (
      <div ref={rootRef} className="min-h-screen bg-beige">
        <Header />
        <main className="flex-1 py-24">
          <Container className="px-4 sm:px-6 lg:px-8">
            <p className="font-manrope text-dark">Product not found.</p>
            <Link
              href="/shop"
              className="mt-4 inline-block font-manrope font-bold text-dark underline hover:text-accent"
            >
              Back to shop
            </Link>
          </Container>
        </main>
        <Footer />
      </div>
    );
  }

  if (isLoading) {
    return (
      <div ref={rootRef} className="min-h-screen bg-beige">
        <Header />
        <main className="flex min-h-[50vh] items-center justify-center py-24">
          <p className="font-manrope text-dark">Loading...</p>
        </main>
        <Footer />
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 14 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div ref={rootRef} className="min-h-screen bg-beige flex flex-col">
      <Header />
      <main className="flex-1 py-8 md:py-12 lg:py-20">
        <Container className="px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="mb-10 md:mb-14"
          >
            <Link
              href="/shop"
              className="group inline-flex items-center gap-2 font-manrope text-dark/60 hover:text-dark text-xs uppercase tracking-[0.2em] transition-colors"
            >
              <span className="w-6 h-px bg-dark/30 group-hover:bg-dark transition-colors" />
              {t("products.title")}
            </Link>
          </motion.div>

          <motion.article
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-start"
          >
            {/* Image – asymmetric, with decorative frame */}
            <motion.div
              variants={itemVariants}
              className="relative lg:col-span-6 lg:col-start-1 order-2 lg:order-1"
            >
              <div className="absolute -inset-4 sm:-inset-6 rounded-3xl bg-dark/5 -z-10" />
              <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none w-full rounded-2xl overflow-hidden shadow-[0_24px_48px_-12px_rgba(34,34,34,0.12)]">
                <img
                  src={product!.image}
                  alt={product!.alt}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-dark/10 to-transparent pointer-events-none" />
              </div>
              <div className="absolute -bottom-2 -right-2 w-24 h-24 rounded-full bg-accent/10 -z-10 hidden sm:block" />
            </motion.div>

            {/* Content – editorial column */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col lg:col-span-6 lg:col-start-7 order-1 lg:order-2 lg:pt-6 lg:gap-0"
            >
              <motion.span
                variants={itemVariants}
                className="font-manrope text-[10px] sm:text-xs uppercase tracking-[0.25em] text-accent mb-4 md:mb-5 lg:mb-6 block"
              >
                Product
              </motion.span>
              <motion.h1
                variants={itemVariants}
                className={`font-agright ${fontWeights.agright.normal} text-dark leading-[0.95] tracking-tight ${typography.agright.productTitle} mb-6 md:mb-8 lg:mb-10`}
              >
                {product!.title}
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className={`font-manrope ${fontWeights.manrope.bold} text-dark/80 uppercase tracking-[0.15em] text-sm sm:text-base mb-8 md:mb-10 lg:mb-12 leading-relaxed ${lineHeights.relaxed}`}
              >
                {product!.subtitle}
              </motion.p>
              {product!.description && (
                <motion.p
                  variants={itemVariants}
                  className={`font-manrope ${fontWeights.manrope.normal} text-dark/70 ${lineHeights.relaxed} text-sm sm:text-base leading-relaxed mb-8 md:mb-12 lg:mb-14`}
                >
                  {product!.description}
                </motion.p>
              )}

              {/* Advantages – minimal, editorial, artsy */}
              <motion.div
                variants={itemVariants}
                className="mb-10 md:mb-14 lg:mb-16 relative pl-4 sm:pl-5 border-l border-dark/10"
              >
                {/* Accent cap on the left rule */}
                <span className="absolute left-0 top-0 w-px h-5 sm:h-6 bg-accent/50" aria-hidden />
                <div className="flex flex-col gap-0">
                  <div className="flex items-start gap-4 py-5 sm:py-6 md:py-7 lg:py-8 first:pt-6 md:first:pt-8">
                    <span className="flex-shrink-0 text-dark/30 mt-0.5" aria-hidden>
                      <FaLeaf className="w-[15px] h-[15px] sm:w-4 sm:h-4" />
                    </span>
                    <div>
                      <p className="font-manrope font-bold text-dark/80 text-[10px] sm:text-[11px] uppercase tracking-[0.25em] mb-1.5">
                        {t("products.advantages.greenTea.title")}
                      </p>
                      <p className="font-manrope font-normal text-dark/50 text-xs sm:text-sm leading-relaxed italic">
                        {t("products.advantages.greenTea.text")}
                      </p>
                    </div>
                  </div>
                  <span className="block w-full max-w-[48px] h-px bg-dark/[0.06] my-0.5" aria-hidden />
                  <div className="flex items-start gap-4 py-5 sm:py-6 md:py-7 lg:py-8">
                    <span className="flex-shrink-0 text-dark/30 mt-0.5" aria-hidden>
                      <FaBolt className="w-[15px] h-[15px] sm:w-4 sm:h-4" />
                    </span>
                    <div>
                      <p className="font-manrope font-bold text-dark/80 text-[10px] sm:text-[11px] uppercase tracking-[0.25em] mb-1.5">
                        {t("products.advantages.caffeine.title")}
                      </p>
                      <p className="font-manrope font-normal text-dark/50 text-xs sm:text-sm leading-relaxed italic">
                        {t("products.advantages.caffeine.text")}
                      </p>
                    </div>
                  </div>
                  <span className="block w-full max-w-[48px] h-px bg-dark/[0.06] my-0.5" aria-hidden />
                  <div className="flex items-start gap-4 py-5 sm:py-6 md:py-7 lg:py-8 last:pb-0">
                    <span className="flex-shrink-0 text-dark/30 mt-0.5" aria-hidden>
                      <FaMugHot className="w-[15px] h-[15px] sm:w-4 sm:h-4" />
                    </span>
                    <div>
                      <p className="font-manrope font-bold text-dark/80 text-[10px] sm:text-[11px] uppercase tracking-[0.25em] mb-1.5">
                        {t("products.advantages.matcha.title")}
                      </p>
                      <p className="font-manrope font-normal text-dark/50 text-xs sm:text-sm leading-relaxed italic">
                        {t("products.advantages.matcha.text")}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Price + CTA block – no motion so it’s always visible */}
              <div className="pt-6 mt-2 md:pt-8 md:mt-4 lg:pt-10 lg:mt-6 border-t border-dark/10">
                <div className="flex flex-wrap items-center gap-5 sm:gap-8">
                  <p className="font-manrope font-bold text-dark text-2xl sm:text-3xl md:text-4xl tabular-nums">
                    {product!.price}
                  </p>
                  <motion.button
                    type="button"
                    onClick={handleAddToCart}
                    className="w-full px-8 py-4 font-manrope font-semibold text-dark rounded-full bg-transparent border-2 border-dark hover:bg-white hover:text-dark hover:border-white transition-all duration-200 uppercase tracking-[0.2em] text-sm focus:outline-none focus:ring-2 focus:ring-dark/30 focus:ring-offset-2 focus:ring-offset-beige"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    {t("products.buyNow")}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.article>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

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
              className="flex flex-col lg:col-span-6 lg:col-start-7 order-1 lg:order-2 lg:pt-4"
            >
              <motion.span
                variants={itemVariants}
                className="font-manrope text-[10px] sm:text-xs uppercase tracking-[0.25em] text-accent mb-3 block"
              >
                Product
              </motion.span>
              <motion.h1
                variants={itemVariants}
                className={`font-agright ${fontWeights.agright.normal} text-dark leading-[0.95] tracking-tight ${typography.agright.productTitle} mb-4`}
              >
                {product!.title}
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className={`font-manrope ${fontWeights.manrope.bold} text-dark/80 uppercase tracking-[0.15em] text-sm sm:text-base mb-6 ${lineHeights.relaxed}`}
              >
                {product!.subtitle}
              </motion.p>
              {product!.description && (
                <motion.p
                  variants={itemVariants}
                  className={`font-manrope ${fontWeights.manrope.normal} text-dark/70 ${lineHeights.relaxed} text-sm sm:text-base max-w-md leading-relaxed mb-8`}
                >
                  {product!.description}
                </motion.p>
              )}

              {/* Advantages */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col gap-4 sm:gap-5 mb-8"
              >
                <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-white/50 border border-dark/5">
                  <span className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-matcha/20 flex items-center justify-center text-matcha text-lg sm:text-xl" aria-hidden>
                    <FaLeaf className="w-5 h-5 sm:w-6 sm:h-6" />
                  </span>
                  <div>
                    <p className="font-manrope font-bold text-dark text-sm sm:text-base uppercase tracking-wide mb-0.5">
                      {t("products.advantages.greenTea.title")}
                    </p>
                    <p className="font-manrope text-dark/70 text-xs sm:text-sm leading-relaxed">
                      {t("products.advantages.greenTea.text")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-white/50 border border-dark/5">
                  <span className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-accent/15 flex items-center justify-center text-accent text-lg sm:text-xl" aria-hidden>
                    <FaBolt className="w-5 h-5 sm:w-6 sm:h-6" />
                  </span>
                  <div>
                    <p className="font-manrope font-bold text-dark text-sm sm:text-base uppercase tracking-wide mb-0.5">
                      {t("products.advantages.caffeine.title")}
                    </p>
                    <p className="font-manrope text-dark/70 text-xs sm:text-sm leading-relaxed">
                      {t("products.advantages.caffeine.text")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-white/50 border border-dark/5">
                  <span className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-matcha/25 flex items-center justify-center text-matcha text-lg sm:text-xl" aria-hidden>
                    <FaMugHot className="w-5 h-5 sm:w-6 sm:h-6" />
                  </span>
                  <div>
                    <p className="font-manrope font-bold text-dark text-sm sm:text-base uppercase tracking-wide mb-0.5">
                      {t("products.advantages.matcha.title")}
                    </p>
                    <p className="font-manrope text-dark/70 text-xs sm:text-sm leading-relaxed">
                      {t("products.advantages.matcha.text")}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Price + CTA block – no motion so it’s always visible */}
              <div className="pt-6 mt-2 border-t border-dark/10">
                <div className="flex flex-wrap items-center gap-5 sm:gap-8">
                  <p className="font-manrope font-bold text-dark text-2xl sm:text-3xl md:text-4xl tabular-nums">
                    {product!.price}
                  </p>
                  <motion.button
                    type="button"
                    onClick={handleAddToCart}
                    className="min-w-[200px] sm:min-w-[220px] px-8 py-4 font-manrope font-bold bg-dark text-beige rounded-full hover:bg-dark/90 transition-colors uppercase tracking-[0.12em] text-sm border-2 border-dark focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-beige"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
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

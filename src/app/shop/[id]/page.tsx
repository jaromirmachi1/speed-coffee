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
import { FaLeaf, FaBolt, FaMugHot, FaFire, FaDroplet, FaSnowflake } from "react-icons/fa6";
import { GiChocolateBar, GiCoffeePot } from "react-icons/gi";

export default function ProductPage() {
  const params = useParams();
  const router = useRouter();
  const rootRef = useRef<HTMLDivElement | null>(null);
  const { language, t } = useLanguage();
  const { addItem } = useCart();
  const [product, setProduct] = useState<ProductDisplay | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedVariantKey, setSelectedVariantKey] = useState<string | null>(null);
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
        const p = await fetchProduct(id!, language);
        setProduct(p);
        setSelectedVariantKey(p?.variants?.[0]?.key ?? null);
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
      const selectedVariant = product.variants?.find((v) => v.key === selectedVariantKey) ?? null;
      addItem(
        selectedVariant
          ? {
              ...product,
              price: selectedVariant.price,
              selected_variant_key: selectedVariant.key,
              selected_variant_title: selectedVariant.title,
            }
          : product
      );
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
  const iconMap = {
    leaf: FaLeaf,
    bolt: FaBolt,
    mug: FaMugHot,
    coffee_pot: GiCoffeePot,
    chocolate_bar: GiChocolateBar,
    fire: FaFire,
    droplet: FaDroplet,
    snowflake: FaSnowflake,
  } as const;

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
              className="relative lg:col-span-6 lg:col-start-1 order-2 lg:order-1 flex justify-center lg:justify-start"
            >
              <div className="relative max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-2xl w-full">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                  <img
                    src={
                      (product?.gallery && product.gallery[activeImageIndex]) ??
                      product!.image
                    }
                    alt={product!.alt}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t pointer-events-none" />
                </div>
                {product?.gallery && product.gallery.length > 1 && (
                  <div className="mt-4 flex gap-3 justify-center">
                    {product.gallery.slice(0, 5).map((src, index) => (
                      <button
                        key={src + index}
                        type="button"
                        onClick={() => setActiveImageIndex(index)}
                        className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden border transition-colors ${
                          activeImageIndex === index
                            ? "border-dark"
                            : "border-dark/10 hover:border-dark/40"
                        }`}
                        aria-label={`View product image ${index + 1}`}
                      >
                        <img
                          src={src}
                          alt=""
                          className="w-full h-full object-cover object-center"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
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

              {/* Advantages – from Sanity when available, otherwise fallback copy */}
              <motion.div
                variants={itemVariants}
                className="mb-10 md:mb-14 lg:mb-16 relative pl-4 sm:pl-5 border-l border-dark/10"
              >
                {/* Accent cap on the left rule */}
                <span
                  className="absolute left-0 top-0 w-px h-5 sm:h-6 bg-accent/50"
                  aria-hidden
                />
                <div className="flex flex-col gap-0">
                  {(product?.advantages && product.advantages.length > 0
                    ? product.advantages
                    : [
                        {
                          title: t("products.advantages.greenTea.title"),
                          text: t("products.advantages.greenTea.text"),
                        },
                        {
                          title: t("products.advantages.caffeine.title"),
                          text: t("products.advantages.caffeine.text"),
                        },
                        {
                          title: t("products.advantages.matcha.title"),
                          text: t("products.advantages.matcha.text"),
                        },
                      ]
                  ).map((adv, index) => {
                    const Icon =
                      (adv.icon_key && iconMap[adv.icon_key as keyof typeof iconMap]) ||
                      (index % 3 === 0
                        ? FaLeaf
                        : index % 3 === 1
                          ? FaBolt
                          : FaMugHot);
                    return (
                      <div
                        key={adv.title + index}
                        className={`flex items-start gap-4 py-5 sm:py-6 md:py-7 lg:py-8 ${
                          index === 0 ? "first:pt-6 md:first:pt-8" : ""
                        } ${index === (product?.advantages?.length ?? 3) - 1 ? "last:pb-0" : ""}`}
                      >
                        <span
                          className="flex-shrink-0 text-dark/30 mt-0.5"
                          aria-hidden
                        >
                          <Icon className="w-[15px] h-[15px] sm:w-4 sm:h-4" />
                        </span>
                        <div>
                          <p className="font-manrope font-bold text-dark/80 text-[10px] sm:text-[11px] uppercase tracking-[0.25em] mb-1.5">
                            {adv.title}
                          </p>
                          <p className="font-manrope font-normal text-dark/50 text-xs sm:text-sm leading-relaxed italic">
                            {adv.text}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              {product?.variants && product.variants.length > 0 ? (
                <motion.div variants={itemVariants} className="mb-8 md:mb-10">
                  <p className="font-manrope font-bold text-dark/70 text-xs uppercase tracking-[0.2em] mb-3">
                    Choose variant
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.variants.map((variant) => (
                      <button
                        key={variant.key}
                        type="button"
                        onClick={() => setSelectedVariantKey(variant.key)}
                        className={`px-4 py-2 rounded-full border text-sm font-manrope transition-colors ${
                          selectedVariantKey === variant.key
                            ? "bg-dark text-beige border-dark"
                            : "bg-transparent text-dark border-dark/30 hover:border-dark"
                        }`}
                      >
                        {variant.title} - {variant.price}
                      </button>
                    ))}
                  </div>
                </motion.div>
              ) : null}

              {/* Price + CTA block – no motion so it’s always visible */}
              <div className="pt-6 mt-2 md:pt-8 md:mt-4 lg:pt-10 lg:mt-6 border-t border-dark/10">
                <div className="flex flex-wrap items-center gap-5 sm:gap-8">
                  <p className="font-manrope font-bold text-dark text-2xl sm:text-3xl md:text-4xl tabular-nums">
                    {product?.variants && product.variants.length > 0
                      ? (product.variants.find((v) => v.key === selectedVariantKey)?.price ??
                        product!.variants[0].price)
                      : product!.price}
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

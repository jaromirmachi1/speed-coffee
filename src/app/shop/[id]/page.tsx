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

  return (
    <div ref={rootRef} className="min-h-screen bg-beige flex flex-col">
      <Header />
      <main className="flex-1 py-8 md:py-12 lg:py-16">
        <Container className="px-4 sm:px-6 lg:px-8">
          <Link
            href="/shop"
            className="inline-block font-manrope text-dark/80 hover:text-dark text-sm uppercase tracking-wider mb-8 md:mb-10"
          >
            ← {t("products.title")}
          </Link>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start"
          >
            {/* Image */}
            <div className="relative aspect-square max-w-lg mx-auto lg:max-w-none w-full rounded-2xl overflow-hidden bg-white/30 border border-dark/10">
              <img
                src={product!.image}
                alt={product!.alt}
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-6 md:gap-8">
              <h1
                className={`font-manrope font-bold text-dark mb-8 uppercase tracking-tight ${typography.agright.productTitle}`}
              >
                {product!.title}
              </h1>
              <p
                className={`font-manrope ${fontWeights.manrope.bold} text-dark/90 mb-8 uppercase tracking-wide ${typography.manrope.productSubtitle}`}
              >
                {product!.subtitle}
              </p>
              {product!.description && (
                <p
                  className={`font-manrope ${fontWeights.manrope.normal} text-dark/80 mb-8 ${lineHeights.relaxed} ${typography.manrope.body}`}
                >
                  {product!.description}
                </p>
              )}
              <p
                className={`font-manrope ${fontWeights.manrope.bold} text-dark text-2xl md:text-4xl`}
              >
                {product!.price}
              </p>
              <motion.button
                type="button"
                onClick={handleAddToCart}
                className="w-full sm:w-auto px-8 py-4 font-manrope font-bold bg-dark text-beige rounded-full hover:bg-dark/90 transition-colors uppercase tracking-wider"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t("products.buyNow")}
              </motion.button>
            </div>
          </motion.article>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

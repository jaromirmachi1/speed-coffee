"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Container from "@/components/Container";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCart } from "@/contexts/CartContext";
import { fetchProducts } from "@/app/actions/products";
import type { ProductDisplay } from "@/types/product";
import {
  typography,
  fontWeights,
  lineHeights,
} from "@/lib/constants/typography";

const Shop = () => {
  const { language, t } = useLanguage();
  const { addItem } = useCart();
  const [products, setProducts] = useState<ProductDisplay[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      try {
        setIsLoading(true);
        const fetchedProducts = await fetchProducts(language);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Failed to load products:", error);
        // Fallback to empty array
        setProducts([]);
      } finally {
        setIsLoading(false);
      }
    }

    loadProducts();
  }, [language]);

  if (isLoading) {
    return (
      <section className="bg-beige py-16 md:py-24 lg:py-32 min-h-screen">
        <Container className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center min-h-[400px]">
            <p className="text-dark font-manrope">Loading products...</p>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="bg-beige py-16 md:py-24 lg:py-32 min-h-screen">
      <Container className="px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className={`text-center ${typography.agright.productsMain} font-agright ${fontWeights.agright.extrabold} text-dark mb-16 md:mb-20 lg:mb-24`}
          >
            {t("products.title")}
          </h2>

          {products.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-dark font-manrope">
                No products available at the moment.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  className="group bg-beige border border-dark/10 rounded-xl overflow-hidden h-full flex flex-col transition-all duration-300 hover:border-dark/20 hover:shadow-lg"
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  whileHover={{
                    y: -6,
                    transition: { duration: 0.3 },
                  }}
                >
                  {/* Clickable: Image + Title + Subtitle → product page */}
                  <Link href={`/shop/${product.id}`} className="block">
                    <div className="relative bg-white/30 aspect-square overflow-hidden">
                      <motion.div
                        className="relative w-full h-full flex items-center justify-center"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.img
                          src={product.image}
                          alt={product.alt}
                          className="w-full h-full object-cover object-center"
                          style={{ objectPosition: "center center" }}
                          initial={{
                            opacity: 0,
                            scale: 0.95,
                          }}
                          animate={{
                            opacity: 1,
                            scale: 1,
                          }}
                          transition={{
                            duration: 0.6,
                            delay: index * 0.1 + 0.2,
                            ease: "easeOut",
                          }}
                        />
                      </motion.div>
                    </div>

                    <div className="flex flex-col flex-1 p-4 md:p-5 pt-4">
                      <div className="h-[3.5em] md:h-[4em] lg:h-[2em] mb-2 flex items-start">
                        <h3 className="font-manrope font-extrabold text-dark leading-tight line-clamp-2 text-base md:text-2xl uppercase hover:text-accent transition-colors">
                          {product.title}
                        </h3>
                      </div>
                      <p
                        className={`font-manrope ${fontWeights.manrope.normal} text-dark/90 mt-2 mb-2 uppercase tracking-wide text-xs md:text-sm`}
                      >
                        {product.subtitle}
                      </p>
                    </div>
                  </Link>

                  {/* Price + Button stay on shop page */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-3 px-4 md:px-5 pb-4 md:pb-5 border-t border-dark/10 mt-auto">
                      {/* Price */}
                      <div>
                        <p
                          className={`font-manrope ${fontWeights.manrope.normal} text-lg md:text-xl text-dark`}
                        >
                          {product.price}
                        </p>
                      </div>

                      {/* Button */}
                      <motion.button
                        type="button"
                        onClick={() => addItem(product)}
                        className={`px-4 md:px-5 py-2.5 md:py-3 text-sm font-manrope ${fontWeights.manrope.bold} bg-dark text-beige rounded-full hover:bg-dark/90 transition-colors w-full sm:w-auto`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {t("products.buyNow")}
                      </motion.button>
                    </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </Container>
    </section>
  );
};

export default Shop;

"use client";

import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/contexts/CartContext";
import {
  typography,
  fontWeights,
} from "@/lib/constants/typography";

export default function CartModal() {
  const router = useRouter();
  const {
    isCartModalOpen,
    closeCartModal,
    lastAddedItem,
  } = useCart();

  const handleGoToCheckout = () => {
    closeCartModal();
    router.push("/checkout");
  };

  const handleKeepShopping = () => {
    closeCartModal();
  };

  return (
    <AnimatePresence>
      {isCartModalOpen && lastAddedItem && (
        <>
          <motion.div
            className="fixed inset-0 bg-dark/40 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleKeepShopping}
            aria-hidden
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              className="w-full max-w-md pointer-events-auto"
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="cart-modal-title"
            >
              <div className="bg-beige border border-dark/20 rounded-2xl shadow-xl overflow-hidden">
              <div className="p-6 md:p-8">
                <h2
                  id="cart-modal-title"
                  className={`${typography.manrope.body} font-manrope ${fontWeights.manrope.bold} text-dark mb-4`}
                >
                  Added to your basket
                </h2>

                {/* Product in basket */}
                <div className="flex gap-4 p-4 bg-white/30 rounded-xl mb-6">
                  <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-white/50">
                    <img
                      src={lastAddedItem.image}
                      alt={lastAddedItem.alt}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className={`font-agright ${fontWeights.agright.normal} text-dark ${typography.agright.productTitle} truncate`}
                      style={{ fontSize: "1.1rem" }}
                    >
                      {lastAddedItem.title}
                    </p>
                    <p className={`font-manrope ${fontWeights.manrope.bold} text-dark mt-1`}>
                      {lastAddedItem.price}
                    </p>
                  </div>
                </div>

                {/* Message + actions */}
                <p className="text-dark/80 font-manrope text-sm mb-4">
                  Keep shopping or go to checkout?
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={handleKeepShopping}
                    className={`flex-1 px-6 py-3 ${typography.manrope.button} font-manrope ${fontWeights.manrope.bold} rounded-full border-2 border-dark text-dark hover:bg-dark hover:text-beige transition-colors`}
                  >
                    Keep shopping
                  </button>
                  <button
                    type="button"
                    onClick={handleGoToCheckout}
                    className={`flex-1 px-6 py-3 ${typography.manrope.button} font-manrope ${fontWeights.manrope.bold} rounded-full bg-dark text-beige hover:bg-dark/90 transition-colors`}
                  >
                    Go to checkout
                  </button>
                </div>
              </div>
            </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

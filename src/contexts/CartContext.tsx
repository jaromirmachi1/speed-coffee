"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import type { ProductDisplay } from "@/types/product";
import type { CartItem } from "@/types/cart";

interface CartContextType {
  items: CartItem[];
  cartCount: number;
  addItem: (product: ProductDisplay, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  isCartModalOpen: boolean;
  openCartModal: () => void;
  closeCartModal: () => void;
  lastAddedItem: ProductDisplay | null;
  setLastAddedItem: (item: ProductDisplay | null) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [lastAddedItem, setLastAddedItem] = useState<ProductDisplay | null>(null);

  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const addItem = useCallback((product: ProductDisplay, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.id === product.id
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }
      return [...prev, { ...product, quantity }];
    });
    setLastAddedItem(product);
    setIsCartModalOpen(true);
  }, []);

  const removeItem = useCallback((productId: string) => {
    setItems((prev) => prev.filter((i) => i.id !== productId));
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity < 1) return;
    setItems((prev) =>
      prev.map((i) => (i.id === productId ? { ...i, quantity } : i))
    );
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const openCartModal = useCallback(() => setIsCartModalOpen(true), []);
  const closeCartModal = useCallback(() => {
    setIsCartModalOpen(false);
    setLastAddedItem(null);
  }, []);

  return (
    <CartContext.Provider
      value={{
        items,
        cartCount,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        isCartModalOpen,
        openCartModal,
        closeCartModal,
        lastAddedItem,
        setLastAddedItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from "react";
import type { ProductDisplay } from "@/types/product";
import type { CartItem } from "@/types/cart";

const CART_STORAGE_KEY = "speed-coffee-cart";

function loadStoredCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (item): item is CartItem =>
        Boolean(
          item &&
            typeof item === "object" &&
            typeof item.id === "string" &&
            typeof item.title === "string" &&
            typeof item.price === "string" &&
            typeof item.quantity === "number" &&
            item.quantity > 0
        )
    );
  } catch {
    return [];
  }
}

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
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setItems(loadStoredCart());
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    if (items.length === 0) {
      localStorage.removeItem(CART_STORAGE_KEY);
      return;
    }
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  }, [items, isHydrated]);

  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const addItem = useCallback((product: ProductDisplay, quantity = 1) => {
    const cartKey =
      product.selected_variant_key && product.product_id
        ? `${product.product_id}::${product.selected_variant_key}`
        : product.id;
    setItems((prev) => {
      const existing = prev.find((i) => i.id === cartKey);
      if (existing) {
        return prev.map((i) =>
          i.id === cartKey
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }
      return [
        ...prev,
        {
          ...product,
          id: cartKey,
          product_id: product.product_id ?? product.id,
          quantity,
        },
      ];
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
    if (typeof window !== "undefined") {
      localStorage.removeItem(CART_STORAGE_KEY);
    }
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

import type { ProductDisplay } from "./product";

export interface CartItem extends ProductDisplay {
  quantity: number;
}

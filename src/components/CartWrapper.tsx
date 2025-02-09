"use client";

import { CartProvider } from "../context/CartContext";

const CartWrapper = ({ children }: { children: React.ReactNode }) => {
  return <CartProvider>{children}</CartProvider>;
};

export default CartWrapper;

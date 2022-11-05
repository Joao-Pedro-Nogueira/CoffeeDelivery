import { useContext } from "react";
import { CartContext } from "../contexts/CartContexts";

export function useCart() {
  const context = useContext(CartContext)
  return context
}
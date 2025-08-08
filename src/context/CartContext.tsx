import { createContext, useContext, useReducer, ReactNode } from "react";
import { CartItem, Product, CartContextType } from "../types";

type CartAction =
  | {
      type: "ADD_TO_CART";
      payload: {
        product: Product;
        option: "solo" | "conPapas" | "conPapasAdicionales" | "jarra" | "vaso";
      };
    }
  | { type: "REMOVE_FROM_CART"; payload: { productId: number; option: string } }
  | {
      type: "UPDATE_QUANTITY";
      payload: { productId: number; option: string; quantity: number };
    }
  | { type: "CLEAR_CART" };

const CartContext = createContext<CartContextType | undefined>(undefined);

function cartReducer(state: CartItem[], action: CartAction): CartItem[] {
  switch (action.type) {
    case "ADD_TO_CART": {
      const { product, option } = action.payload;
      const existingItem = state.find(
        (item) => item.id === product.id && item.selectedOption === option
      );

      if (existingItem) {
        return state.map((item) =>
          item.id === product.id && item.selectedOption === option
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      const selectedPrice = product.prices[option] || 0;
      return [
        ...state,
        {
          ...product,
          quantity: 1,
          selectedOption: option,
          selectedPrice,
        },
      ];
    }
    case "REMOVE_FROM_CART":
      return state.filter(
        (item) =>
          !(
            item.id === action.payload.productId &&
            item.selectedOption === action.payload.option
          )
      );
    case "UPDATE_QUANTITY":
      return state
        .map((item) =>
          item.id === action.payload.productId &&
          item.selectedOption === action.payload.option
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
        .filter((item) => item.quantity > 0);
    case "CLEAR_CART":
      return [];
    default:
      return state;
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, dispatch] = useReducer(cartReducer, []);

  const addToCart = (
    product: Product,
    option: "solo" | "conPapas" | "conPapasAdicionales" | "jarra" | "vaso"
  ) => {
    dispatch({ type: "ADD_TO_CART", payload: { product, option } });
  };

  const removeFromCart = (productId: number, option: string) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { productId, option } });
  };

  const updateQuantity = (
    productId: number,
    option: string,
    quantity: number
  ) => {
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { productId, option, quantity },
    });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const total = items.reduce(
    (sum, item) => sum + item.selectedPrice * item.quantity,
    0
  );
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        total,
        itemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

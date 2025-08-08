export interface ProductPrice {
  solo?: number;
  conPapas?: number;
  conPapasAdicionales?: number;
  jarra?: number;
  vaso?: number;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  prices: ProductPrice;
  image: string;
  category: string;
}

export interface CartItem extends Product {
  quantity: number;
  selectedOption:
    | "solo"
    | "conPapas"
    | "conPapasAdicionales"
    | "jarra"
    | "vaso";
  selectedPrice: number;
}

export interface CartContextType {
  items: CartItem[];
  addToCart: (
    product: Product,
    option: "solo" | "conPapas" | "conPapasAdicionales" | "jarra" | "vaso"
  ) => void;
  removeFromCart: (productId: number, option: string) => void;
  updateQuantity: (productId: number, option: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
  itemCount: number;
}

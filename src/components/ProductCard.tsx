import { useState } from "react";
import { Plus } from "lucide-react";
import { Product } from "../types";
import { useCart } from "../context/CartContext";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [selectedOption, setSelectedOption] = useState<
    "solo" | "conPapas" | "conPapasAdicionales" | "jarra" | "vaso"
  >(Object.keys(product.prices)[0] as any);

  const handleAddToCart = () => {
    addToCart(product, selectedOption);
  };

  // Función para obtener la etiqueta de la opción de manera consistente
  const getOptionLabel = (option: string) => {
    switch (option) {
      case "solo":
        return "Solo Burger";
      case "conPapas":
        return "Burger + Papas";
      case "conPapasAdicionales":
        return "Burger + Papas Agrandadas";
      case "jarra":
        return "Jarra";
      case "vaso":
        return "Vaso";
      default:
        return option;
    }
  };

  return (
    <div className="bg-stone-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-stone-700">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-amber-400">{product.name}</h3>
          <span className="text-xs bg-amber-600 text-stone-900 px-2 py-1 rounded-full font-medium">
            {product.category}
          </span>
        </div>
        <p className="text-stone-300 text-sm mb-4">{product.description}</p>

        {/* Opciones de precio estilo menú */}
        <div className="mb-4 space-y-2">
          {/* Verificamos si el producto tiene múltiples opciones de precio */}
          {Object.entries(product.prices).filter(
            ([_, price]) => price !== undefined
          ).length > 1 ? (
            <div className="flex justify-between items-center gap-3 text-amber-400 border-b border-amber-600 border-opacity-30 py-1">
              {Object.entries(product.prices).map(
                ([option, price]) =>
                  price !== undefined && (
                    <button
                      key={option}
                      onClick={() => setSelectedOption(option as any)}
                      className={`transition-all flex-1 py-2 ${
                        selectedOption === option
                          ? "text-amber-400 font-bold"
                          : "text-amber-400 text-opacity-70 hover:text-amber-400"
                      }`}
                    >
                      <div className="flex flex-col items-center">
                        {option === "solo" && (
                          <div className="text-xl mb-1">🍔</div>
                        )}
                        {option === "conPapas" && (
                          <div className="text-xl mb-1">🍟</div>
                        )}
                        {option === "conPapasAdicionales" && (
                          <div className="text-xl mb-1">🍟</div>
                        )}
                        {option === "jarra" && (
                          <div className="text-xl mb-1">🍹</div>
                        )}
                        {option === "vaso" && (
                          <div className="text-xl mb-1">🥤</div>
                        )}
                        <div className="font-bold">{price}K</div>
                        <div className="text-[10px] uppercase mt-1">
                          {getOptionLabel(option)}
                        </div>
                      </div>
                    </button>
                  )
              )}
            </div>
          ) : (
            // Producto con un solo precio (ej: bebidas)
            <div className="flex justify-center items-center text-amber-400 py-2">
              <div className="flex flex-col items-center">
                {product.category === "Bebidas" && product.prices.solo && (
                  <>
                    <div className="text-2xl mb-2">🥤</div>
                    <div className="font-bold text-xl">
                      {product.prices.solo}K
                    </div>
                  </>
                )}
                {product.category === "Bebidas" && product.prices.vaso && (
                  <>
                    <div className="text-2xl mb-2">🥤</div>
                    <div className="font-bold text-xl">
                      {product.prices.vaso}K
                    </div>
                  </>
                )}
                {product.category === "Postres" && (
                  <>
                    <div className="text-2xl mb-2">🍦</div>
                    <div className="font-bold text-xl">
                      {product.prices.solo}K
                    </div>
                  </>
                )}
                <div className="text-sm mt-1">{product.category}</div>
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-between items-center">
          <div className="text-center">
            <div className="text-2xl font-bold text-amber-400">
              {product.prices[selectedOption]}K
            </div>
            <div className="text-xs text-stone-400">
              {getOptionLabel(selectedOption)}
            </div>
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-amber-600 hover:bg-amber-700 text-stone-900 px-4 py-2 rounded-lg flex items-center space-x-1 transition-colors duration-200 font-bold"
          >
            <Plus className="h-4 w-4" />
            <span>AGREGAR</span>
          </button>
        </div>
      </div>
    </div>
  );
}

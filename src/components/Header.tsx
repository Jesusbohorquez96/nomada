import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useTable } from "../context/TableContext";
import { Link, useNavigate } from "react-router-dom";
import TableTimer from "./TableTimer";

interface HeaderProps {
  currentSection: string;
}

export default function Header({ currentSection }: HeaderProps) {
  const { itemCount } = useCart();
  const { tableId, hasTable } = useTable();
  const navigate = useNavigate();

  return (
    <header className="bg-stone-900 shadow-lg sticky top-0 z-50 border-b border-amber-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-amber-500">
              <img
                src="./logo.jpg"
                alt="Nómada Logo"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-amber-400">NÓMADA</h1>
              <div className="flex items-center">
                <span className="text-xs text-amber-600 font-medium">
                  MERCADO GASTRONÓMICO
                </span>
                {hasTable && tableId && (
                  <span className="ml-2 bg-amber-600 text-stone-900 text-xs px-2 py-0.5 rounded-full font-bold">
                    Mesa #{tableId}
                  </span>
                )}
                {hasTable && <TableTimer />}
              </div>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link
              to="/menu"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentSection === "productos"
                  ? "text-amber-400 bg-stone-800"
                  : "text-stone-300 hover:text-amber-400"
              }`}
            >
              MENÚ
            </Link>
            <Link
              to="/cart"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors relative ${
                currentSection === "carrito"
                  ? "text-amber-400 bg-stone-800"
                  : "text-stone-300 hover:text-amber-400"
              }`}
            >
              <div className="flex items-center space-x-1">
                <ShoppingCart className="h-4 w-4" />
                <span>CARRITO</span>
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-amber-600 text-stone-900 text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                    {itemCount}
                  </span>
                )}
              </div>
            </Link>
            <Link
              to="/about"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentSection === "nosotros"
                  ? "text-amber-400 bg-stone-800"
                  : "text-stone-300 hover:text-amber-400"
              }`}
            >
              NOSOTROS
            </Link>
          </nav>

          <div className="md:hidden">
            <Link
              to="/cart"
              className="relative p-2 text-stone-300 hover:text-amber-400"
            >
              <ShoppingCart className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-600 text-stone-900 text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      <div className="md:hidden bg-stone-800 px-4 py-2">
        <div className="flex space-x-4">
          <Link
            to="/menu"
            className={`px-3 py-1 rounded text-sm font-medium ${
              currentSection === "productos"
                ? "text-amber-400 bg-stone-700"
                : "text-stone-300"
            }`}
          >
            MENÚ
          </Link>
          <Link
            to="/about"
            className={`px-3 py-1 rounded text-sm font-medium ${
              currentSection === "nosotros"
                ? "text-amber-400 bg-stone-700"
                : "text-stone-300"
            }`}
          >
            NOSOTROS
          </Link>
        </div>
      </div>
    </header>
  );
}

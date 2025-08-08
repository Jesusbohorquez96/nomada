import { Product } from "../types";

export const products: Product[] = [
  {
    id: 9,
    name: "Coca-Cola",
    description: "Refresco de cola clásico, bien frío",
    prices: {
      solo: 8.0,
    },
    image:
      "https://images.pexels.com/photos/2983100/pexels-photo-2983100.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Bebidas",
  },
  {
    id: 10,
    name: "Limonada Natural",
    description: "Jugo de limón recién exprimido con un toque de menta fresca",
    prices: {
      jarra: 16.0,
      vaso: 10.0,
    },
    image:
      "https://images.pexels.com/photos/2109099/pexels-photo-2109099.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Bebidas",
  },
  {
    id: 1,
    name: "La Hechicera",
    description:
      "Pan brioche artesanal sellado con mantequilla de hierbas de selecto y jugoso carne de res, cebolla caramelizada con cerveza, queso manchego, tomate y lechuga fresca",
    prices: {
      solo: 24.0,
      conPapas: 27.0,
      conPapasAdicionales: 30.0,
    },
    image:
      "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Hamburguesas",
  },
  {
    id: 2,
    name: "El Conquistador",
    description:
      "Doble carne de res premium, queso cheddar añejo, tocino ahumado, cebolla crispy y salsa especial de la casa",
    prices: {
      solo: 28.0,
      conPapas: 31.0,
      conPapasAdicionales: 34.0,
    },
    image:
      "https://images.pexels.com/photos/1556909/pexels-photo-1556909.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Hamburguesas",
  },
  {
    id: 3,
    name: "Pizza Mediterránea",
    description:
      "Masa artesanal, tomate, mozzarella, aceitunas, tomates cherry y albahaca fresca",
    prices: {
      solo: 22.0,
      conPapas: 25.0,
      conPapasAdicionales: 28.0,
    },
    image:
      "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Pizzas",
  },
  {
    id: 4,
    name: "Tacos de Carnitas",
    description:
      "Tres tacos con carnitas de cerdo, cebolla, cilantro y salsa verde casera",
    prices: {
      solo: 16.0,
      conPapas: 19.0,
      conPapasAdicionales: 22.0,
    },
    image:
      "https://images.pexels.com/photos/4958792/pexels-photo-4958792.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Mexicana",
  },
  {
    id: 5,
    name: "Ensalada César",
    description:
      "Lechuga romana, crutones caseros, parmesano y aderezo césar tradicional",
    prices: {
      solo: 14.5,
      conPapas: 17.5,
      conPapasAdicionales: 20.5,
    },
    image:
      "https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Ensaladas",
  },
  {
    id: 6,
    name: "Pasta Carbonara",
    description:
      "Spaghetti con panceta, huevo, parmesano y pimienta negra recién molida",
    prices: {
      solo: 19.0,
      conPapas: 22.0,
      conPapasAdicionales: 25.0,
    },
    image:
      "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Pastas",
  },
  {
    id: 7,
    name: "Salmón a la Parrilla",
    description:
      "Filete de salmón fresco con vegetales asados y salsa de limón",
    prices: {
      solo: 26.5,
      conPapas: 29.5,
      conPapasAdicionales: 32.5,
    },
    image:
      "https://images.pexels.com/photos/1516415/pexels-photo-1516415.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Pescados",
  },
  {
    id: 8,
    name: "Brownie con Helado",
    description:
      "Brownie de chocolate casero con helado de vainilla y salsa de chocolate",
    prices: {
      solo: 12.0,
      conPapas: 15.0,
      conPapasAdicionales: 18.0,
    },
    image:
      "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Postres",
  },
];

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  unit: string;
  image: string;
  description: string;
  inStock: boolean;
  badge?: string;
}

export interface OrderHistory {
  id: string;
  date: string;
  items: { name: string; qty: number; price: number }[];
  total: number;
  status: "entregado" | "en camino" | "procesando";
}

const foodImages = [
  "https://images.unsplash.com/photo-1518843875459-f738682238a6?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1589927986089-35812388d1f4?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1543362906-acfc16c67564?w=400&h=300&fit=crop",
];

export const categories = [
  "Frutas y Verduras",
  "Carnes y Aves",
  "Lácteos",
  "Panadería",
  "Granos y Cereales",
  "Bebidas",
];

export const products: Product[] = [
  { id: "1", name: "Tomates Roma Premium", category: "Frutas y Verduras", price: 2.50, unit: "kg", image: foodImages[0], description: "Tomates frescos de invernadero", inStock: true, badge: "Más vendido" },
  { id: "2", name: "Plátanos de Ecuador", category: "Frutas y Verduras", price: 1.80, unit: "kg", image: foodImages[1], description: "Plátanos maduros importados", inStock: true },
  { id: "3", name: "Leche Entera", category: "Lácteos", price: 3.20, unit: "litro", image: foodImages[2], description: "Leche pasteurizada premium", inStock: true },
  { id: "4", name: "Leche Deslactosada", category: "Lácteos", price: 3.80, unit: "litro", image: foodImages[3], description: "Leche sin lactosa", inStock: true, badge: "Nuevo" },
  { id: "5", name: "Manzanas Gala", category: "Frutas y Verduras", price: 3.50, unit: "kg", image: foodImages[4], description: "Manzanas frescas importadas", inStock: true },
  { id: "6", name: "Pechuga de Pollo", category: "Carnes y Aves", price: 8.90, unit: "kg", image: foodImages[5], description: "Pechuga deshuesada fresca", inStock: true, badge: "Oferta" },
  { id: "7", name: "Aguacate Hass", category: "Frutas y Verduras", price: 5.60, unit: "kg", image: foodImages[6], description: "Aguacates maduros listos", inStock: false },
  { id: "8", name: "Fresas Orgánicas", category: "Frutas y Verduras", price: 4.20, unit: "500g", image: foodImages[7], description: "Fresas orgánicas seleccionadas", inStock: true },
  { id: "9", name: "Pan Artesanal Integral", category: "Panadería", price: 4.50, unit: "pieza", image: foodImages[8], description: "Pan horneado diariamente", inStock: true },
  { id: "10", name: "Carne de Res Premium", category: "Carnes y Aves", price: 15.90, unit: "kg", image: foodImages[9], description: "Corte premium angus", inStock: true, badge: "Premium" },
  { id: "11", name: "Ensalada Mixta", category: "Frutas y Verduras", price: 3.00, unit: "bolsa", image: foodImages[10], description: "Mix de lechugas frescas", inStock: true },
  { id: "12", name: "Arroz Jazmín", category: "Granos y Cereales", price: 2.80, unit: "kg", image: foodImages[11], description: "Arroz aromático premium", inStock: true },
];

export const orderHistory: OrderHistory[] = [
  {
    id: "ORD-2024-001",
    date: "2024-12-15",
    items: [
      { name: "Tomates Roma Premium", qty: 5, price: 2.50 },
      { name: "Pechuga de Pollo", qty: 3, price: 8.90 },
    ],
    total: 39.20,
    status: "entregado",
  },
  {
    id: "ORD-2024-002",
    date: "2024-12-28",
    items: [
      { name: "Leche Entera", qty: 10, price: 3.20 },
      { name: "Pan Artesanal Integral", qty: 5, price: 4.50 },
    ],
    total: 54.50,
    status: "en camino",
  },
  {
    id: "ORD-2025-001",
    date: "2025-01-05",
    items: [
      { name: "Carne de Res Premium", qty: 2, price: 15.90 },
      { name: "Arroz Jazmín", qty: 4, price: 2.80 },
    ],
    total: 43.00,
    status: "procesando",
  },
];

export const recommendations: Product[] = [
  products[5], products[9], products[3], products[7],
];

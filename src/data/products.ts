export const foodImages = Array(50).fill("https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=500&auto=format&fit=crop");

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

export const categories = [
  "Granos y Cereales",
  "Aseo y Limpieza",
  "Varios",
  "Semillas",
  "Para Animales",
];

export const catalogProducts: Product[] = [
  {
    id: "000015",
    name: "Arroz Blanco",
    category: "Granos y Cereales",
    price: 140000,
    unit: "Bulto (50 Kg)",
    image: foodImages[0],
    description: "Arroz Blanco de alta calidad",
    inStock: true,
    badge: "Nuevo"
  },
  {
    id: "000003",
    name: "Cuchuco",
    category: "Para Animales",
    price: 66000,
    unit: "Bulto (40 Kg)",
    image: foodImages[1],
    description: "Cuchuco tradicional de excelente rendimiento.",
    inStock: true
  },
  {
    id: "000002",
    name: "Maiz Amarillo #2",
    category: "Para Animales",
    price: 67000,
    unit: "Bulto (50 Kg)",
    image: foodImages[2],
    description: "Maíz amarillo #2 estándar, versátil y de gran calidad.",
    inStock: true
  },
  {
    id: "000086",
    name: "Maiz Amarillo #2 - Limpio",
    category: "Granos y Cereales",
    price: 70000,
    unit: "Bulto (50 Kg)",
    image: foodImages[3],
    description: "Maíz amarillo #2 limpio y seleccionado.",
    inStock: true
  },
  {
    id: "000001",
    name: "Maiz Amarillo Nacional",
    category: "Para Animales",
    price: 80000,
    unit: "Bulto (50 Kg)",
    image: foodImages[4],
    description: "Maíz amarillo de origen nacional, fresco y nutritivo.",
    inStock: true
  },
  {
    id: "000084",
    name: "Maiz Amarillo Nacional - Limpio",
    category: "Para Animales",
    price: 85000,
    unit: "Bulto (50 Kg)",
    image: foodImages[5],
    description: "Maíz amarillo nacional limpio, listo para procesamiento.",
    inStock: true
  },
  {
    id: "000006",
    name: "Maiz Blanco Trillado",
    category: "Granos y Cereales",
    price: 112000,
    unit: "Bulto (50 Kg)",
    image: foodImages[6],
    description: "Maíz blanco trillado especial para arepas y masas.",
    inStock: true
  },
  {
    id: "000083",
    name: "Maiz Nacional Blanco",
    category: "Para Animales",
    price: 1800,
    unit: "Unidad (Kilo)",
    image: foodImages[7],
    description: "Maíz nacional blanco por kilo.",
    inStock: true
  },
  {
    id: "000005",
    name: "Salvado Amarillo",
    category: "Para Animales",
    price: 63000,
    unit: "Bulto (40 Kg)",
    image: foodImages[8],
    description: "Salvado amarillo de alta pureza para alimentación animal.",
    inStock: true
  },
  {
    id: "000017",
    name: "Salvado Blanco",
    category: "Para Animales",
    price: 61000,
    unit: "Bulto (40 Kg)",
    image: foodImages[9],
    description: "Salvado blanco ideal para alimentación animal.",
    inStock: true
  },
  {
    id: "000106",
    name: "Salvado de Trigo",
    category: "Para Animales",
    price: 67000,
    unit: "Bulto (40 Kg)",
    image: foodImages[10],
    description: "Salvado de trigo rico en fibra (No apto para consumo humano).",
    inStock: true
  },
  {
    id: "000136",
    name: "Alpiste Granipack",
    category: "Semillas",
    price: 65700,
    unit: "Paca (25 UN - 460 GR)",
    image: foodImages[11],
    description: "Alpiste de alta calidad para aves.",
    inStock: true
  },
  {
    id: "000117",
    name: "Avena Hojuela Granipack",
    category: "Granos y Cereales",
    price: 35600,
    unit: "Paca (25 UN - 250 GR)",
    image: foodImages[12],
    description: "Avena en hojuelas rica en nutrientes.",
    inStock: true
  },
  {
    id: "000111",
    name: "Frijol Cargamanto Blanco Granipack",
    category: "Granos y Cereales",
    price: 117350,
    unit: "Paca (25 UN - 460 GR)",
    image: foodImages[13],
    description: "Frijol cargamanto blanco de excelente tamaño y sabor.",
    inStock: true
  },
  {
    id: "000135",
    name: "Frijol Cargamanto Rojo Granipack",
    category: "Granos y Cereales",
    price: 164700,
    unit: "Paca (25 UN - 460 GR)",
    image: foodImages[14],
    description: "Frijol cargamanto rojo tradicional de alta calidad.",
    inStock: true
  },
  {
    id: "000112",
    name: "Frijol Zaragoza Granipack",
    category: "Granos y Cereales",
    price: 88700,
    unit: "Paca (25 UN - 460 GR)",
    image: foodImages[15],
    description: "Frijol zaragoza de primera calidad.",
    inStock: true
  },
  {
    id: "000137",
    name: "Frijol Cabeza Negra Granipack",
    category: "Granos y Cereales",
    price: 84000,
    unit: "Paca (25 UN - 500 GR)",
    image: foodImages[16],
    description: "Frijol cabeza negra de alta calidad.",
    inStock: true
  },
  {
    id: "000113",
    name: "Frijol Caraota Negro Granipacj",
    category: "Granos y Cereales",
    price: 72750,
    unit: "Paca (25 UN - 500 GR)",
    image: foodImages[17],
    description: "Caraotas negras ideales para preparaciones tradicionales.",
    inStock: true
  },
  {
    id: "000110",
    name: "Frijol Cargamanto Rojo Granipack",
    category: "Granos y Cereales",
    price: 177350,
    unit: "Paca (25 UN - 500 GR)",
    image: foodImages[18],
    description: "Frijol cargamanto rojo de alta calidad.",
    inStock: true
  },
  {
    id: "000109",
    name: "Lenteja Granipack",
    category: "Granos y Cereales",
    price: 62750,
    unit: "Paca (50 UN - 250 GR)",
    image: foodImages[19],
    description: "Lentejas seleccionadas de alta calidad.",
    inStock: true
  },
  {
    id: "000108",
    name: "Lenteja Granipack",
    category: "Granos y Cereales",
    price: 57550,
    unit: "Paca (25 UN - 460 GR)",
    image: foodImages[20],
    description: "Lentejas seleccionadas en paquete mediano.",
    inStock: true
  },
  {
    id: "000118",
    name: "Semilla Girasol Granipack",
    category: "Semillas",
    price: 47850,
    unit: "Paca (25 UN - 200 GR)",
    image: foodImages[21],
    description: "Semillas de girasol tostadas y listas para el consumo animal.",
    inStock: true
  },
  {
    id: "000116",
    name: "Maiz Pira Granipack",
    category: "Granos y Cereales",
    price: 62500,
    unit: "Paca (50 UN - 250 GR)",
    image: foodImages[22],
    description: "Maíz pira especial para crispetas.",
    inStock: true
  },
  {
    id: "000115",
    name: "Maiz Pira Granipack",
    category: "Granos y Cereales",
    price: 47600,
    unit: "Paca (25 UN - 460 GR)",
    image: foodImages[23],
    description: "Maíz pira de alto rendimiento.",
    inStock: true
  },
  {
    id: "000114",
    name: "Mazamorra Granipack",
    category: "Granos y Cereales",
    price: 56550,
    unit: "Paca (25 UN - 500 GR)",
    image: foodImages[24],
    description: "Base para mazamorra tradicional.",
    inStock: true
  },
  {
    id: "000138",
    name: "Leche Novalecha X 200 GR",
    category: "Varios",
    price: 242000,
    unit: "Caja (50 UN)",
    image: foodImages[25],
    description: "Leche entera en polvo Novalecha.",
    inStock: true
  },
  {
    id: "000139",
    name: "Leche Novalecha X 200 GR",
    category: "Varios",
    price: 5000,
    unit: "Unidad (200 GR)",
    image: foodImages[26],
    description: "Leche en polvo Novalecha por unidad.",
    inStock: true
  },
  {
    id: "000140",
    name: "Leche Novalecha X 380 GR",
    category: "Varios",
    price: 260000,
    unit: "Caja (30 UN)",
    image: foodImages[27],
    description: "Leche Novalecha en presentación mediana.",
    inStock: true
  },
  {
    id: "000141",
    name: "Leche Novalecha X 380 GR",
    category: "Varios",
    price: 9000,
    unit: "Unidad (380 GR)",
    image: foodImages[28],
    description: "Leche Novalecha mediana por unidad.",
    inStock: true
  },
  {
    id: "000142",
    name: "Leche NovaMilk X 900 GR",
    category: "Varios",
    price: 248000,
    unit: "Caja (12 UN)",
    image: foodImages[29],
    description: "Leche NovaMilk de alta calidad.",
    inStock: true
  },
  {
    id: "000143",
    name: "Leche NovaMilk X 900 GR",
    category: "Varios",
    price: 21000,
    unit: "Unidad (900 GR)",
    image: foodImages[30],
    description: "Leche NovaMilk en formato familiar.",
    inStock: true
  },
  {
    id: "000119",
    name: "Melaza ",
    category: "Para Animales",
    price: 36200,
    unit: "Bidon (17 KG)",
    image: foodImages[31],
    description: "Melaza de caña de alta pureza para alimentación animal.",
    inStock: true
  },
  {
    id: "000088",
    name: "Melaza",
    category: "Para Animales",
    price: 54400,
    unit: "Bidon (28 KG)",
    image: foodImages[32],
    description: "Melaza en bidón grande para alimentación animal.",
    inStock: true
  },
  {
    id: "000144",
    name: "Melaza",
    category: "Para Animales",
    price: 54000,
    unit: "Costal (30 KG)",
    image: foodImages[33],
    description: "Melaza en costal de alta calidad para alimentación animal.",
    inStock: true
  },
  {
    id: "000092",
    name: "Melaza - JoseFino",
    category: "Para Animales",
    price: 57500,
    unit: "Paca (15 UN X 2 KG)",
    image: foodImages[34],
    description: "Melaza marca JoseFino en empaques de 2 KG para alimentación animal.",
    inStock: true
  },
  {
    id: "000089",
    name: "Melaza",
    category: "Para Animales",
    price: 1721,
    unit: "Kilo",
    image: foodImages[35],
    description: "Melaza por kilo para alimentación animal.",
    inStock: true
  },
  {
    id: "000121",
    name: "Pañitos Humedos Felpitos - Amarillo",
    category: "Aseo y Limpieza",
    price: 116800,
    unit: "Caja (24 PQ X 102 UN)",
    image: foodImages[36],
    description: "Pañitos húmedos Felpitos edición amarilla al por mayor.",
    inStock: true
  },
  {
    id: "000122",
    name: "Pañitos Humedos Felpitos - Amarillo",
    category: "Aseo y Limpieza",
    price: 5214,
    unit: "Paquete (102 UN)",
    image: foodImages[37],
    description: "Pañitos húmedos Felpitos edición amarilla por paquete.",
    inStock: true
  },
  {
    id: "000125",
    name: "Pañitos Humedos Felpitos - Azul",
    category: "Aseo y Limpieza",
    price: 132000,
    unit: "Caja (36 PQ X 72 UN)",
    image: foodImages[38],
    description: "Pañitos húmedos Felpitos edición azul al por mayor.",
    inStock: true
  },
  {
    id: "000126",
    name: "Pañitos Humedos Felpitos - Azul",
    category: "Aseo y Limpieza",
    price: 3930,
    unit: "Paquete (72 UN)",
    image: foodImages[39],
    description: "Pañitos húmedos Felpitos edición azul por paquete.",
    inStock: true
  },
  {
    id: "000127",
    name: "Pañitos Humedos Felpitos - Azul",
    category: "Aseo y Limpieza",
    price: 192000,
    unit: "Caja (96 PQ X 24 UN)",
    image: foodImages[40],
    description: "Pañitos húmedos Felpitos caja grande.",
    inStock: true
  },
  {
    id: "000128",
    name: "Pañitos Humedos Felpitos - Azul",
    category: "Aseo y Limpieza",
    price: 2150,
    unit: "Paquete (24 UN)",
    image: foodImages[41],
    description: "Pañitos húmedos Felpitos azules paquete pequeño.",
    inStock: true
  },
  {
    id: "000129",
    name: "Pañitos Humedos Felpitos - Azul",
    category: "Aseo y Limpieza",
    price: 189600,
    unit: "Caja (180 PQ X 12 UN)",
    image: foodImages[42],
    description: "Pañitos húmedos Felpitos presentación mini al por mayor.",
    inStock: true
  },
  {
    id: "000130",
    name: "Pañitos Humedos Felpitos - Azul",
    category: "Aseo y Limpieza",
    price: 1130,
    unit: "Paquete (12 UN)",
    image: foodImages[43],
    description: "Pañitos húmedos Felpitos azules presentación mini.",
    inStock: true
  },
];
import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/data/products";

const slugify = (name: string) =>
  name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(price);
};

const ProductCard = ({ product }: { product: Product }) => {
  const { addItem } = useCart();
  const productUrl = `/producto/${product.id}-${slugify(product.name)}`;
  const [imgSrc, setImgSrc] = useState(product.image);

  const handleImageError = () => {
    setImgSrc("https://placehold.co/400x400/eeeeee/999999?text=Sin+Imagen");
  };

  return (
    <div className="group rounded-xl border bg-card overflow-hidden transition-shadow hover:shadow-lg">
      <Link to={productUrl} className="block relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={imgSrc}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          width={400}
          height={300}
          onError={handleImageError}
        />
        {product.badge && (
          <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground shadow-md">
            {product.badge}
          </Badge>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-foreground/50 flex items-center justify-center">
            <span className="bg-card px-3 py-1 rounded-full text-sm font-medium">Agotado</span>
          </div>
        )}
      </Link>
      <div className="p-4">
        <Link to={productUrl} className="block mb-3">
          <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
          <h3 className="font-semibold text-sm leading-tight mb-1 line-clamp-2 group-hover:text-primary transition-colors">{product.name}</h3>
          <p className="text-xs text-muted-foreground">{product.description}</p>
        </Link>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-primary">{formatPrice(product.price)}</span>
            <span className="text-xs text-muted-foreground ml-1">/ {product.unit}</span>
          </div>
          <Button
            size="sm"
            disabled={!product.inStock}
            onClick={() => addItem(product)}
            className="gap-1"
          >
            <ShoppingCart className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Añadir</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

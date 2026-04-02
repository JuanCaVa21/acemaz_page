import { useState, useMemo } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Minus, Plus, ShoppingCart, CreditCard, ArrowLeft, Truck, Shield, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import ProductCard from "@/components/products/ProductCard";
import { catalogProducts } from "@/data/products";
import { useCart } from "@/context/CartContext";

const slugify = (name: string) =>
  name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const productDetails: Record<string, { origin: string; freshness: string; benefits: string; longDescription: string }> = {
  "1": { origin: "Cultivados en invernaderos del Valle de Culiacán, Sinaloa", freshness: "Cosechados en las últimas 24 horas", benefits: "Ricos en licopeno, vitamina C y antioxidantes naturales", longDescription: "Nuestros tomates Roma Premium son seleccionados a mano de los mejores invernaderos. Su sabor intenso y textura firme los hacen ideales para salsas, ensaladas y platillos gourmet. Cada tomate pasa por un riguroso control de calidad." },
  "2": { origin: "Importados directamente de las fincas de Ecuador", freshness: "Maduración controlada para máximo sabor", benefits: "Alto contenido en potasio, vitamina B6 y fibra dietética", longDescription: "Plátanos ecuatorianos de la más alta calidad, cultivados en condiciones tropicales óptimas. Su dulzura natural y textura cremosa los convierten en el complemento perfecto para cualquier establecimiento." },
  "3": { origin: "Producida en ranchos lecheros de Jalisco", freshness: "Pasteurizada y embotellada el mismo día", benefits: "Fuente natural de calcio, proteínas y vitamina D", longDescription: "Leche entera pasteurizada de la más alta calidad. Proveniente de ganado alimentado con pastura natural, garantizando un sabor puro y nutritivo para toda tu familia o negocio." },
  "4": { origin: "Procesada en planta certificada en Querétaro", freshness: "Vida útil extendida con tecnología UHT", benefits: "Ideal para intolerantes a la lactosa, misma nutrición", longDescription: "Nuestra leche deslactosada mantiene todo el sabor y nutrición de la leche convencional, pero con la enzima lactasa añadida para una digestión perfecta. Ideal para clientes con sensibilidad a la lactosa." },
  "5": { origin: "Importadas de huertos selectos en Washington, EE.UU.", freshness: "Almacenadas en atmósfera controlada", benefits: "Ricas en fibra, vitamina C y antioxidantes", longDescription: "Las manzanas Gala se distinguen por su dulzura equilibrada y textura crujiente. Perfectas para consumo directo, postres o como ingrediente estrella en ensaladas frescas." },
  "6": { origin: "De granjas avícolas certificadas en Veracruz", freshness: "Procesada y empacada al vacío el mismo día", benefits: "Alta en proteínas, baja en grasa saturada", longDescription: "Pechuga de pollo deshuesada y sin piel, cortada con precisión para garantizar porciones uniformes. Ideal para restaurantes, hoteles y hogares que buscan la mejor calidad en proteína avícola." },
  "7": { origin: "Cultivados en Michoacán, tierra del aguacate", freshness: "Punto de maduración perfecto al momento de entrega", benefits: "Rico en grasas saludables, potasio y vitamina E", longDescription: "El aguacate Hass mexicano es reconocido mundialmente por su cremosidad y sabor único. Nuestros aguacates son seleccionados en su punto óptimo de maduración para garantizar la mejor experiencia." },
  "8": { origin: "De campos orgánicos certificados en Guanajuato", freshness: "Recolectadas manualmente cada mañana", benefits: "Antioxidantes naturales, vitamina C y manganeso", longDescription: "Fresas orgánicas cultivadas sin pesticidas ni químicos. Su sabor intenso y aroma inconfundible las hacen perfectas para postres, smoothies y presentaciones gourmet." },
  "9": { origin: "Horneado artesanalmente en nuestro obrador propio", freshness: "Horneado diariamente, sin conservadores", benefits: "Fibra integral, carbohidratos complejos y minerales", longDescription: "Pan integral elaborado con masa madre y harinas seleccionadas. Cada pieza es horneada con dedicación artesanal, ofreciendo una corteza crujiente y una miga suave y aromática." },
  "10": { origin: "Corte Angus de ranchos ganaderos de Sonora", freshness: "Madurado en seco por 21 días para máximo sabor", benefits: "Proteínas de alta calidad, hierro y zinc", longDescription: "Carne de res premium de raza Angus, criada con alimentación natural. El proceso de maduración en seco intensifica su sabor y terneza, convirtiéndola en la elección preferida de chefs profesionales." },
  "11": { origin: "Cultivada en invernaderos hidropónicos de Puebla", freshness: "Cortada y empacada el mismo día", benefits: "Baja en calorías, alta en vitaminas A y K", longDescription: "Nuestra ensalada mixta incluye una selección de lechugas frescas: romana, escarola, arúgula y espinaca baby. Lista para servir, lavada y desinfectada bajo los más altos estándares." },
  "12": { origin: "Importado de los arrozales de Tailandia", freshness: "Empacado al vacío para preservar su aroma", benefits: "Carbohidratos de liberación lenta, libre de gluten", longDescription: "El arroz jazmín se distingue por su delicado aroma floral y textura suave. Perfecto para acompañar platillos asiáticos, mariscos y como base de bowls nutritivos." },
}
const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = useMemo(() => {
    if (!slug) return null;
    const idMatch = slug.match(/^(\d+)-/);
    if (idMatch) return catalogProducts.find((p) => p.id === idMatch[1]) || null;
    return catalogProducts.find((p) => slugify(p.name) === slug) || null;
  }, [slug]);

  const details = product ? productDetails[product.id] : null;

  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return catalogProducts
      .filter((p) => p.id !== product.id && p.category === product.category)
      .slice(0, 4);
  }, [product]);

  const extraRelated = useMemo(() => {
    if (relatedProducts.length >= 4 || !product) return relatedProducts;
    const ids = new Set([product.id, ...relatedProducts.map((p) => p.id)]);
    const extras = catalogProducts.filter((p) => !ids.has(p.id)).slice(0, 4 - relatedProducts.length);
    return [...relatedProducts, ...extras];
  }, [relatedProducts, product]);

  if (!product) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Producto no encontrado</h1>
        <Button asChild><Link to="/catalogo">Volver al catálogo</Link></Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) addItem(product);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate("/checkout");
  };

  return (
    <div className="container py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link to="/" className="hover:text-foreground transition-colors">Inicio</Link>
        <span>/</span>
        <Link to="/catalogo" className="hover:text-foreground transition-colors">Catálogo</Link>
        <span>/</span>
        <Link to={`/catalogo?category=${encodeURIComponent(product.category)}`} className="hover:text-foreground transition-colors">{product.category}</Link>
        <span>/</span>
        <span className="text-foreground font-medium truncate max-w-[200px]">{product.name}</span>
      </div>

      <Button variant="ghost" size="sm" className="mb-4" onClick={() => navigate(-1)}>
        <ArrowLeft className="h-4 w-4 mr-1" /> Volver
      </Button>

      {/* Main content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Image */}
        <div className="relative rounded-2xl overflow-hidden bg-muted aspect-square lg:aspect-[4/3]">
          <img
            src={product.image.replace("w=400&h=300", "w=800&h=600")}
            alt={product.name}
            className="w-full h-full object-cover"
            width={800}
            height={600}
          />
          {product.badge && (
            <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground shadow-lg text-sm px-3 py-1">
              {product.badge}
            </Badge>
          )}
          {!product.inStock && (
            <div className="absolute inset-0 bg-foreground/50 flex items-center justify-center">
              <span className="bg-card px-4 py-2 rounded-full font-semibold">Agotado</span>
            </div>
          )}
        </div>

        {/* Details */}
        <div className="flex flex-col">
          <p className="text-sm text-primary font-medium mb-1">{product.category}</p>
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mb-3">{product.name}</h1>

          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-3xl md:text-4xl font-bold text-primary">${product.price.toFixed(2)}</span>
            <span className="text-muted-foreground">/ {product.unit}</span>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
            {details?.longDescription || product.description}
          </p>

          {details && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              <div className="flex items-start gap-2 p-3 rounded-lg bg-primary/5 border border-primary/10">
                <Leaf className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-semibold">Origen</p>
                  <p className="text-xs text-muted-foreground">{details.origin}</p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-3 rounded-lg bg-primary/5 border border-primary/10">
                <Truck className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-semibold">Frescura</p>
                  <p className="text-xs text-muted-foreground">{details.freshness}</p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-3 rounded-lg bg-primary/5 border border-primary/10">
                <Shield className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-semibold">Beneficios</p>
                  <p className="text-xs text-muted-foreground">{details.benefits}</p>
                </div>
              </div>
            </div>
          )}

          <Separator className="mb-6" />

          {/* Quantity selector */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-medium">Cantidad:</span>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" className="h-9 w-9" onClick={() => setQuantity((q) => Math.max(1, q - 1))} disabled={!product.inStock}>
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-10 text-center font-semibold text-lg">{quantity}</span>
              <Button variant="outline" size="icon" className="h-9 w-9" onClick={() => setQuantity((q) => q + 1)} disabled={!product.inStock}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <span className="text-sm text-muted-foreground">
              Subtotal: <span className="font-semibold text-foreground">${(product.price * quantity).toFixed(2)}</span>
            </span>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button size="lg" className="flex-1 gap-2" disabled={!product.inStock} onClick={handleAddToCart}>
              <ShoppingCart className="h-5 w-5" /> Añadir al Carrito
            </Button>
            <Button size="lg" variant="secondary" className="flex-1 gap-2" disabled={!product.inStock} onClick={handleBuyNow}>
              <CreditCard className="h-5 w-5" /> Comprar Ahora
            </Button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {extraRelated.length > 0 && (
        <section className="mt-16 pb-8">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">Productos Relacionados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {extraRelated.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;

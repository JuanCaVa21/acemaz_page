import { Link } from "react-router-dom";
import { ArrowRight, Truck, Shield, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/products/ProductCard";
import RecommendationsSection from "@/components/products/RecommendationsSection";
import { catalogProducts } from "@/data/products";
import heroBg from "@/assets/hero-bg.jpg";

const featuredProducts = catalogProducts.filter((p) => (p as any).badge).slice(0, 4);
const categories = [...new Set(catalogProducts.map((p) => p.category))];

const benefits = [
  { icon: Truck, title: "Entregas", desc: "Para compras al por mayor" },
  { icon: Shield, title: "Calidad Garantizada", desc: "Productos seleccionados de la mas alta calidad" },
  { icon: Clock, title: "Pedidos Fáciles", desc: "Ordena en minutos desde cualquier dispositivo" },
  { icon: Star, title: "Precios Mayoreo", desc: "Los mejores precios para tu negocio" },
];

const Index = () => (
  <div>
    {/* Hero */}
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Alimentos frescos" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/30" />
      </div>
      <div className="container relative py-24 md:py-36 lg:py-44">
        <div className="max-w-xl space-y-6">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-card leading-tight">
            Manos que transforman alimentos
          </h1>
          <p className="text-card/80 text-lg md:text-xl max-w-md">
            Distribuidora mayorista con productos de la más alta calidad.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button size="lg" asChild>
              <Link to="/catalogo">
                Ver Catálogo <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-card/10 border-card/30 text-card hover:bg-card/20" asChild>
              <Link to="/registro">Crear Cuenta</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* Benefits */}
    <section className="container py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((b) => (
          <div key={b.title} className="flex items-start gap-4 p-5 rounded-xl bg-card border">
            <div className="p-2.5 rounded-lg bg-primary/10">
              <b.icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-sm">{b.title}</h3>
              <p className="text-xs text-muted-foreground mt-0.5">{b.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Categories */}
    <section className="container pb-16">
      <h2 className="font-display text-2xl md:text-3xl font-bold mb-8 text-center">
        Nuestras Categorías
      </h2>
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((cat) => (
          <Link
            key={cat}
            to={`/catalogo?category=${encodeURIComponent(cat)}`}
            className="px-5 py-2.5 rounded-full border bg-card text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            {cat}
          </Link>
        ))}
      </div>
    </section>

    {/* Featured Products */}
    <section className="container pb-20">
      <RecommendationsSection
        title="Productos Destacados"
        subtitle="Seleccionados especialmente para ti"
      />
    </section>
  </div>
);

export default Index;

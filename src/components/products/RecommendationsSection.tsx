import { Link } from "react-router-dom";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/products/ProductCard";
import RecommendationsSkeleton from "@/components/products/RecommendationsSkeleton";
import { useRecommendations } from "@/hooks/useRecommendations";
import { products } from "@/data/mockData";

const fallback = products.filter((p) => p.badge).slice(0, 4);

interface Props {
  title?: string;
  subtitle?: string;
  showViewAll?: boolean;
}

const RecommendationsSection = ({
  title = "Recomendaciones Especiales para Ti",
  subtitle = "Basado en tus compras anteriores",
  showViewAll = true,
}: Props) => {
  const { data, isLoading, isError } = useRecommendations();

  const items = isError || !data?.length ? fallback : data;

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-display text-xl font-bold">{title}</h2>
        {showViewAll && (
          <Button variant="ghost" size="sm" asChild>
            <Link to="/catalogo">Ver todo</Link>
          </Button>
        )}
      </div>
      <p className="text-sm text-muted-foreground mb-4">{subtitle}</p>

      {isLoading ? (
        <RecommendationsSkeleton />
      ) : (
        <>
          {isError && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4 p-3 rounded-lg bg-muted/50">
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span>No pudimos cargar recomendaciones personalizadas. Mostrando productos populares.</span>
            </div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default RecommendationsSection;

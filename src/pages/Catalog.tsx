import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import ProductCard from "@/components/products/ProductCard";
import { products, categories } from "@/data/mockData";

const Catalog = () => {
  const [searchParams] = useSearchParams();
  const initialCat = searchParams.get("category");

  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>(initialCat ? [initialCat] : []);
  const [priceRange, setPriceRange] = useState([0, 20]);
  const [showFilters, setShowFilters] = useState(false);

  const toggleCategory = (cat: string) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
      const matchCat = selectedCategories.length === 0 || selectedCategories.includes(p.category);
      const matchPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
      return matchSearch && matchCat && matchPrice;
    });
  }, [search, selectedCategories, priceRange]);

  const FilterPanel = () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold text-sm mb-3">Categorías</h3>
        <div className="space-y-2">
          {categories.map((cat) => (
            <label key={cat} className="flex items-center gap-2 text-sm cursor-pointer">
              <Checkbox
                checked={selectedCategories.includes(cat)}
                onCheckedChange={() => toggleCategory(cat)}
              />
              {cat}
            </label>
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-sm mb-3">Precio (${priceRange[0]} - ${priceRange[1]})</h3>
        <Slider
          min={0}
          max={20}
          step={0.5}
          value={priceRange}
          onValueChange={setPriceRange}
          className="mt-2"
        />
      </div>
      {selectedCategories.length > 0 && (
        <Button variant="ghost" size="sm" onClick={() => setSelectedCategories([])}>
          <X className="h-3 w-3 mr-1" /> Limpiar filtros
        </Button>
      )}
    </div>
  );

  return (
    <div className="container py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-display text-2xl md:text-3xl font-bold">Catálogo de Productos</h1>
        <Button variant="outline" size="sm" className="lg:hidden" onClick={() => setShowFilters(!showFilters)}>
          <Filter className="h-4 w-4 mr-1" /> Filtros
        </Button>
      </div>

      <div className="mb-6 max-w-md">
        <Input
          placeholder="Buscar en el catálogo..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-card"
        />
      </div>

      <div className="flex gap-8">
        {/* Filters - desktop */}
        <aside className="hidden lg:block w-60 shrink-0">
          <div className="sticky top-24 p-5 rounded-xl border bg-card">
            <FilterPanel />
          </div>
        </aside>

        {/* Mobile filters */}
        {showFilters && (
          <div className="fixed inset-0 z-40 bg-foreground/40 lg:hidden" onClick={() => setShowFilters(false)}>
            <div className="absolute left-0 inset-y-0 w-72 bg-card p-6 shadow-xl overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-semibold">Filtros</h2>
                <Button variant="ghost" size="icon" onClick={() => setShowFilters(false)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <FilterPanel />
            </div>
          </div>
        )}

        {/* Products */}
        <div className="flex-1">
          <p className="text-sm text-muted-foreground mb-4">{filtered.length} productos encontrados</p>
          {filtered.length === 0 ? (
            <div className="text-center py-16 text-muted-foreground">
              <p className="text-lg">No se encontraron productos</p>
              <p className="text-sm mt-1">Intenta con otros filtros</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Catalog;

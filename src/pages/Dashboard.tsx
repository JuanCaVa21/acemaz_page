import { Navigate } from "react-router-dom";
import { Package, TrendingUp, Clock, CheckCircle, Truck as TruckIcon } from "lucide-react";
import RecommendationsSection from "@/components/products/RecommendationsSection";
import { useAuth } from "@/context/AuthContext";

const statusConfig = {
  entregado: { label: "Entregado", icon: CheckCircle, className: "bg-success/10 text-success" },
  "en camino": { label: "En Camino", icon: TruckIcon, className: "bg-accent/10 text-accent" },
  procesando: { label: "Procesando", icon: Clock, className: "bg-muted text-muted-foreground" },
};

const Dashboard = () => {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) return <Navigate to="/login" replace />;

  return (
    <div className="container py-8 space-y-10">
      {/* Header */}
      <div>
        <h1 className="font-display text-2xl md:text-3xl font-bold">
          ¡Hola, {user?.name?.split(" ")[0]}! 👋
        </h1>
        <p className="text-muted-foreground mt-1">Gestiona tus pedidos y descubre productos recomendados.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 rounded-xl border bg-card flex items-center gap-4">
          <div className="p-2.5 rounded-lg bg-primary/10"><Package className="h-5 w-5 text-primary" /></div>
          <div>
            <p className="text-xs text-muted-foreground">Pedidos totales</p>
          </div>
        </div>
        <div className="p-5 rounded-xl border bg-card flex items-center gap-4">
          <div className="p-2.5 rounded-lg bg-accent/10"><TrendingUp className="h-5 w-5 text-accent" /></div>
          <div>
            <p className="text-xs text-muted-foreground">Total gastado</p>
          </div>
        </div>
        <div className="p-5 rounded-xl border bg-card flex items-center gap-4">
          <div className="p-2.5 rounded-lg bg-success/10"><CheckCircle className="h-5 w-5 text-success" /></div>
          <div>
            <p className="text-xs text-muted-foreground">Entregados</p>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <RecommendationsSection />
    </div>
  );
};

export default Dashboard;

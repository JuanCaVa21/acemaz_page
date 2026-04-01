import { Navigate } from "react-router-dom";
import { Package, TrendingUp, Clock, CheckCircle, Truck as TruckIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import RecommendationsSection from "@/components/products/RecommendationsSection";
import { useAuth } from "@/context/AuthContext";
import { orderHistory } from "@/data/mockData";

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
            <p className="text-2xl font-bold">{orderHistory.length}</p>
            <p className="text-xs text-muted-foreground">Pedidos totales</p>
          </div>
        </div>
        <div className="p-5 rounded-xl border bg-card flex items-center gap-4">
          <div className="p-2.5 rounded-lg bg-accent/10"><TrendingUp className="h-5 w-5 text-accent" /></div>
          <div>
            <p className="text-2xl font-bold">${orderHistory.reduce((s, o) => s + o.total, 0).toFixed(0)}</p>
            <p className="text-xs text-muted-foreground">Total gastado</p>
          </div>
        </div>
        <div className="p-5 rounded-xl border bg-card flex items-center gap-4">
          <div className="p-2.5 rounded-lg bg-success/10"><CheckCircle className="h-5 w-5 text-success" /></div>
          <div>
            <p className="text-2xl font-bold">{orderHistory.filter(o => o.status === "entregado").length}</p>
            <p className="text-xs text-muted-foreground">Entregados</p>
          </div>
        </div>
      </div>

      {/* Order History */}
      <section>
        <h2 className="font-display text-xl font-bold mb-4">Historial de Compras</h2>
        <div className="space-y-3">
          {orderHistory.map((order) => {
            const s = statusConfig[order.status];
            return (
              <div key={order.id} className="p-4 rounded-xl border bg-card flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-semibold text-sm">{order.id}</span>
                    <Badge variant="secondary" className={s.className}>
                      <s.icon className="h-3 w-3 mr-1" /> {s.label}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {new Date(order.date).toLocaleDateString("es-MX", { year: "numeric", month: "long", day: "numeric" })}
                    {" · "}
                    {order.items.map(i => `${i.name} (x${i.qty})`).join(", ")}
                  </p>
                </div>
                <span className="font-bold text-lg">${order.total.toFixed(2)}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Recommendations */}
      <RecommendationsSection />
    </div>
  );
};

export default Dashboard;

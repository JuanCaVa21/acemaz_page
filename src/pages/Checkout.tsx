import { useState } from "react";
import { Link } from "react-router-dom";
import { CreditCard, Truck, ArrowLeft, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/context/CartContext";

const Checkout = () => {
  const { items, totalPrice } = useCart();
  const [form, setForm] = useState({
    name: "", email: "", phone: "", address: "", city: "", zip: "",
  });

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  if (items.length === 0) {
    return (
      <div className="container py-20 text-center">
        <p className="text-lg text-muted-foreground mb-4">No hay productos en tu carrito</p>
        <Button asChild>
          <Link to="/catalogo">Ir al Catálogo</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container py-8 max-w-4xl">
      <Button variant="ghost" size="sm" asChild className="mb-6">
        <Link to="/catalogo"><ArrowLeft className="h-4 w-4 mr-1" /> Seguir comprando</Link>
      </Button>

      <h1 className="font-display text-2xl md:text-3xl font-bold mb-8">Checkout</h1>

      <div className="grid md:grid-cols-5 gap-8">
        {/* Form */}
        <div className="md:col-span-3 space-y-6">
          <div className="p-6 rounded-xl border bg-card space-y-4">
            <h2 className="font-semibold flex items-center gap-2">
              <Truck className="h-4 w-4 text-primary" /> Datos de Envío
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="name">Nombre completo</Label>
                <Input id="name" value={form.name} onChange={(e) => update("name", e.target.value)} />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email">Correo electrónico</Label>
                <Input id="email" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="phone">Teléfono</Label>
                <Input id="phone" value={form.phone} onChange={(e) => update("phone", e.target.value)} />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="zip">Código Postal</Label>
                <Input id="zip" value={form.zip} onChange={(e) => update("zip", e.target.value)} />
              </div>
              <div className="sm:col-span-2 space-y-1.5">
                <Label htmlFor="address">Dirección</Label>
                <Input id="address" value={form.address} onChange={(e) => update("address", e.target.value)} />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="city">Ciudad</Label>
                <Input id="city" value={form.city} onChange={(e) => update("city", e.target.value)} />
              </div>
            </div>
          </div>

          {/* Payment placeholder */}
          <div className="p-6 rounded-xl border bg-card space-y-4">
            <h2 className="font-semibold flex items-center gap-2">
              <CreditCard className="h-4 w-4 text-primary" /> Método de Pago
            </h2>
            <div className="border-2 border-dashed rounded-lg p-8 text-center text-muted-foreground">
              <Lock className="h-8 w-8 mx-auto mb-2" />
              <p className="text-sm font-medium">Widget de pago seguro</p>
              <p className="text-xs mt-1">Aquí se montará el procesador de pagos (Stripe, etc.)</p>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="md:col-span-2">
          <div className="sticky top-24 p-6 rounded-xl border bg-card space-y-4">
            <h2 className="font-semibold">Resumen del Pedido</h2>
            <div className="space-y-3">
              {items.map(({ product, quantity }) => (
                <div key={product.id} className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{product.name} x{quantity}</span>
                  <span className="font-medium">${(product.price * quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <Separator />
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Envío</span>
              <span className="text-primary font-medium">Gratis</span>
            </div>
            <Separator />
            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <Button className="w-full" size="lg">
              Confirmar Pedido
            </Button>
            <p className="text-xs text-center text-muted-foreground flex items-center justify-center gap-1">
              <Lock className="h-3 w-3" /> Pago 100% seguro
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

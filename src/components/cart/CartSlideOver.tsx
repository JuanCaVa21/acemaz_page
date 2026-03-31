import { X, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Link } from "react-router-dom";

const CartSlideOver = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 z-50 bg-foreground/40" onClick={closeCart} />

      {/* Panel */}
      <div className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-card shadow-xl animate-slide-in-right flex flex-col">
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h2 className="font-display text-lg font-semibold flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-primary" />
            Carrito ({totalItems})
          </h2>
          <Button variant="ghost" size="icon" onClick={closeCart}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex items-center justify-center flex-col gap-3 text-muted-foreground">
            <ShoppingBag className="h-12 w-12" />
            <p>Tu carrito está vacío</p>
            <Button variant="outline" onClick={closeCart} asChild>
              <Link to="/catalogo">Ver Catálogo</Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {items.map(({ product, quantity }) => (
                <div key={product.id} className="flex gap-3 p-3 rounded-lg bg-muted/50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 rounded-md object-cover"
                    loading="lazy"
                    width={64}
                    height={64}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">{product.name}</p>
                    <p className="text-xs text-muted-foreground">${product.price.toFixed(2)} / {product.unit}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Button variant="outline" size="icon" className="h-7 w-7" onClick={() => updateQuantity(product.id, quantity - 1)}>
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="text-sm font-medium w-6 text-center">{quantity}</span>
                      <Button variant="outline" size="icon" className="h-7 w-7" onClick={() => updateQuantity(product.id, quantity + 1)}>
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-between">
                    <span className="text-sm font-semibold">${(product.price * quantity).toFixed(2)}</span>
                    <Button variant="ghost" size="icon" className="h-7 w-7 text-destructive" onClick={() => removeItem(product.id)}>
                      <Trash2 className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t px-6 py-4 space-y-3">
              <div className="flex justify-between text-lg font-semibold">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <Button className="w-full" size="lg" asChild onClick={closeCart}>
                <Link to="/checkout">Proceder al Pago</Link>
              </Button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartSlideOver;

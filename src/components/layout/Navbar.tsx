import { Link } from "react-router-dom";
import { Search, ShoppingCart, User, Menu, X, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";

const Navbar = () => {
  const { totalItems, openCart } = useCart();
  const { isAuthenticated, user, logout } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container flex h-16 items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <Leaf className="h-7 w-7 text-primary" />
          <span className="font-display text-xl font-bold text-foreground hidden sm:inline">
            FreshDist
          </span>
        </Link>

        {/* Search - desktop */}
        <div className="hidden md:flex flex-1 max-w-md relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar productos..."
            className="pl-9 bg-muted/50"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Nav links - desktop */}
        <nav className="hidden md:flex items-center gap-1">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/catalogo">Catálogo</Link>
          </Button>
          {isAuthenticated ? (
            <>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/dashboard">Mi Cuenta</Link>
              </Button>
              <Button variant="ghost" size="sm" onClick={logout}>
                Salir
              </Button>
            </>
          ) : (
            <Button variant="ghost" size="sm" asChild>
              <Link to="/login">
                <User className="h-4 w-4 mr-1" />
                Ingresar
              </Link>
            </Button>
          )}
        </nav>

        {/* Cart + Mobile toggle */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="relative" onClick={openCart}>
            <ShoppingCart className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[11px] font-semibold text-primary-foreground">
                {totalItems}
              </span>
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t bg-card animate-fade-in">
          <div className="container py-4 space-y-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Buscar productos..." className="pl-9 bg-muted/50" />
            </div>
            <nav className="flex flex-col gap-1">
              <Button variant="ghost" className="justify-start" asChild onClick={() => setMobileOpen(false)}>
                <Link to="/catalogo">Catálogo</Link>
              </Button>
              {isAuthenticated ? (
                <>
                  <Button variant="ghost" className="justify-start" asChild onClick={() => setMobileOpen(false)}>
                    <Link to="/dashboard">Mi Cuenta ({user?.name})</Link>
                  </Button>
                  <Button variant="ghost" className="justify-start" onClick={() => { logout(); setMobileOpen(false); }}>
                    Cerrar Sesión
                  </Button>
                </>
              ) : (
                <Button variant="ghost" className="justify-start" asChild onClick={() => setMobileOpen(false)}>
                  <Link to="/login">Ingresar</Link>
                </Button>
              )}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

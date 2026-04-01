import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CartProvider } from "@/context/CartContext";
import { AuthProvider } from "@/context/AuthContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartSlideOver from "@/components/cart/CartSlideOver";
import Index from "./pages/Index";
import Catalog from "./pages/Catalog";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <CartProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <CartSlideOver />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/catalogo" element={<Catalog />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/registro" element={<Register />} />
                  <Route path="/producto/:slug" element={<ProductDetail />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

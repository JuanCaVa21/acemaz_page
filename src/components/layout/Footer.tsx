import { Leaf, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="border-t bg-card mt-16">
    <div className="container py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Leaf className="h-6 w-6 text-primary" />
          <span className="font-display text-lg font-bold">FreshDist</span>
        </div>
        <p className="text-sm text-muted-foreground">
          Distribuidora de alimentos frescos y de calidad para tu negocio y hogar.
        </p>
      </div>
      <div>
        <h4 className="font-semibold mb-3 text-sm">Navegación</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><a href="/catalogo" className="hover:text-primary transition-colors">Catálogo</a></li>
          <li><a href="/login" className="hover:text-primary transition-colors">Mi Cuenta</a></li>
          <li><a href="#" className="hover:text-primary transition-colors">Nosotros</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-3 text-sm">Categorías</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>Frutas y Verduras</li>
          <li>Carnes y Aves</li>
          <li>Lácteos</li>
          <li>Panadería</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-3 text-sm">Contacto</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +1 (555) 123-4567</li>
          <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> info@freshdist.com</li>
          <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Ciudad de México, MX</li>
        </ul>
      </div>
    </div>
    <div className="border-t py-4 text-center text-xs text-muted-foreground">
      © 2025 FreshDist. Todos los derechos reservados.
    </div>
  </footer>
);

export default Footer;

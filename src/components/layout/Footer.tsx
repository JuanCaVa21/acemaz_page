import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="border-t bg-card mt-16">
    <div className="container py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <span className="font-display text-lg font-bold">ACEMAZ ZOMAC S.A.S.</span>
        </div>
        <p className="text-sm text-muted-foreground">
          Somos distribuidores de alimentos de calidad, especializados en granos en el sector de Uraba.
        </p>
      </div>
      <div>
        <h4 className="font-semibold mb-3 text-sm">Navegación</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><Link to="/catalogo" className="hover:text-primary transition-colors">Catálogo</Link></li>
          <li><Link to="/login" className="hover:text-primary transition-colors">Mi Cuenta</Link></li>
          <li><Link to="/nosotros" className="hover:text-primary transition-colors">Nosotros</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-3 text-sm">Categorías</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>Granod y Cereales</li>
          <li>Aseo y Limpieza</li>
          <li>Varios</li>
          <li>Semillas</li>
          <li>Para Animales</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-3 text-sm">Contacto</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +57 (314) 261 8266</li>
          <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> acema1.sas@gmail.com</li>
          <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> KM 51,7 Via Carepa - Chigorodo </li>
        </ul>
      </div>
    </div>
    <div className="border-t py-4 text-center text-xs text-muted-foreground">
      © 2025 ACEMAZ ZOMAC S.A.S. Todos los derechos reservados.
    </div>
  </footer>
);

export default Footer;

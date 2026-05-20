import { Link } from "@tanstack/react-router";
import { Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-32 bg-[var(--madera)] text-[var(--lino)]">
      <div className="container-edit py-20 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-baseline gap-1">
            <span className="font-display text-3xl">IArquitectos</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--terracota)] translate-y-[-2px]" />
          </div>
          <p className="mt-6 max-w-md text-sm text-[var(--lino)]/70 leading-relaxed">
            Del concepto a la llave. Grupo inmobiliario integral con presencia en México y proyectos internacionales.
          </p>
          <div className="flex gap-4 mt-8">
            <a href="https://facebook.com" aria-label="Facebook" className="p-2.5 border border-[var(--lino)]/20 hover:bg-[var(--terracota)] hover:border-[var(--terracota)] transition-colors duration-500">
              <Facebook size={16} />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="p-2.5 border border-[var(--lino)]/20 hover:bg-[var(--terracota)] hover:border-[var(--terracota)] transition-colors duration-500">
              <Instagram size={16} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-[11px] uppercase tracking-[0.25em] text-[var(--lino)]/50 mb-5">Explorar</h4>
          <ul className="space-y-3 text-sm">
            {[
              ["/nosotros","Nosotros"],
              ["/servicios","Servicios"],
              ["/proyectos","Proyectos"],
              ["/desarrollos","Desarrollos"],
              ["/contacto","Contacto"],
            ].map(([to,label]) => (
              <li key={to}><Link to={to as any} className="link-underline text-[var(--lino)]/80 hover:text-[var(--lino)]">{label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[11px] uppercase tracking-[0.25em] text-[var(--lino)]/50 mb-5">Contacto</h4>
          <ul className="space-y-3 text-sm text-[var(--lino)]/80">
            <li>+52 (33) 3201 6859</li>
            <li>israelarquitectosmx@gmail.com</li>
            <li>Zapopan, Jalisco · MX</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--lino)]/10">
        <div className="container-edit py-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-[var(--lino)]/50">
          <p>© {new Date().getFullYear()} IArquitectos. Todos los derechos reservados.</p>
          <a href="#" className="link-underline">Política de Privacidad</a>
        </div>
      </div>
    </footer>
  );
}

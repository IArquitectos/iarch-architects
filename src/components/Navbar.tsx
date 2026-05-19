import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/servicios", label: "Servicios" },
  { to: "/proyectos", label: "Proyectos" },
  { to: "/desarrollos", label: "Desarrollos" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[var(--lino)]/85 backdrop-blur-md border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div className="container-edit flex items-center justify-between h-20">
        <Link to="/" className="flex items-baseline gap-1 group">
          <span className="font-display text-2xl tracking-tight text-foreground">IArquitectos</span>
          <span className="w-1.5 h-1.5 rounded-full bg-accent translate-y-[-2px] transition-transform group-hover:scale-150" />
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-[13px] uppercase tracking-[0.18em] text-foreground/80 link-underline"
              activeProps={{ className: "text-accent" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contacto"
            className="inline-flex items-center px-5 py-2.5 text-[12px] uppercase tracking-[0.2em] border border-foreground/80 text-foreground hover:bg-foreground hover:text-[var(--lino)] transition-all duration-500"
          >
            Agenda una Consulta
          </Link>
        </div>

        <button
          aria-label="Menú"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 text-foreground"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-out bg-[var(--lino)] border-t border-border ${
          open ? "max-h-[600px]" : "max-h-0"
        }`}
      >
        <nav className="container-edit flex flex-col py-8 gap-6">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="font-display text-3xl text-foreground"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contacto"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex justify-center px-5 py-3 text-[12px] uppercase tracking-[0.2em] bg-foreground text-[var(--lino)]"
          >
            Agenda una Consulta
          </Link>
        </nav>
      </div>
    </header>
  );
}

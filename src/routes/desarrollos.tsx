import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import p1 from "../assets/project-1.jpg";
import p4 from "../assets/project-4.jpg";
import p5 from "../assets/project-5.jpg";
import p3 from "../assets/project-3.jpg";
import { Reveal } from "../components/Reveal";

export const Route = createFileRoute("/desarrollos")({
  head: () => ({
    meta: [
      { title: "Desarrollos — IArquitectos" },
      { name: "description", content: "Propiedades en venta y preventa: desarrollos residenciales y vacacionales con sello IArquitectos." },
      { property: "og:title", content: "Desarrollos — IArquitectos" },
      { property: "og:url", content: "/desarrollos" },
    ],
    links: [{ rel: "canonical", href: "/desarrollos" }],
  }),
  component: Desarrollos,
});

const items = [
  { img: p5, name: "Costa Mareia", loc: "Tulum, MX", status: "En preventa", price: "$8,200,000 MXN" },
  { img: p1, name: "Casa Selene", loc: "Mérida, MX", status: "En construcción", price: "$6,500,000 MXN" },
  { img: p4, name: "Lofts Condesa 7", loc: "CDMX, MX", status: "Entregado", price: "$4,800,000 MXN" },
  { img: p3, name: "Torre Reforma 88", loc: "CDMX, MX", status: "En preventa", price: "$12,300,000 MXN" },
];

const statusStyle: Record<string, string> = {
  "En preventa": "bg-[var(--terracota)] text-[var(--lino)]",
  "En construcción": "bg-[var(--salvia)] text-[var(--lino)]",
  "Entregado": "bg-[var(--madera)] text-[var(--lino)]",
};

function Desarrollos() {
  return (
    <>
      <section className="pt-40 pb-16">
        <div className="container-edit">
          <Reveal>
            <span className="text-[11px] uppercase tracking-[0.3em] text-accent">— Desarrollos</span>
            <h1 className="font-display text-5xl md:text-7xl mt-8 leading-[1] text-balance max-w-4xl">
              Propiedades para <em className="italic">vivir e invertir.</em>
            </h1>
            <p className="mt-8 max-w-2xl text-muted-foreground text-lg">
              Selección curada de desarrollos en preventa, construcción y entregados. Cada uno con la firma estética IArquitectos.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-32">
        <div className="container-edit space-y-12">
          {items.map((d, i) => (
            <Reveal key={d.name} delay={i * 80}>
              <article className={`grid md:grid-cols-12 gap-8 items-center ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}>
                <div className="md:col-span-7 [direction:ltr]">
                  <div className="relative overflow-hidden aspect-[16/10] group">
                    <img src={d.img} alt={d.name} loading="lazy" width={1200} height={900} className="w-full h-full object-cover transition-transform duration-[1.4s] group-hover:scale-105" />
                    <span className={`absolute top-5 left-5 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] ${statusStyle[d.status]}`}>
                      {d.status}
                    </span>
                  </div>
                </div>
                <div className="md:col-span-5 [direction:ltr]">
                  <p className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    <MapPin size={12} /> {d.loc}
                  </p>
                  <h2 className="font-display text-4xl md:text-5xl mt-4">{d.name}</h2>
                  <p className="mt-6 text-muted-foreground leading-relaxed">
                    Diseño escandibo, materiales nobles y amenidades curadas. Espacios pensados para habitar lento y vivir bien.
                  </p>
                  <div className="mt-8 flex items-baseline gap-3">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Desde</span>
                    <span className="font-display text-2xl">{d.price}</span>
                  </div>
                  <Link to="/contacto" className="mt-8 inline-flex items-center gap-3 px-6 py-3 bg-foreground text-[var(--lino)] text-xs uppercase tracking-[0.2em] hover:bg-accent transition-colors duration-500">
                    Solicitar información <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import p1 from "../assets/project-1.jpg";
import p2 from "../assets/project-2.jpg";
import p3 from "../assets/project-3.jpg";
import p4 from "../assets/project-4.jpg";
import p5 from "../assets/project-5.jpg";
import p6 from "../assets/project-6.jpg";
import { Reveal } from "../components/Reveal";

export const Route = createFileRoute("/proyectos")({
  head: () => ({
    meta: [
      { title: "Proyectos — IArquitectos" },
      { name: "description", content: "Portafolio de proyectos residenciales, comerciales, interiorismo e internacionales de IArquitectos." },
      { property: "og:title", content: "Proyectos — IArquitectos" },
      { property: "og:url", content: "/proyectos" },
    ],
    links: [{ rel: "canonical", href: "/proyectos" }],
  }),
  component: Proyectos,
});

const projects = [
  { img: p1, name: "Casa Tulum", loc: "Quintana Roo, MX", year: "2024", cat: "Residencial" },
  { img: p2, name: "Loft Roma Norte", loc: "CDMX, MX", year: "2024", cat: "Interiorismo" },
  { img: p3, name: "Edificio Polanco", loc: "CDMX, MX", year: "2023", cat: "Comercial" },
  { img: p4, name: "Casa Valle", loc: "Monterrey, MX", year: "2024", cat: "Residencial" },
  { img: p5, name: "Costa Mareia", loc: "Riviera Maya, MX", year: "2025", cat: "Internacional" },
  { img: p6, name: "Studio Hidalgo", loc: "Puebla, MX", year: "2023", cat: "Interiorismo" },
];

const filters = ["Todos", "Residencial", "Comercial", "Interiorismo", "Internacional"] as const;

function Proyectos() {
  const [active, setActive] = useState<(typeof filters)[number]>("Todos");
  const list = projects.filter((p) => active === "Todos" || p.cat === active);

  return (
    <>
      <section className="pt-40 pb-12">
        <div className="container-edit">
          <Reveal>
            <span className="text-[11px] uppercase tracking-[0.3em] text-accent">— Portafolio</span>
            <h1 className="font-display text-5xl md:text-7xl mt-8 leading-[1] text-balance">
              Proyectos que <em className="italic">se habitan, no se miran.</em>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-edit">
          <div className="flex flex-wrap gap-2 mb-12 border-b border-border pb-6">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-4 py-2 text-[11px] uppercase tracking-[0.2em] transition-all duration-300 ${
                  active === f ? "bg-foreground text-[var(--lino)]" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {list.map((p, i) => (
              <Reveal key={p.name} delay={i * 60}>
                <article className="group cursor-pointer">
                  <div className="relative overflow-hidden aspect-[4/5]">
                    <img src={p.img} alt={p.name} loading="lazy" width={1200} height={900} className="w-full h-full object-cover transition-transform duration-[1.4s] group-hover:scale-105" />
                    <div className="absolute inset-0 bg-[var(--negro)]/0 group-hover:bg-[var(--negro)]/40 transition-colors duration-500" />
                    <div className="absolute inset-x-0 bottom-0 p-5 text-[var(--lino)] translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--lino)]/70">{p.cat}</p>
                    </div>
                  </div>
                  <div className="mt-5 flex justify-between items-baseline">
                    <div>
                      <h3 className="font-display text-2xl">{p.name}</h3>
                      <p className="text-xs text-muted-foreground mt-1">{p.loc}</p>
                    </div>
                    <span className="font-display italic text-muted-foreground text-sm">{p.year}</span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

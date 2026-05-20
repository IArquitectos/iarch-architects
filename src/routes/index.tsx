import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowDown, Building2, PenTool, HardHat, ClipboardCheck, Sofa, Wrench, Quote } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type CarouselApi } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import hero from "../assets/hero.jpg";
import project1 from "../assets/project-1.jpg";
import project2 from "../assets/project-2.jpg";
import project5 from "../assets/project-5.jpg";
import { Reveal } from "../components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IArquitectos — Del concepto a la llave" },
      { name: "description", content: "Grupo inmobiliario integral con presencia en México y proyectos internacionales. Arquitectura, construcción, interiorismo y desarrollo." },
      { property: "og:title", content: "IArquitectos — Del concepto a la llave" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const cycle = [
  { icon: Building2, title: "Desarrolladora Inmobiliaria", desc: "La cabeza del negocio. Atraemos inversionistas y estructuramos oportunidades." },
  { icon: PenTool, title: "Despacho de Arquitectura", desc: "Conceptualizamos espacios con identidad estética y propósito." },
  { icon: HardHat, title: "Construcción Residencial", desc: "Materializamos los diseños con precisión artesanal." },
  { icon: ClipboardCheck, title: "Administración de Obra", desc: "Garantizamos plazos, presupuestos y calidad sin fisuras." },
  { icon: Sofa, title: "Interiorismo", desc: "Vestimos los espacios. Conectamos con la emoción de habitar." },
  { icon: Wrench, title: "Operación y Mantenimiento", desc: "Cuidamos la plusvalía a largo plazo, después de la entrega." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={hero} alt="Interior arquitectónico cálido IArquitectos" className="w-full h-full object-cover" width={1920} height={1280} />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--negro)]/85 via-[var(--negro)]/40 to-[var(--negro)]/30" />
        </div>

        <div className="relative container-edit pb-24 pt-40 text-[var(--lino)] z-10">
          <div className="max-w-4xl">
            <Reveal>
              <span className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-[var(--lino)]/70">
                <span className="w-8 h-px bg-[var(--terracota)]" /> Grupo inmobiliario · MX
              </span>
            </Reveal>
            <Reveal delay={150}>
              <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] mt-8 text-balance">
                Del concepto a la llave.<br />
                <em className="text-[var(--terracota)] not-italic font-display italic">Todo bajo una sola visión.</em>
              </h1>
            </Reveal>
            <Reveal delay={300}>
              <p className="mt-8 max-w-xl text-base md:text-lg text-[var(--lino)]/80 leading-relaxed">
                Grupo inmobiliario integral con presencia en México y proyectos internacionales. Las seis etapas del ciclo, una sola firma.
              </p>
            </Reveal>
            <Reveal delay={450}>
              <div className="mt-12 flex flex-wrap gap-4">
                <Link to="/desarrollos" className="group inline-flex items-center gap-3 px-7 py-4 bg-[var(--terracota)] text-[var(--lino)] text-xs uppercase tracking-[0.2em] hover:bg-[var(--lino)] hover:text-[var(--negro)] transition-all duration-500">
                  Ver Desarrollos <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link to="/nosotros" className="group inline-flex items-center gap-3 px-7 py-4 border border-[var(--lino)]/40 text-[var(--lino)] text-xs uppercase tracking-[0.2em] hover:bg-[var(--lino)] hover:text-[var(--negro)] transition-all duration-500">
                  Conocer el Grupo
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="absolute right-6 md:right-12 bottom-10 hidden md:flex flex-col items-center gap-3 text-[var(--lino)]/60">
            <span className="text-[10px] uppercase tracking-[0.3em] [writing-mode:vertical-rl]">Scroll</span>
            <ArrowDown size={16} className="animate-bounce" />
          </div>
        </div>
      </section>

      {/* CYCLE */}
      <section className="py-32 relative">
        <div className="container-edit">
          <div className="grid lg:grid-cols-12 gap-10 mb-20">
            <div className="lg:col-span-5">
              <Reveal>
                <span className="text-[11px] uppercase tracking-[0.3em] text-accent">— Propuesta de Valor</span>
                <h2 className="font-display text-4xl md:text-5xl mt-6 leading-tight text-balance">
                  El ciclo completo,<br /><em className="italic">una sola firma.</em>
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex items-end">
              <Reveal delay={150}>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Somos el único grupo en el mercado que controla las seis etapas del ciclo inmobiliario bajo una sola visión estética coherente. Desde la atracción de capital hasta el mantenimiento post-entrega.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="grid gap-px bg-border/60 sm:grid-cols-2 lg:grid-cols-3 border border-border/60">
            {cycle.map((c, i) => (
              <Reveal key={c.title} delay={i * 80}>
                <div className="bg-[var(--lino)] p-8 md:p-10 h-full group hover-lift">
                  <div className="flex items-start justify-between mb-8">
                    <c.icon size={28} className="text-accent" strokeWidth={1.2} />
                    <span className="font-display italic text-muted-foreground text-sm">0{i+1}</span>
                  </div>
                  <h3 className="font-display text-2xl mb-3">{c.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS PEEK */}
      <section className="py-32 bg-[var(--arena)]/60">
        <div className="container-edit">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
            <Reveal>
              <span className="text-[11px] uppercase tracking-[0.3em] text-accent">— Proyectos Destacados</span>
              <h2 className="font-display text-4xl md:text-5xl mt-6 leading-tight">Espacios que inspiran, proyectos que trascienden.</h2>
            </Reveal>
            <Reveal delay={150}>
              <Link to="/proyectos" className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] link-underline">
                Ver portafolio <ArrowRight size={14} />
              </Link>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { img: project1, name: "Casa Tulum", loc: "Quintana Roo, MX", year: "2024" },
              { img: project2, name: "Residencia Polanco", loc: "CDMX, MX", year: "2024" },
              { img: project5, name: "Costa Mareia", loc: "Riviera Maya, MX", year: "2025" },
            ].map((p, i) => (
              <Reveal key={p.name} delay={i * 100}>
                <Link to="/proyectos" className="group block">
                  <div className="relative overflow-hidden aspect-[4/5]">
                    <img src={p.img} alt={p.name} loading="lazy" width={1200} height={900} className="w-full h-full object-cover transition-transform duration-[1.4s] group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--negro)]/70 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-[var(--lino)]">
                      <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--lino)]/70">{p.loc} · {p.year}</p>
                      <h3 className="font-display text-2xl mt-2">{p.name}</h3>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <TestimonialsSection />


      {/* CTA */}
      <section className="pb-32">
        <div className="container-edit">
          <div className="relative overflow-hidden bg-[var(--madera)] text-[var(--lino)] p-12 md:p-20">
            <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-[var(--terracota)]/20 blur-3xl" />
            <div className="relative grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="font-display text-4xl md:text-5xl leading-tight">¿Listos para construir <em className="italic text-[var(--terracota)]">algo distinto?</em></h2>
              </div>
              <div className="flex md:justify-end">
                <Link to="/contacto" className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--terracota)] text-[var(--lino)] text-xs uppercase tracking-[0.2em] hover:bg-[var(--lino)] hover:text-[var(--negro)] transition-all duration-500">
                  Agenda una consulta <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

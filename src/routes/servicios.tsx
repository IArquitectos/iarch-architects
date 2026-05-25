import { createFileRoute, Link } from "@tanstack/react-router";
import { Building2, PenTool, HardHat, ClipboardCheck, Sofa, Wrench, ArrowUpRight } from "lucide-react";
import { Reveal } from "../components/Reveal";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios — IArquitectos" },
      { name: "description", content: "Las siete unidades de negocio de IArquitectos: desarrollo, arquitectura, construcción, administración, interiorismo, bienes raíces y operación." },
      { property: "og:title", content: "Servicios — IArquitectos" },
      { property: "og:url", content: "/servicios" },
    ],
    links: [{ rel: "canonical", href: "/servicios" }],
  }),
  component: Servicios,
});

const services = [
  { icon: Building2, title: "Desarrolladora Inmobiliaria", desc: "Estructuramos oportunidades de inversión, atraemos capital y damos vida a proyectos desde la concepción del modelo de negocio." },
  { icon: PenTool, title: "Despacho de Arquitectura", desc: "Conceptualizamos espacios únicos. Cada proyecto nace de un análisis profundo del contexto, el clima y la cultura." },
  { icon: HardHat, title: "Construcción Residencial", desc: "Ejecutamos con oficio. Equipos propios, materiales nobles y atención obsesiva al detalle artesanal." },
  { icon: Building2, title: "Bienes Raíces y Comercialización", desc: "Conectamos proyectos con el comprador ideal y aceleramos el retorno de inversión." },
  { icon: ClipboardCheck, title: "Administración y Control de Obra", desc: "Aseguramos la eficiencia financiera, plazos coherentes y un estricto seguimiento de calidad." },
  { icon: Sofa, title: "Interiorismo", desc: "Vestimos cada espacio con piezas curadas, texturas y luz que convierten una casa en hogar." },
  { icon: Wrench, title: "Operación y Mantenimiento", desc: "Cuidamos la plusvalía a largo plazo, después de la entrega." },
];

function Servicios() {
  return (
    <>
      <section className="pt-40 pb-20">
        <div className="container-edit max-w-5xl">
          <Reveal>
            <span className="text-[11px] uppercase tracking-[0.3em] text-accent">— Servicios</span>
            <h1 className="font-display text-5xl md:text-7xl mt-8 leading-[1] text-balance">
              Siete unidades, <em className="italic">una sola firma.</em>
            </h1>
            <p className="mt-8 max-w-2xl text-muted-foreground text-lg">
              Cada unidad opera con autonomía técnica pero comparte una estética y un estándar comunes. Por eso podemos prometer continuidad real entre el plano y la llave.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-32">
        <div className="container-edit max-w-5xl border-t border-border/60">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 40}>
              <article className="group border-b border-border/60 py-10 md:py-12 grid md:grid-cols-12 gap-6 md:gap-10 items-start hover:bg-[var(--lino)]/60 transition-colors duration-500 px-2 md:px-4">
                <div className="md:col-span-1 flex items-center gap-4">
                  <span className="font-display italic text-muted-foreground text-sm">0{i+1}</span>
                </div>
                <div className="md:col-span-1">
                  <s.icon size={28} className="text-accent" strokeWidth={1.2} />
                </div>
                <h2 className="md:col-span-4 font-display text-2xl md:text-3xl leading-tight">{s.title}</h2>
                <p className="md:col-span-5 text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="md:col-span-1 flex md:justify-end">
                  <Link to="/contacto" aria-label={`Conocer más sobre ${s.title}`} className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] link-underline">
                    <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
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

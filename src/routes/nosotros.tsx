import { createFileRoute } from "@tanstack/react-router";
import about from "../assets/about.jpg";
import { Reveal } from "../components/Reveal";

export const Route = createFileRoute("/nosotros")({
  head: () => ({
    meta: [
      { title: "Nosotros — IArquitectos" },
      { name: "description", content: "Conoce al grupo IArquitectos: historia, misión, valores y el equipo detrás de cada proyecto." },
      { property: "og:title", content: "Nosotros — IArquitectos" },
      { property: "og:url", content: "/nosotros" },
    ],
    links: [{ rel: "canonical", href: "/nosotros" }],
  }),
  component: Nosotros,
});

const stats = [
  { n: "15+", l: "Años de experiencia" },
  { n: "120", l: "Proyectos entregados" },
  { n: "85k", l: "m² construidos" },
  { n: "4", l: "Países con presencia" },
];

function Nosotros() {
  return (
    <>
      <section className="pt-40 pb-20">
        <div className="container-edit max-w-5xl">
          <Reveal>
            <span className="text-[11px] uppercase tracking-[0.3em] text-accent">— Nosotros</span>
            <h1 className="font-display text-5xl md:text-7xl mt-8 leading-[1] text-balance">
              Una visión arquitectónica<br /><em className="italic">con raíces y horizonte.</em>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="pb-32">
        <div className="container-edit grid lg:grid-cols-12 gap-12 items-start">
          <Reveal className="lg:col-span-7">
            <img src={about} alt="Estudio IArquitectos" loading="lazy" width={1400} height={1000} className="w-full h-auto" />
          </Reveal>
          <div className="lg:col-span-5 lg:pt-20 space-y-8 text-muted-foreground leading-relaxed">
            <Reveal delay={100}>
              <p className="text-lg">Nacimos en 2010 con una convicción clara: la arquitectura no es solo construir, es habitar. Lo que comenzó como un despacho boutique en la Ciudad de México evolucionó hasta convertirse en un grupo inmobiliario integral.</p>
            </Reveal>
            <Reveal delay={200}>
              <p>Hoy, IArquitectos es la única firma mexicana que une desarrollo, diseño, construcción, interiorismo y operación bajo una sola marca, una sola visión estética, y una sola promesa.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-32 bg-[var(--madera)] text-[var(--lino)]">
        <div className="container-edit max-w-5xl text-center">
          <Reveal>
            <blockquote className="font-display text-3xl md:text-5xl leading-tight italic text-balance">
              "Construimos lugares donde las personas se reconocen a sí mismas."
            </blockquote>
          </Reveal>
        </div>
      </section>

      <section className="py-32">
        <div className="container-edit grid md:grid-cols-3 gap-12">
          {[
            { t: "Misión", d: "Diseñar y construir espacios que eleven la forma de habitar a través de un proceso integral, sin intermediarios." },
            { t: "Visión", d: "Ser referente latinoamericano de desarrollo inmobiliario con sello arquitectónico propio y proyección global." },
            { t: "Valores", d: "Integridad, oficio, calidez, sustentabilidad y obsesión por el detalle." },
          ].map((b, i) => (
            <Reveal key={b.t} delay={i * 100}>
              <h3 className="font-display text-3xl mb-4">{b.t}</h3>
              <p className="text-muted-foreground leading-relaxed">{b.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-32 border-t border-border">
        <div className="container-edit grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <Reveal key={s.l} delay={i * 80}>
              <div>
                <p className="font-display text-5xl md:text-6xl text-accent">{s.n}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.l}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

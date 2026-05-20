import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, Check } from "lucide-react";
import { Reveal } from "../components/Reveal";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — IArquitectos" },
      { name: "description", content: "Hablemos de tu próximo proyecto. Formulario inteligente y datos de contacto IArquitectos." },
      { property: "og:title", content: "Contacto — IArquitectos" },
      { property: "og:url", content: "/contacto" },
    ],
    links: [{ rel: "canonical", href: "/contacto" }],
  }),
  component: Contacto,
});

const services = [
  "Desarrollos Inmobiliarios",
  "Proyecto Arquitectónico",
  "Construcción Residencial",
  "Administración y Control de Obra",
  "Interiorismo",
  "Operación y Mantenimiento",
];

function Contacto() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", type: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (form.name.trim().length < 2) e.name = "Tu nombre, por favor.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Correo no válido.";
    if (form.phone.trim().length < 7) e.phone = "Teléfono incompleto.";
    if (!form.type) e.type = "Elige una unidad.";
    if (form.message.trim().length < 10) e.message = "Cuéntanos un poco más.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSent(true);
    setForm({ name: "", email: "", phone: "", type: "", message: "" });
    setTimeout(() => setSent(false), 5000);
  };

  const field = (k: keyof typeof form) => (v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: "" }));
  };

  return (
    <>
      <section className="pt-40 pb-16">
        <div className="container-edit max-w-5xl">
          <Reveal>
            <span className="text-[11px] uppercase tracking-[0.3em] text-accent">— Contacto</span>
            <h1 className="font-display text-5xl md:text-7xl mt-8 leading-[1] text-balance">
              Hablemos de tu <em className="italic">próximo proyecto.</em>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="pb-32">
        <div className="container-edit grid lg:grid-cols-12 gap-16">
          <Reveal className="lg:col-span-7">
            <form onSubmit={onSubmit} className="space-y-8" noValidate>
              <Field label="Nombre completo" error={errors.name}>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => field("name")(e.target.value)}
                  maxLength={100}
                  className="input-line"
                />
              </Field>
              <div className="grid md:grid-cols-2 gap-8">
                <Field label="Correo electrónico" error={errors.email}>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => field("email")(e.target.value)}
                    maxLength={120}
                    className="input-line"
                  />
                </Field>
                <Field label="Teléfono / WhatsApp" error={errors.phone}>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => field("phone")(e.target.value)}
                    maxLength={20}
                    className="input-line"
                  />
                </Field>
              </div>
              <Field label="Tipo de consulta" error={errors.type}>
                <select
                  value={form.type}
                  onChange={(e) => field("type")(e.target.value)}
                  className="input-line bg-transparent"
                >
                  <option value="">Selecciona una unidad</option>
                  {services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </Field>
              <Field label="Mensaje" error={errors.message}>
                <textarea
                  value={form.message}
                  onChange={(e) => field("message")(e.target.value)}
                  rows={5}
                  maxLength={1000}
                  className="input-line resize-none"
                />
              </Field>

              <button
                type="submit"
                disabled={sent}
                className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-[var(--lino)] text-xs uppercase tracking-[0.2em] hover:bg-accent transition-colors duration-500 disabled:opacity-60"
              >
                {sent ? (<><Check size={16}/> Enviado</>) : (<>Enviar consulta <Send size={16} /></>)}
              </button>
              {sent && <p className="text-sm text-[var(--salvia)] mt-2">Gracias. Te contactaremos en menos de 24 horas.</p>}
            </form>

            <style>{`
              .input-line {
                width: 100%;
                background: transparent;
                border: none;
                border-bottom: 1px solid var(--color-border);
                padding: 0.75rem 0;
                font-family: var(--font-sans);
                font-size: 1rem;
                color: var(--color-foreground);
                outline: none;
                transition: border-color 0.4s ease;
              }
              .input-line:focus { border-color: var(--color-accent); }
            `}</style>
          </Reveal>

          <aside className="lg:col-span-5 space-y-10">
            <Reveal delay={120}>
              <div className="bg-[var(--arena)] p-8">
                <h3 className="font-display text-2xl mb-6">Visítanos</h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex gap-3"><Phone size={16} className="text-accent mt-1" /> +52 (33) 3201 6859</li>
                  <li className="flex gap-3"><Mail size={16} className="text-accent mt-1" /> israelarquitectosmx@gmail.com</li>
                  <li className="flex gap-3"><MapPin size={16} className="text-accent mt-1" /> Zapopan, Jalisco · MX</li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="aspect-square overflow-hidden">
                <iframe
                  title="Mapa IArquitectos"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-99.2%2C19.42%2C-99.18%2C19.44&layer=mapnik"
                  className="w-full h-full grayscale-[40%]"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
      <div className="mt-1">{children}</div>
      {error && <span className="block mt-1.5 text-xs text-destructive">{error}</span>}
    </label>
  );
}

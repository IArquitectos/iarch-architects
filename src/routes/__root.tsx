import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  Link,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl text-foreground">404</h1>
        <p className="mt-4 text-muted-foreground">Esta página no existe.</p>
        <Link to="/" className="inline-block mt-8 px-6 py-3 bg-foreground text-[var(--lino)] text-xs uppercase tracking-[0.2em]">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl">Algo salió mal</h1>
        <p className="mt-3 text-muted-foreground text-sm">{error.message}</p>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="mt-6 px-6 py-3 bg-foreground text-[var(--lino)] text-xs uppercase tracking-[0.2em]"
        >
          Reintentar
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "IArquitectos — Del concepto a la llave" },
      { name: "description", content: "Grupo inmobiliario integral mexicano con presencia internacional. Desarrollo, arquitectura, construcción, interiorismo y operación bajo una sola visión." },
      { property: "og:title", content: "IArquitectos — Del concepto a la llave" },
      { property: "og:description", content: "Grupo inmobiliario integral mexicano con presencia internacional. Desarrollo, arquitectura, construcción, interiorismo y operación bajo una sola visión." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "IArquitectos — Del concepto a la llave" },
      { name: "twitter:description", content: "Grupo inmobiliario integral mexicano con presencia internacional. Desarrollo, arquitectura, construcción, interiorismo y operación bajo una sola visión." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/95c9af82-ee25-4a6c-bde8-9a2da84ed6fe/id-preview-996d97f8--7ba0276d-582e-49a8-b5d9-33710f5a7805.lovable.app-1779850496724.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/95c9af82-ee25-4a6c-bde8-9a2da84ed6fe/id-preview-996d97f8--7ba0276d-582e-49a8-b5d9-33710f5a7805.lovable.app-1779850496724.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "https://res.cloudinary.com/domuidttd/image/upload/v1779343643/Faviconfinal_j6qz1k.png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 relative z-[2]">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

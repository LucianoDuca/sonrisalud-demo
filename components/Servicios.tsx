import { ClinicaConfig } from "@/lib/config";

export default function Servicios({ config }: { config: ClinicaConfig }) {
  return (
    <section id="servicios" className="bg-neutral-50 px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p
            className="text-sm font-semibold tracking-wide uppercase"
            style={{ color: config.colores.primario }}
          >
            Tratamientos
          </p>
          <h2 className="mt-2 text-2xl font-bold text-neutral-900 sm:text-3xl">
            Todo lo que tu sonrisa necesita, en un solo lugar
          </h2>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {config.servicios.map((servicio) => (
            <div
              key={servicio.nombre}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div
                className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl text-white"
                style={{ backgroundColor: config.colores.primario }}
              >
                <ToothIcon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900">
                {servicio.nombre}
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                {servicio.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ToothIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      className={className}
    >
      <path d="M12 3c-2.2 0-3.3 1.2-4.5 1.2C6.2 4.2 5 3 3.6 3.9 2.2 4.8 2 7 2.4 9c.4 2 1.4 3.5 1.8 5.6.4 2 .5 4.4 1.8 5.2 1.3.8 2-1 2.6-2.8.5-1.5.9-2.6 1.4-2.6s.9 1.1 1.4 2.6c.6 1.8 1.3 3.6 2.6 2.8 1.3-.8 1.4-3.2 1.8-5.2.4-2.1 1.4-3.6 1.8-5.6.4-2 .2-4.2-1.2-5.1-1.4-.9-2.6.3-3.9.3C15.3 4.2 14.2 3 12 3Z" />
    </svg>
  );
}

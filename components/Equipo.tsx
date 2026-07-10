import { ClinicaConfig } from "@/lib/config";

export default function Equipo({ config }: { config: ClinicaConfig }) {
  return (
    <section className="bg-neutral-50 px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p
            className="text-sm font-semibold tracking-wide uppercase"
            style={{ color: config.colores.primario }}
          >
            Nuestro equipo
          </p>
          <h2 className="mt-2 text-2xl font-bold text-neutral-900 sm:text-3xl">
            Profesionales en los que puedes confiar
          </h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2">
          {config.equipo.map((miembro) => (
            <div
              key={miembro.nombre}
              className="flex items-start gap-4 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
            >
              <div
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-lg font-semibold text-white"
                style={{ backgroundColor: config.colores.primario }}
              >
                {miembro.iniciales}
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900">
                  {miembro.nombre}
                </h3>
                <p
                  className="text-sm font-medium"
                  style={{ color: config.colores.acento }}
                >
                  {miembro.rol}
                </p>
                <p className="mt-2 text-sm text-neutral-600">{miembro.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

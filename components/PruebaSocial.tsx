import { ClinicaConfig } from "@/lib/config";
import { StarIcon } from "@/components/Hero";

export default function PruebaSocial({ config }: { config: ClinicaConfig }) {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p
            className="text-sm font-semibold tracking-wide uppercase"
            style={{ color: config.colores.primario }}
          >
            Opiniones reales
          </p>
          <h2 className="mt-2 text-2xl font-bold text-neutral-900 sm:text-3xl">
            Lo que dicen nuestros pacientes en Google
          </h2>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {config.resenas.map((resena) => (
            <div
              key={resena.autor}
              className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
            >
              <div className="flex text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon
                    key={i}
                    filled={i < resena.estrellas}
                    className="h-4 w-4"
                  />
                ))}
              </div>
              <p className="mt-3 flex-1 text-sm text-neutral-600">
                &ldquo;{resena.texto}&rdquo;
              </p>
              <p className="mt-4 text-sm font-semibold text-neutral-900">
                {resena.autor}
              </p>
              <p className="text-xs text-neutral-400">Reseña de Google</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

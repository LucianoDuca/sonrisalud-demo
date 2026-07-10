import { ClinicaConfig, telefonoHref, whatsappHref } from "@/lib/config";

export default function Hero({ config }: { config: ClinicaConfig }) {
  const promedioResenas =
    config.notaGoogle ??
    config.resenas.reduce((acc, r) => acc + r.estrellas, 0) /
      config.resenas.length;
  const totalResenas = config.resenasTotales ?? config.resenas.length;

  return (
    <section
      className="relative overflow-hidden text-white"
      style={{
        background: `linear-gradient(135deg, ${config.colores.primario} 0%, ${config.colores.primario} 55%, ${config.colores.acento} 140%)`,
      }}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 py-16 md:flex-row md:py-24">
        <div className="flex-1 text-center md:text-left">
          <p className="mb-3 inline-block rounded-full bg-white/15 px-4 py-1 text-sm font-medium tracking-wide">
            {config.nombre} · {config.ciudad}
          </p>
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            {config.eslogan}
          </h1>
          <p className="mx-auto mt-4 max-w-md text-base text-white/90 md:mx-0 md:text-lg">
            Presupuesto sin compromiso y primera visita de valoración incluida.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
            <a
              href={whatsappHref(config)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold shadow-lg transition hover:scale-[1.02]"
              style={{ color: config.colores.primario }}
            >
              <WhatsAppIcon className="h-5 w-5" />
              Pedir cita por WhatsApp
            </a>
            <a
              href={telefonoHref(config)}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/60 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              <PhoneIcon className="h-5 w-5" />
              Llamar ahora
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-white/90 md:justify-start">
            <div className="flex text-amber-300">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon
                  key={i}
                  filled={i < Math.round(promedioResenas)}
                  className="h-4 w-4"
                />
              ))}
            </div>
            <span>
              {promedioResenas.toFixed(1).replace(".", ",")} · {totalResenas}{" "}
              reseñas en Google
            </span>
          </div>
        </div>

        <div className="flex w-full flex-1 justify-center">
          <div className="aspect-square w-full max-w-sm rounded-3xl bg-white/10 ring-1 ring-white/25 backdrop-blur-sm sm:aspect-4/3">
            <div className="flex h-full w-full items-center justify-center rounded-3xl">
              <span className="px-6 text-center text-sm text-white/70">
                Foto de la clínica / equipo
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.02c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.12.11-1.81-.11-.42-.13-.95-.31-1.64-.6-2.88-1.24-4.76-4.14-4.9-4.33-.14-.19-1.17-1.56-1.17-2.98 0-1.41.74-2.11 1-2.4.26-.29.57-.36.76-.36.19 0 .38 0 .55.01.18.01.41-.07.64.49.24.58.81 2 .88 2.14.07.15.12.32.02.51-.1.19-.15.31-.29.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.61.17.29.76 1.25 1.63 2.02 1.12.99 2.06 1.3 2.35 1.45.29.15.46.13.63-.08.17-.2.72-.84.92-1.13.19-.29.39-.24.65-.14.27.1 1.68.79 1.97.93.29.15.48.22.55.34.07.13.07.75-.17 1.43Z" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className={className}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

export function StarIcon({
  filled,
  className,
}: {
  filled: boolean;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={filled ? 0 : 1.5}
      className={className}
    >
      <path d="M12 2.5l2.9 6.06 6.6.77-4.86 4.6 1.28 6.57L12 17.35l-5.92 3.15 1.28-6.57-4.86-4.6 6.6-.77L12 2.5Z" />
    </svg>
  );
}

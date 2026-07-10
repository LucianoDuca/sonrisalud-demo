import { ClinicaConfig, telefonoHref } from "@/lib/config";

export default function MapaDatos({ config }: { config: ClinicaConfig }) {
  return (
    <section id="contacto" className="px-6 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
        <div className="overflow-hidden rounded-2xl border border-neutral-200">
          <iframe
            src={config.mapaEmbedUrl}
            title={`Mapa de ubicación de ${config.nombre}`}
            className="h-72 w-full md:h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p
            className="text-sm font-semibold tracking-wide uppercase"
            style={{ color: config.colores.primario }}
          >
            Visítanos
          </p>
          <h2 className="mt-2 text-2xl font-bold text-neutral-900 sm:text-3xl">
            Estamos en el centro de {config.ciudad}
          </h2>

          <dl className="mt-6 space-y-5">
            <div className="flex items-start gap-3">
              <PinIcon
                className="mt-0.5 h-5 w-5 shrink-0"
                style={{ color: config.colores.primario }}
              />
              <div>
                <dt className="text-sm font-semibold text-neutral-900">
                  Dirección
                </dt>
                <dd className="text-sm text-neutral-600">{config.direccion}</dd>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <ClockIcon
                className="mt-0.5 h-5 w-5 shrink-0"
                style={{ color: config.colores.primario }}
              />
              <div>
                <dt className="text-sm font-semibold text-neutral-900">
                  Horario
                </dt>
                <dd className="text-sm text-neutral-600">{config.horarios}</dd>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <PhoneIcon
                className="mt-0.5 h-5 w-5 shrink-0"
                style={{ color: config.colores.primario }}
              />
              <div>
                <dt className="text-sm font-semibold text-neutral-900">
                  Teléfono
                </dt>
                <dd className="text-sm text-neutral-600">
                  <a href={telefonoHref(config)} className="hover:underline">
                    {config.telefono}
                  </a>
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

function PinIcon({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className={className}
      style={style}
    >
      <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 1 1 18 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ClockIcon({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className={className}
      style={style}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}

function PhoneIcon({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className={className}
      style={style}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

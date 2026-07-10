import { ClinicaConfig } from "@/lib/config";

export default function DemoBanner({ config }: { config: ClinicaConfig }) {
  if (!config.demo) return null;

  return (
    <div className="bg-neutral-900 px-4 py-2 text-center text-xs font-medium text-white sm:text-sm">
      Demo — propuesta para {config.nombre}. Los datos de contacto de esta
      página son de prueba.
    </div>
  );
}

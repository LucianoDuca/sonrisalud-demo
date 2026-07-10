import Link from "next/link";
import { ClinicaConfig } from "@/lib/config";

export default function Footer({ config }: { config: ClinicaConfig }) {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-900 px-6 py-10 text-neutral-400">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm sm:flex-row">
        <p className="text-center sm:text-left">
          © {new Date().getFullYear()} {config.nombre}. Todos los derechos
          reservados.
        </p>
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <Link href="/aviso-legal" className="hover:text-white">
            Aviso legal
          </Link>
          <Link href="/privacidad" className="hover:text-white">
            Política de privacidad
          </Link>
          <Link href="/cookies" className="hover:text-white">
            Política de cookies
          </Link>
        </nav>
      </div>
    </footer>
  );
}

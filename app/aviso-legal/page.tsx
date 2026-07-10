import { siteConfig as clinica } from "@/lib/site-config";

export const metadata = {
  title: `Aviso legal · ${clinica.nombre}`,
};

export default function AvisoLegalPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-2xl font-bold text-neutral-900">Aviso legal</h1>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-neutral-600">
        <p>
          En cumplimiento del deber de información recogido en el artículo 10
          de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la
          Información y el Comercio Electrónico (LSSI-CE), se informa de los
          siguientes datos:
        </p>

        <section>
          <h2 className="font-semibold text-neutral-900">
            Datos identificativos
          </h2>
          <p className="mt-2">
            Titular: {clinica.nombre}
            <br />
            NIF/CIF: [pendiente de completar]
            <br />
            Domicilio: {clinica.direccion}
            <br />
            Teléfono: {clinica.telefono}
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-neutral-900">Objeto</h2>
          <p className="mt-2">
            El presente sitio web tiene como finalidad informar sobre los
            servicios de {clinica.nombre} y facilitar la solicitud de citas
            por parte de los usuarios.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-neutral-900">
            Condiciones de uso
          </h2>
          <p className="mt-2">
            El acceso a este sitio web es gratuito y no exige registro previo.
            El usuario se compromete a hacer un uso adecuado de los
            contenidos y servicios ofrecidos, así como a no emplearlos para
            incurrir en actividades ilícitas o contrarias a la buena fe y al
            ordenamiento legal vigente.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-neutral-900">
            Propiedad intelectual
          </h2>
          <p className="mt-2">
            Todos los contenidos del sitio (textos, imágenes, marcas,
            logotipos) son propiedad de {clinica.nombre} o de terceros que
            han autorizado su uso, y están protegidos por la normativa de
            propiedad intelectual e industrial.
          </p>
        </section>
      </div>
    </main>
  );
}

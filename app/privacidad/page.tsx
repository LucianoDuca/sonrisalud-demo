import { siteConfig as clinica } from "@/lib/site-config";

export const metadata = {
  title: `Política de privacidad · ${clinica.nombre}`,
};

export default function PrivacidadPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-2xl font-bold text-neutral-900">
        Política de privacidad
      </h1>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-neutral-600">
        <p>
          En {clinica.nombre} tratamos la información que nos facilitas con
          la finalidad de gestionar las citas y consultas que nos envías a
          través de este sitio web, de acuerdo con el Reglamento (UE)
          2016/679 (RGPD) y la Ley Orgánica 3/2018 de Protección de Datos
          Personales y garantía de los derechos digitales (LOPDGDD).
        </p>

        <section>
          <h2 className="font-semibold text-neutral-900">Responsable</h2>
          <p className="mt-2">
            {clinica.nombre}, con domicilio en {clinica.direccion} y
            teléfono de contacto {clinica.telefono}.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-neutral-900">Finalidad</h2>
          <p className="mt-2">
            Gestionar las solicitudes de cita y consultas recibidas a través
            del formulario, WhatsApp o teléfono, así como enviar
            comunicaciones relacionadas con el servicio solicitado.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-neutral-900">Legitimación</h2>
          <p className="mt-2">
            El consentimiento del interesado al facilitar sus datos a través
            de los canales de contacto habilitados en este sitio web.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-neutral-900">
            Conservación de los datos
          </h2>
          <p className="mt-2">
            Los datos se conservarán durante el tiempo necesario para
            atender la solicitud y, en su caso, durante los plazos legales
            de conservación aplicables a la relación asistencial.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-neutral-900">
            Derechos de los usuarios
          </h2>
          <p className="mt-2">
            Puedes ejercer tus derechos de acceso, rectificación, supresión,
            oposición, limitación del tratamiento y portabilidad escribiendo
            a {clinica.telefono} o a través de los datos de contacto
            indicados en el aviso legal.
          </p>
        </section>
      </div>
    </main>
  );
}

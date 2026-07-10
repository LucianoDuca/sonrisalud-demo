import { ClinicaConfig } from "@/lib/config";

export default function SchemaOrg({ config }: { config: ClinicaConfig }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: config.nombre,
    image: config.heroImagen,
    telephone: config.telefono,
    address: {
      "@type": "PostalAddress",
      streetAddress: config.direccion,
      addressLocality: config.ciudad,
      addressCountry: "ES",
    },
    openingHours: config.horarios,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: (
        config.notaGoogle ??
        config.resenas.reduce((acc, r) => acc + r.estrellas, 0) /
          config.resenas.length
      ).toFixed(1),
      reviewCount: config.resenasTotales ?? config.resenas.length,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

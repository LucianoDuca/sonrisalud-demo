import Hero from "@/components/Hero";
import Servicios from "@/components/Servicios";
import PruebaSocial from "@/components/PruebaSocial";
import Equipo from "@/components/Equipo";
import MapaDatos from "@/components/MapaDatos";
import { siteConfig } from "@/lib/site-config";

export default function Home() {
  return (
    <>
      <Hero config={siteConfig} />
      <Servicios config={siteConfig} />
      <PruebaSocial config={siteConfig} />
      <Equipo config={siteConfig} />
      <MapaDatos config={siteConfig} />
    </>
  );
}

export interface Resena {
  autor: string;
  estrellas: number;
  texto: string;
}

export interface Servicio {
  nombre: string;
  descripcion: string;
}

export interface MiembroEquipo {
  nombre: string;
  rol: string;
  bio: string;
  iniciales: string;
  foto?: string;
}

export interface ClinicaConfig {
  nombre: string;
  ciudad: string;
  eslogan: string;
  heroImagen?: string;
  telefono: string;
  whatsapp: string;
  whatsappMensaje: string;
  colores: {
    primario: string;
    acento: string;
  };
  servicios: Servicio[];
  resenas: Resena[];
  // Total real de reseñas en Google; las de `resenas` son solo las destacadas.
  resenasTotales?: number;
  // Nota media real en Google; si falta, se calcula desde las destacadas.
  notaGoogle?: number;
  equipo: MiembroEquipo[];
  direccion: string;
  horarios: string;
  mapaEmbedUrl: string;
  demo: boolean;
}

export function whatsappHref(config: ClinicaConfig): string {
  const mensaje = encodeURIComponent(config.whatsappMensaje);
  return `https://wa.me/${config.whatsapp}?text=${mensaje}`;
}

export function telefonoHref(config: ClinicaConfig): string {
  return `tel:${config.telefono.replace(/\s+/g, "")}`;
}

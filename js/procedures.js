// Dynamic procedure pages

const procedures = {
  implantes: {
    titulo: "Implantes Dentales",
    subtitulo: "Cirugía guiada 3D para implantes más precisos y seguros",
    imagen: "https://via.placeholder.com/600x400?text=Implantes+Dentales",
    descripcion: "Utilizamos cirugía guiada y planificación digital avanzada con guías impresas en 3D para lograr implantes más precisos, seguros y estables, con una experiencia más cómoda para el paciente.",
    beneficios: [
      "Precisión milimétrica en la colocación",
      "Menor tiempo quirúrgico",
      "Recuperación más rápida",
      "Resultados estéticos superiores",
      "Garantía de durabilidad"
    ],
    proceso: [
      { paso: 1, titulo: "Consulta inicial", descripcion: "Evaluamos tu caso y planificamos el tratamiento" },
      { paso: 2, titulo: "Cirugía", descripcion: "Colocación del implante con tecnología 3D" },
      { paso: 3, titulo: "Osteointegración", descripcion: "El implante se integra con el hueso (3-6 meses)" },
      { paso: 4, titulo: "Corona", descripcion: "Colocación de la corona final" }
    ],
    duracion: "6-8 meses total",
    duracionCirugia: "45-60 minutos"
  },

  ortodoncia: {
    titulo: "Ortodoncia Invisible",
    subtitulo: "Alinea tus dientes sin brackets metálicos",
    imagen: "https://via.placeholder.com/600x400?text=Ortodoncia+Invisible",
    descripcion: "Las férulas transparentes personalizadas alinean gradualmente tus dientes de forma imperceptible. Cómodo, estético y efectivo para pacientes de todas las edades.",
    beneficios: [
      "Totalmente invisible",
      "Removible para comer y limpiar",
      "Sin restricciones alimentarias",
      "Más cómodo que brackets",
      "Más higiénico"
    ],
    proceso: [
      { paso: 1, titulo: "Escaneo 3D", descripcion: "Capturamos una imagen digital exacta de tus dientes" },
      { paso: 2, titulo: "Plan de tratamiento", descripcion: "Te mostramos el resultado final antes de empezar" },
      { paso: 3, titulo: "Fabricación", descripcion: "Se fabrican todas tus férulas personalizadas" },
      { paso: 4, titulo: "Cambio mensual", descripcion: "Cambias de férula cada 2-4 semanas" }
    ],
    duracion: "12-18 meses",
    duracionCirugia: "N/A"
  },

  blanqueamiento: {
    titulo: "Blanqueamiento Dental",
    subtitulo: "Resultados visibles desde la primera sesión",
    imagen: "https://via.placeholder.com/600x400?text=Blanqueamiento+Dental",
    descripcion: "Técnicas seguras de blanqueamiento profesional que aclaran tus dientes varios tonos, con resultados duraderos y sin dañar el esmalte.",
    beneficios: [
      "Resultados inmediatos",
      "Seguimiento profesional",
      "Sin sensibilidad con nuestro método",
      "Resultados duraderos",
      "Sonrisa más radiante"
    ],
    proceso: [
      { paso: 1, titulo: "Consulta", descripcion: "Evaluamos el estado actual de tus dientes" },
      { paso: 2, titulo: "Protección", descripcion: "Protegemos encías y labios" },
      { paso: 3, titulo: "Aplicación", descripcion: "Aplicamos gel blanqueador profesional" },
      { paso: 4, titulo: "Resultado", descripcion: "Verás cambios notables en 30-45 minutos" }
    ],
    duracion: "Resultados duraderos 6-12 meses",
    duracionCirugia: "45 minutos"
  },

  endodoncia: {
    titulo: "Tratamiento de Conducto",
    subtitulo: "Salva tu diente sin dolor",
    imagen: "https://via.placeholder.com/600x400?text=Endodoncia",
    descripcion: "Con tecnología moderna y anestesia efectiva, realizamos tratamientos de conducto sin dolor. Salva tu diente de forma segura y definitiva.",
    beneficios: [
      "Salva tu diente natural",
      "Sin dolor durante el procedimiento",
      "Tecnología rotativa avanzada",
      "Menor tiempo de tratamiento",
      "Alta tasa de éxito"
    ],
    proceso: [
      { paso: 1, titulo: "Diagnóstico", descripcion: "Radiografías para evaluar la infección" },
      { paso: 2, titulo: "Anestesia", descripcion: "Anestesia local efectiva" },
      { paso: 3, titulo: "Limpieza", descripcion: "Removemos el tejido infectado" },
      { paso: 4, titulo: "Obturación", descripcion: "Sellamos el conducto" }
    ],
    duracion: "1-3 sesiones",
    duracionCirugia: "60-90 minutos por sesión"
  },

  periodoncia: {
    titulo: "Tratamiento de Encías",
    subtitulo: "Recupera la salud de tus encías",
    imagen: "https://via.placeholder.com/600x400?text=Periodoncia",
    descripcion: "Tratamientos preventivos y correctivos para problemas de encías, desde limpiezas hasta cirugía periodontal según sea necesario.",
    beneficios: [
      "Previene la pérdida de dientes",
      "Detiene el sangrado",
      "Elimina la inflamación",
      "Mejora la estética",
      "Protege tu inversión en implantes"
    ],
    proceso: [
      { paso: 1, titulo: "Evaluación", descripcion: "Medimos la profundidad de las bolsas" },
      { paso: 2, titulo: "Limpieza", descripcion: "Limpieza profunda con ultrasonido" },
      { paso: 3, titulo: "Alisado radicular", descripcion: "Pulimos las raíces para prevenir recurrencia" },
      { paso: 4, titulo: "Mantenimiento", descripcion: "Revisiones cada 3-4 meses" }
    ],
    duracion: "Depende de la severidad",
    duracionCirugia: "45-60 minutos"
  },

  estetica: {
    titulo: "Estética Dental",
    subtitulo: "Diseño de sonrisa personalizado",
    imagen: "https://via.placeholder.com/600x400?text=Estética+Dental",
    descripcion: "Carillas de porcelana y diseño de sonrisa personalizado para lograr la sonrisa de tus sueños con resultados naturales y duraderos.",
    beneficios: [
      "Apariencia completamente natural",
      "Duraderas (10+ años)",
      "Resistentes a manchas",
      "Mejora significativa de la sonrisa",
      "Resultados transformadores"
    ],
    proceso: [
      { paso: 1, titulo: "Diseño digital", descripcion: "Simulamos tu sonrisa futura" },
      { paso: 2, titulo: "Preparación", descripcion: "Preparamos mínimamente los dientes" },
      { paso: 3, titulo: "Moldes", descripcion: "Tomamos moldes para las carillas" },
      { paso: 4, titulo: "Cementado", descripcion: "Cementamos las carillas permanentemente" }
    ],
    duracion: "2-3 semanas",
    duracionCirugia: "2 sesiones de 1-2 horas"
  }
};

function renderProcedurePage(procedureKey) {
  const procedure = procedures[procedureKey];
  if (!procedure) return;

  const container = document.querySelector('main');
  if (!container) return;

  let html = `
    <div class="procedure-page page-transition">
      <!-- Hero Section -->
      <section class="procedure-hero" style="background: linear-gradient(135deg, #1F2937 0%, #374151 100%);">
        <div class="container" style="max-width: 1400px; margin: 0 auto; padding: var(--spacing-4xl) var(--spacing-lg); color: white;">
          <a href="#" class="back-button" onclick="location.reload(); return false;" style="color: rgba(255,255,255,0.7); text-decoration: none; margin-bottom: var(--spacing-lg); display: inline-block;">← Volver</a>
          <h1 style="font-size: 3rem; font-weight: 700; margin-bottom: var(--spacing-md);">${procedure.titulo}</h1>
          <p style="font-size: 1.25rem; color: rgba(255,255,255,0.9); max-width: 600px;">${procedure.subtitulo}</p>
        </div>
      </section>

      <!-- Main Content -->
      <section style="padding: var(--spacing-4xl) var(--spacing-lg);">
        <div class="container" style="max-width: 1400px; margin: 0 auto;">
          <div style="display: grid; gap: var(--spacing-2xl); grid-template-columns: 1fr 1fr; align-items: start;">
            <div>
              <img src="${procedure.imagen}" alt="${procedure.titulo}" style="width: 100%; border-radius: var(--radius-3xl); box-shadow: var(--shadow-lg);">
            </div>
            <div>
              <h2 style="font-size: 1.75rem; font-weight: 700; margin-bottom: var(--spacing-lg); color: var(--text);">${procedure.descripcion}</h2>

              <h3 style="font-size: 1.125rem; font-weight: 600; margin-top: var(--spacing-2xl); margin-bottom: var(--spacing-md); color: var(--text);">Beneficios</h3>
              <ul style="list-style: none; padding: 0;">
                ${procedure.beneficios.map(b => `<li style="padding: var(--spacing-sm) 0; color: var(--text-light);"><span style="color: var(--accent-green); font-weight: 600;">✓</span> ${b}</li>`).join('')}
              </ul>

              <div style="margin-top: var(--spacing-2xl); padding: var(--spacing-lg); background-color: var(--bg-light); border-radius: var(--radius-lg);">
                <p style="margin: 0; color: var(--text-light);"><strong>Duración total:</strong> ${procedure.duracion}</p>
                ${procedure.duracionCirugia !== 'N/A' ? `<p style="margin: var(--spacing-sm) 0 0 0; color: var(--text-light);"><strong>Duración del procedimiento:</strong> ${procedure.duracionCirugia}</p>` : ''}
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Process Steps -->
      <section style="padding: var(--spacing-4xl) var(--spacing-lg); background-color: var(--bg-light);">
        <div class="container" style="max-width: 1400px; margin: 0 auto;">
          <h2 style="font-size: 2rem; font-weight: 700; text-align: center; margin-bottom: var(--spacing-3xl); color: var(--text);">Proceso de Tratamiento</h2>
          <div style="display: grid; gap: var(--spacing-2xl); grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));">
            ${procedure.proceso.map(p => `
              <div style="padding: var(--spacing-lg); background: white; border-radius: var(--radius-lg); box-shadow: var(--shadow-sm);">
                <div style="width: 3rem; height: 3rem; background: var(--accent-blue); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: 700; margin-bottom: var(--spacing-md);">
                  ${p.paso}
                </div>
                <h3 style="font-size: 1.125rem; font-weight: 600; margin-bottom: var(--spacing-sm); color: var(--text);">${p.titulo}</h3>
                <p style="margin: 0; color: var(--text-light); font-size: 0.875rem;">${p.descripcion}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section style="padding: var(--spacing-4xl) var(--spacing-lg);">
        <div class="container" style="max-width: 1400px; margin: 0 auto; text-align: center;">
          <h2 style="font-size: 2rem; font-weight: 700; margin-bottom: var(--spacing-lg); color: var(--text);">¿Listo para transformar tu sonrisa?</h2>
          <p style="font-size: 1.125rem; color: var(--text-light); margin-bottom: var(--spacing-2xl);">Contacta con nosotros hoy para agendar tu consulta gratuita</p>
          <div style="display: flex; gap: var(--spacing-lg); justify-content: center; flex-wrap: wrap;">
            <a href="https://wa.me/34600000000?text=Hola%2C%20estoy%20interesado%20en%20${procedure.titulo}" target="_blank" class="btn btn-primary">
              Contactar por WhatsApp
            </a>
            <button onclick="location.reload();" class="btn btn-secondary">
              Volver al inicio
            </button>
          </div>
        </div>
      </section>
    </div>
  `;

  container.innerHTML = html;
  window.scrollTo(0, 0);
}

// Export for use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { renderProcedurePage, procedures };
}

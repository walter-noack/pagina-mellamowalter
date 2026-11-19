function Servicios() {
  return (
    <div className="bg-white">

      {/* Header */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-3 text-gray-800">Servicios + Portafolio</h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Proyectos ITT */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Proyectos ITT (Innovación y Transferencia Tecnológica)
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            A través de metodologías como Design Thinking, desarrollo soluciones tecnológicas que resuelven problemáticas específicas y ayudan a impulsar tu empresa.
          </p>
          <p className="text-lg text-gray-700 mb-10">
            Mi enfoque se centra en entender profundamente tu desafío para diseñar e implementar la solución más adecuada, que puede incluir desde plataformas web hasta tecnología IoT, siempre buscando generar impacto real y medible en tu operación.
          </p>

          <h3 className="text-2xl font-bold mb-6 text-gray-800">Proyectos Destacados</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

            <div className="flex flex-col border-2 border-blue-600 rounded-lg overflow-hidden hover:shadow-2xl transition bg-gradient-to-br from-blue-50 to-white">
              <div className="p-4 flex flex-col flex-1">
                <div className="flex items-center justify-center mb-3">
                  <img src="/assets/LogoAmbientapp2.png" alt="AmbientApp" className="h-24 w-auto object-contain" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="text-lg font-bold text-blue-600">AmbientApp</h4>
                  <span className="bg-amber-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">LANZAMIENTO</span>
                </div>
                <p className="text-sm text-gray-700 mb-3 flex-1">
                  Ecosistema de software de cumplimiento ambiental para empresas y consultoras en Chile. Integra Ley REP, huella de carbono e IA regulatoria en un solo panel.
                </p>
                <a
                  href="https://ambientapp.cl" target="_blank" rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition w-full text-center mt-auto"
                >
                  Visitar AmbientApp →
                </a>
              </div>
            </div>

            <div className="flex flex-col border-2 border-blue-600 rounded-lg overflow-hidden hover:shadow-2xl transition bg-gradient-to-br from-blue-50 to-white">
              <div className="p-4 flex flex-col flex-1">
                <div className="flex items-center justify-center mb-3">
                  <img src="/assets/logo-eria.png" alt="Eria" className="h-24 w-auto object-contain" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="text-lg font-bold text-blue-600">Eria</h4>
                  <span className="bg-amber-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">LANZAMIENTO</span>
                </div>
                <p className="text-sm text-gray-700 mb-3 flex-1">
                  Asistente de IA que interpreta Normativa Ambiental Chilena, como la Ley REP, la Ley Marco de Cambio Climático, el GHG Protocol para Huella de Carbono, entre otras.
                </p>
                <a
                  href="https://eria.ambientapp.cl" target="_blank" rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition w-full text-center mt-auto"
                >
                  Visitar Eria →
                </a>
              </div>
            </div>

            <div className="flex flex-col border-2 border-blue-600 rounded-lg overflow-hidden hover:shadow-2xl transition bg-gradient-to-br from-blue-50 to-white">
              <div className="p-4 flex flex-col flex-1">
                <div className="flex items-center justify-center mb-3">
                  <img src="/logovalorizapp.png" alt="Valorizapp" className="h-24 w-auto object-contain" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="text-lg font-bold text-blue-600">Valorizapp</h4>
                  <span className="bg-amber-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">LANZAMIENTO</span>
                </div>
                <p className="text-sm text-gray-700 mb-3 flex-1">
                  Gestión de residuos y cumplimiento de la Ley REP: envases, neumáticos, aceites, RAEE y pilas, con reportes para la SMA.
                </p>
                <a
                  href="https://valorizapp.ambientapp.cl" target="_blank" rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition w-full text-center mt-auto"
                >
                  Visitar Valorizapp →
                </a>
              </div>
            </div>

            <div className="flex flex-col border-2 border-blue-600 rounded-lg overflow-hidden hover:shadow-2xl transition bg-gradient-to-br from-blue-50 to-white">
              <div className="p-4 flex flex-col flex-1">
                <div className="flex items-center justify-center mb-3">
                  <img src="/assets/logocarbonapp.png" alt="CarbonApp" className="h-24 w-auto object-contain" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="text-lg font-bold text-blue-600">CarbonApp</h4>
                  <span className="bg-amber-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">LANZAMIENTO</span>
                </div>
                <p className="text-sm text-gray-700 mb-3 flex-1">
                  Cálculo de huella de carbono (Scopes 1, 2 y 3) alineado al GHG Protocol y listo para el programa HuellaChile.
                </p>
                <a
                  href="https://carbonapp.ambientapp.cl" target="_blank" rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition w-full text-center mt-auto"
                >
                  Visitar CarbonApp →
                </a>
              </div>
            </div>

          </div>

          <h3 className="text-2xl font-bold mt-14 mb-6 text-gray-800">Proyectos Anteriores</h3>
          <div className="max-w-md">
            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition">
              <div className="p-6">
                <div className="flex items-center justify-center mb-6">
                  <img src="/assets/logowantu.png" alt="Wantü" className="h-32 w-auto object-contain" />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <h4 className="text-2xl font-semibold text-gray-800">Wantü</h4>
                  <span className="bg-gray-500 text-white text-xs font-bold px-3 py-1 rounded-full">Avance logrado: TRL 7</span>
                </div>
                <p className="text-gray-700 mb-3">
                  Kit de sensorización diseñado para pequeños agricultores que integra estación meteorológica, sensores de humedad de suelo y una aplicación móvil intuitiva.
                </p>
                <p className="text-gray-700 mb-3">
                  Permite obtener información climática local en tiempo real para que los agricultores tomen decisiones oportunas sobre riego, siembra y cosecha, optimizando sus recursos y mejorando su productividad.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Proyecto finalizado:</strong> Implementado exitosamente en terreno, alcanzando un nivel de madurez tecnológica TRL 7.
                </p>
                <p className="text-sm text-gray-600 font-semibold">Tecnologías: IoT, Aplicación Móvil</p>
              </div>
            </div>
          </div>
        </section>

        {/* Desarrollo Web */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Desarrollo Web</h2>
          <p className="text-lg text-gray-700 mb-8">
            Desarrollo plataformas web personalizadas ajustadas a las necesidades específicas de tu negocio.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            Dependiendo de tus requerimientos, puedo crear sitios desde cero con código (React, HTML/CSS/JS) para máxima flexibilidad y rendimiento, o desarrollar en WordPress cuando necesitas funcionalidades como carros de compra y gestión de contenido más accesible.
          </p>
          <p className="text-lg text-gray-700 mb-10">
            Cada proyecto incluye diseño responsive, optimización SEO y enfoque en experiencia de usuario.
          </p>

          <h3 className="text-2xl font-bold mb-6 text-gray-800">Proyectos Destacados</h3>
          <div className="grid md:grid-cols-2 gap-8">

            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition">
              <img src="/assets/ensustenta.png" alt="Ensustenta - Consultora Ambiental" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">ensustenta.cl</h4>
                <p className="text-gray-700 mb-4">Sitio web para una consultora medioambiental de la Región de La Araucanía</p>
                <a href="https://ensustenta.cl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold">Ver sitio →</a>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition">
              <img src="/assets/neuambiente.png" alt="Neu Ambiente - Consultora Ambiental" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">neuambiente.cl</h4>
                <p className="text-gray-700 mb-4">Sitio web para una consultora ambiental de la Región del Bío Bío</p>
                <a href="https://neuambiente.cl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold">Ver sitio →</a>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition">
              <img src="/assets/miamade.png" alt="Miamade - E-commerce" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">miamade.cl</h4>
                <p className="text-gray-700 mb-4">Página web con carro de compra para una emprendedora de Concepción</p>
                <a href="https://miamade.cl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold">Ver sitio →</a>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition">
              <img src="/assets/micasafull.png" alt="Micasafull - Construcción" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">micasafull.cl</h4>
                <p className="text-gray-700 mb-4">Página web para empresa de construcción de la región de la Araucanía</p>
                <a href="https://micasafull.cl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold">Ver sitio →</a>
              </div>
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-blue-700 text-white p-12 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">¿Tienes un proyecto en mente?</h3>
          <p className="text-lg mb-6">Conversemos sobre cómo puedo ayudarte a hacerlo realidad.</p>
          <a
            href="/contacto"
            className="bg-white text-blue-700 px-8 py-3 rounded font-semibold hover:bg-gray-100 transition"
          >
            Contáctame
          </a>
        </section>

      </div>
    </div>
  );
}

export default Servicios;

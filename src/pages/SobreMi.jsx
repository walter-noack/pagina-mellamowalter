function SobreMi() {
  return (
    <div className="bg-white">

      {/* Header */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-3 text-gray-800">¿Quién soy?</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Intro */}
          <div className="mb-12 grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-800">¡Hola! Me llamo Walter Noack</h1>
              <h2 className="text-xl md:text-2xl font-semibold mb-6 text-gray-700">
                Consultor de Innovación, Sostenibilidad y Tecnología
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Soy ingeniero ambiental con formación complementaria en informática. Después de 10 años en consultoría ambiental, decidí integrar el mundo tecnológico para potenciar el impacto de mis soluciones.
              </p>
              <p className="text-lg text-gray-700">
                Mi enfoque combina la rigurosidad técnica de la ingeniería ambiental con las posibilidades del desarrollo tecnológico, creando soluciones innovadoras que responden a problemáticas reales de empresas y organizaciones.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/assets/codesser.jpg"
                alt="Presentación en Codesser"
                className="w-full h-auto rounded-lg shadow-lg max-w-md"
              />
            </div>
          </div>

          {/* Experiencia */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Mi Experiencia</h3>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Instituto Tecnológico TEC-UCT</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Ajuste curricular en programas de educación técnica</li>
                    <li>Docencia en innovación</li>
                    <li>Diseño de instancias y experiencias estudiantiles en torno a la innovación</li>
                  </ul>
                </div>
                <div className="border-l-4 border-blue-600 pl-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">CFT Teodoro Wickel</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Docencia en Innovación</li>
                    <li>Desarrollo y Participación en Proyectos de Innovación</li>
                  </ul>
                </div>
                <div className="border-l-4 border-blue-600 pl-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Consultoría Ambiental (8+ años)</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Cálculo de huella de carbono</li>
                    <li>Optimización y eficiencia de procesos</li>
                    <li>Asesoría en gestión ambiental empresarial</li>
                    <li>Implementación de prácticas sostenibles</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-6 flex flex-col items-center">
                <img src="/assets/feria-twk.jpg" alt="Feria TWK" className="w-full max-w-md h-48 object-cover rounded-lg shadow-lg" />
                <img src="/assets/digital-summer.jpg" alt="Digital Summer" className="w-full max-w-md h-48 object-cover rounded-lg shadow-lg" />
              </div>
            </div>
          </div>

          {/* Por qué */}
          <div className="mb-12 bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">¿Por qué Innovación + Sostenibilidad + Tecnología?</h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-4">
                  Me he especializado en metodologías de innovación como Design Thinking porque creo firmemente que la tecnología debe nacer de una necesidad real, no al revés.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Mi proceso siempre comienza escuchando, entendiendo el problema, y solo entonces diseñando la solución más adecuada.
                </p>
                <p className="text-lg text-gray-700">
                  Esta filosofía me ha llevado a desarrollar desde plataformas web personalizadas hasta sistemas de monitoreo agrícola, siempre buscando que la tecnología sea una herramienta al servicio de las personas y del planeta.
                </p>
              </div>
              <div className="flex justify-center">
                <img src="/assets/agroconecta.jpg" alt="AgroConecta" className="w-full max-w-md h-auto rounded-lg shadow-lg" />
              </div>
            </div>
          </div>

          {/* Proyectos */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Algunos proyectos en los que he trabajado</h3>

            <div className="space-y-6">
              {/* AmbientApp */}
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h4 className="text-xl font-bold mb-3 text-blue-700">AmbientApp - Ecosistema de Cumplimiento Ambiental</h4>
                <p className="text-gray-700 mb-3">
                  También creé AmbientApp, un ecosistema de software que ayuda a empresas y consultoras chilenas a cumplir con la normativa ambiental. Está compuesto por{' '}
                  <strong>Valorizapp</strong> (gestión de residuos y Ley REP),{' '}
                  <strong>CarbonApp</strong> (cálculo de huella de carbono) y{' '}
                  <strong>Eria</strong> (asistente de IA que interpreta la normativa ambiental chilena), todo desde un mismo panel.
                </p>
              </div>

              {/* Wantü */}
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h4 className="text-xl font-bold mb-3 text-blue-700">Wantü - Kit de Sensorización Agrícola</h4>
                <p className="text-gray-700 mb-3">
                  He tenido la oportunidad de desarrollar Wantü, un kit de sensorización para pequeños agricultores que incluye estación meteorológica, sensores de humedad y caudalímetro, todo visualizable desde una aplicación móvil.
                </p>
                <p className="text-gray-700">Cada proyecto es una oportunidad para aprender, innovar y generar impacto real.</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-blue-700 text-white p-12 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">¿Listo para trabajar juntos?</h3>
            <p className="text-lg mb-6">
              Estoy aquí para crear soluciones personalizadas que se alineen con tus objetivos y superen los desafíos que enfrentas.
            </p>
            <a
              href="/contacto"
              className="bg-white text-blue-700 px-8 py-3 rounded font-semibold hover:bg-gray-100 transition"
            >
              Contáctame
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}

export default SobreMi;

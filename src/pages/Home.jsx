import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>

      {/* Hero */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl mx-auto">
            <div className="md:w-1/2">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 text-left">
                ¡Hola!<br />Me llamo Walter
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-800 font-semibold text-left">
                Consultor de Innovación, Sustentabilidad y Tecnología
              </p>
              <div className="flex gap-4">
                <a href="/sobre-mi" className="bg-blue-700 text-white px-8 py-3 rounded font-semibold hover:bg-blue-800 transition">
                  ¿Quién soy?
                </a>
                <a href="/contacto" className="bg-blue-700 text-white px-8 py-3 rounded font-semibold hover:bg-blue-800 transition">
                  ¡Contáctame!
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-start">
              <img
                src="/assets/foto-perfil.jpg"
                alt="Walter Noack"
                className="rounded-full w-80 h-80 md:w-[28rem] md:h-[28rem] object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Qué hago */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">¿Cómo puedo ayudarte?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-2xl font-bold mb-4 text-blue-700">Desarrollo Tecnológico a Medida</h3>
              <p className="text-gray-700">
                Identifico la problemática de tu negocio y desarrollo plataformas web personalizadas que responden exactamente a tus necesidades y objetivos.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-2xl font-bold mb-4 text-blue-700">Proyectos de Innovación</h3>
              <p className="text-gray-700">
                Te asesoro en la identificación e implementación de tecnologías estratégicas para tu empresa, desde automatización de procesos hasta herramientas digitales que transforman tu operación.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-2xl font-bold mb-4 text-blue-700">Sostenibilidad Empresarial</h3>
              <p className="text-gray-700">
                Integro prácticas sostenibles en tu empresa mediante soluciones innovadoras que reducen el impacto ambiental, fortalecen tu imagen corporativa y aumentan tu competitividad.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;

import { useState } from 'react';
import emailjs from '@emailjs/browser';

function Contacto() {
  const [formData, setFormData] = useState({ nombre: '', email: '', tipoProyecto: '', mensaje: '' });
  const [enviando, setEnviando] = useState(false);
  const [mensajeExito, setMensajeExito] = useState(false);
  const [mensajeError, setMensajeError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviando(true);
    setMensajeError(false);

    emailjs.send('service_d0lqygt', 'template_26nhu11', formData, '1D72Vd7GTrIORkyjg')
      .then(() => {
        setEnviando(false);
        setMensajeExito(true);
        setFormData({ nombre: '', email: '', tipoProyecto: '', mensaje: '' });
        setTimeout(() => setMensajeExito(false), 5000);
      })
      .catch(() => {
        setEnviando(false);
        setMensajeError(true);
        setTimeout(() => setMensajeError(false), 5000);
      });
  };

  return (
    <div className="bg-white">

      {/* Header */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-3 text-gray-800">Contacto</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">¿Tienes una idea o un desafío que resolver?</h2>
            <p className="text-lg text-gray-700 mb-4">
              Si tienes dudas, ideas o simplemente quieres explorar cómo la innovación, la sostenibilidad y el desarrollo tecnológico pueden transformar tu empresa, conversemos.
            </p>
            <p className="text-lg text-gray-700">
              Estoy comprometido en ofrecer soluciones personalizadas que se adapten a tus necesidades y objetivos.
            </p>
          </div>

          {mensajeExito && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
              ✓ ¡Mensaje enviado correctamente! Te contactaré pronto.
            </div>
          )}
          {mensajeError && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
              ✗ Hubo un error al enviar el mensaje. Por favor intenta nuevamente.
            </div>
          )}

          <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-lg shadow-md">

            <div className="mb-6">
              <label htmlFor="nombre" className="block text-gray-700 font-semibold mb-2">Nombre *</label>
              <input
                type="text" id="nombre" name="nombre"
                value={formData.nombre} onChange={handleChange} required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Tu nombre"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Correo electrónico *</label>
              <input
                type="email" id="email" name="email"
                value={formData.email} onChange={handleChange} required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="tu@email.com"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="tipoProyecto" className="block text-gray-700 font-semibold mb-2">Tipo de proyecto *</label>
              <select
                id="tipoProyecto" name="tipoProyecto"
                value={formData.tipoProyecto} onChange={handleChange} required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option value="">Selecciona una opción</option>
                <option value="Desarrollo Tecnológico">Desarrollo Tecnológico</option>
                <option value="Desarrollo Web">Desarrollo Web</option>
                <option value="Otro">Otro</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="mensaje" className="block text-gray-700 font-semibold mb-2">Mensaje *</label>
              <textarea
                id="mensaje" name="mensaje"
                value={formData.mensaje} onChange={handleChange} required
                rows="6"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Cuéntame sobre tu proyecto o consulta..."
              />
            </div>

            <button
              type="submit"
              disabled={enviando}
              className={`w-full py-3 rounded-lg font-semibold text-white transition ${
                enviando ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {enviando ? 'Enviando...' : 'Enviar mensaje'}
            </button>

          </form>
        </div>
      </section>

    </div>
  );
}

export default Contacto;

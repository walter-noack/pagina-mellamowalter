import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { ChartBarIcon, BoltIcon, MagnifyingGlassIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';

const SERVICE_ID = 'service_d0lqygt';
const TEMPLATE_ID = 'template_26nhu11';
const PUBLIC_KEY = '1D72Vd7GTrIORkyjg';

const bullets = [
  {
    Icon: ChartBarIcon,
    title: 'Visualización en tiempo real',
    desc: 'Todos los datos de residuos en un solo lugar — sin hojas de cálculo dispersas ni reportes manuales.',
  },
  {
    Icon: BoltIcon,
    title: 'Automatización de reportes',
    desc: 'El sistema genera los informes solo. Tú revisas, no construyes.',
  },
  {
    Icon: MagnifyingGlassIcon,
    title: 'Trazabilidad completa',
    desc: 'Cada movimiento queda registrado: quién, cuándo y cuánto. Ideal para auditorías y certificaciones.',
  },
  {
    Icon: WrenchScrewdriverIcon,
    title: 'Hecho a la medida de tu operación',
    desc: 'No es un software genérico. Se construye según los flujos reales de tu empresa.',
  },
];

export default function LandingDashboardResiduos() {
  const [formData, setFormData] = useState({ nombre: '', empresa: '', email: '', mensaje: '' });
  const [enviando, setEnviando] = useState(false);
  const [exito, setExito] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviando(true);
    setError(false);

    const payload = {
      nombre: formData.nombre,
      email: formData.email,
      tipoProyecto: `Dashboard de residuos — empresa: ${formData.empresa}`,
      mensaje: formData.mensaje,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, payload, PUBLIC_KEY)
      .then(() => {
        setEnviando(false);
        setExito(true);
        setFormData({ nombre: '', empresa: '', email: '', mensaje: '' });
        setTimeout(() => setExito(false), 6000);
      })
      .catch(() => {
        setEnviando(false);
        setError(true);
        setTimeout(() => setError(false), 6000);
      });
  };

  return (
    <div className="bg-white text-gray-900 font-sans">

      {/* ── HERO ── */}
      <section className="bg-[#1E4ED8] text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-blue-200 uppercase tracking-widest text-sm mb-4 font-medium">
            Desarrollo a medida · Gestión de residuos
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            ¿Tu empresa necesita<br />
            <em className="font-serif not-italic italic">un sistema como este?</em>
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-xl mx-auto mb-10">
            Construyo dashboards y sistemas de gestión a medida para empresas que necesitan
            orden, trazabilidad y reportes sin depender de hojas de cálculo.
          </p>
          <a
            href="#formulario"
            className="inline-block bg-white text-[#1E4ED8] font-semibold px-8 py-4 rounded-lg hover:bg-blue-50 transition text-base"
          >
            Conversemos sobre tu proyecto
          </a>
        </div>
      </section>

      {/* ── QUÉ INCLUYE ── */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#111827]">
            Lo que resuelve este tipo de sistema
          </h2>
          <p className="text-center text-gray-500 mb-14 text-base max-w-xl mx-auto">
            Cada dashboard que construyo está pensado para el flujo real de la empresa,
            no para una demo genérica.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {bullets.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm flex gap-4 items-start"
              >
                <Icon className="w-6 h-6 text-[#1E4ED8] mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-semibold text-[#111827] mb-1">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRUEBA SOCIAL / CONTEXTO ── */}
      <section className="py-16 px-4 border-t border-gray-100">
        <div className="max-w-2xl mx-auto text-center">
          <blockquote className="text-xl md:text-2xl text-[#111827] font-medium leading-snug">
            "Antes perdíamos horas armando el reporte mensual a mano. Ahora el sistema
            lo genera solo y nosotros solo revisamos. Fue un cambio grande para el equipo."
          </blockquote>
          <p className="mt-6 text-gray-400 text-sm">— Coordinador Medioambiental · Empresa Solicitante</p>
        </div>
      </section>

      {/* ── VALORIZAPP CTA ── */}
      <section className="py-16 px-4 bg-blue-50 border-y border-blue-100">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#1E4ED8] uppercase tracking-widest text-xs font-semibold mb-4">
            ¿Prefieres una solución lista para usar?
          </p>
          <img
            src="/logovalorizapp.png"
            alt="Valorizapp"
            className="h-40 mx-auto mb-2"
          />
          <h2 className="text-2xl md:text-3xl font-bold text-[#111827] mb-3">
            Valorizapp — gestión de residuos y cumplimiento REP desde hoy
          </h2>
          <p className="text-gray-500 text-base mb-8">
            Sin desarrollo, sin espera. Una plataforma lista para operar con prueba gratis de 14 días.
          </p>
          <a
            href="https://valorizapp.ambientapp.cl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#1E4ED8] text-white font-semibold px-8 py-4 rounded-lg hover:bg-blue-700 transition text-sm"
          >
            Conocer Valorizapp
          </a>
        </div>
      </section>

      {/* ── FORMULARIO ── */}
      <section id="formulario" className="py-20 px-4 bg-gray-50 border-t border-gray-100">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-[#111827]">
            Cuéntame sobre tu empresa
          </h2>
          <p className="text-center text-gray-500 mb-10 text-base">
            Sin compromiso. Te respondo en menos de 24 horas para ver si puedo ayudarte.
          </p>

          {exito && (
            <div className="bg-green-50 border border-green-300 text-green-700 px-4 py-3 rounded-lg mb-6 text-sm">
              ✓ ¡Mensaje enviado! Te escribo pronto.
            </div>
          )}
          {error && (
            <div className="bg-red-50 border border-red-300 text-red-700 px-4 py-3 rounded-lg mb-6 text-sm">
              ✗ Hubo un error. Por favor intenta de nuevo o escríbeme directamente.
            </div>
          )}

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-5">
            <div>
              <label htmlFor="nombre" className="block text-sm font-semibold text-gray-700 mb-1.5">
                Nombre *
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                placeholder="Tu nombre"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1E4ED8]"
              />
            </div>

            <div>
              <label htmlFor="empresa" className="block text-sm font-semibold text-gray-700 mb-1.5">
                Empresa *
              </label>
              <input
                type="text"
                id="empresa"
                name="empresa"
                value={formData.empresa}
                onChange={handleChange}
                required
                placeholder="Nombre de tu empresa o rubro"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1E4ED8]"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">
                Correo electrónico *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="tu@empresa.cl"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1E4ED8]"
              />
            </div>

            <div>
              <label htmlFor="mensaje" className="block text-sm font-semibold text-gray-700 mb-1.5">
                ¿Qué necesitas resolver?
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                rows={4}
                placeholder="Cuéntame brevemente el desafío o qué te gustaría tener..."
                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1E4ED8] resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={enviando}
              className={`w-full py-3.5 rounded-lg font-semibold text-white text-sm transition ${
                enviando ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#1E4ED8] hover:bg-blue-700'
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

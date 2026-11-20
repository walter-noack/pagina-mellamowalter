import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  );
}

const inputClass = "w-full px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";
const inputStyle = { height: '46px', borderColor: '#C9D3EA', borderRadius: 'var(--radius)', fontSize: '15px', color: 'var(--text-primary)' };
const labelStyle = { fontSize: '15px', fontWeight: 500, color: 'var(--text-primary)', display: 'block', marginBottom: '6px' };

function Contacto() {
  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' });
  const [enviando, setEnviando] = useState(false);
  const [mensajeExito, setMensajeExito] = useState(false);
  const [mensajeError, setMensajeError] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviando(true);
    setMensajeError(false);
    fetch('/contact.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then(r => r.json())
      .then(data => {
        setEnviando(false);
        if (data.ok) {
          setMensajeExito(true);
          setFormData({ nombre: '', email: '', mensaje: '' });
          setTimeout(() => setMensajeExito(false), 5000);
        } else {
          setMensajeError(true);
          setTimeout(() => setMensajeError(false), 5000);
        }
      })
      .catch(() => {
        setEnviando(false);
        setMensajeError(true);
        setTimeout(() => setMensajeError(false), 5000);
      });
  };

  return (
    <>
      <Helmet>
        <title>Contacto | Walter Noack, digitalización e innovación para PyMEs</title>
        <meta name="description" content="Escríbele a Walter Noack por correo, LinkedIn o formulario. Consultor en digitalización e innovación para PyMEs. Temuco, Chile." />
      </Helmet>

      <div>

        {/* Header */}
        <section className="py-10" style={{ background: 'var(--gradient-night)' }}>
          <div className="container-site">
            <h1 className="text-4xl font-bold text-white mb-4">Contacto</h1>
            <p className="text-lg max-w-[640px]" style={{ color: 'var(--text-light)' }}>
              ¿Tienes una idea o un desafío que resolver? Escríbeme por el medio que prefieras.
            </p>
          </div>
        </section>

        {/* Contacto y formulario */}
        <section className="py-20 bg-white fade">
          <div className="container-site">
            <div className="grid gap-16 items-start" style={{ gridTemplateColumns: '1fr 1.2fr' }}>

              {/* Columna izquierda */}
              <div>
                <h2 className="font-bold mb-5" style={{ fontSize: '28px', color: 'var(--text-primary)' }}>
                  Escríbeme directo
                </h2>

                {/* Correo */}
                <a
                  href="mailto:hola@wnoack.cl"
                  className="flex items-center gap-4 rounded-lg mb-8 hover:border-brand transition-colors"
                  style={{ border: '1px solid var(--border)', padding: '24px', borderRadius: 'var(--radius)' }}
                >
                  <div className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'var(--icon-bg-blue)' }}>
                    <EnvelopeIcon className="w-5 h-5" style={{ color: 'var(--brand)' }} />
                  </div>
                  <div>
                    <p className="font-bold" style={{ fontSize: '17px', color: 'var(--text-primary)' }}>Correo</p>
                    <p style={{ fontSize: '15px', color: 'var(--text-secondary)' }}>hola@wnoack.cl</p>
                  </div>
                </a>

                {/* Redes */}
                <h3 className="font-bold mb-4" style={{ fontSize: '20px', color: 'var(--text-primary)' }}>
                  También me encuentras en
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/wnoack/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 flex-1 rounded-lg hover:border-brand transition-colors"
                    style={{ border: '1px solid var(--border)', padding: '20px', borderRadius: 'var(--radius)' }}
                  >
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'var(--icon-bg-blue)', color: 'var(--brand)' }}>
                      <LinkedInIcon />
                    </div>
                    <span className="font-medium text-sm" style={{ color: 'var(--text-primary)' }}>LinkedIn</span>
                  </a>
                  <a
                    href="https://www.instagram.com/mellamowalter.cl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 flex-1 rounded-lg hover:border-brand transition-colors"
                    style={{ border: '1px solid var(--border)', padding: '20px', borderRadius: 'var(--radius)' }}
                  >
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'var(--icon-bg-blue)', color: 'var(--brand)' }}>
                      <InstagramIcon />
                    </div>
                    <span className="font-medium text-sm" style={{ color: 'var(--text-primary)' }}>Instagram</span>
                  </a>
                </div>
              </div>

              {/* Columna derecha — formulario */}
              <div className="rounded-lg" style={{ border: '1px solid var(--border)', padding: '32px' }}>
                <h2 className="font-bold mb-6" style={{ fontSize: '28px', color: 'var(--text-primary)' }}>
                  O déjame un mensaje
                </h2>

                {mensajeExito && (
                  <div className="rounded-lg px-4 py-3 mb-5 text-sm" style={{ background: '#E4F0EA', color: 'var(--forest)', border: '1px solid #B2D9C4' }}>
                    Mensaje enviado correctamente. Te contactaré pronto.
                  </div>
                )}
                {mensajeError && (
                  <div className="rounded-lg px-4 py-3 mb-5 text-sm" style={{ background: '#FEE2E2', color: '#B91C1C', border: '1px solid #FCA5A5' }}>
                    Hubo un error al enviar el mensaje. Por favor intenta nuevamente.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="nombre" style={labelStyle}>Nombre *</label>
                    <input
                      type="text" id="nombre" name="nombre"
                      value={formData.nombre} onChange={handleChange} required
                      placeholder="Tu nombre"
                      className={inputClass} style={inputStyle}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" style={labelStyle}>Correo electrónico *</label>
                    <input
                      type="email" id="email" name="email"
                      value={formData.email} onChange={handleChange} required
                      placeholder="tu@email.com"
                      className={inputClass} style={inputStyle}
                    />
                  </div>
                  <div>
                    <label htmlFor="mensaje" style={labelStyle}>Mensaje *</label>
                    <textarea
                      id="mensaje" name="mensaje"
                      value={formData.mensaje} onChange={handleChange} required
                      placeholder="Cuéntame brevemente qué necesitas"
                      className={inputClass}
                      style={{ ...inputStyle, height: '140px', paddingTop: '12px', resize: 'vertical' }}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={enviando}
                    className="w-full py-3 rounded-lg font-semibold text-white transition-opacity"
                    style={{ background: enviando ? 'var(--text-secondary)' : 'var(--brand)', borderRadius: 'var(--radius)', cursor: enviando ? 'not-allowed' : 'pointer' }}
                  >
                    {enviando ? 'Enviando...' : 'Enviar mensaje'}
                  </button>
                </form>
              </div>

            </div>
          </div>
        </section>

        {/* Línea diagnóstico */}
        <section className="text-center fade" style={{ background: 'var(--paper)', padding: '40px' }}>
          <p style={{ fontSize: '17px', color: 'var(--text-primary)' }}>
            Si tienes una PyME y quieres partir con algo concreto, mira el{' '}
            <Link to="/diagnostico" className="font-medium hover:underline" style={{ color: 'var(--brand)' }}>
              diagnóstico
            </Link>.
          </p>
        </section>

      </div>
    </>
  );
}

export default Contacto;

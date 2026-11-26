import { Link } from 'react-router-dom';
import {
  ArrowPathIcon,
  CodeBracketIcon,
  AcademicCapIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';

function LeafIcon({ className, style }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} style={style} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21c-4-3-7-6-7-10a7 7 0 0 1 14 0c0 4-3 7-7 10Z" style={{ stroke: 'var(--forest)' }} />
      <path d="M12 21V10" style={{ stroke: 'var(--forest)' }} />
    </svg>
  );
}

const servicios = [
  {
    Icon: ArrowPathIcon,
    titulo: 'Digitalización de procesos',
    desc: 'Convierte días de planilla en minutos automatizados.',
    iconBg: 'var(--icon-bg-blue)',
    iconColor: 'var(--brand)',
    borderTop: 'var(--brand)',
  },
  {
    Icon: CodeBracketIcon,
    titulo: 'Herramientas a medida',
    desc: 'Software que encaja exactamente en tu operación.',
    iconBg: 'var(--icon-bg-blue)',
    iconColor: 'var(--brand)',
    borderTop: 'var(--brand)',
  },
  {
    Icon: LeafIcon,
    titulo: 'Huella de carbono y gestión ambiental',
    desc: 'Mide, reduce y gestiona el impacto ambiental de tu empresa.',
    iconBg: 'var(--icon-bg-green)',
    iconColor: 'var(--forest)',
    borderTop: 'var(--forest)',
  },
  {
    Icon: AcademicCapIcon,
    titulo: 'Innovación y talleres',
    desc: 'Incorpora metodologías de innovación en tu equipo o institución.',
    iconBg: 'rgba(14,27,61,0.08)',
    iconColor: '#0E1B3D',
    borderTop: '#0E1B3D',
  },
];

const casos = [
  {
    foto: '/assets/caso-residuos.webp',
    fotoAlt: 'Contenedores y cajas de residuos, imagen referencial',
    tag: 'Automatización de residuos',
    tagStyle: { background: 'var(--icon-bg-green)', color: 'var(--forest)' },
    desc: 'Contabilización mensual de residuos: de planillas de miles de filas que tomaban días, a una plataforma que lo resuelve en minutos.',
    metrica: '-95%',
    detalle: 'en tiempo de proceso',
    franjaGradient: 'var(--gradient-forest)',
    detalleColor: '#D6E4DC',
    accentColor: '#9fe1cb',
  },
  {
    foto: '/assets/caso-cotizador.webp',
    fotoAlt: 'Repuestos y piezas de insumos industriales, imagen referencial',
    tag: 'Cotizador centralizado',
    tagStyle: { background: 'var(--icon-bg-blue)', color: 'var(--brand)' },
    desc: 'Empresa de insumos industriales con cotizaciones repartidas en múltiples Excel. Un cotizador a medida centralizó todo en una sola plataforma.',
    metrica: 'Todo en 1',
    detalle: 'plataforma, en vez de muchos Excel sueltos',
    franjaGradient: 'linear-gradient(135deg, #0E1B3D 0%, #16295C 100%)',
    detalleColor: '#C7D2F5',
    accentColor: '#93b4ff',
  },
];

const hitos = [
  { label: 'Experiencia', cifra: '+10 años', detalle: 'de consultoría ambiental' },
  { label: 'Formación', cifra: 'Magíster', detalle: 'en Gestión Integrada' },
  { label: 'Innovación', cifra: '2025', detalle: 'Impulsor y gestor de la innovación en el Instituto Tecnológico TEC-UCT (Feria de Innovación e ImpulsaTEC)' },
  { label: 'Docencia', cifra: '7 años', detalle: 'de docencia técnica y universitaria' },
];

function Home() {
  return (
    <div>

      {/* 1 — Hero */}
      <section className="py-20" style={{ background: 'var(--gradient-night)' }}>
        <div className="container-site">
          <div className="flex flex-col md:flex-row items-center" style={{ gap: '56px' }}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white" style={{ lineHeight: 1.15 }}>
                ¡Hola!<br />Me llamo Walter
              </h1>
              <p className="text-lg font-semibold mb-4" style={{ color: 'var(--blue-light)' }}>
                Consultor en Digitalización e Innovación para PyMEs
              </p>
              <p className="text-base mb-3" style={{ color: 'var(--text-light)' }}>
                Ingeniero ambiental y desarrollador de soluciones tecnológicas. Digitalizo procesos y construyo herramientas a medida.
              </p>
              <p className="text-sm mb-8" style={{ color: 'var(--text-light)' }}>
                Más de 10 años de experiencia en consultoría ambiental
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/servicios" className="btn-dark-secondary">Ver servicios</Link>
                <Link to="/contacto" className="btn-dark-primary">Conversemos</Link>
              </div>
            </div>
            <div className="flex justify-end items-center" style={{ flexShrink: 0 }}>
              <div style={{ width: '380px', height: '380px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: '8px solid #DCE6FF', boxSizing: 'border-box' }}>
                <img
                  src="/assets/hero-walter.webp"
                  alt="Walter Noack, ingeniero ambiental y desarrollador"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center', filter: 'saturate(0.85) brightness(0.95)' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2 — En qué puedo ayudarte */}
      <section className="py-16 bg-white fade">
        <div className="container-site">
          <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
            ¿En qué puedo ayudarte?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicios.map(({ Icon, titulo, desc, iconBg, iconColor, borderTop, cardStyle, tituloColor, descColor }) => (
              <div key={titulo} className="card-base card-hover" style={{ borderTop: `4px solid ${borderTop}`, ...cardStyle }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: iconBg }}>
                  <Icon className="w-5 h-5" style={{ color: iconColor }} />
                </div>
                <h3 className="font-semibold mb-2 text-sm" style={{ color: tituloColor || 'var(--text-primary)' }}>{titulo}</h3>
                <p className="text-sm" style={{ color: descColor || 'var(--text-secondary)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — Casos reales */}
      <section className="py-16 fade" style={{ background: 'var(--paper)' }}>
        <div className="container-site">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>Casos reales</h2>
            <Link to="/portafolio" className="btn-primary text-sm">Ver portafolio</Link>
          </div>
          <p className="mb-8" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Imágenes referenciales</p>
          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            {casos.map(({ foto, fotoAlt, tag, tagStyle, desc, metrica, detalle, franjaGradient, detalleColor, accentColor }) => {
              const accentChar = accentColor ? metrica.slice(-1) : null;
              const baseText = accentColor ? metrica.slice(0, -1) : metrica;
              return (
                <div key={tag} className="flex flex-col h-full overflow-hidden" style={{ border: '1px solid var(--border)', borderRadius: '8px' }}>
                  {/* Foto */}
                  <div className="relative w-full overflow-hidden" style={{ height: '180px', background: 'var(--night-2)', borderBottom: '1px solid #E1E7F3' }}>
                    <img
                      src={foto}
                      alt={fotoAlt}
                      className="w-full h-full object-cover object-center"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                    <div className="absolute inset-0" style={{ background: 'rgba(14,27,61,0.15)' }} />
                  </div>
                  {/* Contenido */}
                  <div className="p-6 flex-1">
                    <span className="inline-block text-xs font-semibold px-2 py-1 rounded mb-3" style={tagStyle}>
                      {tag}
                    </span>
                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{desc}</p>
                  </div>
                  {/* Franja resultado */}
                  <div className="stat" style={{ background: franjaGradient }}>
                    <span className="stat-value text-white">
                      {baseText}{accentChar && <span style={{ color: accentColor }}>{accentChar}</span>}
                    </span>
                    <span className="stat-label" style={{ color: detalleColor }}>{detalle}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4 — Banda foto */}
      <section className="min-h-64 flex flex-col md:flex-row fade">
        {/* Texto */}
        <div className="md:w-1/2 flex items-center py-16 px-10" style={{ background: 'var(--gradient-night)' }}>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ lineHeight: 1.3 }}>
              Más de 10 años resolviendo problemas ambientales. Hoy los resuelvo con tecnología.
            </h2>
            <p style={{ color: 'var(--text-light)' }}>Ingeniero ambiental, desarrollador y docente.</p>
          </div>
        </div>
        {/* Foto — reemplazar src cuando esté lista */}
        <div className="md:w-1/2 min-h-64 overflow-hidden" style={{ background: 'var(--night-2)' }}>
          <img
            src="/assets/codesser-buena_res.webp"
            alt="Walter Noack"
            className="w-full h-full object-cover"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        </div>
      </section>

      {/* 5 — Trayectoria */}
      <section className="py-16 fade" style={{ background: 'var(--night)' }}>
        <div className="container-site">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Columna izq */}
            <div className="md:w-1/3">
              <h2 className="text-2xl font-bold text-white mb-3">Trayectoria</h2>
              <p className="text-sm mb-6" style={{ color: 'var(--text-light)' }}>
                Del trabajo ambiental en terreno a la digitalización de PyMEs.
              </p>
              <Link to="/sobre-mi" className="btn-dark-secondary text-sm">Más sobre mí</Link>
            </div>
            {/* Grilla hitos */}
            <div className="md:w-2/3 grid grid-cols-2 gap-4">
              {hitos.map(({ label, cifra, detalle }) => (
                <div key={cifra} className="p-5 rounded-lg" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: 'var(--blue-light)' }}>{label}</p>
                  <p className="text-2xl font-bold text-white mb-1">{cifra}</p>
                  <p className="text-xs" style={{ color: 'var(--text-light)' }}>{detalle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6 — Diagnóstico CTA */}
      <section className="py-20 fade" style={{ background: 'var(--gradient-night)' }}>
        <div className="container-site">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0 mt-1" style={{ background: 'rgba(255,255,255,0.08)' }}>
                <MagnifyingGlassIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: 'var(--blue-light)' }}>Punto de partida</p>
                <h2 className="text-2xl font-bold text-white mb-2">Diagnóstico para PyMEs</h2>
                <p style={{ fontSize: '16px', color: 'var(--text-light)', maxWidth: '540px' }}>
                  Una sesión de 45 minutos para ver qué procesos conviene digitalizar y por dónde partir — con un informe concreto al final.
                </p>
              </div>
            </div>
            <Link to="/diagnostico" className="btn-dark-primary shrink-0">Conocer el diagnóstico</Link>
          </div>
        </div>
      </section>

      {/* 6b — Talleres */}
      <section className="py-20 fade" style={{ background: 'var(--paper)' }}>
        <div className="container-site">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0 mt-1" style={{ background: 'var(--icon-bg-blue)' }}>
                <AcademicCapIcon className="w-6 h-6" style={{ color: 'var(--brand)' }} />
              </div>
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: 'var(--brand)' }}>Educación técnica</p>
                <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Talleres de innovación</h2>
                <p style={{ fontSize: '16px', color: 'var(--text-secondary)', maxWidth: '540px' }}>
                  Para liceos y educación técnica: talleres de Design Thinking para estudiantes y para docentes.
                </p>
              </div>
            </div>
            <Link to="/talleres" className="btn-night shrink-0">Ver talleres</Link>
          </div>
        </div>
      </section>

      {/* 7 — CTA final */}
      <section className="py-20 fade" style={{ background: 'var(--gradient-brand)' }}>
        <div className="container-site text-center">
          <h2 className="text-3xl font-bold text-white mb-3">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="mb-8" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Cuéntame qué necesitas y vemos cómo abordarlo.
          </p>
          <Link to="/contacto" className="btn-dark-primary">
            Conversemos
          </Link>
        </div>
      </section>

    </div>
  );
}

export default Home;

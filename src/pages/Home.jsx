import { Link } from 'react-router-dom';
import {
  ArrowPathIcon,
  CodeBracketIcon,
  SparklesIcon,
  AcademicCapIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';

const servicios = [
  {
    Icon: ArrowPathIcon,
    titulo: 'Digitalización de procesos',
    desc: 'Convierte días de planilla en minutos automatizados.',
  },
  {
    Icon: CodeBracketIcon,
    titulo: 'Herramientas a medida',
    desc: 'Software que encaja exactamente en tu operación.',
  },
  {
    Icon: SparklesIcon,
    titulo: 'Huella de carbono y gestión ambiental',
    desc: 'Mide, reduce y gestiona el impacto ambiental de tu empresa.',
  },
  {
    Icon: AcademicCapIcon,
    titulo: 'Innovación y talleres',
    desc: 'Incorpora metodologías de innovación en tu equipo o institución.',
  },
];

const casos = [
  {
    foto: '/images/caso-residuos.jpg',
    fotoAlt: 'Contenedores de reciclaje',
    tag: 'Automatización de residuos',
    desc: 'Contabilización mensual de residuos: de planillas de miles de filas que tomaban días, a una plataforma que lo resuelve en minutos.',
    metrica: '-95%',
    detalle: 'en tiempo de proceso',
  },
  {
    foto: '/images/caso-cotizador.jpg',
    fotoAlt: 'Bodega de insumos industriales',
    tag: 'Cotizador centralizado',
    desc: 'Empresa de insumos industriales con cotizaciones repartidas en múltiples Excel. Un cotizador a medida centralizó todo en una sola plataforma.',
    metrica: '1 plataforma',
    detalle: 'en vez de muchos Excel sueltos',
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
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
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
            <div className="md:w-1/2 flex justify-center">
              <img
                src="/assets/foto-perfil.jpg"
                alt="Walter Noack"
                className="rounded-full w-72 h-72 md:w-96 md:h-96 object-cover"
                style={{ border: '3px solid rgba(255,255,255,0.15)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2 — En qué puedo ayudarte */}
      <section className="py-16 bg-white">
        <div className="container-site">
          <h2 className="text-2xl font-bold mb-10" style={{ color: 'var(--text-primary)' }}>
            ¿En qué puedo ayudarte?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicios.map(({ Icon, titulo, desc }) => (
              <div key={titulo} className="card-base card-hover card-base-blue">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: 'var(--icon-bg-blue)' }}>
                  <Icon className="w-5 h-5" style={{ color: 'var(--brand)' }} />
                </div>
                <h3 className="font-semibold mb-2 text-sm" style={{ color: 'var(--text-primary)' }}>{titulo}</h3>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — Casos reales */}
      <section className="py-16" style={{ background: 'var(--paper)' }}>
        <div className="container-site">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>Casos reales</h2>
            <Link to="/portafolio" className="btn-primary text-sm">Ver portafolio</Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {casos.map(({ foto, fotoAlt, tag, desc, metrica, detalle }) => (
              <div key={tag} className="card-base overflow-hidden p-0">
                {/* Foto */}
                <div className="h-44 w-full overflow-hidden" style={{ background: 'var(--night-2)' }}>
                  <img
                    src={foto}
                    alt={fotoAlt}
                    className="w-full h-full object-cover opacity-80"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
                {/* Contenido */}
                <div className="p-6">
                  <span className="inline-block text-xs font-semibold px-2 py-1 rounded mb-3" style={{ background: 'var(--icon-bg-blue)', color: 'var(--brand)' }}>
                    {tag}
                  </span>
                  <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>{desc}</p>
                </div>
                {/* Metrica */}
                <div className="px-6 py-4" style={{ background: 'var(--brand)' }}>
                  <span className="text-2xl font-bold text-white">{metrica}</span>
                  <span className="text-sm text-white ml-2 opacity-80">{detalle}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — Banda foto */}
      <section className="min-h-64 flex flex-col md:flex-row">
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
            src="/images/banda-foto.jpg"
            alt="Walter Noack"
            className="w-full h-full object-cover"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        </div>
      </section>

      {/* 5 — Trayectoria */}
      <section className="py-16" style={{ background: 'var(--night)' }}>
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

      {/* 6 — Otras formas de trabajar juntos */}
      <section className="py-16" style={{ background: 'var(--paper)' }}>
        <div className="container-site">
          <h2 className="text-2xl font-bold mb-10" style={{ color: 'var(--text-primary)' }}>
            Otras formas de trabajar juntos
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-base card-hover card-base-blue">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: 'var(--icon-bg-blue)' }}>
                <MagnifyingGlassIcon className="w-5 h-5" style={{ color: 'var(--brand)' }} />
              </div>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Diagnóstico para PyMEs</h3>
              <p className="text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>
                Una sesión de 45 minutos para ver qué procesos conviene digitalizar y por dónde partir.
              </p>
              <Link to="/diagnostico" className="btn-primary text-sm">Conocer el diagnóstico</Link>
            </div>
            <div className="card-base card-hover card-base-blue">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: 'var(--icon-bg-blue)' }}>
                <AcademicCapIcon className="w-5 h-5" style={{ color: 'var(--brand)' }} />
              </div>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Talleres de innovación</h3>
              <p className="text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>
                Para liceos y educación técnica: talleres para estudiantes y para docentes.
              </p>
              <Link to="/talleres" className="btn-night text-sm">Ver talleres</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7 — CTA final */}
      <section className="py-20" style={{ background: 'var(--gradient-brand)' }}>
        <div className="container-site text-center">
          <h2 className="text-3xl font-bold text-white mb-3">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="mb-8" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Cuéntame qué necesitas y vemos cómo abordarlo.
          </p>
          <Link to="/contacto" className="btn-dark-secondary">
            Conversemos
          </Link>
        </div>
      </section>

    </div>
  );
}

export default Home;

import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Breadcrumb from '../components/Breadcrumb';
import {
  BriefcaseIcon,
  LightBulbIcon,
} from '@heroicons/react/24/outline';

function LeafIcon({ className, style }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} style={style} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21c-4-3-7-6-7-10a7 7 0 0 1 14 0c0 4-3 7-7 10Z" style={{ stroke: 'var(--forest)' }} />
      <path d="M12 21V10" style={{ stroke: 'var(--forest)' }} />
    </svg>
  );
}

const areas = [
  {
    Icon: BriefcaseIcon,
    titulo: 'Consultoría',
    descripcion: 'Acompaño a PyMEs y empresas a ordenar sus procesos, digitalizarlos y construir las herramientas que necesitan, desde el diagnóstico hasta la entrega.',
    items: [
      'Más de 10 años en consultoría ambiental',
      'Digitalización de procesos: automatización de residuos, de días a minutos',
      'Herramientas a medida: un cotizador que reemplazó muchos archivos Excel por una sola plataforma',
      'Diagnóstico inicial para partir con algo acotado',
    ],
    link: { to: '/servicios', label: 'Ver servicios' },
    variante: 'blue',
  },
  {
    Icon: LightBulbIcon,
    titulo: 'Innovación',
    descripcion: 'Llevo la innovación a la educación técnica, con Design Thinking y prototipado.',
    items: [
      '3 años de docencia en innovación',
      'Docencia en innovación y desarrollo de proyectos en múltiples instituciones',
      'Durante 2025 impulsé y gestioné diversas actividades de innovación en TEC-UCT',
      'Feria de Innovación, ImpulsaTEC e IdeaTEC (esta última para la carrera de Técnico Universitario en Informática)',
    ],
    link: { to: '/talleres', label: 'Ver talleres' },
    variante: 'night',
  },
  {
    Icon: LeafIcon,
    titulo: 'Sostenibilidad',
    descripcion: 'Años de consultoría ambiental ayudando a empresas a medir, planificar y reducir su impacto. Aparte, desarrollo el software asociado.',
    items: [
      'Diseño de planes de gestión ambiental',
      'Cálculo y gestión de huella de carbono',
      'Gestión hídrica',
      'Docencia Universitaria en Medio Ambiente',
      'Software asociado: AmbientApp (Valorizapp, CarbonApp y Eria)',
    ],
    link: { to: '/portafolio', label: 'Ver portafolio' },
    variante: 'green',
  },
];

const borderColor = { blue: 'var(--brand)', night: 'var(--night)', green: 'var(--forest)' };
const iconBg      = { blue: 'var(--icon-bg-blue)', night: 'var(--icon-bg-blue)', green: 'var(--icon-bg-green)' };
const iconColor   = { blue: 'var(--brand)', night: 'var(--night)', green: 'var(--forest)' };
const linkColor   = { blue: 'var(--brand)', night: 'var(--night)', green: 'var(--forest)' };

function SobreMi() {
  return (
    <>
      <Helmet>
        <title>Sobre mí | Walter Noack, ingeniero ambiental y desarrollador, Temuco</title>
        <meta name="description" content="Ingeniero ambiental, desarrollador de soluciones tecnológicas y docente. Más de 10 años de experiencia en consultoría ambiental. Temuco, Chile." />
      </Helmet>

      <div>

        {/* Header */}
        <section className="py-6" style={{ background: 'var(--gradient-night)' }}>
          <div className="container-site">
            <Breadcrumb pages={[{ label: 'Sobre mí' }]} />
            <h1 className="text-4xl font-bold text-white mb-2">Sobre mí</h1>
            <p className="text-lg" style={{ color: 'var(--text-light)' }}>
              Ingeniero ambiental, desarrollador y docente.
            </p>
          </div>
        </section>

        {/* Presentación */}
        <section className="py-20 bg-white fade">
          <div className="container-site">
            <div className="grid gap-16 items-start" style={{ gridTemplateColumns: 'clamp(300px, 460px, 460px) 1fr' }}>
              {/* Foto */}
              <div className="w-full overflow-hidden rounded-lg" style={{ height: '400px' }}>
                <img
                  src="/images/retrato-walter.webp"
                  alt="Walter Noack"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: '50% 30%' }}
                  onError={(e) => { e.target.style.background = 'var(--night-2)'; e.target.style.display = 'block'; }}
                />
              </div>
              {/* Bio */}
              <div>
                <h2 className="font-bold mb-6" style={{ fontSize: '32px', color: 'var(--text-primary)' }}>
                  Hola, me llamo Walter Noack
                </h2>
                <p className="text-lg mb-4" style={{ color: 'var(--text-primary)' }}>
                  Soy ingeniero ambiental con formación complementaria en informática. Después de 10 años en consultoría ambiental, decidí integrar el mundo tecnológico para potenciar el impacto de mis soluciones.
                </p>
                <p className="text-lg" style={{ color: 'var(--text-primary)' }}>
                  Mi enfoque combina la rigurosidad técnica de la ingeniería ambiental con las posibilidades del desarrollo tecnológico, creando soluciones innovadoras que responden a problemáticas reales de empresas y organizaciones.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tres áreas */}
        <section className="py-16 fade" style={{ background: 'var(--paper)' }}>
          <div className="container-site">
            <h2 className="font-bold mb-4" style={{ fontSize: '32px', color: 'var(--text-primary)' }}>
              Tres áreas, un mismo enfoque
            </h2>
            <p className="mb-6 max-w-[760px]" style={{ fontSize: '18px', color: 'var(--text-primary)' }}>
              La tecnología debe nacer de una necesidad real. Parto escuchando, entiendo el problema y recién ahí diseño la solución.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {areas.map(({ Icon, titulo, descripcion, items, link, variante }) => (
                <div
                  key={titulo}
                  className="flex flex-col bg-white rounded-lg"
                  style={{ border: '1px solid var(--border)', borderTop: `4px solid ${borderColor[variante]}`, padding: '32px' }}
                >
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-5" style={{ background: iconBg[variante] }}>
                    <Icon className="w-6 h-6" style={{ color: iconColor[variante] }} />
                  </div>
                  <h3 className="font-bold mb-3" style={{ fontSize: '24px', color: 'var(--text-primary)' }}>
                    {titulo}
                  </h3>
                  <p className="mb-4" style={{ fontSize: '16px', color: 'var(--text-primary)' }}>
                    {descripcion}
                  </p>
                  <ul className="flex-1 space-y-2 mb-6">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: borderColor[variante] }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={link.to}
                    className="text-sm font-medium hover:underline"
                    style={{ color: linkColor[variante] }}
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Innovación también en el aula */}
        <section className="py-16 bg-white fade">
          <div className="container-site">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-6">
              <div className="max-w-[720px]">
                <h2 className="font-bold mb-4" style={{ fontSize: '32px', color: 'var(--text-primary)' }}>
                  Innovación también en el aula
                </h2>
                <p className="mb-3" style={{ fontSize: '18px', color: 'var(--text-primary)' }}>
                  Soy un convencido de que la innovación no debe terminar redactada en un paper, y por lo mismo insto a mis estudiantes a desarrollar ideas que resuelvan problemas reales.
                </p>
                <p style={{ fontSize: '18px', color: 'var(--text-primary)' }}>
                  Durante el año 2025 impulsé y gestioné el desarrollo de la Feria de Innovación y también el primer ImpulsaTEC, en el contexto de las asignaturas de Innovación y Transferencia Tecnológica del TEC-UCT.
                </p>
              </div>
              <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Link to="/talleres" className="btn-night text-sm whitespace-nowrap">
                  Ver talleres
                </Link>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <figure>
                <div className="rounded-lg overflow-hidden" style={{ height: '330px' }}>
                  <img
                    src="/images/profesores-feria-2025.webp"
                    alt="Feria de Innovación TEC-UCT 2025"
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
                <figcaption className="mt-2 text-sm" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                  Feria de Innovación TEC-UCT 2025
                </figcaption>
              </figure>
              <figure>
                <div className="rounded-lg overflow-hidden" style={{ height: '330px' }}>
                  <img
                    src="/images/stand-wantu.webp"
                    alt="Stand de Wantü"
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
                <figcaption className="mt-2 text-sm" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                  Stand de Wantü
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 fade" style={{ background: 'var(--gradient-brand)' }}>
          <div className="container-site text-center">
            <h2 className="font-bold text-white mb-3" style={{ fontSize: '32px' }}>
              ¿Conversamos?
            </h2>
            <p className="mb-8" style={{ color: 'rgba(255,255,255,0.8)' }}>
              Cuéntame qué necesitas y vemos cómo abordarlo.
            </p>
            <Link to="/contacto" className="btn-dark-primary">Conversemos</Link>
          </div>
        </section>

      </div>
    </>
  );
}

export default SobreMi;

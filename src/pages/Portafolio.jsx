import { Link } from 'react-router-dom';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const PRODUCTOS = [
  {
    nombre: 'AmbientApp',
    url: 'https://ambientapp.cl',
    logo: '/assets/logos/AmbientapSN.png',
    descripcion: 'Ecosistema de cumplimiento ambiental para empresas y consultoras chilenas. Panel central que integra Valorizapp, CarbonApp y Eria.',
  },
  {
    nombre: 'Valorizapp',
    url: 'https://valorizapp.ambientapp.cl',
    logo: '/assets/logos/valorizappSN.png',
    descripcion: 'Gestión de residuos y cumplimiento de la Ley REP.',
  },
  {
    nombre: 'CarbonApp',
    url: 'https://carbonapp.ambientapp.cl',
    logo: '/assets/logos/carbonappSN.png',
    descripcion: 'Cálculo de huella de carbono corporativa.',
  },
  {
    nombre: 'Eria',
    url: 'https://eria.ambientapp.cl',
    logo: '/assets/logos/eriaSN.png',
    descripcion: 'Asistente de IA que interpreta la normativa ambiental chilena.',
  },
  {
    nombre: 'Voxterra',
    url: null,
    logo: '/assets/logos/voxterraSN.png',
    descripcion: 'SaaS agrícola y ganadero. Cuaderno de campo por voz: el operario habla desde el campo, el sistema transcribe, extrae datos estructurados y los registra automáticamente.',
    etiqueta: 'Prototipo',
  },
];

const SITIOS = [
  { nombre: 'ensustenta.cl',  url: 'https://ensustenta.cl',  img: '/assets/ensustenta.png' },
  { nombre: 'neuambiente.cl', url: 'https://neuambiente.cl', img: '/assets/neuambiente.png' },
  { nombre: 'miamade.cl',     url: 'https://miamade.cl',     img: '/assets/miamade.png' },
  { nombre: 'micasafull.cl',  url: 'https://micasafull.cl',  img: '/assets/micasafull.png' },
];

function Portafolio() {
  return (
    <div>

      {/* Header */}
      <section className="py-16" style={{ background: 'var(--gradient-night)' }}>
        <div className="container-site">
          <h1 className="text-4xl font-bold text-white mb-4">Portafolio</h1>
          <p className="text-lg max-w-xl" style={{ color: 'var(--text-light)' }}>
            Productos propios y sitios web desarrollados.
          </p>
        </div>
      </section>

      {/* Productos propios */}
      <section className="py-16 bg-white">
        <div className="container-site">
          <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Productos propios</h2>
          <p className="text-sm mb-8" style={{ color: 'var(--text-secondary)' }}>Software desarrollado y mantenido de forma independiente.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PRODUCTOS.map((p) => {
              const Tag = p.url ? 'a' : 'div';
              const linkProps = p.url ? { href: p.url, target: '_blank', rel: 'noopener noreferrer' } : {};
              return (
                <Tag
                  key={p.nombre}
                  {...linkProps}
                  className="card-base card-hover group"
                  style={{ borderTop: '4px solid var(--forest)' }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {p.logo && (
                        <img src={p.logo} alt={p.nombre} className="h-10 w-auto object-contain shrink-0" />
                      )}
                      <span className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>
                        {p.nombre}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 shrink-0 ml-2">
                      {p.etiqueta && (
                        <span className="text-xs px-2 py-0.5 rounded font-medium" style={{ background: 'var(--icon-bg-green)', color: 'var(--forest)' }}>
                          {p.etiqueta}
                        </span>
                      )}
                      {p.url && !p.etiqueta && (
                        <ArrowTopRightOnSquareIcon className="w-4 h-4 transition" style={{ color: 'var(--text-secondary)' }} />
                      )}
                    </div>
                  </div>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{p.descripcion}</p>
                </Tag>
              );
            })}
          </div>

          {/* Proyecto anterior */}
          <div className="mt-10">
            <p className="text-xs font-semibold uppercase tracking-wide mb-4" style={{ color: 'var(--text-secondary)' }}>
              Proyecto anterior
            </p>
            <div className="card-base max-w-md" style={{ borderTop: '4px solid var(--text-secondary)' }}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <img src="/assets/logos/logoWantuSF.png" alt="Wantü" className="h-10 w-auto object-contain" />
                  <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>Wantü</span>
                </div>
                <span className="text-xs px-2 py-1 rounded" style={{ background: 'var(--paper)', color: 'var(--text-secondary)' }}>
                  TRL 7 · Finalizado
                </span>
              </div>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                Kit de sensorización agrícola para pequeños agricultores: estación meteorológica, sensores de humedad y caudalímetro, con visualización en app móvil.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sitios web */}
      <section className="py-16" style={{ background: 'var(--paper)' }}>
        <div className="container-site">
          <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Sitios web desarrollados</h2>
          <p className="text-sm mb-8" style={{ color: 'var(--text-secondary)' }}>Proyectos desarrollados para clientes.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SITIOS.map((s) => (
              <a
                key={s.nombre}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-base card-hover group overflow-hidden p-0"
              >
                <div className="h-36 overflow-hidden" style={{ background: 'var(--night-2)' }}>
                  <img
                    src={s.img}
                    alt={s.nombre}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-300"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
                <div className="p-4 flex items-center justify-between">
                  <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                    {s.nombre}
                  </span>
                  <ArrowTopRightOnSquareIcon className="w-4 h-4" style={{ color: 'var(--text-secondary)' }} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: 'var(--gradient-brand)' }}>
        <div className="container-site text-center">
          <h2 className="text-3xl font-bold text-white mb-3">¿Tienes un proyecto en mente?</h2>
          <p className="mb-8" style={{ color: 'rgba(255,255,255,0.8)' }}>Cuéntame qué necesitas y vemos cómo abordarlo.</p>
          <Link to="/contacto" className="btn-dark-secondary">Conversemos</Link>
        </div>
      </section>

    </div>
  );
}

export default Portafolio;

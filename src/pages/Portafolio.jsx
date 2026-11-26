import { Link } from 'react-router-dom';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import Breadcrumb from '../components/Breadcrumb';

const CASOS = [
  {
    etiqueta: 'Automatización de residuos',
    contexto: 'Empresa de servicios en Chile.',
    problema: 'La contabilización y clasificación mensual de residuos se hacía en planillas de miles de filas y tomaba días o semanas.',
    solucion: 'Una plataforma propia que consolida los datos automáticamente.',
    cifra: '-95%',
    apoyo: 'en tiempo de proceso: de días a minutos.',
    franjaGradient: 'var(--gradient-forest)',
    apoyo_color: '#D6E4DC',
    accentChar: '%',
    accentColor: '#9fe1cb',
  },
  {
    etiqueta: 'Cotizador centralizado',
    contexto: 'Empresa de venta de insumos industriales.',
    problema: 'La información de cotizaciones estaba repartida en muchos archivos Excel sin formato.',
    solucion: 'Un cotizador a medida que centraliza todo en un solo lugar.',
    cifra: 'Todo en 1',
    apoyo: 'plataforma, en vez de muchos Excel sueltos.',
    franjaGradient: 'linear-gradient(135deg, #0E1B3D 0%, #16295C 100%)',
    apoyo_color: '#C7D2F5',
    accentChar: '1',
    accentColor: '#93b4ff',
  },
];

const PRODUCTOS_PRINCIPALES = [
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
    logo: '/assets/logos/eriaSN.webp',
    descripcion: 'Asistente de IA que interpreta la normativa ambiental chilena.',
  },
];

const PRODUCTOS_SECUNDARIOS = [
  {
    nombre: 'Voxterra',
    url: null,
    logo: '/assets/logos/voxterraSN.png',
    descripcion: 'SaaS agrícola y ganadero. Cuaderno de campo por voz: el operario habla desde el campo, el sistema transcribe, extrae datos estructurados y los registra automáticamente.',
    etiqueta: 'Prototipo',
    etiquetaEstilo: { background: 'var(--icon-bg-blue)', color: 'var(--brand)' },
  },
  {
    nombre: 'Wantü',
    url: null,
    logo: '/assets/logos/logoWantuSF.png',
    descripcion: 'Kit de sensorización agrícola para pequeños agricultores: estación meteorológica, sensores de humedad y caudalímetro, con visualización en app móvil.',
    etiqueta: 'TRL 7 · Finalizado',
    etiquetaEstilo: { background: 'var(--paper)', color: 'var(--text-secondary)' },
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
      <section className="py-10" style={{ background: 'var(--gradient-night)' }}>
        <div className="container-site">
          <Breadcrumb pages={[{ label: 'Portafolio' }]} />
          <h1 className="text-4xl font-bold text-white mb-4">Portafolio</h1>
          <p className="text-lg max-w-xl" style={{ color: 'var(--text-light)' }}>
            Productos propios y sitios web desarrollados.
          </p>
        </div>
      </section>

      {/* Casos destacados */}
      <section className="py-20 bg-white fade">
        <div className="container-site">
          <h2 className="font-bold mb-10" style={{ fontSize: '32px', color: 'var(--text-primary)' }}>
            Casos destacados
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {CASOS.map(({ etiqueta, contexto, problema, solucion, cifra, apoyo, franjaGradient, apoyo_color, accentChar, accentColor }) => {
              const baseText = accentChar ? cifra.slice(0, cifra.lastIndexOf(accentChar)) : cifra;
              const accent = accentChar || null;
              return (
              <div
                key={etiqueta}
                className="flex flex-col rounded-lg overflow-hidden"
                style={{ border: '1px solid var(--border)' }}
              >
                {/* Contenido */}
                <div className="flex-1 p-7">
                  <span
                    className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-5"
                    style={{ background: 'var(--icon-bg-blue)', color: 'var(--brand)', fontSize: '13px' }}
                  >
                    {etiqueta}
                  </span>
                  <div className="space-y-4">
                    <div>
                      <p className="font-bold mb-1" style={{ fontSize: '14px', color: 'var(--brand)' }}>Contexto</p>
                      <p style={{ fontSize: '16px', color: 'var(--text-primary)' }}>{contexto}</p>
                    </div>
                    <div>
                      <p className="font-bold mb-1" style={{ fontSize: '14px', color: 'var(--brand)' }}>Problema</p>
                      <p style={{ fontSize: '16px', color: 'var(--text-primary)' }}>{problema}</p>
                    </div>
                    <div>
                      <p className="font-bold mb-1" style={{ fontSize: '14px', color: 'var(--brand)' }}>Solución</p>
                      <p style={{ fontSize: '16px', color: 'var(--text-primary)' }}>{solucion}</p>
                    </div>
                  </div>
                </div>
                {/* Franja resultado */}
                <div className="stat" style={{ background: franjaGradient || 'var(--gradient-brand)' }}>
                  <span className="stat-value text-white">
                    {baseText}{accent && <span style={{ color: accentColor }}>{accent}</span>}
                  </span>
                  <span className="stat-label" style={{ color: apoyo_color || 'rgba(255,255,255,0.8)' }}>{apoyo}</span>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Productos propios */}
      <section className="py-16 fade" style={{ background: 'var(--paper)' }}>
        <div className="container-site">
          <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Productos propios</h2>
          <p className="text-sm mb-8" style={{ color: 'var(--text-secondary)' }}>Software desarrollado y mantenido de forma independiente.</p>

          {/* Fila de 4 */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
            {PRODUCTOS_PRINCIPALES.map((p) => (
              <a
                key={p.nombre}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-base card-hover group"
                style={{ borderTop: '4px solid var(--forest)' }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <img src={p.logo} alt={p.nombre} className="h-10 w-auto object-contain shrink-0" />
                    <span className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>{p.nombre}</span>
                  </div>
                  <ArrowTopRightOnSquareIcon className="w-4 h-4 shrink-0" style={{ color: 'var(--text-secondary)' }} />
                </div>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{p.descripcion}</p>
              </a>
            ))}
          </div>

          {/* Fila de 2: Voxterra + Wantü */}
          <div className="grid md:grid-cols-2 gap-5">
            {PRODUCTOS_SECUNDARIOS.map((p) => {
              const Tag = p.url ? 'a' : 'div';
              const linkProps = p.url ? { href: p.url, target: '_blank', rel: 'noopener noreferrer' } : {};
              return (
                <Tag
                  key={p.nombre}
                  {...linkProps}
                  className="card-base card-hover"
                  style={{ borderTop: '4px solid var(--text-secondary)' }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <img src={p.logo} alt={p.nombre} className="h-10 w-auto object-contain shrink-0" />
                      <span className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>{p.nombre}</span>
                    </div>
                    <span className="text-xs px-2 py-0.5 rounded font-medium" style={p.etiquetaEstilo}>
                      {p.etiqueta}
                    </span>
                  </div>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{p.descripcion}</p>
                </Tag>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sitios web */}
      <section className="py-16 bg-white fade">
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
                  <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{s.nombre}</span>
                  <ArrowTopRightOnSquareIcon className="w-4 h-4" style={{ color: 'var(--text-secondary)' }} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 fade" style={{ background: 'var(--gradient-brand)' }}>
        <div className="container-site text-center">
          <h2 className="text-3xl font-bold text-white mb-3">¿Tienes un proyecto en mente?</h2>
          <p className="mb-8" style={{ color: 'rgba(255,255,255,0.8)' }}>Cuéntame qué necesitas y vemos cómo abordarlo.</p>
          <Link to="/contacto" className="btn-dark-primary">Conversemos</Link>
        </div>
      </section>

    </div>
  );
}

export default Portafolio;

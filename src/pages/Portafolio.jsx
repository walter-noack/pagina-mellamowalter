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
  {
    nombre: 'ensustenta.cl',
    url: 'https://ensustenta.cl',
    img: '/assets/ensustenta.png',
  },
  {
    nombre: 'neuambiente.cl',
    url: 'https://neuambiente.cl',
    img: '/assets/neuambiente.png',
  },
  {
    nombre: 'miamade.cl',
    url: 'https://miamade.cl',
    img: '/assets/miamade.png',
  },
  {
    nombre: 'micasafull.cl',
    url: 'https://micasafull.cl',
    img: '/assets/micasafull.png',
  },
];

function Portafolio() {
  return (
    <div className="bg-white">

      {/* Header */}
      <section className="bg-gray-100 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Portafolio
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Productos propios y sitios web desarrollados.
          </p>
        </div>
      </section>

      {/* Productos propios */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Productos propios</h2>
          <p className="text-gray-500 mb-8 text-sm">Software desarrollado y mantenido de forma independiente.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PRODUCTOS.map((p) => {
              const Tag = p.url ? 'a' : 'div';
              const linkProps = p.url
                ? { href: p.url, target: '_blank', rel: 'noopener noreferrer' }
                : {};
              return (
                <Tag
                  key={p.nombre}
                  {...linkProps}
                  className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {p.logo && (
                        <img src={p.logo} alt={p.nombre} className="h-12 w-auto object-contain flex-shrink-0" />
                      )}
                      <span className="font-semibold text-gray-900">
                        {p.nombre}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 flex-shrink-0 ml-2">
                      {p.etiqueta && (
                        <span className="text-xs text-amber-600 bg-amber-50 px-2 py-0.5 rounded font-medium">
                          {p.etiqueta}
                        </span>
                      )}
                      {p.url && !p.etiqueta && (
                        <ArrowTopRightOnSquareIcon className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition" />
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{p.descripcion}</p>
                </Tag>
              );
            })}
          </div>

          {/* Proyecto anterior */}
          <div className="mt-8">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Proyecto anterior</h3>
            <div className="border border-gray-200 rounded-xl p-5 max-w-md">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <img src="/assets/logos/logoWantuSF.png" alt="Wantü" className="h-12 w-auto object-contain" />
                  <span className="font-semibold text-gray-900">Wantü</span>
                </div>
                <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">TRL 7 · Finalizado</span>
              </div>
              <p className="text-sm text-gray-600">
                Kit de sensorización agrícola para pequeños agricultores: estación meteorológica, sensores de humedad y caudalímetro, con visualización en app móvil.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sitios web desarrollados */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Sitios web desarrollados</h2>
          <p className="text-gray-500 mb-8 text-sm">Proyectos desarrollados para clientes.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SITIOS.map((s) => (
              <a
                key={s.nombre}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition group bg-white"
              >
                <div className="h-36 bg-gray-100 overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.nombre}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-300"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
                <div className="p-4 flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition">
                    {s.nombre}
                  </span>
                  <ArrowTopRightOnSquareIcon className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white p-10 rounded-xl">
            <h2 className="text-2xl font-bold mb-3">¿Tienes un proyecto en mente?</h2>
            <p className="text-blue-100 mb-6">Cuéntame qué necesitas y vemos cómo abordarlo.</p>
            <Link
              to="/contacto"
              className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              Conversemos
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Portafolio;

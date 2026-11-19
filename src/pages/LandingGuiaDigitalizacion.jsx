import { Link } from 'react-router-dom';
import { TableCellsIcon, ViewColumnsIcon, ChartBarIcon, BookOpenIcon } from '@heroicons/react/24/outline';

/*
  INSTRUCCIONES CPANEL — Guía Digitalización
  -------------------------------------------
  PDF:    Subir a public_html/pdfs/s7-guia-digitalizacion-walter-noack.pdf
  Imagen: Subir a public_html/assets/guia-digitalizacion-preview.png
  Permisos: 644 en ambos archivos
*/

const procesos = [
  {
    Icon: TableCellsIcon,
    proceso: 'Registro de residuos',
    herramienta: 'Google Forms',
    desc: 'Captura cada movimiento en terreno sin planillas manuales.',
  },
  {
    Icon: ViewColumnsIcon,
    proceso: 'Seguimiento de obligaciones',
    herramienta: 'Trello',
    desc: 'Visualiza el estado de cada obligación regulatoria en un tablero simple.',
  },
  {
    Icon: ChartBarIcon,
    proceso: 'Reportes',
    herramienta: 'Google Sheets',
    desc: 'Consolida datos y genera reportes automáticos para la autoridad.',
  },
];

export default function LandingGuiaDigitalizacion() {
  return (
    <div className="bg-white text-gray-900 font-sans">

      {/* ── HERO ── */}
      <section className="bg-[#1E4ED8] text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-blue-200 uppercase tracking-widest text-xs font-semibold mb-4">
            Recurso gratuito · Digitalización
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            3 procesos que puedes digitalizar<br />
            <em className="font-serif not-italic italic">en menos de un mes</em>
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-xl mx-auto">
            Sin ERP. Sin presupuesto grande. Sin un equipo de TI.
          </p>
        </div>
      </section>

      {/* ── CUERPO ── */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">

          {/* Preview PDF */}
          <div className="flex justify-center mb-12">
            <div className="w-52 h-72 bg-gray-100 border border-gray-200 rounded-xl flex flex-col items-center justify-center gap-3 text-gray-400 text-sm">
              <BookOpenIcon className="w-10 h-10 text-gray-300" />
              <span className="text-center px-4 leading-snug">
                Portada del PDF<br />
                <span className="text-xs text-gray-300">(guia-digitalizacion-preview.png)</span>
              </span>
            </div>
          </div>

          {/* Descripción */}
          <p className="text-gray-700 text-lg leading-relaxed mb-12 text-center max-w-2xl mx-auto">
            Si gestionas procesos ambientales o de cumplimiento, probablemente llevas
            algún registro en Excel y varias alarmas en el teléfono. Esta guía te muestra
            cómo digitalizar 3 procesos concretos — con herramientas gratuitas — que puedes
            tener funcionando en menos de un mes.
          </p>

          {/* Tarjetas de procesos */}
          <div className="flex flex-col gap-5 mb-12">
            {procesos.map(({ Icon, proceso, herramienta, desc }) => (
              <div key={proceso} className="flex items-center gap-5 bg-gray-50 border border-gray-100 rounded-xl p-5">
                <div className="bg-[#1E4ED8] text-white p-3 rounded-lg shrink-0">
                  <Icon size={22} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="font-semibold text-[#111827]">{proceso}</span>
                    <span className="text-xs bg-blue-100 text-[#1E4ED8] font-medium px-2 py-0.5 rounded-full">
                      {herramienta}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Botón descarga */}
          <div className="text-center">
            <a
              href="/pdfs/s7-guia-digitalizacion-walter-noack.pdf"
              download
              className="inline-block bg-[#1E4ED8] text-white font-semibold px-10 py-4 rounded-lg hover:bg-blue-700 transition text-base"
            >
              Descargar guía gratuita
            </a>
          </div>

        </div>
      </section>

      {/* ── CTA SECUNDARIO ── */}
      <section className="py-14 px-4 bg-gray-50 border-t border-gray-100">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-gray-700 text-lg mb-4">
            ¿Quieres implementarlo en tu empresa?
          </p>
          <Link
            to="/contacto"
            className="inline-block border-2 border-[#1E4ED8] text-[#1E4ED8] font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition text-sm"
          >
            Escríbeme →
          </Link>
        </div>
      </section>

    </div>
  );
}

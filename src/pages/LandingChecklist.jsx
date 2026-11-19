import { Link } from 'react-router-dom';
import { ClipboardDocumentListIcon, ArrowPathIcon, CloudIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

/*
  INSTRUCCIONES CPANEL — Checklist
  ---------------------------------
  PDF:    Subir a public_html/pdfs/checklist-normativa-mellamowalter.pdf
  Imagen: Subir a public_html/assets/checklist-preview.png
  Permisos: 644 en ambos archivos
*/

const bloques = [
  { Icon: ClipboardDocumentListIcon, label: 'Ley REP', desc: 'Obligaciones de productores y comercializadores bajo la Ley 20.920.' },
  { Icon: ArrowPathIcon,             label: 'Gestión de Residuos', desc: 'Registro, trazabilidad y disposición final de residuos industriales.' },
  { Icon: CloudIcon,                 label: 'Emisiones', desc: 'Declaración y seguimiento de emisiones atmosféricas.' },
  { Icon: MagnifyingGlassIcon,       label: 'Trazabilidad', desc: 'Documentación y cadena de custodia para auditorías y fiscalización.' },
];

export default function LandingChecklist() {
  return (
    <div className="bg-white text-gray-900 font-sans">

      {/* ── HERO ── */}
      <section className="bg-[#1E4ED8] text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-blue-200 uppercase tracking-widest text-xs font-semibold mb-4">
            Recurso gratuito · Normativa ambiental
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            ¿Tu empresa cumple con la<br />
            <em className="font-serif not-italic italic">normativa ambiental?</em>
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-xl mx-auto">
            10 preguntas para saberlo en menos de 5 minutos
          </p>
        </div>
      </section>

      {/* ── CUERPO ── */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">

          {/* Preview PDF */}
          <div className="flex justify-center mb-12">
            <img
              src="/assets/checklist-preview.png"
              alt="Preview checklist normativa ambiental"
              className="w-52 rounded-xl shadow-md border border-gray-100"
            />
          </div>

          {/* Descripción */}
          <p className="text-gray-700 text-lg leading-relaxed mb-12 text-center max-w-2xl mx-auto">
            Muchas empresas en Chile tienen obligaciones ambientales que no conocen.
            No por mala voluntad — es que nadie se los explicó con claridad. Esta checklist
            te da un panorama honesto de tu situación actual: Ley REP, gestión de residuos,
            emisiones y trazabilidad. Sin tecnicismos. Sin letra chica.
          </p>

          {/* Bloques temáticos */}
          <div className="grid sm:grid-cols-2 gap-5 mb-12">
            {bloques.map(({ Icon, label, desc }) => (
              <div key={label} className="flex gap-4 items-start bg-gray-50 border border-gray-100 rounded-xl p-5">
                <Icon className="w-[22px] h-[22px] text-[#1E4ED8] mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-[#111827] mb-1">{label}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Botón descarga */}
          <div className="text-center">
            <a
              href="/pdfs/checklist-normativa-mellamowalter.pdf"
              download
              className="inline-block bg-[#1E4ED8] text-white font-semibold px-10 py-4 rounded-lg hover:bg-blue-700 transition text-base"
            >
              Descargar checklist gratuita
            </a>
          </div>

        </div>
      </section>

      {/* ── CTA SECUNDARIO ── */}
      <section className="py-14 px-4 bg-gray-50 border-t border-gray-100">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-gray-700 text-lg mb-4">
            ¿Tu resultado muestra brechas?
          </p>
          <Link
            to="/contacto"
            className="inline-block border-2 border-[#1E4ED8] text-[#1E4ED8] font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition text-sm"
          >
            Conversemos →
          </Link>
        </div>
      </section>

    </div>
  );
}

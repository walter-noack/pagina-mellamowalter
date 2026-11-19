import { Link } from 'react-router-dom';
import { BarChart2, FileText, Briefcase, ShieldCheck, AlertTriangle } from 'lucide-react';

/*
  INSTRUCCIONES CPANEL — Prompts IA
  -----------------------------------
  PDF:    Subir a public_html/pdfs/20PromptsGestionAmbiental.pdf
  Imagen: Subir a public_html/assets/prompts-ia-preview.png
  Permisos: 644 en ambos archivos
*/

const categorias = [
  { Icon: BarChart2,   label: 'Análisis de datos',         cantidad: 5 },
  { Icon: FileText,    label: 'Redacción de reportes',      cantidad: 5 },
  { Icon: Briefcase,   label: 'Estructurar propuestas',     cantidad: 5 },
  { Icon: ShieldCheck, label: 'Cumplimiento regulatorio',   cantidad: 5 },
];

export default function LandingPromptsIA() {
  return (
    <div className="bg-white text-gray-900 font-sans">

      {/* ── HERO ── */}
      <section className="bg-[#1E4ED8] text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-blue-200 uppercase tracking-widest text-xs font-semibold mb-4">
            Recurso gratuito · Inteligencia Artificial
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            20 prompts de IA para gestión<br />
            <em className="font-serif not-italic italic">ambiental y consultoría</em>
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-xl mx-auto">
            Listos para usar hoy en ChatGPT o Claude
          </p>
        </div>
      </section>

      {/* ── CUERPO ── */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">

          {/* Preview PDF */}
          <div className="flex justify-center mb-12">
            <img
              src="/assets/prompts-ia-preview.png"
              alt="Portada del PDF 20 Prompts de Gestión Ambiental"
              className="w-52 h-72 object-cover border border-gray-200 rounded-xl shadow-sm"
            />
          </div>

          {/* Descripción */}
          <p className="text-gray-700 text-lg leading-relaxed mb-12 text-center max-w-2xl mx-auto">
            Para profesionales ambientales y consultores que quieren incorporar la IA a su
            trabajo diario — sin necesidad de saber programar. Con un buen prompt puedes
            acelerar tareas que hoy te toman horas. Análisis de datos, redacción de reportes,
            estructuración de propuestas y cumplimiento regulatorio.
          </p>

          {/* Categorías */}
          <div className="grid sm:grid-cols-2 gap-5 mb-10">
            {categorias.map(({ Icon, label, cantidad }) => (
              <div key={label} className="flex items-center gap-4 bg-gray-50 border border-gray-100 rounded-xl p-5">
                <Icon size={22} className="text-[#1E4ED8] shrink-0" />
                <div className="flex-1">
                  <p className="font-semibold text-[#111827]">{label}</p>
                </div>
                <span className="text-[#1E4ED8] font-bold text-lg">{cantidad}</span>
              </div>
            ))}
          </div>

          {/* Aviso destacado */}
          <div className="flex gap-3 items-start bg-red-50 border border-red-200 rounded-xl p-5 mb-12">
            <AlertTriangle size={20} className="text-red-500 mt-0.5 shrink-0" />
            <p className="text-red-700 text-sm leading-relaxed">
              <strong>La IA es un complemento, no un reemplazo.</strong> Todo lo que genera
              debe ser verificado por un profesional antes de usarse en documentos oficiales.
            </p>
          </div>

          {/* Botón descarga */}
          <div className="text-center">
            <a
              href="/pdfs/20PromptsGestionAmbiental.pdf"
              download
              className="inline-block bg-[#1E4ED8] text-white font-semibold px-10 py-4 rounded-lg hover:bg-blue-700 transition text-base"
            >
              Descargar prompts gratuitos
            </a>
          </div>

        </div>
      </section>

      {/* ── CTA SECUNDARIO ── */}
      <section className="py-14 px-4 bg-gray-50 border-t border-gray-100">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-gray-700 text-lg mb-4">
            ¿Quieres aprender a usar estas herramientas aplicadas a tu trabajo?
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

import {
  UserGroupIcon,
  AcademicCapIcon,
  LightBulbIcon,
  PuzzlePieceIcon,
  SparklesIcon,
  BookOpenIcon,
  LinkIcon,
} from '@heroicons/react/24/outline';

const TALLERES_ESTUDIANTES = [
  {
    icon: LightBulbIcon,
    titulo: 'Design Thinking aplicado',
    descripcion: 'Metodología de innovación centrada en las personas, aplicada a problemas reales del entorno del estudiante.',
  },
  {
    icon: PuzzlePieceIcon,
    titulo: 'Prototipado básico',
    descripcion: 'Del concepto al prototipo: herramientas simples para materializar ideas y validarlas rápido.',
  },
  {
    icon: SparklesIcon,
    titulo: 'Del problema al proyecto',
    descripcion: 'Innovación en tu especialidad: cómo identificar oportunidades de mejora en el propio ámbito técnico.',
  },
];

const TALLERES_DOCENTES = [
  {
    icon: BookOpenIcon,
    titulo: 'Cómo incorporar innovación en el aula',
    descripcion: 'Estrategias concretas para integrar pensamiento creativo y resolución de problemas en las asignaturas técnicas.',
  },
  {
    icon: UserGroupIcon,
    titulo: 'Facilitación de procesos creativos',
    descripcion: 'Técnicas para guiar grupos en la generación y desarrollo de ideas, sin necesidad de expertise previo en innovación.',
  },
  {
    icon: LinkIcon,
    titulo: 'Vinculación con el medio desde el aula',
    descripcion: 'Cómo conectar los proyectos del aula con el mundo real: empresas, comunidad y contexto local.',
  },
];

function Talleres() {
  return (
    <div className="bg-white">

      {/* Header */}
      <section className="bg-gray-100 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Talleres de Innovación para Educación Técnica
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Talleres diseñados para liceos técnico-profesionales que quieren fortalecer sus indicadores de calidad e incorporar innovación como práctica institucional, en línea con los estándares del MINEDUC.
          </p>
        </div>
      </section>

      {/* Para quién */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">

            {/* Estudiantes */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <AcademicCapIcon className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">Para estudiantes</h2>
              </div>
              <div className="space-y-5">
                {TALLERES_ESTUDIANTES.map(({ icon: Icon, titulo, descripcion }) => (
                  <div key={titulo} className="flex gap-4 border border-gray-200 rounded-xl p-5">
                    <div className="flex-shrink-0 p-2 bg-gray-50 rounded-lg h-fit">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 mb-1">{titulo}</p>
                      <p className="text-sm text-gray-600">{descripcion}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Docentes */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <UserGroupIcon className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">Para docentes</h2>
              </div>
              <div className="space-y-5">
                {TALLERES_DOCENTES.map(({ icon: Icon, titulo, descripcion }) => (
                  <div key={titulo} className="flex gap-4 border border-gray-200 rounded-xl p-5">
                    <div className="flex-shrink-0 p-2 bg-gray-50 rounded-lg h-fit">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 mb-1">{titulo}</p>
                      <p className="text-sm text-gray-600">{descripcion}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Formatos */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Formatos</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <p className="font-semibold text-gray-800 mb-1">Grupos de docentes</p>
              <p className="text-sm text-gray-600 mb-3">Grupos de aproximadamente 10 personas.</p>
              <p className="text-sm text-gray-400 italic">[COMPLETAR duración y modalidad]</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <p className="font-semibold text-gray-800 mb-1">Grupos de estudiantes</p>
              <p className="text-sm text-gray-600 mb-3">Grupos de 25 a 30 personas.</p>
              <p className="text-sm text-gray-400 italic">[COMPLETAR duración y modalidad]</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <p className="font-semibold text-gray-800 mb-1">Modalidad extendida</p>
              <p className="text-sm text-gray-600 mb-3">Programa de varias sesiones para mayor profundidad.</p>
              <p className="text-sm text-gray-400 italic">[COMPLETAR duración y detalle]</p>
            </div>
          </div>
        </div>
      </section>

      {/* Respaldo */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-5">Respaldo</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-gray-700">
              <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-600 flex-shrink-0" />
              Creador de la Feria de Innovación e ImpulsaTEC en el Instituto Tecnológico TEC-UCT (2025)
            </li>
            <li className="flex items-start gap-3 text-gray-700">
              <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-600 flex-shrink-0" />
              Certificado IBM Enterprise Design Thinking Practitioner
            </li>
            <li className="flex items-start gap-3 text-gray-700">
              <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-600 flex-shrink-0" />
              Experiencia en docencia de innovación en educación técnica (TEC-UCT y CFT Teodoro Wickel)
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white p-10 rounded-xl max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-3">¿Te interesa hacer un taller en tu institución?</h2>
            <p className="text-blue-100 mb-6">Escríbeme y coordinamos los detalles.</p>
            <a
              href="mailto:hola@wnoack.cl"
              className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              Coordinemos un taller
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Talleres;

import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  AcademicCapIcon,
  UserGroupIcon,
  LightBulbIcon,
  PuzzlePieceIcon,
  SparklesIcon,
  BookOpenIcon,
  LinkIcon,
} from '@heroicons/react/24/outline';

const TALLERES_ESTUDIANTES = [
  {
    Icon: LightBulbIcon,
    titulo: 'Design Thinking aplicado',
    descripcion: 'Metodología de innovación centrada en las personas, aplicada a problemas reales del entorno del estudiante.',
  },
  {
    Icon: PuzzlePieceIcon,
    titulo: 'Prototipado básico',
    descripcion: 'Del concepto al prototipo: herramientas simples para materializar ideas y validarlas rápido.',
  },
  {
    Icon: SparklesIcon,
    titulo: 'Del problema al proyecto',
    descripcion: 'Innovación en tu especialidad: cómo identificar oportunidades de mejora en el propio ámbito técnico.',
  },
];

const TALLERES_DOCENTES = [
  {
    Icon: BookOpenIcon,
    titulo: 'Cómo incorporar innovación en el aula',
    descripcion: 'Estrategias concretas para integrar pensamiento creativo y resolución de problemas en las asignaturas técnicas.',
  },
  {
    Icon: UserGroupIcon,
    titulo: 'Facilitación de procesos creativos',
    descripcion: 'Técnicas para guiar grupos en la generación y desarrollo de ideas, sin necesidad de expertise previo en innovación.',
  },
  {
    Icon: LinkIcon,
    titulo: 'Vinculación con el medio desde el aula',
    descripcion: 'Cómo conectar los proyectos del aula con el mundo real: empresas, comunidad y contexto local.',
  },
];

const FORMATOS = [
  {
    titulo: 'Grupos de docentes',
    texto: 'Grupos de aproximadamente 10 personas.',
  },
  {
    titulo: 'Grupos de estudiantes',
    texto: 'Grupos de 25 a 30 personas.',
  },
  {
    titulo: 'Modalidad extendida',
    texto: 'Programa de varias sesiones para mayor profundidad.',
  },
];

const RESPALDO = [
  'Impulsor y gestor de actividades de innovación en el Instituto Tecnológico TEC-UCT durante 2025: Feria de Innovación, ImpulsaTEC e IdeaTEC.',
  '3 años de docencia en innovación en educación técnica.',
  'Trabajo junto a un equipo interdisciplinario, con experiencia en creatividad, innovación y trabajo con adolescentes, para ejecutar los talleres.',
];

function TallerColumna({ icono: Icono, titulo, talleres }) {
  return (
    <div
      className="flex flex-col rounded-lg"
      style={{ border: '1px solid var(--border)', borderTop: '4px solid var(--brand)', padding: '32px' }}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'var(--icon-bg-blue)' }}>
          <Icono className="w-5 h-5" style={{ color: 'var(--brand)' }} />
        </div>
        <h2 className="font-bold" style={{ fontSize: '24px', color: 'var(--text-primary)' }}>{titulo}</h2>
      </div>
      <div className="flex flex-col flex-1 divide-y" style={{ borderColor: 'var(--border)' }}>
        {talleres.map(({ titulo: t, descripcion }) => (
          <div key={t} className="py-5 first:pt-0 last:pb-0">
            <p className="font-bold mb-1" style={{ fontSize: '17px', color: 'var(--text-primary)' }}>{t}</p>
            <p style={{ fontSize: '16px', color: 'var(--text-secondary)' }}>{descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Talleres() {
  return (
    <>
      <Helmet>
        <title>Talleres de Innovación para Educación Técnica | Walter Noack</title>
        <meta name="description" content="Talleres de Design Thinking e innovación para estudiantes y docentes de liceos técnico-profesionales. Walter Noack, Temuco, Chile." />
      </Helmet>

      <div>

        {/* Header con foto */}
        <section
          className="relative"
          style={{ paddingTop: '72px', paddingBottom: '80px' }}
        >
          <div className="absolute inset-0" style={{ background: 'var(--gradient-night)' }} />
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="/images/estudiantes-feria-2025.jpg"
              alt="Estudiantes explicando su proyecto en la Feria de Innovación TEC-UCT 2025"
              className="w-full h-full object-cover"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div className="absolute inset-0" style={{ background: 'rgba(14,27,61,0.65)' }} />
          </div>
          <div className="container-site relative">
            <h1
              className="font-bold text-white mb-4"
              style={{ fontSize: '40px', maxWidth: '760px', lineHeight: 1.2 }}
            >
              Talleres de Innovación para Educación Técnica
            </h1>
            <p style={{ fontSize: '18px', color: '#E2E9FB', maxWidth: '680px' }}>
              Talleres diseñados para liceos técnico-profesionales que quieren fortalecer sus indicadores de calidad e incorporar innovación como práctica institucional, en línea con los estándares del MINEDUC.
            </p>
          </div>
        </section>

        {/* Talleres */}
        <section className="py-20 bg-white">
          <div className="container-site">
            <div className="grid md:grid-cols-2 gap-6">
              <TallerColumna
                icono={AcademicCapIcon}
                titulo="Para estudiantes"
                talleres={TALLERES_ESTUDIANTES}
              />
              <TallerColumna
                icono={UserGroupIcon}
                titulo="Para docentes"
                talleres={TALLERES_DOCENTES}
              />
            </div>
          </div>
        </section>

        {/* Formatos */}
        <section className="py-20" style={{ background: 'var(--paper)' }}>
          <div className="container-site">
            <h2 className="font-bold mb-10" style={{ fontSize: '32px', color: 'var(--text-primary)' }}>
              Formatos
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {FORMATOS.map(({ titulo, texto }) => (
                <div
                  key={titulo}
                  className="bg-white rounded-lg"
                  style={{ border: '1px solid var(--border)', padding: '28px' }}
                >
                  <p className="font-bold mb-2" style={{ fontSize: '20px', color: 'var(--text-primary)' }}>{titulo}</p>
                  <p style={{ fontSize: '16px', color: 'var(--text-secondary)' }}>{texto}</p>
                  <p className="mt-2" style={{ fontSize: '16px', color: 'var(--text-secondary)' }}>
                    Duración y modalidad a coordinar según tu institución.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Respaldo */}
        <section className="py-[72px]" style={{ background: 'var(--gradient-night)' }}>
          <div className="container-site">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-bold text-white mb-6" style={{ fontSize: '32px' }}>Respaldo</h2>
                <ul className="space-y-4">
                  {RESPALDO.map((item) => (
                    <li key={item} className="flex items-start gap-3" style={{ fontSize: '18px', color: 'var(--text-light)' }}>
                      <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: 'var(--blue-light)' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg overflow-hidden" style={{ height: '280px' }}>
                <img
                  src="/images/sala-taller-estudiantes.jpg"
                  alt="Walter Noack dictando un taller de Design Thinking a estudiantes"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20" style={{ background: 'var(--gradient-brand)' }}>
          <div className="container-site text-center">
            <h2 className="font-bold text-white mb-3" style={{ fontSize: '32px' }}>
              ¿Te interesa hacer un taller en tu institución?
            </h2>
            <p className="mb-8" style={{ color: 'rgba(255,255,255,0.8)' }}>
              Escríbeme y coordinamos los detalles.
            </p>
            <Link to="/contacto" className="btn-dark-primary">
              Coordinemos un taller
            </Link>
          </div>
        </section>

      </div>
    </>
  );
}

export default Talleres;

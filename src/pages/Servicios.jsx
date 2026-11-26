import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Breadcrumb from '../components/Breadcrumb';
import {
  ArrowPathIcon,
  CodeBracketIcon,
  GlobeAltIcon,
  MagnifyingGlassIcon,
  ChatBubbleLeftEllipsisIcon,
  ClipboardDocumentCheckIcon,
  WrenchScrewdriverIcon,
  HandThumbUpIcon,
} from '@heroicons/react/24/outline';

function LeafIcon({ className, style }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} style={style} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21c-4-3-7-6-7-10a7 7 0 0 1 14 0c0 4-3 7-7 10Z" stroke="#2F6B4F" />
      <path d="M12 21V10" stroke="#2F6B4F" />
    </svg>
  );
}

const servicios = [
  {
    Icon: ArrowPathIcon,
    titulo: 'Digitalización de procesos',
    problema: 'Planillas y registros manuales que consumen días de trabajo.',
    entregable: 'Una plataforma que consolida y procesa tus datos automáticamente.',
    variante: 'blue',
  },
  {
    Icon: CodeBracketIcon,
    titulo: 'Herramientas a medida',
    problema: 'Software genérico que no calza con cómo trabaja tu empresa.',
    entregable: 'Cotizadores, paneles, formularios y automatizaciones hechos a tu medida.',
    variante: 'blue',
  },
  {
    Icon: LeafIcon,
    titulo: 'Huella de carbono y gestión ambiental',
    problema: 'No sabes cuánto impacto genera tu empresa ni por dónde reducirlo.',
    entregable: 'Medición de la huella de carbono y un plan de gestión ambiental.',
    variante: 'green',
  },
  {
    Icon: GlobeAltIcon,
    titulo: 'Desarrollo web',
    problema: 'Necesitas presencia web o una plataforma propia que se ajuste a tu negocio.',
    entregable: 'Sitio o plataforma web responsive y con SEO, en React o WordPress según lo que necesites.',
    variante: 'blue',
  },
];

const pasos = [
  {
    numero: '1',
    Icon: ChatBubbleLeftEllipsisIcon,
    titulo: 'Conversamos',
    texto: 'Me cuentas cómo trabajas hoy y qué te está costando tiempo.',
  },
  {
    numero: '2',
    Icon: ClipboardDocumentCheckIcon,
    titulo: 'Definimos qué resolver',
    texto: 'Acotamos el alcance y acordamos qué se entrega y cuándo.',
  },
  {
    numero: '3',
    Icon: WrenchScrewdriverIcon,
    titulo: 'Desarrollo por etapas',
    texto: 'Construyo en partes y te muestro avances para ajustar a tiempo.',
  },
  {
    numero: '4',
    Icon: HandThumbUpIcon,
    titulo: 'Entrega y acompañamiento',
    texto: 'Te entrego la solución funcionando y te acompaño en el uso.',
  },
];

const faqs = [
  {
    pregunta: '¿Necesito saber de tecnología?',
    respuesta: 'No. Te explico todo en palabras simples y la solución queda lista para usar.',
  },
  {
    pregunta: '¿Cuánto demora un proyecto?',
    respuesta: 'Depende del alcance. Una herramienta acotada puede estar en semanas, y los plazos los dejamos claros en la propuesta.',
  },
  {
    pregunta: '¿Qué pasa con mis datos?',
    respuesta: 'Son tuyos. Definimos juntos dónde se guardan y quién tiene acceso.',
  },
  {
    pregunta: '¿Hay soporte después de la entrega?',
    respuesta: 'Sí. Te acompaño en el uso y los ajustes que surjan, y lo acordamos desde el inicio.',
  },
  {
    pregunta: '¿Cómo se cobra?',
    respuesta: 'Cada proyecto se cotiza según su alcance, después de entender tu caso. Puedes partir con el diagnóstico inicial.',
  },
  {
    pregunta: '¿Trabajas con empresas fuera de Temuco?',
    respuesta: 'Sí, trabajo con clientes de todo Chile de forma remota.',
  },
];

const borderColor = { blue: 'var(--brand)', green: 'var(--forest)' };
const iconBg     = { blue: 'var(--icon-bg-blue)', green: 'var(--icon-bg-green)' };
const iconColor  = { blue: 'var(--brand)', green: 'var(--forest)' };

function Servicios() {
  return (
    <>
      <Helmet>
        <title>Servicios | Walter Noack, digitalización e innovación para PyMEs</title>
        <meta name="description" content="Digitalización de procesos, herramientas a medida, huella de carbono y desarrollo web para PyMEs. Walter Noack, Temuco, Chile." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(({ pregunta, respuesta }) => ({
            "@type": "Question",
            "name": pregunta,
            "acceptedAnswer": { "@type": "Answer", "text": respuesta },
          })),
        })}</script>
      </Helmet>

      <div>

        {/* Header */}
        <section className="py-10" style={{ background: 'var(--gradient-night)' }}>
          <div className="container-site">
            <Breadcrumb pages={[{ label: 'Servicios' }]} />
            <h1 className="text-4xl font-bold text-white mb-4">Servicios</h1>
            <p className="text-lg max-w-[640px]" style={{ color: 'var(--text-light)' }}>
              Ingeniero ambiental y desarrollador de soluciones tecnológicas. Digitalizo procesos y construyo herramientas a medida.
            </p>
          </div>
        </section>

        {/* Servicios */}
        <section className="py-[72px] fade" style={{ background: 'var(--paper)' }}>
          <div className="container-site">
            <div className="grid md:grid-cols-2 gap-6">
              {servicios.map(({ Icon, titulo, problema, entregable, variante }) => (
                <div
                  key={titulo}
                  className="card-base card-hover"
                  style={{ borderTop: `4px solid ${borderColor[variante]}`, padding: '32px' }}
                >
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-5" style={{ background: iconBg[variante] }}>
                    <Icon className="w-6 h-6" style={{ color: iconColor[variante] }} />
                  </div>
                  <h2 className="font-bold mb-4" style={{ fontSize: '22px', color: 'var(--text-primary)' }}>
                    {titulo}
                  </h2>
                  <p className="text-sm mb-2" style={{ color: 'var(--text-primary)' }}>
                    <span className="font-bold">Problema.</span> {problema}
                  </p>
                  <p className="text-sm" style={{ color: 'var(--text-primary)' }}>
                    <span className="font-bold">Entregable.</span> {entregable}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cómo trabajo */}
        <section className="py-[72px] bg-white fade">
          <div className="container-site">
            <h2 className="font-bold mb-3" style={{ fontSize: '32px', color: 'var(--text-primary)' }}>
              Cómo trabajo
            </h2>
            <p className="mb-10" style={{ fontSize: '17px', color: 'var(--text-secondary)' }}>
              Un proceso simple, con avances que puedes ver en cada etapa.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {pasos.map(({ numero, titulo, texto }) => (
                <div key={numero} className="card-base" style={{ padding: '28px' }}>
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-5 font-bold text-white text-sm" style={{ background: 'var(--brand)' }}>
                    {numero}
                  </div>
                  <h3 className="font-bold mb-2" style={{ fontSize: '20px', color: 'var(--text-primary)' }}>
                    {titulo}
                  </h3>
                  <p style={{ fontSize: '16px', color: 'var(--text-secondary)' }}>{texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cómo se define el valor + diagnóstico */}
        <section className="py-[72px] fade" style={{ background: 'var(--paper)' }}>
          <div className="container-site">
            <h2 className="font-bold mb-4" style={{ fontSize: '32px', color: 'var(--text-primary)' }}>
              Cómo se define el valor
            </h2>
            <p className="mb-10 max-w-[760px]" style={{ fontSize: '18px', color: 'var(--text-primary)' }}>
              Cada proyecto se cotiza según su alcance, después de entender tu caso. Si quieres partir con algo acotado y de costo conocido, el diagnóstico es la puerta de entrada.
            </p>
            {/* Bloque diagnóstico */}
            <div
              className="rounded-lg flex flex-col sm:flex-row items-start sm:items-center gap-6"
              style={{ background: 'var(--icon-bg-blue)', border: '1px solid #C9D6F5', padding: '40px' }}
            >
              <div className="w-14 h-14 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'var(--brand)' }}>
                <MagnifyingGlassIcon className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold mb-2" style={{ fontSize: '24px', color: 'var(--text-primary)' }}>
                  Punto de partida para PyMEs
                </h3>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  Una sesión de 45 minutos para ver qué procesos conviene digitalizar y por dónde partir.
                </p>
              </div>
              <Link to="/diagnostico" className="btn-primary text-sm whitespace-nowrap shrink-0">
                Conocer el diagnóstico
              </Link>
            </div>
          </div>
        </section>

        {/* Preguntas frecuentes */}
        <section className="py-[72px] bg-white fade">
          <div className="container-site">
            <h2 className="font-bold mb-10" style={{ fontSize: '32px', color: 'var(--text-primary)' }}>
              Preguntas frecuentes
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {faqs.map(({ pregunta, respuesta }) => (
                <div key={pregunta} className="card-base" style={{ padding: '28px' }}>
                  <h3 className="font-bold mb-2" style={{ fontSize: '19px', color: 'var(--text-primary)' }}>
                    {pregunta}
                  </h3>
                  <p style={{ fontSize: '16px', color: 'var(--text-secondary)' }}>{respuesta}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 fade" style={{ background: 'var(--gradient-brand)' }}>
          <div className="container-site text-center">
            <h2 className="font-bold text-white mb-3" style={{ fontSize: '32px' }}>
              ¿Tienes un proyecto en mente?
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

export default Servicios;

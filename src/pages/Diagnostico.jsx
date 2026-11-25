import { useState, useEffect, useRef, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const gtag = (...args) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag(...args);
  }
};

const PAIN_SLIDES = [
  {
    num: '01',
    tag: 'Cotizaciones',
    title: 'Propuestas Frankenstein',
    body: 'Armas propuestas copiando y pegando retazos de proyectos viejos, cruzando los dedos para no haber arrastrado nombres ajenos o tarifas desactualizadas.',
    impact: 'Impacto: Pérdida de reputación y margen',
  },
  {
    num: '02',
    tag: 'Finanzas',
    title: 'Costeo a ciegas',
    body: 'Calculas costos en Word o de memoria según la intuición del momento, asumiendo márgenes que rara vez se auditan contra los desembolsos reales.',
    impact: 'Impacto: Fuga invisible de rentabilidad',
  },
  {
    num: '03',
    tag: 'Comercial',
    title: 'El cementerio de Excel',
    body: 'El pipeline de clientes vive en hojas de cálculo pesadas que nadie actualiza a tiempo y que generan fricción constante y desconfianza en el equipo.',
    impact: 'Impacto: Oportunidades olvidadas en frío',
  },
  {
    num: '04',
    tag: 'Operación',
    title: 'Gestión por WhatsApp',
    body: 'Coordinas clientes y personal de campo en chats informales; acuerdos vitales, entregables y minutas se pierden entre capturas y audios infinitos.',
    impact: 'Impacto: Desorden operativo y retrabajo',
  },
  {
    num: '05',
    tag: 'Control',
    title: 'Incertidumbre de fin de mes',
    body: 'Al cierre de mes no sabes con nitidez cuánto se gastó, qué facturas siguen pendientes ni cuál fue el margen neto hasta que ya es demasiado tarde.',
    impact: 'Impacto: Toma de decisiones a ciegas',
  },
  {
    num: '06',
    tag: 'Legal & Admin',
    title: 'Contratos repetitivos',
    body: 'Cada nuevo acuerdo de prestación es una copia manual del anterior, requiriendo revisiones minuciosas que restan tiempo de alto valor comercial.',
    impact: 'Impacto: Cuello de botella en el cierre',
  },
  {
    num: '07',
    tag: 'Gestión ambiental',
    title: 'Carpeta fantasma',
    body: 'Llevas el control de tus obligaciones ambientales en una carpeta de correos o en papel; las resoluciones y compromisos normativos quedan dispersos sin trazabilidad ni alertas preventivas.',
    impact: 'Impacto: Multas y riesgo de incumplimiento legal',
  },
];

const PROCESS_STEPS = [
  { num: '01', tag: '45 min', title: 'Levantamiento', body: 'Mapeamos tu operación completa en una sesión de 45 minutos.', footer: 'Duración: 45 min' },
  { num: '02', tag: 'Ágil', title: 'Antecedentes', body: 'Revisamos la información clave de tu operación, sin preparación especial previa.', footer: 'Cero carga extra' },
  { num: '03', tag: 'Técnico', title: 'Elaboración', body: 'Documento estructurado con el problema real, alcance y propuesta de arquitectura.', footer: 'Entregable escrito' },
  { num: '04', tag: 'Transparente', title: 'Presentación', body: 'Propuesta clara y accionable. Tú decides el rumbo con números transparentes.', footer: 'Claridad total' },
  { num: '05', tag: '100% abonable', title: 'Decisión libre', body: 'Si continúas, el costo del diagnóstico se descuenta íntegramente. Si no, el diagnóstico queda para ti.', footer: 'Sin letra chica', highlight: true },
];

const CALENDLY = 'https://calendly.com/mellamowalter/diagnostico';

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Diagnóstico Inicial para PyMEs',
  provider: {
    '@type': 'Person',
    name: 'Walter Noack',
    url: 'https://www.mellamowalter.cl',
    jobTitle: 'Consultor en Digitalización e Innovación',
    email: 'hola@wnoack.cl',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Temuco',
      addressCountry: 'CL',
    },
  },
  description: 'Sesión de trabajo de 45 minutos para identificar la causa raíz de problemas operacionales en PyMEs. Incluye documento con problema real, alcance y propuesta de solución.',
  areaServed: 'Chile',
  offers: {
    '@type': 'Offer',
    price: '30000',
    priceCurrency: 'CLP',
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: '0.75',
      priceCurrency: 'UF',
    },
  },
  serviceType: 'Consultoría en Digitalización y Tecnología',
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué incluye el diagnóstico inicial?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Una sesión de levantamiento de 45 minutos y un documento escrito con la causa raíz del problema, el alcance de la solución y una propuesta de arquitectura.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto cuesta el diagnóstico?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '0,75 UF + IVA (aproximadamente $30.000). Se descuenta íntegramente si continúas con la implementación.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Necesito preparar algo antes de la sesión?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. La sesión no requiere preparación especial de tu parte.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Walter Noack trabaja fuera de Temuco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Atención presencial en Temuco y remota en todo Chile.',
      },
    },
  ],
};

function PainCard({ slide }) {
  return (
    <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 flex flex-col justify-between p-7 rounded-xl border border-border-line bg-sand/40 hover:border-ultramarine/40 transition-all">
      <div>
        <div className="flex items-center justify-between mb-6">
          <span className="font-diag-mono text-xs font-bold text-ultramarine bg-white border border-border-line px-2.5 py-1 rounded">{slide.num}</span>
          <span className="font-diag-mono text-[10px] text-ink-muted tracking-wider">{slide.tag}</span>
        </div>
        <h3 className="text-ink font-bold text-lg mb-3">{slide.title}</h3>
        <p className="text-ink-muted text-sm leading-relaxed">{slide.body}</p>
      </div>
      <div className="mt-8 pt-4 border-t border-border-line/70 text-xs font-diag-mono text-ultramarine font-medium">{slide.impact}</div>
    </div>
  );
}

function PainCarousel() {
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);

  const slidesPerView = useCallback(() => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  }, []);

  const maxIndex = PAIN_SLIDES.length - slidesPerView();

  const clamp = (i) => Math.max(0, Math.min(i, maxIndex));

  useEffect(() => {
    const handleResize = () => setIndex((i) => clamp(i));
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || !track.children[0]) return;
    const slideWidth = track.children[0].offsetWidth + 24;
    track.style.transform = `translateX(-${index * slideWidth}px)`;
  }, [index]);

  const go = (i) => setIndex(clamp(i));

  const label = `0${index + 1} / 07`;

  return (
    <section className="py-24 bg-white border-b border-border-line">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <p className="font-diag-mono text-xs tracking-wide text-ultramarine font-semibold mb-3">7 situaciones que probablemente conoces</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink max-w-2xl">
              Si alguna de estas fricciones te resulta familiar, hay una causa raíz clara por resolver.
            </h2>
          </div>
          <div className="flex items-center gap-3 self-start md:self-end shrink-0">
            <button
              aria-label="Anterior"
              onClick={() => go(index - 1)}
              className="w-11 h-11 rounded-full border border-border-line hover:border-ultramarine text-ink hover:text-ultramarine flex items-center justify-center transition-colors bg-sand/30 hover:bg-white text-lg"
            >←</button>
            <button
              aria-label="Siguiente"
              onClick={() => go(index + 1)}
              className="w-11 h-11 rounded-full border border-border-line hover:border-ultramarine text-ink hover:text-ultramarine flex items-center justify-center transition-colors bg-sand/30 hover:bg-white text-lg"
            >→</button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div
            ref={trackRef}
            className="flex transition-transform duration-500 ease-out gap-6"
          >
            {PAIN_SLIDES.map((slide) => (
              <PainCard key={slide.num} slide={slide} />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mt-8">
          {PAIN_SLIDES.map((_, i) => (
            <button
              key={i}
              aria-label={`Página ${i + 1}`}
              onClick={() => go(i)}
              className={`h-1.5 rounded-full transition-all ${i === index ? 'w-8 bg-ultramarine' : 'w-2 bg-border-line'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Diagnostico() {
  const location = useLocation();
  const casoRealRef = useRef(null);
  const scrollDepthFired = useRef({ '50%': false, '90%': false });

  // Pageview: dispara en cada montaje/cambio de ruta
  useEffect(() => {
    gtag('event', 'page_view', {
      page_path: location.pathname,
      page_title: 'Diagnóstico Inicial para PyMEs | Walter Noack',
    });
  }, [location.pathname]);

  // Scroll depth: 50% y 90%
  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY + window.innerHeight;
      const total = document.documentElement.scrollHeight;
      const pct = scrolled / total;
      if (!scrollDepthFired.current['50%'] && pct >= 0.5) {
        scrollDepthFired.current['50%'] = true;
        gtag('event', 'scroll_depth', { page: '/diagnostico', depth: '50%' });
      }
      if (!scrollDepthFired.current['90%'] && pct >= 0.9) {
        scrollDepthFired.current['90%'] = true;
        gtag('event', 'scroll_depth', { page: '/diagnostico', depth: '90%' });
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Vista sección caso real (IntersectionObserver)
  useEffect(() => {
    const el = casoRealRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gtag('event', 'view_caso_real', { page: '/diagnostico' });
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const trackAgendar = (button_location) => {
    gtag('event', 'click_agendar', { page: '/diagnostico', button_location });
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'Lead', { content_name: 'diagnostico', button_location });
    }
  };

  return (
    <main className="bg-sand text-ink font-diag-sans antialiased selection:bg-ultramarine selection:text-white">
      <Helmet>
        <title>Diagnóstico Inicial para PyMEs | Walter Noack</title>
        <meta name="description" content="Sesión de trabajo de 45 minutos donde identificamos qué está fallando en tu operación y te entrego un documento con la causa raíz y una propuesta concreta de solución. Presencial en Temuco, remoto en todo Chile." />
        <meta name="keywords" content="consultor digitalización pymes chile, diagnóstico operacional, consultor tecnología temuco, digitalización procesos, consultor ambiental tecnológico" />
        <link rel="canonical" href="https://www.mellamowalter.cl/diagnostico" />
        <meta property="og:title" content="Diagnóstico Inicial para PyMEs | Walter Noack" />
        <meta property="og:description" content="Identifica qué está fallando en tu operación. Sesión de 45 min, entregable escrito, sin compromiso de continuidad." />
        <meta property="og:url" content="https://www.mellamowalter.cl/diagnostico" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_CL" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Diagnóstico Inicial para PyMEs | Walter Noack" />
        <meta name="twitter:description" content="Identifica qué está fallando en tu operación. 45 min, entregable escrito, Temuco y todo Chile." />
        <script type="application/ld+json">{JSON.stringify(SERVICE_SCHEMA)}</script>
        <script type="application/ld+json">{JSON.stringify(FAQ_SCHEMA)}</script>
      </Helmet>

      {/* Hero */}
      <section className="py-20 sm:py-28 border-b border-border-line">
        <div className="max-w-5xl mx-auto px-6 flex items-center gap-10">
          <div className="flex-1 min-w-0">
            <div className="inline-flex items-center gap-2 font-diag-mono text-xs text-ultramarine font-semibold bg-ultramarine/5 border border-ultramarine/20 px-3 py-1.5 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-ultramarine" />
              Diagnóstico inicial
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-ink leading-[1.1] mb-8 max-w-3xl">
              Sabes que algo no está funcionando bien, en tu operación.{' '}
              <span className="font-diag-serif italic font-normal text-ultramarine">Todavía no sabes exactamente qué.</span>
            </h1>
            <p className="text-lg sm:text-xl text-ink-muted leading-relaxed max-w-2xl mb-10 font-normal">
              El diagnóstico inicial es una sesión de trabajo donde mapeamos tu operación, identificamos el problema real y te entrego un documento con la causa raíz, el alcance y una propuesta concreta de solución. Sin tecnicismos. Sin compromiso de continuidad.
            </p>
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center bg-ultramarine hover:bg-blue-700 text-white font-bold text-sm px-8 py-4 rounded transition shadow-sm"
              onClick={() => trackAgendar('hero')}
            >
              Agenda tu diagnóstico inicial
            </a>
          </div>
          {/* Dot grid — desktop only */}
          <div className="hidden lg:flex shrink-0 w-[280px] items-center justify-center" aria-hidden="true">
            <svg width="232" height="174" viewBox="0 0 232 174" fill="none" xmlns="http://www.w3.org/2000/svg">
              {Array.from({ length: 8 }, (_, col) =>
                Array.from({ length: 6 }, (_, row) => {
                  const x = col * 32 + 4;
                  const y = row * 32 + 4;
                  const highlighted = (col === 2 && row === 1) || (col === 5 && row === 3) || (col === 3 && row === 4) || (col === 6 && row === 1);
                  return (
                    <circle
                      key={`${col}-${row}`}
                      cx={x}
                      cy={y}
                      r="4"
                      fill="#1B4FC4"
                      opacity={highlighted ? 0.6 : 0.15}
                    />
                  );
                })
              )}
            </svg>
          </div>
        </div>
      </section>

      {/* Dolores carousel */}
      <PainCarousel />

      {/* Sobre Walter */}
      <section className="py-24 border-b border-border-line" style={{ background: '#0d1b2a', color: '#ffffff' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center">
            <div className="md:col-span-5">
              <div className="relative">
                <div className="overflow-hidden rounded-2xl border border-white/20 bg-white/5 p-2">
                  <img
                    alt="Walter Noack — Ingeniero Ambiental y Desarrollador de Software"
                    className="w-full h-auto object-cover rounded-xl grayscale-[15%] hover:grayscale-0 transition-all duration-300 aspect-[3/4]"
                    src="/assets/foto-diagnostico.webp"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between px-1">
                  <div>
                    <p className="font-bold text-xl tracking-tight" style={{ color: '#ffffff' }}>Walter Noack<span className="font-diag-mono" style={{ color: '#1B4FC4' }}>.</span></p>
                    <p className="text-xs font-diag-mono" style={{ color: 'rgba(255,255,255,0.7)' }}>Ingeniero Ambiental &amp; Desarrollador de Software</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-7 space-y-6">
              <div>
                <p className="font-diag-mono text-xs tracking-wide font-semibold mb-2" style={{ color: '#1B4FC4' }}>Perfil profesional</p>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight" style={{ color: '#ffffff' }}>
                  Diagnóstico técnico y ejecución directa de código.<br />
                  <span className="font-diag-serif italic font-normal" style={{ color: '#1B4FC4' }}>Una sola persona responsable.</span>
                </h2>
              </div>
              <div className="space-y-5 text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
                <p>Soy ingeniero ambiental, magíster en gestión integrada y desarrollador de software. Trabajo con pymes que tienen problemas de gestión operacional o ambiental, y los resuelvo con tecnología.</p>
                <blockquote className="text-xl font-diag-serif italic border-l-2 pl-6 py-1 my-6 rounded-r-lg" style={{ color: '#ffffff', borderColor: '#1B4FC4', background: 'rgba(255,255,255,0.05)' }}>
                  Lo ambiental es el contexto. La tecnología es la solución.
                </blockquote>
                <p>No subcontrato ninguna de las dos partes. Entiendo el problema desde adentro y construyo la solución yo mismo.</p>
              </div>
              <div className="pt-4 flex flex-wrap gap-3 font-diag-mono text-xs">
                <span className="border px-3 py-1.5 rounded" style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#ffffff' }}>PyMEs</span>
                <span className="border px-3 py-1.5 rounded" style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#ffffff' }}>Levantamiento 1 a 1</span>
                <span className="border px-3 py-1.5 rounded font-medium" style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#ffffff' }}>Temuco · Todo Chile</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Un ejemplo concreto */}
      <section ref={casoRealRef} className="py-24 bg-white border-b border-border-line">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-10">
            <p className="font-diag-mono text-xs tracking-wide text-ultramarine font-semibold mb-2">Caso real</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink">De planillas interminables a datos en minutos</h2>
          </div>
          <article className="bg-white border border-border-line rounded-xl overflow-hidden flex flex-col-reverse md:flex-row">
            {/* Col izquierda */}
            <div className="flex-[3] p-8 sm:p-12">
              <p className="font-diag-mono text-xs text-ink-muted mb-6">Empresa de servicios, Chile</p>
              <p className="text-ink-muted text-base leading-relaxed mb-4">
                Cada mes procesaban miles de filas en planillas para contabilizar y clasificar sus residuos. El proceso tomaba días, a veces semanas.
              </p>
              <p className="text-ink-muted text-base leading-relaxed">
                Se construyó una plataforma que recibe la misma planilla de siempre y genera automáticamente todos los datos consolidados.
              </p>
            </div>
            {/* Col derecha — azul */}
            <div
              className="flex-[2] flex flex-col items-center justify-center text-center p-10 rounded-t-xl md:rounded-t-none md:rounded-r-xl"
              style={{ background: '#1B4FC4' }}
            >
              <div style={{ fontSize: '80px', fontWeight: 'bold', color: '#ffffff', lineHeight: 1 }}>-95%</div>
              <div className="mt-3 text-base" style={{ color: '#ffffff' }}>en tiempo de proceso</div>
              <div className="mt-2 text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>De días a minutos.</div>
            </div>
          </article>
        </div>
      </section>

      {/* Proceso */}
      <section className="py-24 bg-white border-b border-border-line">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-xl mb-14">
            <p className="font-diag-mono text-xs tracking-wide text-ultramarine font-semibold mb-2">Metodología paso a paso</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink">Cómo funciona el diagnóstico</h2>
            <p className="text-ink-muted text-sm mt-2">Paso a paso, desde la reunión inicial hasta la propuesta final sin ataduras.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.num}
                className={`rounded-xl p-5 flex flex-col justify-between shadow-sm transition-colors ${
                  step.highlight
                    ? 'bg-ultramarine/[0.03] border border-ultramarine/40 hover:border-ultramarine'
                    : 'bg-white border border-border-line hover:border-ultramarine/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-diag-mono text-sm font-bold text-ultramarine">{step.num}</span>
                    <span className={`font-diag-mono text-[9px] font-semibold px-2 py-0.5 rounded tracking-wider ${step.highlight ? 'text-ultramarine bg-ultramarine/10' : 'text-ink-muted bg-sand'}`}>
                      {step.tag}
                    </span>
                  </div>
                  <h3 className="font-bold text-ink text-base mb-2">{step.title}</h3>
                  <p className="text-ink-muted text-xs leading-relaxed">{step.body}</p>
                </div>
                <div className={`mt-6 pt-3 border-t font-diag-mono text-[10px] tracking-wider ${step.highlight ? 'border-ultramarine/20 font-semibold text-ultramarine' : 'border-border-line/60 text-ink-muted'}`}>
                  {step.footer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Precio */}
      <section className="py-24" style={{ background: '#0d1b2a' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white border border-border-line rounded-xl p-8 sm:p-14">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
              <div className="md:col-span-7">
                <span className="font-diag-mono text-xs font-semibold text-ultramarine tracking-wide block mb-2">Inversión clara</span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink mb-2">Simple y sin letra chica</h2>
                <p className="text-sm font-medium text-ultramarine mb-4">Poco riesgo para conocernos</p>
                <p className="text-ink-muted text-base leading-relaxed mb-6">Una tarifa plana sin sorpresas para que conozcas mi forma de trabajar y tomes decisiones con datos objetivos sobre la mesa.</p>
                <div className="border-l-2 border-ultramarine pl-4 space-y-2 text-sm text-ink font-medium">
                  <p>• Pago previo a la reunión de levantamiento</p>
                  <p>• Descontable si continúas con la implementación</p>
                  <p>• Sin compromiso de continuidad</p>
                </div>
              </div>
              <div className="md:col-span-5 bg-sand p-8 rounded-lg text-center border border-border-line">
                <div className="font-diag-serif italic text-ink-muted text-sm mb-1">Tarifa única</div>
                <div className="text-4xl font-extrabold font-diag-mono text-ultramarine mb-1 whitespace-nowrap">
                  0,75 UF <span className="text-xl font-semibold">+ IVA</span>
                </div>
                <div className="text-xs font-diag-mono text-ink-muted mb-6">~$30.000 + IVA al momento de agendar</div>
                <a
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3.5 bg-ultramarine hover:bg-blue-700 text-white font-medium text-sm rounded transition"
                  onClick={() => trackAgendar('precio')}
                >
                  Agendar ahora
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-ink text-white" id="agendar">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">¿Quieres saber qué está fallando en tu operación?</h2>
          <p className="text-zinc-400 text-base sm:text-lg mb-10 max-w-xl mx-auto leading-relaxed">Agenda la reunión de levantamiento. El proceso parte ahí.</p>
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-ink hover:bg-sand font-semibold text-sm px-8 py-4 rounded transition"
          >
            Agendar diagnóstico inicial
          </a>
          <div className="mt-8 text-xs font-diag-mono text-zinc-500">
            <a href="mailto:hola@wnoack.cl" className="hover:text-white transition-colors underline">hola@wnoack.cl</a>
            {' '}· Atención directa sin intermediarios
          </div>
        </div>
      </section>
    </main>
  );
}

export default Diagnostico;

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const links = [
  { to: '/',           label: 'Inicio' },
  { to: '/sobre-mi',   label: 'Sobre mí' },
  { to: '/servicios',  label: 'Servicios' },
  { to: '/portafolio', label: 'Portafolio' },
  { to: '/talleres',   label: 'Talleres' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);
  const { pathname } = useLocation();

  return (
    <nav style={{ background: 'var(--night)' }} className="sticky top-0 z-50 relative">
      <div className="container-site">
        <div className="flex justify-between items-center" style={{ height: '72px' }}>

          {/* Logo */}
          <Link to="/" onClick={close}>
            <img src="/logoBlanco.png" alt="mellamowalter.cl" className="h-10 w-auto" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(({ to, label }) => {
              const active = pathname === to || (to !== '/' && pathname.startsWith(to));
              return (
                <Link
                  key={to}
                  to={to}
                  className="text-sm font-medium transition-colors hover:text-white"
                  style={{
                    color: active ? '#fff' : 'var(--text-light)',
                    borderBottom: active ? '2px solid var(--brand)' : '2px solid transparent',
                    paddingBottom: '2px',
                  }}
                >
                  {label}
                </Link>
              );
            })}
            <Link to="/contacto" className="btn-dark-primary text-sm ml-2">
              Conversemos
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
            aria-label="Abrir menu"
            style={{ color: 'var(--text-light)' }}
          >
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen
                ? <path d="M6 18L18 6M6 6l12 12" />
                : <path d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu — flota sobre el contenido */}
      {isOpen && (
        <div
          className="md:hidden absolute left-0 right-0 z-50 border-t shadow-lg"
          style={{ top: '100%', background: 'var(--night)', borderColor: 'rgba(255,255,255,0.08)' }}
        >
          <div className="container-site py-4">
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={close}
                className="block py-3 px-2 text-sm font-medium transition-colors hover:text-white"
                style={{ color: 'var(--text-light)' }}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/contacto"
              onClick={close}
              className="btn-dark-primary text-sm mt-3 block text-center"
            >
              Conversemos
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

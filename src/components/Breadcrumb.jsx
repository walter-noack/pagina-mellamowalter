import { Link } from 'react-router-dom';

function Breadcrumb({ pages }) {
  return (
    <nav aria-label="breadcrumb" className="mb-4">
      <ol className="flex items-center gap-1 text-sm flex-wrap">
        <li>
          <Link
            to="/"
            className="transition-colors hover:text-white"
            style={{ color: 'var(--blue-light)' }}
          >
            Inicio
          </Link>
        </li>
        {pages.map(({ label, to }) => (
          <li key={label} className="flex items-center gap-1">
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>/</span>
            {to ? (
              <Link
                to={to}
                className="transition-colors hover:text-white"
                style={{ color: 'var(--blue-light)' }}
              >
                {label}
              </Link>
            ) : (
              <span style={{ color: 'rgba(255,255,255,0.7)' }}>{label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default Breadcrumb;

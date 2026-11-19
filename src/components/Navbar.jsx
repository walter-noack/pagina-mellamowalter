import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link to="/" onClick={closeMenu}>
            <img src="/logoWnew.png" alt="mellamowalter.cl" className="h-10 w-auto" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition">Inicio</Link>
            <Link to="/sobre-mi" className="text-gray-700 hover:text-blue-600 transition">Sobre Mí</Link>
            <Link to="/servicios" className="text-gray-700 hover:text-blue-600 transition">Servicios</Link>
            <Link to="/blog" className="text-gray-700 hover:text-blue-600 transition">Blog</Link>
            <Link to="/contacto" className="text-gray-700 hover:text-blue-600 transition">Contacto</Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen
                ? <path d="M6 18L18 6M6 6l12 12" />
                : <path d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>

        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <Link to="/" onClick={closeMenu} className="block py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition px-4">Inicio</Link>
            <Link to="/sobre-mi" onClick={closeMenu} className="block py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition px-4">Sobre Mí</Link>
            <Link to="/servicios" onClick={closeMenu} className="block py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition px-4">Servicios</Link>
            <Link to="/blog" onClick={closeMenu} className="block py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition px-4">Blog</Link>
            <Link to="/contacto" onClick={closeMenu} className="block py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition px-4">Contacto</Link>
          </div>
        )}

      </div>
    </nav>
  );
}

export default Navbar;

import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import SobreMi from './pages/SobreMi';
import Servicios from './pages/Servicios';
import Blog from './pages/Blog';
import Contacto from './pages/Contacto';
import BlogPost from './pages/BlogPost';
import LandingDashboardResiduos from './pages/LandingDashboardResiduos';
import LandingChecklist from './pages/LandingChecklist';
import LandingGuiaDigitalizacion from './pages/LandingGuiaDigitalizacion';
import LandingPromptsIA from './pages/LandingPromptsIA';
import Diagnostico from './pages/Diagnostico';
import Talleres from './pages/Talleres';
import Portafolio from './pages/Portafolio';
import { AdminAuthProvider } from './context/AdminAuthContext';
import AdminLogin from './pages/admin/AdminLogin';
import AdminPostsList from './pages/admin/AdminPostsList';
import AdminPostEditor from './pages/admin/AdminPostEditor';
import RequireAdminAuth from './pages/admin/RequireAdminAuth';

function GATracker() {
  const location = useLocation();
  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', { page_path: location.pathname + location.search });
    }
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'PageView');
    }
  }, [location]);
  return null;
}

function App() {
  return (
    <Router>
      <GATracker />
      <ScrollToTop />
      <AdminAuthProvider>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre-mi" element={<SobreMi />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/dashboard-residuos" element={<LandingDashboardResiduos />} />
            <Route path="/checklist" element={<LandingChecklist />} />
            <Route path="/guia-digitalizacion" element={<LandingGuiaDigitalizacion />} />
            <Route path="/prompts-ia" element={<LandingPromptsIA />} />
            <Route path="/diagnostico" element={<Diagnostico />} />
            <Route path="/talleres" element={<Talleres />} />
            <Route path="/portafolio" element={<Portafolio />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<RequireAdminAuth><AdminPostsList /></RequireAdminAuth>} />
            <Route path="/admin/posts/:id" element={<RequireAdminAuth><AdminPostEditor /></RequireAdminAuth>} />
          </Routes>
        </main>
        <Footer />
      </div>
      </AdminAuthProvider>
    </Router>
  );
}

export default App;
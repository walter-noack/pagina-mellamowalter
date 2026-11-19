import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { listPublishedPosts } from '../blogApi';

function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    listPublishedPosts()
      .then((data) => setPosts(data.posts || []))
      .catch(() => setError('No se pudo cargar el blog. Intenta de nuevo más tarde.'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-3 text-gray-800">
            Blog
          </h1>
          <p className="text-lg text-center text-gray-700">
            Reflexiones sobre innovación, sostenibilidad y tecnología
          </p>
        </div>
      </section>

      {/* Contenido */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {loading ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">Cargando…</p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">{error}</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">
                Próximamente publicaré contenido aquí.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {posts.map(post => (
                <article
                  key={post.slug}
                  className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm font-semibold text-blue-600">
                        {post.categoria}
                      </span>
                      <span className="text-sm text-gray-500">
                        {post.publishedAt && new Date(post.publishedAt).toLocaleDateString('es-CL', { year: 'numeric', month: 'long' })}
                      </span>
                    </div>

                    <h2 className="text-2xl font-bold mb-3 text-gray-800">
                      {post.titulo}
                    </h2>

                    <p className="text-gray-700 mb-4">
                      {post.resumen}
                    </p>

                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-blue-600 font-semibold hover:text-blue-800 transition"
                    >
                      Leer más →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}

        </div>
      </section>
    </div>
  );
}

export default Blog;

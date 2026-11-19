import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPublishedPost } from '../blogApi';

function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getPublishedPost(slug)
      .then((data) => setPost(data.post))
      .catch(() => setPost(null))
      .finally(() => setLoading(false));
  }, [slug]);

  useEffect(() => {
    if (!post) return;

    const metaDescription = document.querySelector('meta[name="description"]');
    const originalTitle = document.title;
    const originalDescription = metaDescription?.content;

    document.title = `${post.titulo} — Walter Noack`;
    if (metaDescription && post.resumen) {
      metaDescription.content = post.resumen;
    }

    return () => {
      document.title = originalTitle;
      if (metaDescription && originalDescription !== undefined) {
        metaDescription.content = originalDescription;
      }
    };
  }, [post]);

  if (loading) {
    return (
      <div className="bg-white min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-gray-600">Cargando…</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="bg-white min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-3xl font-bold mb-4">Post no encontrado</h1>
          <Link to="/blog" className="text-blue-600 hover:text-blue-800">
            ← Volver al blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
            ← Volver al blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm font-semibold text-blue-600">
              {post.categoria}
            </span>
            <span className="text-sm text-gray-500">
              {post.publishedAt && new Date(post.publishedAt).toLocaleDateString('es-CL', { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            {post.titulo}
          </h1>
        </div>
      </section>

      {/* Contenido */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div
          className="prose prose-lg max-w-none prose-a:text-blue-600 prose-a:font-semibold prose-a:no-underline hover:prose-a:text-blue-800 hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: post.contenidoHtml }}
        />
      </article>
    </div>
  );
}

export default BlogPost;

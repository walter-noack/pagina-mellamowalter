import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { listAllPosts, deletePost } from '../../blogApi';
import { useAdminAuth } from '../../context/AdminAuthContext';

function AdminPostsList() {
  const { logout } = useAdminAuth();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  function reload() {
    setLoading(true);
    listAllPosts()
      .then((data) => setPosts(data.posts || []))
      .catch(() => setPosts([]))
      .finally(() => setLoading(false));
  }

  useEffect(reload, []);

  async function handleDelete(post) {
    if (!window.confirm(`¿Eliminar "${post.titulo}"? Esta acción no se puede deshacer.`)) return;
    await deletePost(post._id);
    reload();
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Posts del blog</h1>
        <div className="flex gap-3">
          <Link to="/admin/posts/nuevo" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
            + Nuevo post
          </Link>
          <button onClick={logout} className="text-gray-600 hover:text-gray-800 font-semibold px-4 py-2">
            Cerrar sesión
          </button>
        </div>
      </div>

      {loading ? (
        <p className="text-gray-500">Cargando…</p>
      ) : posts.length === 0 ? (
        <p className="text-gray-500">Todavía no hay posts.</p>
      ) : (
        <div className="bg-white rounded-lg shadow divide-y divide-gray-100">
          {posts.map((post) => (
            <div key={post._id} className="flex items-center justify-between p-4">
              <div>
                <p className="font-semibold text-gray-800">{post.titulo}</p>
                <p className="text-sm text-gray-500">
                  /{post.slug} · {post.estado === 'published' ? 'Publicado' : 'Borrador'}
                </p>
              </div>
              <div className="flex gap-3">
                <Link to={`/admin/posts/${post._id}`} className="text-blue-600 hover:text-blue-800 font-semibold">
                  Editar
                </Link>
                <button onClick={() => handleDelete(post)} className="text-red-600 hover:text-red-800 font-semibold">
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AdminPostsList;

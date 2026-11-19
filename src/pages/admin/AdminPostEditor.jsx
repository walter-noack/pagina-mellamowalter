import { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { getPost, createPost, updatePost } from '../../blogApi';
import RichTextEditor from '../../components/admin/RichTextEditor';

const EMPTY = { titulo: '', slug: '', categoria: 'General', resumen: '', contenidoHtml: '', portada: '', estado: 'draft' };

function AdminPostEditor() {
  const { id } = useParams();
  const isNew = !id || id === 'nuevo';
  const navigate = useNavigate();

  const [form, setForm] = useState(EMPTY);
  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isNew) return;
    getPost(id).then((data) => setForm(data.post)).finally(() => setLoading(false));
  }, [id, isNew]);

  function set(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function save(estado) {
    setSaving(true);
    setError(null);
    try {
      const payload = { ...form, estado };
      if (isNew) {
        const data = await createPost(payload);
        navigate(`/admin/posts/${data.post._id}`, { replace: true });
      } else {
        await updatePost(id, payload);
      }
      navigate('/admin');
    } catch (err) {
      setError(err.message || 'No se pudo guardar');
    } finally {
      setSaving(false);
    }
  }

  if (loading) return <p className="text-center py-24 text-gray-500">Cargando…</p>;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link to="/admin" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">← Volver al listado</Link>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">{isNew ? 'Nuevo post' : 'Editar post'}</h1>

      {error && <p className="bg-red-50 text-red-700 text-sm rounded p-3 mb-4">{error}</p>}

      <label className="block text-sm font-semibold text-gray-700 mb-1">Título</label>
      <input
        value={form.titulo}
        onChange={(e) => set('titulo', e.target.value)}
        className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4"
      />

      <label className="block text-sm font-semibold text-gray-700 mb-1">Slug (URL)</label>
      <input
        value={form.slug}
        placeholder="se genera automático desde el título si lo dejas vacío"
        onChange={(e) => set('slug', e.target.value)}
        className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4"
      />

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Categoría</label>
          <input value={form.categoria} onChange={(e) => set('categoria', e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Imagen de portada (URL)</label>
          <input value={form.portada || ''} onChange={(e) => set('portada', e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" />
        </div>
      </div>

      <label className="block text-sm font-semibold text-gray-700 mb-1">Resumen</label>
      <textarea
        value={form.resumen || ''}
        onChange={(e) => set('resumen', e.target.value)}
        rows={2}
        className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4"
      />

      <label className="block text-sm font-semibold text-gray-700 mb-1">Contenido</label>
      <div className="mb-6">
        <RichTextEditor value={form.contenidoHtml} onChange={(html) => set('contenidoHtml', html)} />
      </div>

      <div className="flex gap-3">
        <button
          disabled={saving}
          onClick={() => save('draft')}
          className="bg-gray-200 text-gray-800 px-5 py-2 rounded-lg font-semibold hover:bg-gray-300 transition disabled:opacity-50"
        >
          Guardar borrador
        </button>
        <button
          disabled={saving}
          onClick={() => save('published')}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50"
        >
          Publicar
        </button>
      </div>
    </div>
  );
}

export default AdminPostEditor;

import { API_BASE } from './apiBase';

async function request(path, options = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data.error || `Error ${res.status}`);
  }
  return data;
}

// --- Público ---
export const listPublishedPosts = () => request('/api/posts');
export const getPublishedPost = (slug) => request(`/api/posts/${slug}`);

// --- Auth ---
export const login = (email, password) =>
  request('/api/auth/login', { method: 'POST', body: JSON.stringify({ email, password }) });
export const logout = () => request('/api/auth/logout', { method: 'POST' });
export const me = () => request('/api/auth/me');

// --- Admin ---
export const listAllPosts = () => request('/api/admin/posts');
export const getPost = (id) => request(`/api/admin/posts/${id}`);
export const createPost = (payload) =>
  request('/api/admin/posts', { method: 'POST', body: JSON.stringify(payload) });
export const updatePost = (id, payload) =>
  request(`/api/admin/posts/${id}`, { method: 'PUT', body: JSON.stringify(payload) });
export const deletePost = (id) => request(`/api/admin/posts/${id}`, { method: 'DELETE' });

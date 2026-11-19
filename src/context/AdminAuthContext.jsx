import { createContext, useContext, useEffect, useState } from 'react';
import * as blogApi from '../blogApi';

const AdminAuthContext = createContext(null);

export function AdminAuthProvider({ children }) {
  const [user, setUser] = useState(undefined); // undefined = cargando, null = sin sesión

  useEffect(() => {
    blogApi.me().then((data) => setUser(data.user)).catch(() => setUser(null));
  }, []);

  async function login(email, password) {
    const data = await blogApi.login(email, password);
    setUser(data.user);
  }

  async function logout() {
    await blogApi.logout().catch(() => {});
    setUser(null);
  }

  return (
    <AdminAuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth() {
  return useContext(AdminAuthContext);
}

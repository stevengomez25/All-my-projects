import { createContext, useContext, useState, useEffect } from "react";
import { loginUser, registerUser, logoutUser, getMe } from "../api/auth.js";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Auto-load user from cookie on refresh
  useEffect(() => {
    async function loadUser() {
      try {
        const res = await getMe();

        if (res.success) {
          setUser(res.user);
        }
      } catch (err) {
        console.log("User not logged in");
      }

      setLoading(false);
    }

    loadUser();
  }, []);

  // Register
  const register = async (data) => {
    const res = await registerUser(data);

    if (res.success) {
      setUser(res.user);
    }

    return res;
  };

  // Login
  const login = async (data) => {
    const res = await loginUser(data);

    if (res.success) {
      setUser(res.user);
    }

    return res;
  };

  // Logout
  const logout = async () => {
    await logoutUser();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        logout,
        isAuthenticated: !!user
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

import { useState, useEffect, useMemo, useEffectEvent } from "react";
import api from "../utils/api";
import { AuthContext } from "../hooks/useAuth";

export const AuthProvider = ({ children }) => {
  const initialToken = localStorage.getItem("token");

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(initialToken);

  const checkAuth = useEffectEvent(async () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const { data } = await api.get("/auth/me");
        setUser(data.user);
      } catch (error) {
        console.log(error);
        localStorage.removeItem("token");
      }
    }
    setLoading(false);
  });

  useEffect(() => {
    checkAuth();
  }, []);

  const login = async (email, password) => {
    const { data } = await api.post("/auth/login", { email, password });
    localStorage.setItem("token", data.token);
    setUser(data.user);
    return data;
  };

  const signup = async (name, email, password) => {
    console.log("reached in context");

    const { data } = await api.post("/auth/register", {
      name,
      email,
      password,
    });
    localStorage.setItem("token", data.token);
    setUser(data.user);
    return data;
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  const value = useMemo(
    () => ({ user, login, signup, logout, loading }),
    [user, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

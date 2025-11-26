import { useState, useEffect, useMemo } from "react";
import api from "../utils/api";
import { AuthContext } from "../hooks/useAuth";

export const AuthProvider = ({ children }) => {
  const initialToken = localStorage.getItem("token");

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(!!initialToken);

  useEffect(() => {
    if (!initialToken) return;

    let active = true;

    api
      .get("/auth/me")
      .then((res) => active && setUser(res.data.user))
      .catch(() => localStorage.removeItem("token"))
      .finally(() => active && setLoading(false));

    return () => {
      active = false;
    };
  }, [initialToken]);

  const login = async (email, password) => {
    const { data } = await api.post("/auth/login", { email, password });
    localStorage.setItem("token", data.token);
    setUser(data.user);
    return data;
  };

  const signup = async (name, email, password) => {
    console.log("reached in context");
    
    const { data } = await api.post("/auth/register", { name, email, password });
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

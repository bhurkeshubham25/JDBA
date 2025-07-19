import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [playerId, setPlayerId] = useState(localStorage.getItem("playerId") || null);

  const login = (token, playerId) => {
    localStorage.setItem("token", token);
    localStorage.setItem("playerId", playerId);
    setToken(token);
    setPlayerId(playerId);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("playerId");
    setToken(null);
    setPlayerId(null);
  };

  const isAuthenticated = !!token;

  return (
    <AuthContext.Provider value={{ token, playerId, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

import React, { createContext, useState } from "react";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState(
    !!localStorage.getItem("Authorisation")
  );
  const [requestedRoute, setRequestedRoute] = useState("");
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setAuthenticated,
        requestedRoute,
        setRequestedRoute,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

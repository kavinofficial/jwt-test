import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { useNavigate } from "react-router-dom";

export const Logout = () => {
  const navigate = useNavigate();
  const { isAuthenticated, setAuthenticated } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem("Authorisation");
    setAuthenticated(false);
    navigate("/");
  };

  return (
    <div>
      <h2>Logout Page</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;

import React, { useContext, useEffect } from "react";
import { AuthContext } from "./AuthProvider";
import axios from "axios";
import { LoginCredentials } from "../utils/data";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const {
    isAuthenticated,
    setAuthenticated,
    requestedRoute,
    setRequestedRoute,
  } = useContext(AuthContext);
  useEffect(() => {
    if (isAuthenticated) {
      return;
    }
  });
  const handleLogin = async () => {
    const user = LoginCredentials;
    const response = await axios.post("http://localhost:8080/login", user);
    localStorage.setItem("Authorisation", response.data);
    setAuthenticated(true);
    navigate("/" + requestedRoute);
  };
  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login with google</button>
    </div>
  );
}
export default Login;

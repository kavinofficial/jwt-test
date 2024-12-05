import React from "react";

function Login() {
  const handleLogin = () => {
    window.location.href = "http://localhost:8080/login/oauth2/code/google";
  };
  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login with google</button>
    </div>
  );
}
export default Login;

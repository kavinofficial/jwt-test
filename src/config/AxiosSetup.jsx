import axios from "axios";
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();
const isTokenExpired = (token) => {
  try {
    const decoded = JSON.parse(atob(token.split(".")[1]));
    const currentTime = Date.now() / 1000;
    console.log(decoded);
    return decoded.exp < currentTime;
  } catch (error) {
    return true;
  }
};
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("Authorisation");
    if (token) {
      if (isTokenExpired(token)) {
        localStorage.removeItem("Authorisation");
        navigate("/login");
        return Promise.reject("Token expired");
      }
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("Authorisation");
      navigate("/login");
    }
    return Promise.reject(error);
  }
);

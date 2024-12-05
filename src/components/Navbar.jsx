import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/nav.css";
import { AuthContext } from "./AuthProvider";

const Navbar = () => {
  const { requestedRoute, setRequestedRoute } = useContext(AuthContext);
  const handleClick = (e) => {
    const path = e.target.href.split("/");
    if (
      path[path.length - 1] === "login" ||
      path[path.length - 1] === "logout"
    ) {
      return;
    }
    setRequestedRoute(path[path.length - 1]);
  };
  return (
    <nav>
      <li>
        <Link onClick={handleClick} className="innerLink" to="/hello1">
          Hello1
        </Link>
      </li>
      <li>
        <Link onClick={handleClick} className="innerLink" to="/hello2">
          Hello2
        </Link>
      </li>
      <li>
        <Link onClick={handleClick} className="innerLink" to="/users">
          User Info
        </Link>
      </li>
      <li>
        <Link onClick={handleClick} className="innerLink" to="/login">
          Login
        </Link>
      </li>
      <li>
        <Link onClick={handleClick} className="innerLink" to="/logout">
          Logout
        </Link>
      </li>
    </nav>
  );
};

export default Navbar;

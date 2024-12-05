import React from "react";
import { Link } from "react-router-dom";
import Hello1 from "./Hello1";
import Hello2 from "./Hello2";
import Login from "./Login";

const Navbar = () => {
  return (
    <nav>
      <li>
        <Link to="/hello1">Hello1</Link>
      </li>
      <li>
        <Link to="/hello2">Hello2</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </nav>
  );
};

export default Navbar;

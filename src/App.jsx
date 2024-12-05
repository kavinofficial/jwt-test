import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hello1 from "./components/Hello1";
import Hello2 from "./components/Hello2";
import Home from "./components/Home";
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/Navbar";
import Login from "./components/Login";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // For demonstration purposes

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Private Routes */}
        <Route
          path="/hello1"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Hello1 />
            </PrivateRoute>
          }
        />
        <Route
          path="/hello2"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Hello2 />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;

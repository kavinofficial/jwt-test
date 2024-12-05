import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hello1 from "./components/Hello1";
import Hello2 from "./components/Hello2";
import Home from "./components/Home";
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import AuthProvider from "./components/AuthProvider";
import { Logout } from "./components/Logout";
import UserInfo from "./components/UserInfo";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route
            path="/hello1"
            element={
              <PrivateRoute>
                <Hello1 />
              </PrivateRoute>
            }
          />
          <Route
            path="/hello2"
            element={
              <PrivateRoute>
                <Hello2 />
              </PrivateRoute>
            }
          />
          <Route
            path="/users"
            element={
              <PrivateRoute>
                <UserInfo />
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;

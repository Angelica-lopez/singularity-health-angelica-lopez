import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  const isAuthenticated = () => {
    const token = localStorage.getItem("token");
    return !!token;
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          isAuthenticated() ? <Navigate to="/home" /> : <Navigate to="/login" />
        }
      />

      <Route
        path="/login"
        element={isAuthenticated() ? <Navigate to="/home" /> : <Login />}
      />

      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />

      <Route
        path="/location"
        element={
          <ProtectedRoute>
            <Home title="Welcome To Location" content="Location page" />
          </ProtectedRoute>
        }
      />

      <Route
        path="/services"
        element={
          <ProtectedRoute>
            <Home title="Welcome To Services" content="Services page" />
          </ProtectedRoute>
        }
      />

      <Route
        path="/about-us"
        element={
          <ProtectedRoute>
            <Home title="Welcome To About Us" content="About Us page" />
          </ProtectedRoute>
        }
      />

      <Route
        path="/franchise-with-us"
        element={
          <ProtectedRoute>
            <Home
              title="Welcome To Franchise With Us"
              content="Franchise with Us page"
            />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;

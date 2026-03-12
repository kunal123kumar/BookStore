import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("login") === "true";

  useEffect(() => {
    if (!isLoggedIn) {
      toast.error("Please login to access this page!");
    }
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;

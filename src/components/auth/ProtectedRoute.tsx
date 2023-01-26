import {
  Navigate,
} from "react-router-dom";
import useAuth from "./useAuth";
import React from "react";

const ProtectedRoute = ({ children }:any) => {
  const { session, loading } = useAuth();
  if (loading){
      return <div>Loading</div>
  }
  if (!session) {
    return <Navigate to="/home" replace />;
  }
  return children;
};

export default ProtectedRoute;
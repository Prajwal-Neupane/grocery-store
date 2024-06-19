import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const token = localStorage.getItem("token");

  return token && token !== null ? <Outlet /> : <Navigate to={"/login"} />;
};

export default PrivateRoute;

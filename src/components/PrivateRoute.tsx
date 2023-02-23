import React from "react";
import { useSelector } from "react-redux";

import { Navigate, Outlet } from "react-router-dom";
import { IRootState } from "../store/";

export const PrivateRoute = () => {
  const authUser = useSelector((state: IRootState) => state.authUser.auth);

  return authUser ? <Outlet /> : <Navigate to="/" />;
};

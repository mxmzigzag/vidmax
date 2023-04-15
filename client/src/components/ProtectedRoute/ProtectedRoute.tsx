import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";

type Props = {
  isAuthenticated: boolean;
  children: JSX.Element;
};

export const ProtectedRoute = ({
  isAuthenticated,
  children,
}: Props): JSX.Element => {
  const { isAuth } = useContext(AuthContext);

  if (isAuth !== isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};

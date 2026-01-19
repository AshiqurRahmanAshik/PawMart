import React, { useContext, useState } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Providers/AuthProvider";
import { toast } from "react-toastify";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [toastShown, setToastShown] = useState(false);
  const location = useLocation();

  if (loading) {
    return <p className="text-center py-10">Loading...</p>;
  }

  if (!user) {
    if (!toastShown) {
      toast.info("🔐 Login to your account to book a service.");
      setToastShown(true);
    }
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;

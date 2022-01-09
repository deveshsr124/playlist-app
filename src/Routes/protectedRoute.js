import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({ children, token }) {
	const isAuthenticated = token ? true : false;
	return token ? children : <Navigate to="/" />;
}

export default ProtectedRoute;

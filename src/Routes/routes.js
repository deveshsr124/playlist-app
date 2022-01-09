import React, { useEffect } from "react";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from "react-router-dom";
import Login from "../components/login";
import Home from "../components/home/index";
import ProtectedRoute from "./protectedRoute";
import { getTokenFromResponse } from "../components/auth/auth-creds";

const RouteComponent = ({ s, token }) => {
	return (
		<div>
			<Router>
				<Routes>
					<Route exact path="/" element={<Login />} />
					<Route path="/home" element={<Home spotify={s} />} />
				</Routes>
			</Router>
		</div>
	);
};

export default RouteComponent;

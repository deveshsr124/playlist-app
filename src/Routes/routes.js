import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../components/login";
import Home from "../components/home/index";
import ProtectedRoute from "./protectedRoute";
const RouteComponent = ({ token, spotify }) => {
	return (
		<div>
			<Router>
				<Routes>
					<Route exact path="/" element={<Login />} />
					<Route path="/home" element={<Home spotify={spotify} />} />
				</Routes>
			</Router>
		</div>
	);
};

export default RouteComponent;

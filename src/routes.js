import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/login";
const RouteComponent = () => {
	return (
		<div>
			<Router>
				<Routes>
					<Route exact path="/" element={<Login />} />
				</Routes>
			</Router>
		</div>
	);
};

export default RouteComponent;

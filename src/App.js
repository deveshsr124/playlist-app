import React, { useEffect } from "react";
import Home from "./components/home";
import Login from "./components/login";
import { getTokenFromResponse } from "./components/auth/auth-creds";
import { useDataContextValue } from "./context";
import SpotifyWebApi from "spotify-web-api-js";
import RouteComponent from "./Routes/routes";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from "react-router-dom";
import ProtectedRoute from "./Routes/protectedRoute";
const s = new SpotifyWebApi();
const App = () => {
	return (
		<div>
			<RouteComponent s={s} />
		</div>
	);
};

export default App;

import React, { useEffect } from "react";
import Home from "./components/home";
import Login from "./components/login";
import { getTokenFromResponse } from "./components/auth/auth-creds";
import { useDataContextValue } from "./context";
import SpotifyWebApi from "spotify-web-api-js";
import RouteComponent from "./Routes/routes";
const s = new SpotifyWebApi();
const App = () => {
	//  to grab the data from the context state/central state
	const [{}, dispatch] = useDataContextValue();

	useEffect(() => {
		let _token = getTokenFromResponse();
		window.location.hash = "";
		if (_token) {
			//  setting token to be inside the global state

			s.setAccessToken(_token);
			dispatch({
				type: "SET_TOKEN",
				token: _token,
			});
			localStorage.setItem("token", _token);
		}
	}, []);

	return (
		<div>
			{localStorage.getItem("token") ? <Home spotify={s} /> : <Login />}
		</div>
	);
};

export default App;

import React, { useState, useEffect } from "react";

import Route from "./routes";
import Login from "./components/login";
import { getTokenFromResponse } from "./components/auth/auth-creds";

const App = () => {
	const [token, setToken] = useState("");
	useEffect(() => {
		const _token = getTokenFromResponse();
		window.location.hash = "";
		if (_token) {
			setToken(_token);
		}
	}, []);
	console.log(token);
	return <div>{token !== "" ? <h1>logged in</h1> : <Login />}</div>;
};

export default App;

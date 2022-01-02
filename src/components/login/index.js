import React, { useEffect } from "react";
import Logo from "../../assets/logo.png";
import "./login.css";
import { Button } from "@mui/material";
import { accessUrl } from "../auth/auth-creds";
const Login = () => {
	// useEffect(() => {
	// 	getTokenFromResponse();
	// }, []);
	return (
		<div className="app">
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<img src={Logo} alt="spotify-logo" style={{ width: "200px" }} />
				<p style={{ color: "white", fontSize: "20px", fontWeight: "bold" }}>
					Play My Playlist
				</p>
			</div>

			<Button
				variant="contained"
				sx={{
					backgroundColor: "#1db954",
					color: "white",
					fontWeight: "bold",
					borderRadius: "20px",
					width: "220px",
					":hover": {
						bgcolor: "#1db954", // theme.palette.primary.main
						color: "white",
					},
				}}
				onClick={() => (window.location.href = accessUrl)}
			>
				Login With Spotify
			</Button>
		</div>
	);
};

export default Login;

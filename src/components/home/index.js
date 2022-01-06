import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import Body from "../body";
import Sidebar from "../sidebar";
import { Box } from "@mui/material";
import Footer from "../footer";
import { useDataContextValue } from "../../context";
const Home = ({ spotify }) => {
	const [{ playlists, showPlaylist }, dispatch] = useDataContextValue();
	useEffect(() => {
		spotify.setAccessToken(localStorage.getItem("token"));
		spotify.getMe().then((user) => {
			//  dispatching this action to reducer and updating the global state
			dispatch({
				type: "SET_USER",
				user,
			});
		});
		spotify.getUserPlaylists().then((playlist) =>
			dispatch({
				type: "SET_PLAYLISTS",
				playlists: playlist.items,
			})
		);
	}, []);

	return (
		<div>
			<Box sx={{ display: "flex" }}>
				<Sidebar playlists={playlists} dispatch={dispatch} />
				<Body showPlaylist={showPlaylist} />
			</Box>
			<Footer />
		</div>
	);
};

export default Home;

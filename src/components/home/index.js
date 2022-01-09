import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import Body from "../body";
import Sidebar from "../sidebar";
import { Box } from "@mui/material";
import Footer from "../footer";
import { useDataContextValue } from "../../context";
import { getTokenFromResponse } from "../auth/auth-creds";
import axios from "axios";
import spotify from "../spotifyApi";
const Home = ({ spotify }) => {
	const [{ playlists, showPlaylist }, dispatch] = useDataContextValue();

	useEffect(() => {
		const hash = window.location.hash;
		let token = localStorage.getItem("token");

		if (!token && hash) {
			token = hash
				.substring(1)
				.split("&")
				.find((elem) => elem.startsWith("access_token"))
				.split("=")[1];

			window.location.hash = "";
			localStorage.setItem("token", token);
		}
		spotify.setAccessToken(token);
		spotify.getUserPlaylists().then((playlist) =>
			dispatch({
				type: "SET_PLAYLISTS",
				playlists: playlist.items,
			})
		);
		spotify.getPlaylist("37i9dQZEVXbNG2KDcFcKOF").then((playlist) => {
			dispatch({
				type: "SET_NEW_RELEASE",
				payload: playlist,
			});
			spotify.getPlaylistTracks(playlist.id).then((res) =>
				dispatch({
					type: "SET_NEW_RELEASE_TRACKS",
					payload: res.items,
				})
			);
		});
	}, []);

	return (
		<div>
			<Box sx={{ display: "flex" }}>
				<Sidebar playlists={playlists} dispatch={dispatch} />
				<Body showPlaylist={showPlaylist} spotify={spotify} />
			</Box>
			<Footer />
		</div>
	);
};

export default Home;

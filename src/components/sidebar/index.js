import React from "react";
import "./sidebar.css";
import { Typography, Box } from "@mui/material";
const Sidebar = ({ playlists, dispatch }) => {
	return (
		<div className="sidebar">
			<Box
				sx={{
					display: "flex",
					justifyContent: "flex-start",
					alignItems: "center",
					marginTop: "5px",
				}}
			>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<img
						src={
							'https://1000logos.net/wp-content/uploads/2017/08/Spotify-emblem.jpg"'
						}
						alt="spotify-logo"
						style={{ width: "70px" }}
					/>
					<Typography fontSize="20px" color="white">
						Musify
					</Typography>
				</Box>
			</Box>
			<Typography variant="h6" color="white" ml="2rem" mt="2rem">
				PlayLists
			</Typography>
			<Box sx={{ marginTop: "1.5rem" }}>
				{playlists.map((item) => {
					return (
						<Typography
							key={item.id}
							sx={{
								color: "white",
								fontSize: "14px",
								height: "30px",
								marginLeft: "2rem",
								cursor: "pointer",
							}}
							onClick={() =>
								dispatch({
									type: "SELECT_PLAYLIST",
									payload: true,
								})
							}
						>
							{item.name}
						</Typography>
					);
				})}
			</Box>
		</div>
	);
};

export default Sidebar;

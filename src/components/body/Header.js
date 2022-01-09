import { Typography } from "@mui/material";
import React from "react";
import "./body.css";
import { useDataContextValue } from "../../context";
const Header = ({ newRelease }) => {
	return (
		<div>
			<div className="header">
				<img src={newRelease.images[0].url} alt="" />
				<div className="header-text">
					<strong>Playlist</strong>
					<Typography fontSize="50px" mb="10px">
						{newRelease.name}
					</Typography>
					<Typography fontSize="14px">{newRelease.description}</Typography>
				</div>
			</div>
		</div>
	);
};

export default Header;

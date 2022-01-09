import React from "react";
import "./body.css";
import DiscoverWeekly from "./DiscoverWeekly";
import { useDataContextValue } from "../../context";
const Body = ({ showPlaylist, spotify }) => {
	return (
		<div className="body">
			{showPlaylist === true ? (
				<h1>playlist selected</h1>
			) : (
				<DiscoverWeekly spotify={spotify} />
			)}
		</div>
	);
};

export default Body;

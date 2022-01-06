import React from "react";
import "./body.css";

const Body = ({ showPlaylist }) => {
	return (
		<div className="body">
			{showPlaylist === true ? <h1>playlist selected</h1> : <h1>body</h1>}
		</div>
	);
};

export default Body;

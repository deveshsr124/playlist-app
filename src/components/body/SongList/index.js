import React from "react";
import { useDataContextValue } from "../../../context";
import "./songlist.css";
const SongList = ({ track }) => {
	return (
		<div>
			<div className="songRow">
				<img
					className="songRow__album"
					src={track.track.album.images[2].url}
					alt=""
				/>
				<div className="songRow__info">
					<h1>{track.track.name}</h1>
					<p>{track.track.album.name}</p>
				</div>
			</div>
		</div>
	);
};

export default SongList;

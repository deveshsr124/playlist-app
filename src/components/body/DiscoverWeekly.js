import React, { useEffect } from "react";
import Header from "./Header";
import SongList from "./SongList";
import { useDataContextValue } from "../../context";
const DiscoverWeekly = ({ spotify }) => {
	const [{ newRelease, newReleaseTracks }, dispatch] = useDataContextValue();
	console.log(newReleaseTracks);
	return newRelease.length === 0 && newReleaseTracks.length === 0 ? (
		<h1>loading</h1>
	) : (
		<div>
			<Header newRelease={newRelease} />

			{newReleaseTracks.map((item) => {
				return item ? <SongList track={item} /> : "";
			})}
		</div>
	);
};

export default DiscoverWeekly;

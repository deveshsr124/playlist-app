export const intialState = {
	user: null,
	playlists: [],
	showPlaylist: false,
	newRelease: [],
	newReleaseTracks: [],
};

const reducer = (state, action) => {
	switch (action.type) {
		case "SET_USER":
			return {
				...state,
				user: action.user,
			};
		case "SET_PLAYLISTS":
			return {
				...state,
				playlists: action.playlists,
			};
		case "SELECT_PLAYLIST":
			return {
				...state,
				showPlaylist: action.payload,
			};
		case "SET_NEW_RELEASE":
			return {
				...state,
				newRelease: action.payload,
			};
		case "SET_NEW_RELEASE_TRACKS":
			return {
				...state,
				newReleaseTracks: action.payload,
			};
		default:
			return state;
	}
};

export default reducer;

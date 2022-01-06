export const intialState = {
	user: null,
	playlists: [],
	token: null,
	showPlaylist: false,
};

const reducer = (state, action) => {
	switch (action.type) {
		case "SET_TOKEN":
			return {
				...state,
				token: action.token,
			};
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
		default:
			return state;
	}
};

export default reducer;

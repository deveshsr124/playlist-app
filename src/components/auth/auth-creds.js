export const authEndpoint = "https://accounts.spotify.com/authorize";
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = "b339f28b72d541ba810382224b4c3b65";
const redirectUri = "http://localhost:3000/";
const scopes = [
	"user-read-currently-playing",
	"user-read-recently-played",
	"user-read-playback-state",
	"user-top-read",
	"user-modify-playback-state",
];

export const getTokenFromResponse = () => {
	return window.location.hash.substring(1).split("&")[0].split("=")[1];
};

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
	"%20"
)}&response_type=token&show_dialog=true`;

export const authEndpoint = "https://accounts.spotify.com/authorize";
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = "86da65480ecb48248a86e0b68b5e1865";
const redirectUri = "http://localhost:3000/home";
const scopes = [
	"user-read-playback-position",
	"user-read-email",
	"user-library-modify",
	"playlist-modify-public",
	"ugc-image-upload",
	"user-follow-modify",
	"user-modify-playback-state",
	"user-read-recently-played",
	"user-read-private",
	"user-library-read",
	"user-top-read",
	"playlist-modify-private",
	"user-follow-read",
	"user-read-playback-state",
	"user-read-currently-playing",
	"playlist-read-private",
	"playlist-read-collaborative",
];

export const getTokenFromResponse = () => {
	return window.location.hash.substring(1).split("&")[0].split("=")[1];
};

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
	"%20"
)}&response_type=token&show_dialog=true`;

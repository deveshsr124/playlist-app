import axios from "axios";

const baseUrl = "https://api.spotify.com/v1";

const spotify = axios.create({
	baseUrl: `${baseUrl}`,
});

export default spotify;

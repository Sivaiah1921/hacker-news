import { defer } from "rxjs";
export const BASE_URL = "https://hacker-news.firebaseio.com/v0";
export const ITEM_BASE_URL = `${BASE_URL}/item`;

export const API = {
	ask: `${BASE_URL}/askstories.json`,
	jobs: `${BASE_URL}/jobstories.json`,
	newest: `${BASE_URL}/newstories.json`,
	news: `${BASE_URL}/topstories.json`,
	show: `${BASE_URL}/showstories.json`,
};

export const newsGetApi = () => makeDeferGetApiCall(API.news);
export const newestGetApi = () => makeDeferGetApiCall(API.newest);
export const askGetApi = () => makeDeferGetApiCall(API.ask);
export const showGetApi = () => makeDeferGetApiCall(API.show);
export const jobsGetApi = () => makeDeferGetApiCall(API.jobs);

export const makeDeferGetApiCall = (url) => defer(() => makeGetRequest(url));

export const miliSecToTime = (ms) => {
	let hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
	let min = Math.floor((ms / (1000 * 60)) % 60);
	let sec = Math.floor((ms / 1000) % 60);

	if (hours < 24) {
		console.log("ms", ms, hours);
		return hours + " hrs ago";
	} else if (min < 60) {
		return min + " min ago";
	} else if (sec < 60) {
		return sec + " sec ago";
	}
};

export const getDomainName = (url) => {
	let newUrl = url;

	if (url.indexOf("//") > -1) {
		newUrl = url.split("/")[2];
	} else {
		newUrl = url.split("/")[0];
	}

	//find & remove port number
	newUrl = newUrl.split(":")[0];
	//find & remove "?"
	newUrl = newUrl.split("?")[0];

	return newUrl;
};

export const getPageFromParams = (url, searchKey) => {
	const value = Number(new URLSearchParams(url).get(searchKey));
	return value ? value : 1;
};

export const makeGetRequest = async (url) => {
	const res = await fetch(url);
	return await res.json();
};

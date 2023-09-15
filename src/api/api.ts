import axios from "axios"

export const instance = axios.create({
	baseURL: 'https://futureview-backend.onrender.com/',
});
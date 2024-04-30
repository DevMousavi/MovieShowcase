import axios from "axios";

const apiKey = "api_key=e0eab5aff7f36ac2a103ea47d038b612";
const baseURLImage = "https://image.tmdb.org/t/p/w300";
const baseURLPoster = "https://image.tmdb.org/t/p/original";
const api = axios.create({ baseURL: import.meta.env.VITE_BASE_URL });

api.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        return error;
    }
);

export default api;
export { apiKey, baseURLImage, baseURLPoster };

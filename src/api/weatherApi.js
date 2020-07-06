import { handleResponse, handleError } from "./apiUtils";
import axios from "axios";
const baseUrl = process.env.API_URL;

async function getWeather(location) {
    const newurl = `${baseUrl}/weather/?q=${location}&units=metric&APPID=${process.env.API_KEY}`;
    console.log(newurl);
    await axios.get(newurl)
        .then(handleResponse)
        .catch(handleError);
}

export default getWeather;

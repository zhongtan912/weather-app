import { handleResponse, handleError } from './apiUtils';
import axios from 'axios';

async function getWeather(location) {
    const newurl = `${process.env.API_URL}/weather/?q=${location}&units=metric&APPID=${process.env.API_KEY}`;
    console.log(newurl);
    return axios.get(newurl)
        .then(handleResponse)
        .catch(handleError);
}

async function getForecast(location) {
    const newurl = `${process.env.API_URL}/forecast/?q=${location}&units=metric&APPID=${process.env.API_KEY}`;
    console.log(newurl);
    return axios.get(newurl)
        .then(handleResponse)
        .catch(handleError);
}


export { getWeather, getForecast };

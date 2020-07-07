import * as types from './actionTypes';
import { getForecast, getWeather } from '../../api/weatherApi';

export function loadWeather(location) {
    return async dispatch => {
        dispatch({ type: types.GET_WEATHER });
        try {
            const res = await getWeather(location);
            dispatch({
                type: types.GET_WEATHER_SUCCESS,
                data: res
            });
        } catch (err) {
            dispatch({ type: types.API_CALL_ERROR, data: err });
        }

    };
}

export function loadForecast(location) {
    return async dispatch => {
        dispatch({ type: types.GET_FORECAST });
        try {
            const res = await getForecast(location);
            dispatch({
                type: types.GET_FORECAST_SUCCESS,
                data: res.list
            });
        } catch (err) {
            dispatch({ type: types.API_CALL_ERROR, data: err });
        }

    };
}
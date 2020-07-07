import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function weatherReducer(state = initialState, action) {

    switch (action.type) {
        case types.GET_WEATHER_SUCCESS:
            return { ...state, weather: action.data, error: null };
        case types.GET_FORECAST_SUCCESS:
            return { ...state, forecast: action.data, error: null };
        case types.API_CALL_ERROR:
            return { ...initialState, error: action.data };

        default:
            return state;
    }
}
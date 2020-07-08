import { createStore } from 'redux';
import weatherReducer from '../reducers/weatherReducer';
import initialState from '../reducers/initialState';
import * as types from '../actions/actionTypes';
import mockData from '../../../tools/mockData';

it('Should handle retrieving current weather', () => {
  const store = createStore(weatherReducer, initialState);

  const action = { type: types.GET_WEATHER_SUCCESS, data: mockData.weatherResponse };
  store.dispatch(action);

  const { weather } = store.getState();
  expect(weather).toEqual(mockData.weatherResponse);
});

it('Should handle retrieving current forecast', () => {
  const store = createStore(weatherReducer, initialState);

  const action = { type: types.GET_FORECAST_SUCCESS, data: mockData.forecastResponse.list };
  store.dispatch(action);

  const { forecast } = store.getState();
  expect(forecast).toEqual(mockData.forecastResponse.list);
});

it('Should handle errors in api calls', () => {
  const store = createStore(weatherReducer, initialState);
  const err = new Error('some error');
  const action = { type: types.API_CALL_ERROR, data: err };

  store.dispatch(action);

  const { error } = store.getState();
  expect(error).toEqual(err);
});

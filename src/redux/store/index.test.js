import { createStore } from 'redux';
import weatherReducer from '../reducers/weatherReducer';
import initialState from '../reducers/initialState';
import * as types from '../actions/actionTypes';
import mockData from '../../../tools/mockData';

it('Should handle retrieving current weather', () => {
  // arrange
  const store = createStore(weatherReducer, initialState);

  // act
  const action = { type: types.GET_WEATHER_SUCCESS, data: mockData.weatherResponse };
  store.dispatch(action);

  // assert
  const { weather } = store.getState();
  expect(weather).toEqual(mockData.weatherResponse);
});

it('Should handle retrieving current forecast', () => {
  // arrange
  const store = createStore(weatherReducer, initialState);

  // act
  const action = { type: types.GET_FORECAST_SUCCESS, data: mockData.forecastResponse.list };
  store.dispatch(action);

  // assert
  const { forecast } = store.getState();
  expect(forecast).toEqual(mockData.forecastResponse.list);
});

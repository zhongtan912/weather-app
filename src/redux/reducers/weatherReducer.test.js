import weatherReducer from '../reducers/weatherReducer';
import * as types from '../actions/actionTypes';
import initialState from './initialState';
import mockData from '../../../tools/mockData';

it('should update weather when passed GET_WEATHER_SUCCESS', () => {
  // arrange
  const action = { type: types.GET_WEATHER_SUCCESS, data: mockData.weatherResponse };

  // act
  const newState = weatherReducer(initialState, action);

  // assert
  expect(newState.weather).toEqual(mockData.weatherResponse);
});

it('should update forecast when passed GET_FORECAST_SUCCESS', () => {
  // arrange
  const action = { type: types.GET_FORECAST_SUCCESS, data: mockData.forecastResponse.list };

  // act
  const newState = weatherReducer(initialState, action);

  // assert
  expect(newState.forecast).toEqual(mockData.forecastResponse.list);
});

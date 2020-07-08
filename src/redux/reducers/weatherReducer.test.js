import weatherReducer from '../reducers/weatherReducer';
import * as types from '../actions/actionTypes';
import initialState from './initialState';
import mockData from '../../../tools/mockData';

it('should update weather when passed GET_WEATHER_SUCCESS', () => {
  const action = { type: types.GET_WEATHER_SUCCESS, data: mockData.weatherResponse };

  const newState = weatherReducer(initialState, action);

  expect(newState.weather).toEqual(mockData.weatherResponse);
});

it('should update error when passed API_CALL_ERROR', () => {
  const error = new Error('some error');
  const action = { type: types.API_CALL_ERROR, data: error };

  const newState = weatherReducer(initialState, action);

  expect(newState.error).toEqual(error);
});



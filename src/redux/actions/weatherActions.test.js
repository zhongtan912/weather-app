import * as weatherActions from './weatherActions';
import * as types from './actionTypes';
import { weatherResponse, forecastResponse } from '../../../tools/mockData';
import thunk from 'redux-thunk';
import axios from 'axios';
import configureMockStore from 'redux-mock-store';

// Test an async action
const middleware = [thunk];
const mockStore = configureMockStore(middleware);
jest.mock('axios');

describe('Async Actions', () => {

  beforeAll(() => {
    process.env.API_URL = 'http://example.com';
    process.env.API_KEY = 'somekey';
  });
  afterEach(() => jest.resetAllMocks());

  describe('Load Weather Thunk', () => {
    it('should create GET_WEATHER_SUCCESS when loading weather', () => {
      const axiosResponse = { status: 200, data: weatherResponse };
      axios.get.mockImplementationOnce(() => Promise.resolve(axiosResponse));

      const expectedActions = [
        { type: types.GET_WEATHER },
        { type: types.GET_WEATHER_SUCCESS, data: weatherResponse }
      ];

      const store = mockStore({ forecast: [], weather: {} });
      return store.dispatch(weatherActions.loadWeather('location')).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(axios.get).toHaveBeenCalledWith('http://example.com/weather/?q=location&units=metric&APPID=somekey');
      });
    });
  });

  describe('Load Forecast Thunk', () => {
    it('should create GET_FORECAST_SUCCESS when loading weather', () => {
      const axiosResponse = { status: 200, data: forecastResponse };
      axios.get.mockImplementationOnce(() => Promise.resolve(axiosResponse));

      const forecast = forecastResponse.list;

      const expectedActions = [
        { type: types.GET_FORECAST },
        { type: types.GET_FORECAST_SUCCESS, data: forecast }
      ];

      const store = mockStore({ forecast: [], weather: {} });
      return store.dispatch(weatherActions.loadForecast('location')).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(axios.get).toHaveBeenCalledWith('http://example.com/forecast/?q=location&units=metric&APPID=somekey');
      });
    });
  });

  describe('Load Unsuccessful', () => {
    it('should create API_CALL_ERROR when loading fails', () => {
      const axiosResponse = { status: 404, error: 'Some error' };
      axios.get.mockImplementationOnce(() => Promise.resolve(axiosResponse));

      const expectedActions = [
        { type: types.GET_FORECAST },
        { type: types.API_CALL_ERROR, data: new Error('Network response was not ok.') }
      ];

      const store = mockStore({ forecast: [], weather: {} });
      return store.dispatch(weatherActions.loadForecast('location')).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(axios.get).toHaveBeenCalledWith('http://example.com/forecast/?q=location&units=metric&APPID=somekey');
      });
    });
  });
});

import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { render, cleanup } from '@testing-library/react';
import { weatherResponse, forecastResponse } from '../../../tools/mockData';
import HomePage from './HomePage';
import configureMockStore from 'redux-mock-store';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

function renderHomePage(args) {

    const initialState = {
        weather: weatherResponse,
        forecast: forecastResponse.list,
        error: null
    };
    const props = { ...initialState, ...args };
    const store = mockStore({ ...props });
    return render(<Provider store={store}><HomePage /></Provider>);
}

describe('Home Page render', () => {
    afterEach(cleanup);

    it('should prompt for input', () => {
        const { getByText } = renderHomePage();
        getByText('Enter city name');
    });

    it('should display error when error', () => {
        const { getByText, queryByRole } = renderHomePage({ error: 'some error' });
        getByText('No city found');
        expect(queryByRole('weather')).toBeNull();
    });

    it('should display weather data when data is present', () => {
        const { queryByRole } = renderHomePage({ weather: weatherResponse });
        expect(queryByRole('weather')).toBeTruthy();
    });

    it('should display forecast data when data is present', () => {
        const { queryByRole } = renderHomePage({ forecast: forecastResponse.list });
        expect(queryByRole('forecast')).toBeTruthy();
    });

});
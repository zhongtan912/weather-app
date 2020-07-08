import React from 'react';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import axios from 'axios';
import store from '../../redux/store';
import HomePage from './HomePage';
import { weatherResponse, forecastResponse } from '../../../tools/mockData';

jest.mock('axios');


function renderHomePage() {
    return render(<Provider store={store}><HomePage /></Provider>);
}

describe('Home Page render', () => {

    beforeAll(() => {
        process.env.API_URL = 'http://example.com';
        process.env.API_KEY = 'somekey';
    });
    afterEach(() => {
        cleanup;
        jest.resetAllMocks();
    });

    it('should display prompt on start', () => {
        const { getByText } = renderHomePage();
        getByText('Enter city name');
    });

    it('should hide results when error', async () => {
        const axiosResponse = { status: 404, data: weatherResponse };
        axios.get.mockImplementationOnce(() => Promise.resolve(axiosResponse));
        const { queryByRole, getByTestId } = renderHomePage();

        fireEvent.submit(getByTestId('form'));
        await new Promise((r) => setTimeout(r, 1000));

        expect(queryByRole('weather')).toBeNull();
        expect(queryByRole('forecast')).toBeNull();
    });

    it('should show weather results when success', async () => {
        const axiosResponse = { status: 200, data: weatherResponse };
        axios.get.mockImplementationOnce(() => Promise.resolve(axiosResponse));
        const { queryByRole, getByLabelText, getByTestId } = renderHomePage();
        const searchInput = getByLabelText('Enter city name');

        fireEvent.change(searchInput, { target: { value: 'london' } });
        fireEvent.submit(getByTestId('form'));
        await new Promise((r) => setTimeout(r, 1000));

        expect(queryByRole('weather')).toBeTruthy();
        expect(queryByRole('forecast')).toBeNull();
    });

    it('should only show forecast results when weather success', async () => {
        const axiosResponse = { status: 200, data: forecastResponse };
        axios.get.mockImplementation(
            (url) => {
                if (url.includes('forecast'))
                    return Promise.resolve(axiosResponse);
                throw Error();
            });
        const { queryByRole, getByLabelText, getByTestId } = renderHomePage();
        const searchInput = getByLabelText('Enter city name');

        fireEvent.change(searchInput, { target: { value: 'london' } });
        fireEvent.submit(getByTestId('form'));
        await new Promise((r) => setTimeout(r, 1000));

        expect(queryByRole('forecast')).toBeNull();
        expect(queryByRole('weather')).toBeNull();
    });

    it('should show both weather and forecast results when success', async () => {
        const axiosResponse = { status: 200, data: forecastResponse };
        const axiosWeatherResponse = { status: 200, data: weatherResponse };
        axios.get.mockImplementation(
            (url) => {
                if (url.includes('forecast'))
                    return Promise.resolve(axiosResponse);
                if (url.includes('weather'))
                    return Promise.resolve(axiosWeatherResponse);
                throw Error();
            });
        const { queryByRole, getByLabelText, getByTestId } = renderHomePage();
        const searchInput = getByLabelText('Enter city name');

        fireEvent.change(searchInput, { target: { value: 'london' } });
        fireEvent.submit(getByTestId('form'));
        await new Promise((r) => setTimeout(r, 1000));

        expect(queryByRole('forecast')).toBeTruthy();
        expect(queryByRole('weather')).toBeTruthy();
    });

});

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { mappedWeather } from '../../../tools/mockData';
import Weather from '../results/Weather';

afterEach(cleanup);

function renderWeather() {
    return render(<Weather weather={mappedWeather} />);
}

describe('Weather card render', () => {
    it('should render London as the city', () => {
        const { getByText } = renderWeather();
        getByText('London, GB');
    });

    it('should render the temperature as 20', () => {
        const { getByText } = renderWeather();
        getByText('20\xB0');
    });

    it('should render the description as overcast clouds and wind speed 5.1ms', () => {
        const { getByText } = renderWeather();
        getByText('Overcast Clouds / 5.1ms');
    });
});
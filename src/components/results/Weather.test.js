import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { mappedWeather } from '../../../tools/mockData';
import Weather from '../results/Weather';


function renderWeather(args) {
    const props = { weather: mappedWeather, ...args };
    return render(<Weather {...props} />);
}

describe('Weather card render', () => {
    afterEach(cleanup);

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

    it('should toggle the temperature selection on user click', () => {
        const mockChangeTemp = jest.fn();
        const { getByRole } = renderWeather({ changeTemp: mockChangeTemp });
        const toggleInput = getByRole('toggle');

        fireEvent.change(toggleInput, { target: { checked: true } });
        expect(getByRole('toggle')).toHaveProperty('checked', true);
    });
});
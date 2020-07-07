import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { mappedForecast } from '../../../tools/mockData';
import Forecast from './Forecast';

afterEach(cleanup);

function renderForecast() {
    return render(<Forecast forecast={mappedForecast} />);
}

describe('Forecast card render', () => {
    it('should render days of the week', () => {
        const { getByText } = renderForecast();
        getByText('Wednesday');
        getByText('Thursday');
        getByText('Friday');
        getByText('Saturday');
    });

    it('should render the forecast temperature as 17', () => {
        const { getByText } = renderForecast();
        getByText('17\xB0');
    });

});
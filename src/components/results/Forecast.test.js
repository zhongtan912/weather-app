import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { mappedForecast } from '../../../tools/mockData';
import Forecast from './Forecast';

afterEach(cleanup);

function renderForecast() {
    return render(<Forecast forecast={mappedForecast} farenheit={false} />);
}

describe('Forecast card render', () => {
    it('should render days of the week', () => {
        const { getByText } = renderForecast();
        getByText('Wed');
        getByText('Thu');
        getByText('Fri');
        getByText('Sat');
    });

    it('should render the forecast temperature as 17', () => {
        const { getAllByText } = renderForecast();
        getAllByText('17\xB0');
    });

});
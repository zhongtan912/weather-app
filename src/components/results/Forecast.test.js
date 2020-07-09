import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { mappedForecast } from '../../../tools/mockData';
import Forecast from './Forecast';

afterEach(cleanup);

function renderForecast(farenheit) {
    return render(<Forecast forecast={mappedForecast} farenheit={farenheit} />);
}

describe('Forecast card render', () => {
    it('should render days of the week', () => {
        const { getByText } = renderForecast(false);
        getByText('Wed');
        getByText('Thu');
        getByText('Fri');
        getByText('Sat');
    });

    it('should render the forecast temperature as 17 celsius', () => {
        const { getAllByText } = renderForecast(false);
        getAllByText('17\xB0');
    });

    it('should render the forecast temperature as 63 farenheit', () => {
        const { getAllByText } = renderForecast(true);
        getAllByText('63\xB0');
    });

});
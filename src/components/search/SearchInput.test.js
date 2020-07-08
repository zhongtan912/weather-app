import React from 'react';
import { fireEvent, render, cleanup } from '@testing-library/react';
import SearchInput from './SearchInput';


function renderSearchInput(args) {
    const defaultProps = {
        hasError: false,
        error: null,
        handleSubmit: null,
        handleChange: null,
        isSearching: false
    };

    const props = { ...defaultProps, ...args };
    return render(<SearchInput {...props} />);
}


describe('Search input tests', () => {
    afterEach(cleanup);

    it('should prompt for input', () => {
        const { getByText } = renderSearchInput();
        getByText('Enter city name');
    });

    it('should display error when error', () => {
        const { getByText } = renderSearchInput({ hasError: true, error: 'No city found' });
        getByText('No city found');
    });

    it('should display spinner when loading', () => {
        const { getByRole } = renderSearchInput({ isSearching: true });
        getByRole('progressbar');
    });


    it('should trigger handleChange function on user input', () => {
        const mockHandleChange = jest.fn();
        const { getByLabelText } = renderSearchInput({ handleChange: mockHandleChange });
        const searchInput = getByLabelText('Enter city name');

        fireEvent.change(searchInput, { target: { value: 'london' } });
        expect(searchInput.value).toBe('london');
        expect(mockHandleChange).toHaveBeenCalledTimes(1);
    });

    it('should trigger handleSubmit function on user submit', () => {
        const mockHandleSubmit = jest.fn();
        const { getByTestId } = renderSearchInput({ handleSubmit: mockHandleSubmit });
        const searchInput = getByTestId('form');

        fireEvent.submit(searchInput);
        expect(mockHandleSubmit).toHaveBeenCalledTimes(1);
    });
});


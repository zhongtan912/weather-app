import React, { useEffect, useState } from 'react';
import getWeather from '../../api/weatherApi';
import SearchInput from './SearchInput';



function SearchBar(props) {
    const [searchTerm, setSearchTerm] = useState('');
    const [isSearching, setSearching] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async event => {
        event.preventDefault();
        setSearching(true);
        try {
            const res = await getWeather(searchTerm);
            console.log(res);
            alert(JSON.stringify(res.main));
            setSearching(false);
        } catch (err) {
            console.log(err);
            setError('Incorrect city name');
            setHasError(true);
            setSearching(false);
        }
    }

    const handleChange = event => {
        setSearching(false);
        setSearchTerm(event.target.value);
        setHasError(false);
    };

    useEffect(() => {
        if (searchTerm) {
            // console.log(searchTerm);
        }
    }, [searchTerm, isSearching]);

    return (
        <SearchInput
            hasError={hasError}
            error={error}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            isSearching={isSearching}
        />
    );
}

export default SearchBar;
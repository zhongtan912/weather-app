import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as weatherActions from '../../redux/actions/weatherActions';
import SearchInput from './SearchInput';



function SearchBar(props) {
    const [searchTerm, setSearchTerm] = useState('');
    const [isSearching, setSearching] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = event => {
        event.preventDefault();
        setSearching(true);
        props.loadWeather(searchTerm);
    }

    const handleChange = event => {
        setSearching(false);
        setSearchTerm(event.target.value);
        setHasError(false);
    };

    useEffect(() => {
        console.log(props);
        if (props.error) {
            console.log(props.error);
            setError('Incorrect city name');
            setHasError(true);
            setSearching(false);
        }
        else if (typeof props.weather !== 'undefined' && Object.keys(props.weather).length > 0) {
            alert(JSON.stringify(props.weather.main));
            setSearching(false);
        }
    }, [props]);

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

function mapStateToProps(state) {
    return { ...state }
}

function mapDispatchToProps(dispatch) {
    return {
        loadWeather: (location) => dispatch(weatherActions.loadWeather(location)),
        loadForecast: (location) => dispatch(weatherActions.loadForecast(location))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)(SearchBar);
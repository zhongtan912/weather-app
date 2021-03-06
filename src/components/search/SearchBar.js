import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as weatherActions from '../../redux/actions/weatherActions';
import SearchInput from './SearchInput';
import PropTypes from 'prop-types';


function SearchBar(props) {
    const [location, setLocation] = useState('');
    const [isSearching, setSearching] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = event => {
        event.preventDefault();

        if (location === '') {
            setError('No city entered');
            setHasError(true);
            return;
        }

        setSearching(true);
        props.loadWeather(location);
        props.loadForecast(location);
    };

    const handleChange = event => {
        setSearching(false);
        setLocation(event.target.value);
        setHasError(false);
    };

    useEffect(() => {
        //console.log(props);
        if (props.error) {
            //console.log(props.error);
            setError('No city found');
            setHasError(true);
            setSearching(false);
        }
        else {
            setSearching(false);
            setHasError(false);
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
    return { ...state };
}

function mapDispatchToProps(dispatch) {
    return {
        loadWeather: (location) => dispatch(weatherActions.loadWeather(location)),
        loadForecast: (location) => dispatch(weatherActions.loadForecast(location))
    };
}

SearchBar.propTypes = {
    loadWeather: PropTypes.func.isRequired,
    loadForecast: PropTypes.func.isRequired,
    error: PropTypes.object
};

export default connect(
    mapStateToProps,
    mapDispatchToProps)(SearchBar);
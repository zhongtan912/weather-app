import React, { useEffect, useState } from 'react';
import {
    FormControl,
    Grid,
    Input,
    InputAdornment,
    InputLabel,
    Typography,
    CircularProgress
} from '@material-ui/core';
import Search from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import getWeather from '../../api/weatherApi';



const useStyles = makeStyles(theme => ({
    error: {
        color: theme.palette.error.main,
        padding: '10px'
    },
    search: {
        marginTop: '10px'
    }
}));

function SearchBar(props) {
    const classes = useStyles();
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
        <div className={classes.search}>
            <Grid container alignItems="flex-end">
                <Grid item xs={12} style={{ textAlign: 'center' }}>
                    <form onSubmit={handleSubmit}>
                        <FormControl>
                            <InputLabel htmlFor="search-city">Enter city name</InputLabel>
                            <Input
                                id="search-city"
                                role="search"
                                type="text"
                                error={hasError}
                                onChange={handleChange}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <Search />
                                    </InputAdornment>
                                }
                                endAdornment={
                                    isSearching && (
                                        <InputAdornment position="end">
                                            <CircularProgress size={20} />
                                        </InputAdornment>
                                    )
                                }
                            />
                            {hasError && (
                                <Typography className={classes.error}>{error}</Typography>
                            )}
                        </FormControl>
                    </form>
                </Grid>
            </Grid>
        </div>
    );
}

export default SearchBar;
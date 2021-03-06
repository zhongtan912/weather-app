import React from 'react';
import PropTypes from 'prop-types';
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


const useStyles = makeStyles(theme => ({
    error: {
        color: theme.palette.error.main,
        padding: '10px'
    },
    search: {
        marginTop: '10px',
        paddingLeft: '10px'
    }
}));

const SearchInput = (props) => {
    const { hasError, error, handleSubmit, handleChange, isSearching } = props;
    const classes = useStyles();


    return (
        <div className={classes.search}>
            <Grid container justify="center">
                <Grid item xs={12}>
                    <form data-testid='form' onSubmit={handleSubmit}>
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
};

SearchInput.propTypes = {
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    error: PropTypes.string,
    hasError: PropTypes.bool.isRequired,
    isSearching: PropTypes.bool.isRequired
};

export default SearchInput;

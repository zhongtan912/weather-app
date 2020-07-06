import React, { useEffect, useState } from "react";
import {
    FormControl,
    Grid,
    Input,
    InputAdornment,
    InputLabel,
    Typography
} from "@material-ui/core";
import Search from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";
import getWeather from '../../api/weatherApi';



const useStyles = makeStyles(theme => ({
    error: {
        color: theme.palette.error.main,
        padding: "10px"
    },
    search: {
        marginTop: "10px"
    }
}));

function SearchBar(props) {
    const classes = useStyles();
    const [searchTerm, setSearchTerm] = useState("");
    const [isSearching, setSearching] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async event => {
        event.preventDefault();
        if (hasError) {
            alert('Incorrect city name');
        }
        else {
            try {
                const res = await getWeather(searchTerm);
                console.log(res);
                alert(JSON.stringify(res.main));
                setHasError(false);
            } catch (err) {
                console.log(err);
                setError("Incorrect city name");
                setHasError(true);
            }
        }
    }

    const handleChange = event => {
        setSearching(true);
        setSearchTerm(event.target.value);
        setHasError(false);
    };

    useEffect(() => {
        if (searchTerm) {
            console.log(searchTerm);
            setSearching(false);
        }
    }, [searchTerm, isSearching]);

    return (
        <div className={classes.search}>
            <Grid container alignItems="flex-end">
                <Grid item xs={12} style={{ textAlign: "center" }}>
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
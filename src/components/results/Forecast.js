import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import WeatherIcons from './WeatherIcons';


const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        opacity: '80%',
        borderRadius: '0px',
        '&:hover': {
            color: theme.palette.primary.main,
            opacity: '100%',
            boxShadow: '5px 10px #BDC9D7'
        }
    }
}));

function renderDetails(forecast, classes) {
    const cards = [];
    for (let i = 0; i < 5; i++) {
        const curr = forecast[i];
        //console.log(curr);
        const icon = WeatherIcons[Math.floor((curr.icon_id) / 100)];
        const iconstr = `wi ${icon}`;
        cards.push(
            <Grid key={i} item xs>
                <Card className={classes.paper}>
                    <CardContent >
                        <Typography gutterBottom variant="h5">
                            {curr.day.substring(0, 3)}
                        </Typography>
                        <i className={iconstr} style={{ display: 'block', fontSize: '50px', paddingBottom: '10px' }}></i>
                        <Typography variant="body2" component="span">
                            <strong>   {Math.round(curr.mintemp)}&deg; /{' '} </strong>
                            {Math.round(curr.maxtemp)}&deg;
          </Typography>
                    </CardContent>
                </Card>
            </Grid>);
    }

    return cards;
}

Forecast.propTypes = {
    forecast: PropTypes.array
};


export default function Forecast(props) {

    const classes = useStyles();
    const { forecast } = props;

    return (
        <div role='forecast' style={{ flexGrow: 1 }} >
            <Grid container spacing={0}>
                {renderDetails(forecast, classes)}
            </Grid>
        </div>
    );
}

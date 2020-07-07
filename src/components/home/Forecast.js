import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardMedia, CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import WeatherIcons from './WeatherIcons';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

function renderDetails(forecast) {
    const cards = [];
    for (let i = 0; i < 5; i++) {
        const curr = forecast[i];
        //console.log(curr);
        const icon = WeatherIcons[Math.floor((curr.icon_id) / 100)];
        const iconstr = `wi ${icon}`;
        cards.push(
            <Grid key={i} item xs>
                <Card>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {curr.day}
                        </Typography>
                        <i className={iconstr} style={{ display: 'block', fontSize: '50px', paddingBottom: '10px' }} component='div'></i>
                        <Typography variant="body2" component="span" color="textPrimary">
                            {Math.round(curr.mintemp)}&deg; /{' '}
                        </Typography>
                        <Typography variant="body2" component="span" color="textSecondary">
                            {Math.round(curr.maxtemp)}&deg;
          </Typography>
                    </CardContent>
                </Card>
            </Grid>);
    }

    return cards;
}

export default function Forecast(props) {
    const classes = useStyles();
    const { forecast } = props;

    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                {renderDetails(forecast)}
            </Grid>
        </div>
    );
}

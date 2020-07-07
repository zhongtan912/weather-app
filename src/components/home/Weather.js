import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    }
});

export default function Weather(props) {
    const classes = useStyles();
    const { weather } = props;

    return (
        <Card className={classes.root}>
            <CardHeader
                title={weather.city + ', ' + weather.country}
                subheader={weather.date} />
            <CardContent>
                <Typography
                    variant="h2"
                    style={{ fontFamily: 'Montserrat', paddingTop: '30px' }}
                >
                    {Math.round(weather.temperature)}&deg;C
        </Typography>
                <Typography
                    variant="subtitle2"
                    color="textSecondary"
                    gutterBottom
                    style={{ paddingTop: '40px' }}
                >
                    {weather.wind_speed} m/s Winds <br />
                    {weather.humidity}% Humidity
        </Typography>
            </CardContent>
        </Card>
    );
}

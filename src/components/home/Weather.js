import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import WeatherIcons from './WeatherIcons';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    icons: {
        width: '20px'
    }
});

export default function Weather(props) {
    const classes = useStyles();
    const { weather } = props;
    const desc = weather.description.split(' ').map(word => (word.charAt(0).toUpperCase() + word.slice(1))).join(' ');
    const icon = WeatherIcons[Math.floor((weather.icon_id) / 100)];
    const iconstr = `wi ${icon}`;

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
                <CardMedia className={iconstr} style={{ fontSize: '100px' }}></CardMedia>
                <Typography
                    variant="subtitle2"
                    color="textSecondary"
                    gutterBottom
                    style={{ paddingTop: '40px' }}
                >
                    {desc} <br />
                    {weather.wind_speed} m/s Winds <br />
                    {weather.humidity}% Humidity
        </Typography>
            </CardContent>
        </Card >
    );
}

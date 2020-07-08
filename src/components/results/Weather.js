import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import WeatherIcons from './WeatherIcons';
import background from './backgroundsmall.png';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275
    },
    header: {
        textAlign: 'center'
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    bgstyle: {
        minHeight: '100%',
        minWidth: '1024px',
        width: '100%',
        height: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        opacity: '50%'
    }
}));

Weather.propTypes = {
    weather: PropTypes.object
};

export default function Weather(props) {

    const classes = useStyles();
    const { weather } = props;
    const desc = weather.description.split(' ').map(word => (word.charAt(0).toUpperCase() + word.slice(1))).join(' ');
    const icon = WeatherIcons[Math.floor((weather.icon_id) / 100)];
    const iconstr = `wi ${icon}`;

    return (
        <>

            <Card role='weather' className={classes.root}>
                <img src={background} className={classes.bgstyle}></img>
                <CardHeader className={classes.header}
                    title={weather.city + ', ' + weather.country}
                    subheader={weather.date} />
                <CardContent className={classes.content}>
                    <Typography variant="h2" style={{ fontFamily: 'Montserrat' }}>
                        {Math.round(weather.temperature)}&deg;
        </Typography>
                    <i className={iconstr} style={{ fontSize: '70px' }} component='div'></i>
                </CardContent>
                <CardContent className={classes.content}>
                    <Typography
                        variant="subtitle2"
                        color="textSecondary"
                        gutterBottom
                    >
                        {desc} / {weather.wind_speed}ms
        </Typography>
                </CardContent>
            </Card >
        </>
    );
}

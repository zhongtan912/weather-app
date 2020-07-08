import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import WeatherIcons from './WeatherIcons';
import background from './homeBackground.png';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275
    },
    header: {
        textAlign: 'center',
        color: theme.palette.primary.dark
    },
    content: {
        paddingTop: '20px',
        color: theme.palette.primary.main
    },
    bgstyle: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        opacity: '50%'
    },
    divstyle: {
        position: 'relative',
        height: '500px',

    },
    wrapper: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        height: '100%'
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
        <div role='weather' className={classes.divstyle}>
            <img src={background} className={classes.bgstyle}></img>
            <div className={classes.wrapper}>

                <div className={classes.content}>
                    <Typography variant="h3" style={{ fontFamily: 'Montserrat', display: 'inline' }}>
                        {Math.round(weather.temperature)}&deg;
</Typography>
                    <i className={iconstr} style={{ fontSize: '35px' }} ></i>
                    <Typography
                        variant="subtitle2"
                        gutterBottom
                    >
                        {desc} / {weather.wind_speed}ms
</Typography>
                </div>

                <div>
                    <CardHeader className={classes.header}
                        title={weather.city + ', ' + weather.country}
                        subheader={weather.date} />
                </div>

            </div>

        </div>
    );
}


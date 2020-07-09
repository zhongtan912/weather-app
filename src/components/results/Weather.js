import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import WeatherIcons from './WeatherIcons';
import background from './homeBackground.png';
import useSwitchStyle from './switchStyle';


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
        color: theme.palette.primary.main,
        textAlign: 'center'
    },
    bgstyle: {
        width: 'auto',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translate(-50%)',
        opacity: '50%'
    },
    divstyle: {
        position: 'relative',
        height: '450px',

    },
    wrapper: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        height: '100%'
    }
}));

Weather.propTypes = {
    weather: PropTypes.object,
    changeTemp: PropTypes.func.isRequired
};

export default function Weather(props) {

    const switchStyle = useSwitchStyle();
    const classes = useStyles();
    const { weather, changeTemp } = props;
    const [toggled, setToggled] = useState(false);

    const desc = weather.description.split(' ').map(word => (word.charAt(0).toUpperCase() + word.slice(1))).join(' ');
    const icon = WeatherIcons[Math.floor((weather.icon_id) / 100)];
    const iconstr = `wi ${icon}`;

    const handleToggle = event => {
        setToggled(event.target.checked);
        changeTemp(event);
    };

    return (
        <div role='weather' className={classes.divstyle}>
            <img src={background} className={classes.bgstyle}></img>
            <div className={classes.wrapper}>

                <div className={classes.content}>
                    <Typography variant="h3" style={{ fontFamily: 'Montserrat', display: 'inline' }}>
                        {toggled ? weather.temperatureF : weather.temperature}&deg;
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

                <div className={classes.content}>
                    <Switch role='toggle' classes={switchStyle} checked={toggled} onChange={handleToggle} />
                </div>
            </div>
        </div>
    );
}


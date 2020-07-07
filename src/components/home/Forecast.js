import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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
        cards.push(<Grid key={i} item xs={3}><p>{(curr.main.temp)}</p></Grid>);
    }

    return cards;
}

export default function Forecast(props) {
    const classes = useStyles();
    const { forecast } = props;

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {renderDetails(forecast)}
            </Grid>
        </div>
    );
}

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardMedia, CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';


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
        cards.push(
            <Grid key={i} item xs>
                <Card>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {curr.day}
                        </Typography>
                        <span style={{ flex: '1 1 0%', textAlign: 'right' }}>
                            <Typography variant="body2" component="span" color="textPrimary">
                                {Math.round(curr.mintemp)}&deg; /{' '}
                            </Typography>
                            <Typography variant="body2" component="span" color="textSecondary">
                                {Math.round(curr.maxtemp)}&deg;
          </Typography>
                        </span>
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

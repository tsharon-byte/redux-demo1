import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "../store/actions";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 240
    },
});

export function MyCard() {
    const classes = useStyles();
    const count = useSelector(state=>state.counter);
    const dispatch = useDispatch();
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="/image/IMG_20200621_110654_643_1.jpg"
                    title="Redux example"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Redux example
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {count}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button variant="contained" color="primary" onClick={()=>dispatch(increment())}>
                    Increment
                </Button>
                <Button variant="contained" color="secondary" onClick={()=>dispatch(decrement())}>
                    Decrement
                </Button>
            </CardActions>
        </Card>
    );
};
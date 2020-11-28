import React from 'react';



import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    squareBox: {
        width: "80px",
        height: "80px",
        margin: "15px"
    }
}))
export default function Square(props) {
        console.log(props);
        const classes = useStyles()
        const onClick = (e) => {
            console.log('shi value');
        }
        return <Button className={classes.squareBox} variant="contained" onClick={props.onClick}>{props.value}</Button>
    }
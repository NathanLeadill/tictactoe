import { makeStyles } from '@material-ui/core';
import React from 'react'
import Square from '../Square';

const useStyles = makeStyles((theme) => ({
    center: {
        margin: '0 auto'
    }
}))
export default function Board (props) {
    const classes = useStyles();

    const renderSquare = (i) => {
        const winLine = props.winLine;
        return (
          <Square
            key={i}
            value={props.squares[i]}
            onClick={() => props.onClick(i)}
            highlight={winLine && winLine.includes(i)}
          />
        );
    }

    const boardSize = 3;
    let squares = [];
    for (let i = 0; i < boardSize; ++i) {
      let row = [];
      for (let j = 0; j < boardSize; ++j) {
        row.push(renderSquare(i * boardSize + j));
      }
      squares.push(<div key={i} className="board-row">{row}</div>);
    }
    return (
        <div className={classes.center}>{squares}</div>
    )
}


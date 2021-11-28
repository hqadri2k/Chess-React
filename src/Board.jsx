import React from 'react';
import Square from './Square';

const Board = (props) => {

  return(
    createBoard(props.squares, props.setStart, props.setTarget, props.moveCallback)
  );

}

const createBoard = (squares, setStart, setTarget, moveCallback) => {
  let squareRenders = []
  squares.forEach((sq, index) => {
    const x = index % 8
    const y = Math.floor(index / 8)
    const colour = getSquareColour(x, y)
    const square = renderSquare(squares[index], index, colour, setStart, setTarget, moveCallback)
    squareRenders.push(square)
  })
  return squareRenders
}

const getSquareColour = (x, y) => {
  const odd = x % 2
  if (y % 2) return odd ? "dark" : "light";
  return odd ? "light" : "dark";
}

const renderSquare = (square, index, colour, setStart, setTarget, moveCallback) => {
  return <Square
    colour={colour}
    piece={square}
    index={index}
    setStart={setStart}
    setTarget={setTarget}
    moveCallback={moveCallback}
  />;
}


export default Board;

import React, {useState, useEffect} from 'react';
import Board from './Board';
import Pawn from './logic/Pawn'
import Rook from './logic/Rook'
import Bishop from './logic/Bishop'
import Knight from './logic/Knight'
import King from './logic/King'
import Queen from './logic/Queen'
import "./index.css"

const Game = () => {

  const [start, setStart] = useState(-1)
  const [target, setTarget] = useState(-1)
  const [currentPlayer, setCurrentPlayer] = useState(1)
  const [squares, setSquares] = useState(initialiseSquares(setStart));
  const [moves, setMoves] = useState([]);


  const moveCallback = (target) => {
    console.log("moving " + start + " " + target)
    const update = squares
    const piece = update[start]
    if(!piece.move(target, update[target])) return;
    if(piece.player !== currentPlayer) return;
    piece.setSquare(target)
    update[target] = piece
    update[start] = null
    setSquares(update)
    setStart(-1);
    setTarget(-1);
    setCurrentPlayer(nextPlayer(currentPlayer))
  }

  const nextPlayer = (currentPlayer) => currentPlayer == 1 ?  2 : 1;
 
  return (
    <div className="game">
      <div className="game-board">
        <Board squares={squares} moveCallback={moveCallback} setStart={setStart} setTarget={setTarget}/>
      </div>
    </div>
  );
}

const initialiseSquares = (setStart) => {
  const squares = Array(64).fill(null);
  for(let i=8; i<16; i++) {
    squares[i] = new Pawn(2, i, setStart);
    squares[i+40] = new Pawn(1, i+40, setStart);
  }
  squares[0] = new Rook(2, 0, setStart);
  squares[7] = new Rook(2, 7, setStart);
  squares[1] = new Bishop(2, 1, setStart);
  squares[6] = new Bishop(2, 6, setStart);
  squares[2] = new Knight(2, 2, setStart);
  squares[5] = new Knight(2, 5, setStart);
  squares[3] = new King(2, 3, setStart);
  squares[4] = new Queen(2, 4, setStart);

  squares[56] = new Rook(1, 56, setStart);
  squares[63] = new Rook(1, 63, setStart);
  squares[62] = new Bishop(1, 62, setStart);
  squares[57] = new Bishop(1, 57, setStart);
  squares[58] = new Knight(1, 58, setStart);
  squares[61] = new Knight(1, 61, setStart);
  squares[59] = new King(1, 59, setStart);
  squares[60] = new Queen(1, 60, setStart);
  return squares;
}

export default Game;

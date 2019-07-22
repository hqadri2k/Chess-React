import React from 'react';
import Board from './Board';
import Pawn from './pieces/Pawn'
import Rook from './pieces/Rook'
import Bishop from './pieces/Bishop'
import Knight from './pieces/Knight'
import King from './pieces/King'
import Queen from './pieces/Queen'

class Game extends React.Component {

  constructor() {
    super();
    this.squares = this.initialiseSquares();
  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board
          squares = {this.squares}
          />
        </div>
      </div>
    );
  }

  initialiseSquares() {
    const squares = Array(64).fill(null);
    for(let i=8; i<16; i++) {
      squares[i] = new Pawn(2);
      squares[i+40] = new Pawn(1);
    }
    squares[0] = new Rook(1);
    squares[7] = new Rook(1);
    squares[1] = new Bishop(1);
    squares[6] = new Bishop(1);
    squares[2] = new Knight(1);
    squares[5] = new Knight(1);
    squares[3] = new King(1);
    squares[4] = new Queen(1);

    squares[56] = new Rook(2);
    squares[63] = new Rook(2);
    squares[57] = new Bishop(2);
    squares[62] = new Bishop(2);
    squares[58] = new Knight(2);
    squares[61] = new Knight(2);
    squares[59] = new King(2);
    squares[60] = new Queen(2);

    return squares;
  }
}

export default Game;

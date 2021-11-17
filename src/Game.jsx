import React from 'react';
import Board from './Board';
import Pawn from './logic/Pawn'
import Rook from './logic/Rook'
import Bishop from './logic/Bishop'
import Knight from './logic/Knight'
import King from './logic/King'
import Queen from './logic/Queen'
import "./index.css"

class Game extends React.Component {

  constructor() {
    super();
    this.squares = this.initialiseSquares();
  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board squares={this.squares} />
        </div>
      </div>
    );
  }

  initialiseSquares() {
    const squares = Array(64).fill(null);
    for(let i=8; i<16; i++) {
      squares[i] = new Pawn(2, i);
      squares[i+40] = new Pawn(1, i+40);
    }
    squares[0] = new Rook(1, 0);
    squares[7] = new Rook(1, 7);
    squares[1] = new Bishop(1, 1);
    squares[6] = new Bishop(1, 6);
    squares[2] = new Knight(1, 2);
    squares[5] = new Knight(1, 5);
    squares[3] = new King(1, 3);
    squares[4] = new Queen(1, 4);

    squares[56] = new Rook(2, 56);
    squares[63] = new Rook(2, 63);
    squares[57] = new Bishop(2, 57);
    squares[62] = new Bishop(2, 62);
    squares[58] = new Knight(2, 58);
    squares[61] = new Knight(2, 61);
    squares[59] = new King(2, 59);
    squares[60] = new Queen(2, 60);
    return squares;
  }
}

export default Game;

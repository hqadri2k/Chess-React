import React from 'react';
import Square from './Square';

class Board extends React.Component {

  renderSquare(x, y, col) {
    return <Square x={x} y={y} color={col} />;
  }

  createBoard() {
    let board = [];

    for(let i = 0; i < 8; i++) {
      let children = [];

      for(let j = 0; j < 8; j++) {
        children.push(this.renderSquare(i, j, this.getSquareColor(i,j)))
      }
      board.push(<div className="board-row">{children}</div>)
    }
    return board;
  }

  render() {
    return(this.createBoard());
  }

  getSquareColor(x, y) {
    const odd = x % 2

    if (y % 2) {
      return odd ? 0 : 1
    }

    return odd ? 1 : 0
  }
}

export default Board;

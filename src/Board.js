import React from 'react';
import Square from './Square';

class Board extends React.Component {

  renderSquare(x, y, n, col) {
    return <Square
    color={col}
    piece={this.props.squares[n]}
    style={this.props.squares[n] ? this.props.squares[n].style : null}/>;
  }

  createBoard() {
    let board = [];
    let n = 0;

    for(let i = 0; i < 8; i++) {
      let children = [];

      for(let j = 0; j < 8; j++) {
        children.push(this.renderSquare(i, j, n, this.getSquareColor(i,j)))
        n++;
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
      return odd ? "dark" : "light"
    }

    return odd ? "light" : "dark"
  }
}

export default Board;

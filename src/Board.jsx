import React from 'react';
import Square from './Square';

class Board extends React.Component {

  renderSquare(n, col) {
    return <Square
      color={col}
      piece={this.props.squares[n]}
    />;
  }

  createBoard() {
    let squareRenders = []
    this.props.squares.forEach((sq, index) => {
      const x = index % 8
      const y = Math.floor(index / 8)
      const col = this.getSquareColor(x, y)
      const square = this.renderSquare(index, col)
      squareRenders.push(square)
    })
    return squareRenders
  }

  render() {
    return this.createBoard()
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

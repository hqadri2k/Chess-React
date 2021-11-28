export default class Piece {
  constructor(player, square) {
    this.player = player;
    this.square = square;
  }

  setSquare(square) {
    this.square = square;
  }

  getPlayer() {
    return this.player;
  }

  getSquare() {
    return this.square;
  }

  getRender() {
    
  }

  move() {
    
  }
}

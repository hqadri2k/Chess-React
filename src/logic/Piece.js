export default class Piece {
  constructor(player, square, render) {
    this.player = player;
    this.square = square;
    this.render = render;
  }

  getPlayer() {
    return this.player;
  }

  getSquare() {
    return this.square;
  }

  getRender() {
    return this.render;
  }
}

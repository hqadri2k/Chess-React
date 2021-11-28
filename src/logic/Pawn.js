import Piece from './Piece'
import PawnRender from '../render/PawnRender'
import React from 'react'

export default class Pawn extends Piece {
  constructor(player, square, callback) {
    super(player, square)
    this.callback = callback;
    this.hasMoved = false
  }

  move(targetIndex, target) {
    console.log("moving")
    const gridMove = targetIndex - this.square
    console.log(gridMove)
    const prefix = this.player === 1 ? -1 : 1;
    console.log(gridMove + " " + prefix)
    console.log(target)
    if(gridMove === prefix * 16 && !this.hasMoved && !target) {
      console.log("hello")
      this.hasMoved = true;
      return true;
    }
    if(gridMove === prefix * 8 && !target) {
      this.hasMoved = true;
      return true;
    }
    if(gridMove === prefix * 7 || gridMove === prefix * 9) {
      console.log(target)
      if(target != null)
        return true;
    }
  return false;
  }

  getRender() {
    return <PawnRender player={this.player} callback={this.callback} index={this.square}/>
  }
}

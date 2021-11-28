import Piece from './Piece'
import RookRender from '../render/RookRender'
import React from 'react'

export default class Rook extends Piece {
  constructor(player, square, callback, getCurrentPlayer) {
    super(player, square)
    this.callback = callback;
  }

  getRender() {
    return <RookRender player={this.player} callback={this.callback} index={this.square}/>
  }
}

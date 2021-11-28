import Piece from './Piece'
import KnightRender from '../render/KnightRender'
import React from 'react'

export default class Knight extends Piece {
  constructor(player, square, callback) {
    super(player, square)
    this.callback = callback;
  }

  getRender() {
    return <KnightRender player={this.player} callback={this.callback} index={this.square}/>
  }
}

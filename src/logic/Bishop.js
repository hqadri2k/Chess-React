import Piece from './Piece'
import BishopRender from '../render/BishopRender'
import React from 'react'

export default class Bishop extends Piece {
  constructor(player, square, callback) {
    super(player, square)
    this.callback = callback;
  }

  getRender() {
    return <BishopRender player={this.player} callback={this.callback} index={this.square}/>
  }
}

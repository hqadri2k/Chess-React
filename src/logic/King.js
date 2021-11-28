import Piece from './Piece'
import KingRender from '../render/KingRender'
import React from 'react'

export default class King extends Piece {
  constructor(player, square, callback) {
    super(player, square)
    this.callback = callback;
  }

  getRender() {
    return <KingRender player={this.player} callback={this.callback} index={this.square}/>
  }
}

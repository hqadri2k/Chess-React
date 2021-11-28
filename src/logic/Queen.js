import Piece from './Piece'
import QueenRender from '../render/QueenRender'
import React from 'react'

export default class Queen extends Piece {
  constructor(player, square, callback) {
    super(player, square)
    this.callback = callback;
  }

  getRender() {
    return <QueenRender player={this.player} callback={this.callback} index={this.square}/>
  }
}

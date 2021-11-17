import Piece from './Piece'
import KingRender from '../render/KingRender'
import React from 'react'

export default class King extends Piece {
  constructor(player, square) {
    const render = <KingRender player={player}/>
    super(player, square, render)
  }
}

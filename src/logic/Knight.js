import Piece from './Piece'
import KnightRender from '../render/KnightRender'
import React from 'react'

export default class Knight extends Piece {
  constructor(player, square) {
    const render = <KnightRender player={player}/>
    super(player, square, render)
  }
}

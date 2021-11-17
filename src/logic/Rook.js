import Piece from './Piece'
import RookRender from '../render/RookRender'
import React from 'react'

export default class Rook extends Piece {
  constructor(player, square) {
    const render = <RookRender player={player}/>
    super(player, square, render)
  }
}

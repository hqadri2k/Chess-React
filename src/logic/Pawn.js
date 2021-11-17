import Piece from './Piece'
import PawnRender from '../render/PawnRender'
import React from 'react'

export default class Pawn extends Piece {
  constructor(player, square) {
    const render = <PawnRender player={player}/>
    super(player, square, render)
  }
}

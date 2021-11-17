import Piece from './Piece'
import BishopRender from '../render/BishopRender'
import React from 'react'

export default class Bishop extends Piece {
  constructor(player, square) {
    const render = <BishopRender player={player}/>
    super(player, square, render)
  }
}

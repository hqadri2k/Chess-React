import Piece from './Piece'
import QueenRender from '../render/QueenRender'
import React from 'react'

export default class Queen extends Piece {
  constructor(player, square) {
    const render = <QueenRender player={player}/>
    super(player, square, render)
  }
}

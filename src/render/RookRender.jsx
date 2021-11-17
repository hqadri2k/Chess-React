import React from 'react'
import '../index.css'

const RookRender = (props) => {
  const image = props.player === 1
    ? "https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg"
    : "https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg"

    return(
      <img src={image} class="piece"/>
    )
}

export default RookRender;

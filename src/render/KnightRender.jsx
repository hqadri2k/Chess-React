import React from 'react'
import '../index.css'

const KnightRender = (props) => {
  const image = props.player === 1
    ? "https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg"
    : "https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg"

    return(
      <img src={image} class="piece"/>
    )
}

export default KnightRender;

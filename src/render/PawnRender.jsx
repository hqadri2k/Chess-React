import React from 'react'
import '../index.css'

const PawnRender = (props) => {
  const image = props.player === 1
    ? "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg"
    : "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg"

    return(
      <img src={image} class="piece"/>
    )
}

export default PawnRender;

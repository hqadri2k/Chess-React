import React from 'react'
import '../index.css'

const QueenRender = (props) => {
  const image = props.player === 1
    ? "https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg"
    : "https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg";

    return(
      <img src={image} class="piece"/>
    )
}

export default QueenRender;

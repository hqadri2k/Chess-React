import React from 'react'
import '../index.css'
import DraggableComponent from './DraggableComponent';

const RookRender = (props) => {
  const image = props.player === 1
    ? "https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg"
    : "https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg"

    return(
      <DraggableComponent callback={props.callback} index={props.index}>
        <img src={image} class="piece"/>
      </DraggableComponent>
    )
}

export default RookRender;

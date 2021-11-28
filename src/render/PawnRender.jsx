import React from 'react'
import '../index.css'
import DraggableComponent from './DraggableComponent';

const PawnRender = (props) => {
  const image = props.player === 1
    ? "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg"
    : "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg"

    return(
      <DraggableComponent callback={props.callback} index={props.index}>
        <img src={image} class="piece"/>
      </DraggableComponent>
    )
}

export default PawnRender;

import React from 'react'
import '../index.css'
import DraggableComponent from './DraggableComponent';

const KnightRender = (props) => {
  const image = props.player === 1
    ? "https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg"
    : "https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg"

    return(
      <DraggableComponent callback={props.callback} index={props.index}>
        <img src={image} class="piece"/>
      </DraggableComponent>
    )
}

export default KnightRender;

import React from 'react'
import '../index.css'
import DraggableComponent from './DraggableComponent';

const QueenRender = (props) => {
  const image = props.player === 1
    ? "https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg"
    : "https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg";

    return(
      <DraggableComponent callback={props.callback} index={props.index}>
        <img src={image} class="piece"/>
      </DraggableComponent>
    )
}

export default QueenRender;

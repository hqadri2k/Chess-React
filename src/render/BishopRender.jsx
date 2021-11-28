import React from 'react'
import '../index.css'
import DraggableComponent from './DraggableComponent';

const BishopRender = (props) => {
  const image = props.player === 1
    ? "https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg"
    : "https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg";
    return(
      <DraggableComponent callback={props.callback} index={props.index}>
        <img src={image} class="piece"/>
      </DraggableComponent>
    )
}

export default BishopRender;

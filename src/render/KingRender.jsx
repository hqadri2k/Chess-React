import React from 'react'
import '../index.css'
import DraggableComponent from './DraggableComponent';

const KingRender = (props) => {
  const image = props.player === 1
    ? "https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg"
    : "https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg"

    return(
      <DraggableComponent callback={props.callback} index={props.index}>
        <img src={image} class="piece"/>
      </DraggableComponent>
    )
}

export default KingRender;

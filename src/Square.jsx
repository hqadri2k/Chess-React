import React from 'react';

function Square(props) {
    const piece = props.piece ? props.piece.getRender() : <React.Fragment/>
    return(
    <button className = {"square " + props.color}>
      {piece}
    </button>
  );
}

export default Square;

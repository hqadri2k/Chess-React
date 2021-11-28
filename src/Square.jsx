import React from 'react';

const Square = (props) => {
    const piece = props.piece ? props.piece.getRender() : <React.Fragment/>
    return(
    <div onDrop={e=> handleDrop(e, props.moveCallback, props.index)} onDragOver={handleDragOver}className = {"square " + props.colour}>
      {piece}
    </div>
  );
}

const handleDrop = (e, callback, index) => {
  e.stopPropagation();
  e.preventDefault();
  callback(index)
  console.log("dropped")
}

const handleDragOver = (e) => {
  e.stopPropagation();
  e.preventDefault();
}

export default Square;

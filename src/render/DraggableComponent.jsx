import React from 'react';

const DraggableComponent = (props) => {
    return(
        <div draggable onDrag={handleDrag} onDragStart={e => handleDragStart(e, props.callback, props.index)} onDragEnd={handleDragLeave}>
            {props.children}
        </div>
    )
}

const handleDragStart = (e, callback, index) => {
    console.log("Drag start" + index)
    callback(index)
}

const handleDrag = (e) => {
    e.stopPropagation();
    e.preventDefault();
}

const handleDragLeave = (e) => {
    e.stopPropagation();
    e.preventDefault();
}

export default DraggableComponent;
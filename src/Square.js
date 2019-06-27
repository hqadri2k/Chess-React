import React from 'react';

class Square extends React.Component {

  render() {
    let name = "";
    if(this.props.color === 0) {
      return(
      <button className = "square">
      {/*{ "" + this.props.x + ", " + this.props.y } */}
      </button>
      );
    } else {
      return(
      <button className = "alt-square">
      {/*{ "" + this.props.x + ", " + this.props.y } */}
      </button>
      );
    }
  }
}

export default Square;

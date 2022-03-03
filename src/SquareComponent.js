import React from 'react';

function SquareComponent(prop) {
    const classes = prop.className ? `${prop.className} square` : 'square'; 
  return (
    <span className={classes} onClick={prop.onClick}>
      {prop.state}
    </span>
  );
}


export default SquareComponent;

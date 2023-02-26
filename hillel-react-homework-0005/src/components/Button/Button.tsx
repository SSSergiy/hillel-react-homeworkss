import React from 'react';

const Button = (props) => {
  return (
    <button
      onClick={() => props.stateButtons()}
      disabled={props.itemMaps[props.title]}
    >
      {props.title}
    </button>
  );
};

export default Button;
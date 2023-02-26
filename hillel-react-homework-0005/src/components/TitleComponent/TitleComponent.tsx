import React from 'react';

const TitleComponent = (props) => {
  return (
    <button style={{width: 350}} onClick={props.handleClick}>
      {props.itemName}
    </button>
  );
}

export default TitleComponent;
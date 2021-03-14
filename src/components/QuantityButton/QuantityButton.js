import React from 'react';

const QuantityButton = ({ value, onButtonClick, bgcolor }) => {
  return (
    <button
    className={"f6 link dim br3 ph3 pv2 ma1 mb2 dib white bg-" + bgcolor} // tachyons!
    type="button"
    value={value}
    onClick={onButtonClick}
    >
    {value}
    </button>
    );  
}

export default QuantityButton;   

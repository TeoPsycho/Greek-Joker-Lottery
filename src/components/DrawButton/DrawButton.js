import React from 'react';

const DrawButton = ({ count, delay, onButtonClick }) => {
  const buttonText = (count === 1) ? `ΝΕΑ ΚΛΗΡΩΣΗ` : `${count} ΝΕΕΕΣ ΚΛΗΡΩΣΕΙΣ`;
  return (
    <button
      className="f6 link dim br3 ph3 pv2 ma1 mb2 dib white bg-red"
      type="button"
      onClick={() => onButtonClick(count, delay)}
    >{buttonText}</button>
  );
}

export default DrawButton;   

import React from 'react';

const Arithmos = ({ number,  textColor, bgColor }) => {
  var boxSize = 60;
  var margin = 10;
  var radius = 0.5 * boxSize - margin;
  var textSize = 1.0 * radius;
  return (  
    <svg width={boxSize} height={boxSize}>
    <circle cx="50%" cy="50%" r={radius} fill={bgColor} />
    <text fill={textColor} fontSize={textSize} fontFamily="Verdana" x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">{number}</text>
    </svg>
    );
}

export default Arithmos;

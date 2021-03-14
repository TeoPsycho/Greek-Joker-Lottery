import React from 'react';
import Arithmos from '../../components/Arithmos/Arithmos';

const OutOf45 = ({ outOf45 }) => {
  // console.log('out of 45', outOf45);
  var textColor = 'white';
  var bgColor = 'blue';
  return (
    <div className="tc bg-light-green dib br3 pa1 ma2 grow bw2 shadow-5">
      {outOf45.map((number, i) =>
        <Arithmos
          key={10 * i}
          number={number}
          textColor={textColor}
          bgColor={bgColor}
        />)}
    </div>
  );
}

export default OutOf45;
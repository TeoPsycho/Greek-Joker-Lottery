import React from 'react';
import Arithmos from '../../components/Arithmos/Arithmos';

const OutOf25 = ({ outOf20 }) => {
  // console.log('out of 20', outOf20);
  var textColor = 'black';
  var bgColor = 'yellow';
  return (
    <div className="tc bg-light-green dib br3 pa1 ma2 grow bw2 shadow-5">
      {outOf20.map((number, i) =>
        <Arithmos
          key={100 * i}
          number={number}
          textColor={textColor}
          bgColor={bgColor}
        />)}
    </div>
  );
}

export default OutOf25;
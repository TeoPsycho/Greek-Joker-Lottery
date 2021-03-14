import React from 'react';
import OutOf45 from '../../components/OutOf45/OutOf45';
import OutOf20 from '../../components/OutOf20/OutOf20';

const Selection = ({ outOf45, outOf20 }) => {
  return (
    <div className="tc bg-green dib br3 pa2 ma1 grow bw2 shadow-5">
      <OutOf45 outOf45={outOf45} />
      <OutOf20 outOf20={outOf20} />
    </div>
  );
}

export default Selection;

import React from 'react';
import ArrowUp from './ArrowUp';

const JumpToTop = () => {
  const jumpToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <div onClick={jumpToTop} className="jump-to-top">
      <ArrowUp />
    </div>
  );
};

export default JumpToTop;

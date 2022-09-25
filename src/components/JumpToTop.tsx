import React from 'react';
import ArrowUp from './icons/ArrowUp';

const JumpToTop = () => {
  const jumpToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div onClick={jumpToTop} className="jump-to-top">
      <ArrowUp />
    </div>
  );
};

export default JumpToTop;

import React from 'react';
import './Arrow.css';

const Arrow = ({ direction, nextSlide, prevSlide }) => {
  return (
    <div
      className='ArrowContainer'
      style={{
        ...(direction === 'left'
          ? { left: '20px', transform: 'rotate(180deg)' }
          : { right: '20px' })
      }}
      onClick={direction === 'left' ? prevSlide : nextSlide}>
      <svg viewBox='0 0 24 24'>
        <path stroke='none' d='M0 0h24v24H0z' />
        <polyline points='9 6 15 12 9 18' />
      </svg>
    </div>
  );
};

Arrow.propTypes = {};

export default Arrow;

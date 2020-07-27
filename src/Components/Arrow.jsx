import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Arrow = ({ Direction }) => {
  const ArrowContainer = styled.div`
    position: absolute;
    display: flex;
    align-content: center;
    top: 50%;
    ${({ Direction }) =>
      Direction === 'left' ? 'left: 20px; transform: rotate(180deg);' : 'right: 20px;'}
    background-color: rgb(0, 0, 0, 0.4);
    border-radius: 50%;
    padding: 8px;
    &:hover {
      cursor: pointer;
    }
    svg {
      stroke: #eee;
      width: 30px;
      height: 30px;
      stroke-width: 1.5;
      stroke-linecap: round;
      stroke-linejoin: round;
      fill: none;
    }
  `;
  return (
    <ArrowContainer Direction={Direction}>
      <svg viewBox='0 0 24 24'>
        <path stroke='none' d='M0 0h24v24H0z' />
        <polyline points='9 6 15 12 9 18' />
      </svg>
    </ArrowContainer>
  );
};

Arrow.propTypes = {};

export default Arrow;

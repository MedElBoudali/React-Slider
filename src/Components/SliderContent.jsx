import React from 'react';
import styled from 'styled-components';

const SliderContent = styled.div`
  height: 100%;
  transform: ${({ translate }) => `translateX(-${translate}px)`};
  transition: ${({ transition }) => `transform ease-out ${transition}s`};
  width: ${({ width }) => `${width}px`};
  display: flex;
`;

export default SliderContent;

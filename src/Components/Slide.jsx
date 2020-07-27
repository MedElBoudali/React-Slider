import React from 'react';
import styled from 'styled-components';

const SlideContainer = styled.div`
  height: 100%;
  width: 100%;
  background-image: ${({ content }) => `url(${content})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const Slide = ({ content }) => <SlideContainer content={content} />;

export default Slide;

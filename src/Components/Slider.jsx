import React, { useState } from 'react';
import styled from 'styled-components';
import SliderContent from './SliderContent';
import Slide from './Slide';
import Arrow from './Arrow';
import PropTypes from 'prop-types';

const Slider = props => {
  const SliderContainer = styled.div`
    position: relative;
    height: 100vh;
    width: 100vw;
    margin: 0 auto;
  `;

  const getWidth = () => window.innerWidth;

  const [Translate] = useState(0);
  const [Transition] = useState(0.45);
  const [Images] = useState([
    'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
    'https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80',
    'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80',
    'https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80'
  ]);

  return (
    <SliderContainer>
      <SliderContent
        translate={Translate}
        transition={Transition}
        width={getWidth() * Images.length}>
        {Images.map((image, id) => (
          <Slide key={id} content={image} />
        ))}
      </SliderContent>
      <Arrow Direction='right' />
      <Arrow Direction='left' />
    </SliderContainer>
  );
};

Slider.propTypes = {};

export default Slider;

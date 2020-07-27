import React from 'react';
import styled from 'styled-components';
import SliderContent from './SliderContent';
import PropTypes from 'prop-types';

const Slider = props => {
  const SliderContainer = styled.div`
    height: 100vh;
    width: 100vw;
    margin: 0 auto;
  `;

  return (
    <SliderContainer>
      <SliderContent />
    </SliderContainer>
  );
};

Slider.propTypes = {};

export default Slider;

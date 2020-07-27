import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SliderContent = props => {
  const SliderHeader = styled.h1`
    color: rgb(110, 110, 110);
  `;

  return (
    <div>
      <SliderHeader>Slider Content</SliderHeader>
    </div>
  );
};

SliderContent.propTypes = {};

export default SliderContent;

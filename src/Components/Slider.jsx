import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import SliderContent from './SliderContent';
import Slide from './Slide';
import Arrow from './Arrow/Arrow';
import PropTypes from 'prop-types';

const Slider = props => {
  const getWidth = () => window.innerWidth;
  const [SlideAnimation, setSlideAnimation] = useState(true);
  const [Translate, setTranslate] = useState(0);
  const [Transition] = useState(0.45);
  const [Images] = useState([
    'https://images.unsplash.com/photo-1514509897857-fb32c118ca22?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1498&q=80',
    'https://images.unsplash.com/photo-1562478899-f8bca5c85ca8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    'https://images.unsplash.com/photo-1580813089076-7a92471e7074?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1424&q=80',
    'https://images.unsplash.com/photo-1566664022077-4dc1446dd619?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1510&q=80'
  ]);
  const [ActiveIndex, setActiveIndex] = useState(0);

  const nextSlide = useCallback(() => {
    if (ActiveIndex === Images.length - 1) {
      setTranslate(0);
      setActiveIndex(0);
    } else {
      setActiveIndex(ActiveIndex + 1);
      setTranslate((ActiveIndex + 1) * getWidth());
    }
  }, [ActiveIndex, Images.length]);

  const prevSlide = () => {
    if (ActiveIndex === 0) {
      setActiveIndex(Images.length - 1);
      setTranslate((Images.length - 1) * getWidth());
    } else {
      setActiveIndex(ActiveIndex - 1);
      setTranslate((ActiveIndex - 1) * getWidth());
    }
  };

  useEffect(() => {
    const SlideInt = SlideAnimation && setInterval(() => nextSlide(), 3000);
    return () => clearInterval(SlideInt);
  }, [nextSlide, SlideAnimation]);

  return (
    <div
      style={{
        position: 'relative',
        height: '100vh',
        width: '100vw',
        margin: '0 auto'
      }}>
      <SliderContent
        onMouseEnter={() => setSlideAnimation(false)}
        onMouseLeave={() => setSlideAnimation(true)}
        translate={Translate}
        transition={Transition}
        width={getWidth() * Images.length}>
        {Images.map((image, id) => (
          <Slide key={id} content={image} />
        ))}
      </SliderContent>
      <Arrow direction='right' nextSlide={nextSlide} />
      <Arrow direction='left' prevSlide={prevSlide} />
    </div>
  );
};

Slider.propTypes = {};

export default Slider;

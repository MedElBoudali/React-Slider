import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SliderContent from './SliderContent';
import Slide from './Slide';
import Arrow from './Arrow';
import PropTypes from 'prop-types';

const Slider = props => {
  const getWidth = () => window.innerWidth;
  const [SlideAnimation, setSlideAnimation] = useState(true);
  const [Translate, setTranslate] = useState(0);
  const [Transition] = useState(0.45);
  const [Images] = useState([
    'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
    'https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80',
    'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80',
    'https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80'
  ]);
  const [ActiveIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    if (ActiveIndex === Images.length - 1) {
      setTranslate(0);
      setActiveIndex(0);
    } else {
      setActiveIndex(ActiveIndex + 1);
      setTranslate((ActiveIndex + 1) * getWidth());
    }
  };

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
    const SlideInt = SlideAnimation && setInterval(() => nextSlide(), 1000);
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
      {/* <Arrow direction='right' nextSlide={nextSlide} />
      <Arrow direction='left' prevSlide={prevSlide} /> */}
    </div>
  );
};

Slider.propTypes = {};

export default Slider;

import styled from 'styled-components';
import { ArrowContainer } from '../Arrow/Arrow.Style';

export const Slider = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  &:hover {
    ${ArrowContainer} {
      opacity: 1;
      visibility: visible;
      transform: rotateX(180deg);
    }
  }
  &:before,
  &:after {
    z-index: -1;
    position: absolute;
    content: '';
    bottom: 15px;
    left: 10px;
    width: 50%;
    top: 80%;
    max-width: 300px;
    background: #777;
    -webkit-box-shadow: 0 15px 10px #777;
    -moz-box-shadow: 0 15px 10px #777;
    box-shadow: 0 15px 10px #777;
    -webkit-transform: rotate(-3deg);
    -moz-transform: rotate(-3deg);
    -o-transform: rotate(-3deg);
    -ms-transform: rotate(-3deg);
    transform: rotate(-3deg);
  }
  &:after {
    -webkit-transform: rotate(3deg);
    -moz-transform: rotate(3deg);
    -o-transform: rotate(3deg);
    -ms-transform: rotate(3deg);
    transform: rotate(3deg);
    right: 10px;
    left: auto;
  }
`;

export const SliderWrapper = styled.div`
  height: 100%;
  transform: ${({ translate }) => `translateX(-${translate}px)`};
  transition: transform ease-out 0.5s;
  width: ${({ width }) => `${width}px`};
  display: flex;
`;

export const SliderItem = styled.div`
  height: 100%;
  width: 100%;
  background-image: ${({ content }) => `url(${content})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

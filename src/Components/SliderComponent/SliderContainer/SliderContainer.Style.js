import styled from 'styled-components';
import { ArrowContainer } from '../Arrow/Arrow.Style';

export const Slider = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
  &:hover {
    ${ArrowContainer} {
      opacity: 1;
      visibility: visible;
      transform: rotateX(180deg);
    }
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

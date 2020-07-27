import styled from 'styled-components';

const SliderContent = styled.div`
  transform: ${({ translate }) => `translateX(-${translate}px)`};
  transition: transform ease-out ${props => props.transition}s;
  height: 100%;
  width: ${({ width }) => `${width}px`};
  display: flex;
`;

export default SliderContent;

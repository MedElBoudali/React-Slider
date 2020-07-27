import React, { Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';
import SliderContainer from './Components/SliderContainer/SliderContainer';

const GlobalStyle = createGlobalStyle`
  html {
    position: relative;
    min-height: 100%;
    scroll-behavior: smooth;
  };
  * {
    box-sizing: border-box;
  };
  body {
    margin: 0;
    height: 100%;
    width: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    overflow: hidden;
    position: relative;
  };
`;

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <SliderContainer />
    </Fragment>
  );
};

export default App;

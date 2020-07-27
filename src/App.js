import React, { Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';
import Slider from './Components/Slider';

const GlobalStyle = createGlobalStyle`
  html {
    position: relative;
    min-height: 100%;
    scroll-behavior: smooth;
    overflow-y: overlay;
  };
  * {
    box-sizing: border-box;
  };
  body {
    background-color: rgb(244, 244, 244);
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
      <Slider />
    </Fragment>
  );
};

export default App;

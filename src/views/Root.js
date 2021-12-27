import { GlobalStyles } from 'assets/styles/GlobalStyles';
import { theme } from 'assets/styles/theme';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import App from './App/App';

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  );
};

export default Root;

import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from "./GlobalStyles";
import App from './App';
// Temp resolution for React 18, styled-components
// https://github.com/styled-components/styled-components/issues/3738
const GlobalStyleProxy: any = GlobalStyle;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyleProxy />
    <App />
  </React.StrictMode>
);
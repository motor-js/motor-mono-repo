import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Motor } from "@motor-js/engine"
import { ThemeProvider, defaultTheme } from "@motor-js/theme"
import { qlikSAASConfig } from "./config"

ReactDOM.render(
  <React.StrictMode>
    <Motor config={qlikSAASConfig}>
      <ThemeProvider theme={defaultTheme}>
      <App />
      </ThemeProvider>
    </Motor>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
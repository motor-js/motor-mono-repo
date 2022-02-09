import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { qlikSAASConfig } from "./config";
import { Motor } from "@motor-js/engine"
import { defaultTheme, ThemeProvider } from "@motor-js/theme"

ReactDOM.render(
  <React.StrictMode>
    <Motor config={qlikSAASConfig} licenseKey="U2FsdGVkX19vjmrWbhnS5zEHEGj2PxXnorHHCxZ55lg=">
      <ThemeProvider theme={defaultTheme}>
        <App />
      </ThemeProvider>
    </Motor>
  </React.StrictMode>,
  document.getElementById('root')
);


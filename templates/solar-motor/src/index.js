import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { theme } from "./theme";
import { GlobalStyle } from "./css";
import { ThemeProvider } from '@motor-js/theme'
import { Motor } from '@motor-js/engine'
import { appSettings, qlikConfig } from "./settings"

  ReactDOM.render(
    <Motor 
      config={qlikConfig}
      logo={appSettings.logo}
      logoHeight={appSettings.logoHeight}
      logoWidth={appSettings.logoWidth}
      buttonColor={appSettings.buttonColor}
      buttonFontColor={appSettings.buttonFontColor}
      body={appSettings.body}
      bodySub={appSettings.bodySub}
      loginfontFamily={appSettings.loginfontFamily}
      NotConnectedheader={appSettings.NotConnectedheader}
      NotConnectedBody={appSettings.NotConnectedBody}
    >
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Motor>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

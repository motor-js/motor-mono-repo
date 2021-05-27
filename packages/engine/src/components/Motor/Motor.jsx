import React, { useState } from "react";
import { EngineContext } from "../../contexts/EngineProvider";
import Login from "../Login";
import NotConnected from "../NotConnected";
import useEngine from "../../hooks/useEngine";
import ReactWaterMark from 'react-watermark-component';
import License from "../License"

function Motor({
  children,
  config,
  logo,
  logoWidth,
  logoHeight,
  header,
  body,
  bodySub,
  size,
  buttonText,
  buttonFontColor,
  buttonColor,
  backgroundColor,
  loginfontFamily,
  NotConnectedheader,
  NotConnectedBody,
  NotConnectedButtonText,
}) {
  //const [myTheme, setMyTheme] = useState(defaultTheme)
  const [myConfig, setMyConfig] = useState(config);

  const engine = useEngine(myConfig);

  const text = `Powered by Motor`;
  const beginAlarm = function() { console.warn('start alarm'); };
  
  const options = {
    chunkWidth: 200,
    chunkHeight: 90,
    textAlign: 'left',
    textBaseline: 'bottom',
    globalAlpha: 0.17,
    font: '16px Roboto sans-serif',
    rotateAngle: -0.19,
    fillStyle: '#666'
  }

  return (
    <EngineContext.Provider value={engine}>
      <License />
      <ReactWaterMark
        waterMarkText={text}
        openSecurityDefense
        securityAlarm={beginAlarm}
        options={options}
      >
          <Login
            config={myConfig}
            logo={logo}
            logoHeight={logoHeight}
            logoWidth={logoWidth}
            header={header}
            body={body}
            bodySub={bodySub}
            size={size}
            backgroundColor={backgroundColor}
            buttonText={buttonText}
            buttonFontColor={buttonFontColor}
            buttonColor={buttonColor}
            loginfontFamily={loginfontFamily}
          />
          <NotConnected
            config={myConfig}
            header={NotConnectedheader}
            body={NotConnectedBody}
            size={size}
            buttonText={NotConnectedButtonText}
            backgroundColor={backgroundColor}
            buttonFontColor={buttonFontColor}
            buttonColor={buttonColor}
            loginfontFamily={loginfontFamily}
          />
          {children}
      </ReactWaterMark>
    </EngineContext.Provider>
  );
}

export default Motor;

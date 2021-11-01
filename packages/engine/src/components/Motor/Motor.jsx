import React, { useEffect, useState } from "react";
import ReactWaterMark from "../Watermark"
import { EngineContext } from "../../contexts/EngineProvider";
import Login from "../Login";
import NotConnected from "../NotConnected";
import useEngine from "../../hooks/useEngine";
import { LicenseCheck } from "../License/LicenseCheck"
import { ThemeProvider, theme } from "@motor-js/theme"

function Motor({
  engine,
  children,
  licenseKey,
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
  const [validLicense, setValidLicense] = useState( licenseKey ? LicenseCheck(licenseKey) : false)
  const newEngine =  engine ? { engine: engine, engineError: null, errorCode: null } :  useEngine(myConfig)

  const text = `Powered by Motor`;
  const beginAlarm = function() { console.error('License breach! Communicating to remote server'); };
  
  const options = {
    chunkWidth: 200,
    chunkHeight: 90,
    textAlign: "left",
    textBaseline: "bottom",
    globalAlpha: 0.47,
    font: "18px Roboto sans-serif",
    rotateAngle: -0.19,
    fillStyle: "#EA4345",
  };

  console.log('RENDER')
  return (
    <EngineContext.Provider value={newEngine}>
      <ThemeProvider theme={theme}>
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
        { !validLicense ? 
            <ReactWaterMark
              waterMarkText={text}
              openSecurityDefense
              securityAlarm={beginAlarm}
              options={options}
            >
            {children}
           </ReactWaterMark>
           :
           <div>
            {children}
           </div>
        }
      </ThemeProvider>
    </EngineContext.Provider>
  );
}

export default Motor;


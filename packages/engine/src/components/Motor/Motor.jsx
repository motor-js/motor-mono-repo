import React, { useState } from "react";
import ReactWaterMark from "../Watermark"
import { EngineContext } from "../../contexts/EngineProvider";
import Login from "../Login";
import NotConnected from "../NotConnected";
import useEngine from "../../hooks/useEngine";
import { LicenseCheck } from "../License/LicenseCheck"
import { deepMerge } from '../../utils/object'

function Motor({
  engine,
  theme,
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

  const engineState = engine
  const validLicense = licenseKey ? LicenseCheck(licenseKey) : false  
  const newEngine = useEngine({config, engineState})

  const text = `Powered by Motor`;
  const beginAlarm = function() { console.error('License breach! Communicating to remote server'); };
  
  const nextTheme = deepMerge(defaultTheme, theme)

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

  return (
    <EngineContext.Provider value={newEngine}>
        <Login
          config={config}
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
          config={config}
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
    </EngineContext.Provider>
  );
}

export default Motor;


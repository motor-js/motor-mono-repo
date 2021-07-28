import React, { useEffect, useState } from "react";
import ReactWaterMark from "react-watermark-component"
import { EngineContext } from "../../contexts/EngineProvider";
import Login from "../Login";
import NotConnected from "../NotConnected";
import useEngine from "../../hooks/useEngine";
import { LicenseCheck } from "../License/LicenseCheck"

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
  const [validLicense, setValidLicense] = useState(true)
  const newEngine =  engine ? { engine: engine, engineError: null, errorCode: null } :  useEngine(myConfig)

  // check license key
  const userKey = licenseKey ? LicenseCheck(licenseKey) : []

  // check if license key is valid
  useEffect(() => {
    userKey.length > 0 ? setValidLicense(true) : setValidLicense(false)
  },[licenseKey])
  
  const text = `Powered by Motor`;
  const beginAlarm = function() { console.error('start alarm!'); };
  
  const options = {
    chunkWidth: 200,
    chunkHeight: 90,
    textAlign: "left",
    textBaseline: "bottom",
    globalAlpha: 0.27,
    font: "16px Roboto sans-serif",
    rotateAngle: -0.19,
    fillStyle: "#666",
  };

  return (
    <EngineContext.Provider value={newEngine}>
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
    </EngineContext.Provider>
  );
}

export default Motor;

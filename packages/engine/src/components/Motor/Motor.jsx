import React, { useState } from "react";
import { EngineContext } from "../../contexts/EngineProvider";
import Login from "../Login";
import NotConnected from "../NotConnected";
import useEngine from "../../hooks/useEngine";

function Motor({
  children,
  config,
  logo,
  logoWidth,
  logoHeight,
  header,
  body,
  size,
  buttonText,
  buttonFontColor,
  buttonColor,
  backgroundColor,
  capabilityAPI,
  loginfontFamily,
  NotConnectedheader,
  NotConnectedBody,
  NotConnectedButtonText,
}) {
  //const [myTheme, setMyTheme] = useState(defaultTheme)
  const [myConfig, setMyConfig] = useState(config);

  const engine = useEngine(myConfig);

  return (
    <EngineContext.Provider value={engine}>
          <Login
            logo={logo}
            logoHeight={logoHeight}
            logoWidth={logoWidth}
            header={header}
            body={body}
            size={size}
            backgroundColor={backgroundColor}
            buttonText={buttonText}
            buttonFontColor={buttonFontColor}
            buttonColor={buttonColor}
            loginfontFamily={loginfontFamily}
          />
          <NotConnected
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
    </EngineContext.Provider>
  );
}

export default Motor;

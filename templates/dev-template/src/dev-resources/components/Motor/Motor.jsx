import React, { useState } from "react";
import { EngineContext } from "../../contexts/EngineProvider";
import { ConfigContext } from "../../contexts/ConfigProvider";
import { CapabilityContext } from "../../contexts/CapabilityProvider";
import Login from "../Login";
import NotConnected from "../NotConnected";
import useEngine from "../../hooks/useEngine";
import useCapability from "../../hooks/useCapability";

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
}) {
  //const [myTheme, setMyTheme] = useState(defaultTheme)
  const [myConfig, setMyConfig] = useState(config);

  const engine = useEngine(myConfig);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const app = capabilityAPI ? useCapability(myConfig) : {};

  // eslint-disable-next-line react/react-in-jsx-scope
  return (
    <EngineContext.Provider value={engine}>
      <CapabilityContext.Provider value={app}>
        <ConfigContext.Provider value={myConfig}>
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
          <NotConnected />
          {children}
        </ConfigContext.Provider>
      </CapabilityContext.Provider>
    </EngineContext.Provider>
  );
}

export default Motor;

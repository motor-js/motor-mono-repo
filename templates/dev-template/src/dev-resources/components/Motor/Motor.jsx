import React, { useState } from "react";
import { EngineContext } from "../../contexts/EngineProvider";
import { ConfigContext } from "../../contexts/ConfigProvider";
// import { CapabilityContext } from '../../contexts/CapabilityProvider'
//import Login from '../Login'
//import NotConnected from '../NotConnected'
import useEngine from "../../hooks/useEngine";
import useCapability from "../../hooks/useCapability";

function Motor({
  children,
  config,
  logo,
  logoWidth,
  logoHeight,
  capabilityAPI,
}) {
  //const [myTheme, setMyTheme] = useState(defaultTheme)
  const [myConfig, setMyConfig] = useState(config);

  const engine = useEngine(myConfig);

  // const app = capabilityAPI ? useCapability(myConfig) : {}
  const app = {};

  // eslint-disable-next-line react/react-in-jsx-scope
  return (
    <EngineContext.Provider value={engine}>
      {/* <CapabilityContext.Provider value={app}> */}
      <ConfigContext.Provider value={myConfig}>
        {/*<Login logo={logo} logoHeight={logoHeight} logoWidth={logoWidth} />*/}
        {/*<NotConnected />*/}
        {children}
      </ConfigContext.Provider>
      {/* </CapabilityContext.Provider> */}
    </EngineContext.Provider>
  );
}

export default Motor;

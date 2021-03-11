import React, { useContext } from "react";
import PropTypes from "prop-types";
// import { ThemeContext } from "styled-components";
import { ConfigContext } from "../../contexts/ConfigProvider";
// import defaultTheme from "../../themes/defaultTheme";
import StyledNotConnected from "./StyledNotConnected";
import { EngineContext } from "../../contexts/EngineProvider";
import useEngine from "../../hooks/useEngine";

const NotConnected = ({ config, ...rest }) => {
  // const myConfig = config || useContext(ConfigContext);
  const stdConfig = useContext(ConfigContext);
  const myConfig = config || stdConfig;

  // const myTheme = useContext(ThemeContext) || defaultTheme;
  const myTheme = null;
  // const { errorCode } = useContext(EngineContext) || useEngine(myConfig);
  const engineContext = useContext(EngineContext);
  const engineConfigContext = useEngine(myConfig);
  const { errorCode } = engineContext || engineConfigContext;

  return (
    <div
      errorCode={errorCode}
      style={{ display: errorCode === -3 ? "" : "none" }}
    >
      {myConfig && errorCode && (
        <StyledNotConnected theme={myTheme} {...rest} />
      )}
    </div>
  );
};

NotConnected.propTypes = {
  header: PropTypes.string,
  body: PropTypes.string,
  size: PropTypes.oneOf(["tiny", "small", "medium", "large", "xlarge"]),
  buttonText: PropTypes.string,
  backgroundColor: PropTypes.string,
  buttonFontColor: PropTypes.string,
  buttonColor: PropTypes.string,
};

export default NotConnected;

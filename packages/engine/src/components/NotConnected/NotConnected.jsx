import React, { useContext } from "react";
import PropTypes from "prop-types";
import StyledNotConnected from "./StyledNotConnected";
import { EngineContext } from "../../contexts/EngineProvider";
import useEngine from "../../hooks/useEngine";

const NotConnected = ({ config, ...rest }) => {
  // const { errorCode } = useContext(EngineContext) || useEngine(myConfig);
  const engineContext = useContext(EngineContext);
  //const engineConfigContext = useEngine({ config, engineState: null})
  const { errorCode } = engineContext //|| engineConfigContext;

  return (
    <div
      // errorCode={errorCode}
      style={{ display: errorCode === -3 ? "" : "none" }}
    >
      {config && errorCode && <StyledNotConnected {...rest} />}
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
  loginfontFamily: PropTypes.string,
};

NotConnected.defaultProps = {
  header: "Connection to server lost",
  body: "Please reload the page to refresh the dashboard",
  size: "medium",
  buttonText: "Reload Page",
  backgroundColor: "white",
  buttonFontColor: "white",
  buttonColor: "#ff6961",
  loginfontFamily: "Inter,sans-serif",
};

export default NotConnected;

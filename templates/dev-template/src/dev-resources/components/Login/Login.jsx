import React, { useContext } from "react";
import PropTypes from "prop-types";
// import { ThemeContext } from "styled-components";
import { ConfigContext } from "../../contexts/ConfigProvider";
// import defaultTheme from "../../themes/defaultTheme";
import StyledLogin from "./StyledLogin";
import { EngineContext } from "../../contexts/EngineProvider";

const Login = ({ config, ...rest }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const myConfig = config || useContext(ConfigContext);

  // const myTheme = useContext(ThemeContext) || defaultTheme;
  const myTheme = null;
  const { errorCode } = useContext(EngineContext);

  return (
    <div
      // errorCode={errorCode}
      // style={{ display: props.errorCode === -1 ? "" : "none" }}
      style={{ display: errorCode === -1 ? "" : "none" }}
    >
      {myConfig && errorCode && <StyledLogin config={myConfig} {...rest} />}
    </div>
  );
};

Login.propTypes = {
  config: PropTypes.object,
  header: PropTypes.string,
  body: PropTypes.string,
  size: PropTypes.oneOf(["tiny", "small", "medium", "large", "xlarge"]),
  buttonText: PropTypes.string,
  backgroundColor: PropTypes.string,
  buttonFontColor: PropTypes.string,
  buttonColor: PropTypes.string,
  logo: PropTypes.string,
  logoHeight: PropTypes.string,
  logoWidth: PropTypes.string,
  header: PropTypes.string,
  loginfontFamily: PropTypes.string,
};

Login.defaultProps = {
  config: null,
  logo: null,
  logoHeight: null,
  logoWidth: null,
  header: "Welcome to your motor js mashup",
  body: "Please log on to access your application",
  size: "medium",
  buttonText: "Login",
  backgroundColor: "white",
  buttonFontColor: "white",
  buttonColor: "#ff6961",
  loginfontFamily: "Inter,sans-serif",
};

export default Login;

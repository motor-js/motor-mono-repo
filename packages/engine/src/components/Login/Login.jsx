import React, { useContext } from "react";
import PropTypes from "prop-types";
import StyledLogin from "./StyledLogin";
import { EngineContext } from "../../contexts/EngineProvider";

const Login = ({ config, ...rest }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { errorCode } = useContext(EngineContext);

  return (
    <div style={{ display: errorCode === -1 ? "" : "none" }}>
      {config && errorCode && <StyledLogin config={config} {...rest} />}
    </div>
  );
};

Login.propTypes = {
  config: PropTypes.object,
  header: PropTypes.string,
  body: PropTypes.string,
  bodySub: PropTypes.string,
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
  bodySub: "",
  size: "medium",
  buttonText: "Login",
  backgroundColor: "white",
  buttonFontColor: "white",
  buttonColor: "#ff6961",
  loginfontFamily: "Inter,sans-serif",
};

export default Login;

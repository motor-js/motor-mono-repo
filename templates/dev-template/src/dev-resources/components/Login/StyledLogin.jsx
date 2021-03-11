import React from "react";
// import Button from "../Button";
// import Box from "../Box";

const StyledLogin = ({
  config,
  header,
  body,
  size,
  buttonText,
  backgroundColor,
  buttonFontColor,
  buttonColor,
  theme,
  logo,
  logoHeight,
  logoWidth,
  color,
}) => {
  const {
    global: { login },
  } = theme;

  const tenantUri = config.host;
  const webIntegrationId = config.webIntId;

  const goToLogin = () => {
    const loginUrl = new URL(`https://${tenantUri}/login`);
    loginUrl.searchParams.append("returnto", window.location.href);
    loginUrl.searchParams.append("qlik-web-integration-id", webIntegrationId);
    window.location.href = loginUrl;
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1040,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(105, 105, 105, 0.8)",
        display: "flex",
      }}
    >
      <div
        color={backgroundColor || login.backgroundColor}
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          position: "relative",
          margin: 0.2,
          padding: "5px",
          backgroundColor: color,
          border: "1px solid gray",
          borderRadius: "8px",
          width: "30%",
          minWidth: "350px",
          top: "30%",
          left: "35%",
          alignLelf: "flex-start",
        }}
      >
        <div
          focusable={false}
          width="100%"
          border="bottom"
          justifyContent="center"
        >
          <div
            size={size || login.size}
            style={{ padding: "0.6rem", fontSize: "16px" }}
          >
            {logo ? (
              <img
                src={logo}
                height={logoHeight}
                width={logoWidth}
                alt="Logo"
              ></img>
            ) : (
              header || login.header
            )}
          </div>
        </div>
        <div
          focusable={false}
          width="100%"
          justifyContent="center"
          align="center"
          direction="column"
          padding="0.8rem"
        >
          <div size={size || login.size}>
            {body || login.body} style={{ padding: "0.6rem" }}
          </div>
          <button
            size={size || login.size}
            fontColor={buttonFontColor || login.buttonFontColor}
            color={buttonColor || login.buttonColor}
            onClick={goToLogin}
          >
            {buttonText || login.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default StyledLogin;

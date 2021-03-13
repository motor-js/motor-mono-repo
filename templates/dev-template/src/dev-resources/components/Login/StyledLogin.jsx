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
  // const {
  //   global: { login },
  // } = theme;

  const login = {
    header: "Welcome to your motor js mashup",
    body: "Please log on to access your application",
    size: "medium",
    buttonText: "Login",
    backgroundColor: "white",
    buttonFontColor: "white",
    buttonColor: "brand",
  };

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
          backgroundColor: "white",
          border: "1px solid gray",
          borderRadius: "8px",
          width: "30%",
          minWidth: "350px",
          top: "30%",
          left: "35%",
          alignSelf: "flex-start",
        }}
      >
        <div
          style={{
            fontFamily: "Inter,sans-serif",
            width: "100%",
            // display: "-webkit-box",
            // display: "-webkit-flex",
            // display: "-ms-flexbox",
            display: "flex",
            boxSizing: "border-box",
            borderBottom: "solid 1px #ced4da",
            WebkitBoxPack: "center",
            WebkitJustifyContent: "center",
            msFlexPack: "center",
            justifyContent: "center",
            overflow: "visible",
            WebkitFlexDirection: "row",
            msFlexDirection: "row",
            flexDirection: "row",
            WebkitFlex: "0 0 auto",
            msFlex: "0 0 auto",
            flex: "0 0 auto",
          }}
        >
          <div
            size={size || login.size}
            style={{ padding: "0.6rem", fontSize: "18px" }}
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
          style={{
            fontFamily: "Inter,sans-serif",
            width: "100%",
            // display: -webkit-box;
            // display: -webkit-flex;
            // display: -ms-flexbox;
            display: "flex",
            boxSizing: "border-box",
            padding: "0.8rem",
            WebkitAlignItems: "center",
            WebkitBoxAlign: "center",
            msFlexAlign: "center",
            alignItems: "center",
            WebkitBoxPack: "center",
            WebkitJustifyContent: "center",
            msFlexPack: "center",
            justifyContent: "center",
            overflow: "visible",
            WebkitFlexDirection: "column",
            msFlexDirection: "column",
            flexDirection: "column",
            WebkitFlex: "column",
            msFlex: "0 0 auto",
            flex: "0 0 auto",
          }}
        >
          <div style={{ padding: "0.6rem", fontSize: "14px" }}>
            {body || login.body}
          </div>
          <button
            style={{
              fontFamily: "Inter,sans-serif",
              fontSize: "14px",
              cursor: "pointer",
              position: "relative",
              margin: "5px",
              backgroundColor: "#ff6961",
              borderRadius: "8px",
              color: "white",
              border: 0,
              outline: "none",
              WebkitTransition: "none",
              transition: "none",
              padding: "0.7em 1.7em",
            }}
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

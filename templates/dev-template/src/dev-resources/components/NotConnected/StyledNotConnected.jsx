import React from "react";
// import Button from "../Button";
// import Box from "../Box";

const StyledNotConnected = ({
  header,
  body,
  size,
  buttonText,
  backgroundColor,
  buttonFontColor,
  buttonColor,
  theme,
  color, // new
}) => {
  // const {
  //   global: { notConnected },
  // } = theme;

  const notConnected = {
    header: "Connection to server lost",
    body: "Please reload the page to refresh the dashboard",
    size: "medium",
    buttonText: "Reload Page",
    backgroundColor: "white",
    buttonFontColor: "white",
    buttonColor: "brand",
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
        color={backgroundColor || notConnected.backgroundColor}
        style={{
          display: "flex",
          // justifyContent: "center",
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
          alignSelf: "flex-start",
        }}
      >
        <div
          focusable={false}
          width="100%"
          border="bottom"
          // justifyContent="center"
        >
          <div
            size={size || notConnected.size}
            style={{ padding: "0.8rem", fontSize: "16px" }}
          >
            {header || notConnected.header}
          </div>
        </div>
        <div
          focusable={false}
          width="100%"
          // justifyContent="center"
          align="center"
          direction="column"
          padding="0.8rem"
        >
          <div size={size || notConnected.size} style={{ padding: "0.6rem" }}>
            {body || notConnected.body}
          </div>
          <button
            size={size || notConnected.size}
            style={{
              fontColor: buttonFontColor || notConnected.buttonFontColor,
              color: buttonColor || notConnected.buttonColor,
            }}
            // eslint-disable-next-line  no-restricted-globals
            onClick={() => location.reload()}
          >
            {buttonText || notConnected.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default StyledNotConnected;

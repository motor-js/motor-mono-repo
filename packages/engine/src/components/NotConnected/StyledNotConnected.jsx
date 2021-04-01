import React from "react";

const StyledNotConnected = ({
  header,
  body,
  size,
  buttonText,
  backgroundColor,
  buttonFontColor,
  buttonColor,
  loginfontFamily,
}) => {
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
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          position: "relative",
          margin: 0.2,
          padding: "5px",
          backgroundColor,
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
            fontFamily: loginfontFamily,
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
          <div size={size} style={{ padding: "0.8rem", fontSize: "16px" }}>
            {header}
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
          <div
            size={size}
            style={{
              padding: "0.6rem",
              fontSize: "14px",
              fontFamily: loginfontFamily,
            }}
          >
            {body}
          </div>
          <button
            style={{
              fontFamily: loginfontFamily,
              fontSize: "14px",
              cursor: "pointer",
              position: "relative",
              margin: "5px",
              backgroundColor: buttonColor,
              borderRadius: "8px",
              color: buttonFontColor,
              border: 0,
              outline: "none",
              WebkitTransition: "none",
              transition: "none",
              padding: "0.7em 1.7em",
            }}
            // eslint-disable-next-line  no-restricted-globals
            onClick={() => location.reload()}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default StyledNotConnected;

import React, { useContext } from "react";
import ReactWaterMark from "../Watermark"
import { EngineContext } from "../../contexts/EngineProvider";
import { ConfigContext } from "../../contexts/ConfigProvider";
import Login from "../Login";
import QSELogin from "../QSELogin";
import NotConnected from "../NotConnected";
import useEngine from "../../hooks/useEngine";
import { LicenseCheck } from "../License/LicenseCheck"
import { MotorTicketContext } from "../../store/TicketStore"

function Motor({
  engine,
  children,
  licenseKey,
  config,
  logo,
  logoWidth,
  logoHeight,
  header,
  body,
  bodySub,
  size,
  buttonText,
  buttonFontColor,
  buttonColor,
  backgroundColor,
  loginfontFamily,
  NotConnectedheader,
  NotConnectedBody,
  NotConnectedButtonText,
}) {

  const test = useContext(MotorTicketContext)
  const [state] = useContext(MotorTicketContext)
  const engineState = engine
  const validLicense = licenseKey ? LicenseCheck(licenseKey) : false  
  const newEngine = useEngine({config, engineState, state})
  const newLoginUri = newEngine && newEngine.loginUri
  console.log('newEngine! ',newEngine)
  const text = `Powered by Motor`;
  const beginAlarm = function() { console.error('License breach! Communicating to remote server'); };

  const options = {
    chunkWidth: 200,
    chunkHeight: 90,
    textAlign: "left",
    textBaseline: "bottom",
    globalAlpha: 0.47,
    font: "18px Roboto sans-serif",
    rotateAngle: -0.19,
    fillStyle: "#EA4345",
  };

  return (
    <EngineContext.Provider value={newEngine}>
      <ConfigContext.Provider value={config}>
      { config.qsServerType === 'onPrem' && config.authType !== 'ticket' &&
      <div>
        <QSELogin
          config={config}
          loginUri={newLoginUri}
          logo={logo}
          logoHeight={logoHeight}
          logoWidth={logoWidth}
          header={header}
          body={body}
          bodySub={bodySub}
          size={size}
          backgroundColor={backgroundColor}
          buttonText={buttonText}
          buttonFontColor={buttonFontColor}
          buttonColor={buttonColor}
          loginfontFamily={loginfontFamily}
      />
      <NotConnected
        config={config}
        header={NotConnectedheader}
        body={NotConnectedBody}
        size={size}
        buttonText={NotConnectedButtonText}
        backgroundColor={backgroundColor}
        buttonFontColor={buttonFontColor}
        buttonColor={buttonColor}
        loginfontFamily={loginfontFamily}
      />
      </div>
      }
       { config.qsServerType === 'onPrem' && config.authType === 'ticket' &&
      <div>
        <NotConnected
          config={config}
          header={NotConnectedheader}
          body={NotConnectedBody}
          size={size}
          buttonText={NotConnectedButtonText}
          backgroundColor={backgroundColor}
          buttonFontColor={buttonFontColor}
          buttonColor={buttonColor}
          loginfontFamily={loginfontFamily}
        />
       </div>
      }
      { config.qsServerType !== 'onPrem' &&
      <div>
        <Login
          config={config}
          logo={logo}
          logoHeight={logoHeight}
          logoWidth={logoWidth}
          header={header}
          body={body}
          bodySub={bodySub}
          size={size}
          backgroundColor={backgroundColor}
          buttonText={buttonText}
          buttonFontColor={buttonFontColor}
          buttonColor={buttonColor}
          loginfontFamily={loginfontFamily}
        />
        <NotConnected
          config={config}
          header={NotConnectedheader}
          body={NotConnectedBody}
          size={size}
          buttonText={NotConnectedButtonText}
          backgroundColor={backgroundColor}
          buttonFontColor={buttonFontColor}
          buttonColor={buttonColor}
          loginfontFamily={loginfontFamily}
        />
       </div>
      }
      <div>
        { !validLicense ? 
            <ReactWaterMark
              waterMarkText={text}
              openSecurityDefense
              securityAlarm={beginAlarm}
              options={options}
            >
            {children}
           </ReactWaterMark>
           :
           <div>
            {children}
           </div>
        }
        </div>
      </ConfigContext.Provider>
    </EngineContext.Provider>
  );
}

export default Motor;


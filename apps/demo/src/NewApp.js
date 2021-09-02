import { Motor } from "@motor-js/engine";
import useConnect from "./useConnect";
import App from "./App";
//import { NebulaConnection } from '@motor-js/nebula'

const NewApp = () => {
  const config = {
    //Enter your app config here..
    host: "motor.eu.qlikcloud.com",
    secure: true,
    port: null,
    prefix: "",
    appId: "bc5878d0-2d3c-49ad-80cb-c35e5fa5cbe9",
    webIntId: "4Tx-ydWxSQEM_q1ajlYBVzGgVUVJUo-i",
    qcs: true,
  };

  const { engine } = useConnect({ config });
  
  return (
    <>
      {/* { engine &&  */}
      <Motor //engine={engine}
        config={{
          host: "motor.eu.qlikcloud.com", // Qlik Sense Host
          secure: true, // Whether your host is secure of not (HTTPS / HTTP)
          port: null, // Qlik Sense site port
          prefix: "", // Prefix
          appId: "bc5878d0-2d3c-49ad-80cb-c35e5fa5cbe9", // Application Id
          webIntId: "4Tx-ydWxSQEM_q1ajlYBVzGgVUVJUo-i", // Web Integration Id, for connection to Qlik cloud
          qcs: true, // whether you are connecting to a Qlik Cloud site or not
        }}
      >
        <App />
      </Motor>
      {/* } */}
    </>
  );
};

export default NewApp;

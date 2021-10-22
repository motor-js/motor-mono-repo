
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

 // const { engine } = useConnect({ config });
  
  return (
    <>
      {/* { engine &&  */}
        <App />
    </>
  );
};

export default NewApp;

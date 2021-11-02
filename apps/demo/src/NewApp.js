

import App from "./App";
import { useList, EngineContext } from '@motor-js/engine'
import { useContext } from "react";
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

  const dimension = ['Country']
  const { listData } = useList({ dimension })

  console.log(listData)

  return (
    <>
      {/* { engine &&  */}
       <div>TEST</div>
    </>
  );
};

export default NewApp;

import { Motor } from "@motor-js/engine";
import useConnect from "./useConnect";
import App from "./App";
import { NebulaConnection } from "@motor-js/nebula";

const NewApp = () => {

  const config= {
    //Enter your app config here..
    host: "motor.eu.qlikcloud.com",
    secure: true,
    port: null,
    prefix: "",
    appId: "0294cf88-eb02-484a-b315-cf06b45ac347",
    webIntId: "4Tx-ydWxSQEM_q1ajlYBVzGgVUVJUo-i",
    qcs: true,
  }

  const { engine } = useConnect({config})
  return (
    <>
    { engine && 
      <Motor engine={engine}>
        <NebulaConnection>
          <App />
        </NebulaConnection>
      </Motor>
    }
    </>
  )
}

export default NewApp
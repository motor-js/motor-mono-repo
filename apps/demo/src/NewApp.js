import App from "./App";
import { useList, useSearch, EngineContext } from '@motor-js/engine'
import { useContext, useState } from "react";
//import { NebulaConnection } from '@motor-js/nebula'
import MotorFilter from "./Filter"
import MaterialTable from "./components/MaterialTable";
import MotorKPI from "./KPI";
import { AppProvider } from "@motor-js/engine"

const NewApp = () => {

 //  const { engine } = useContext(EngineContext) 
 //  console.log('engine: ',engine)

  return (
    <div>
      <AppProvider 
      config={{
        host: "sense-motor.adviseinc.co.uk",
        secure: true,
        port: 19077,
        prefix: "",
        appId: "a6dfbb9f-b02a-401e-af98-349b4dd71458",
        redirectFileName: "auth1.html",
        qsServerType: "onPrem",
      }}>
      <MotorFilter
        dimension={["BURGER" ]}
        m={10}
      />
      </AppProvider>

      <AppProvider 
        config={{
          host: "sense-motor.adviseinc.co.uk",
          secure: true,
          port: 19077,
          prefix: "",
          appId: "cf38eabe-cf49-45c8-b006-9a6f38947669",
          redirectFileName: "auth1.html",
          qsServerType: "onPrem",
        }}>
      <MotorFilter
        dimension={["BURGER" ]}
        m={10}
      />
      </AppProvider>
      <div>
        {/*<MaterialTable /
        
              <div style={{ width: '400px', padding: '10px' }}><MotorKPI /></div>
              
              >*/}
      </div>
      
    </div>
  );
};

export default NewApp;

import App from "./App";
import { useList, useGlobal, useSearch, EngineContext } from '@motor-js/engine'
import { useContext, useState } from "react";
//import { NebulaConnection } from '@motor-js/nebula'
import MotorFilter from "./Filter"
import MaterialTable from "./components/MaterialTable";
import MotorKPI from "./KPI";
import { ThemeContext } from "@motor-js/theme"

const NewApp = () => {

 //  const { engine } = useContext(EngineContext) 
 //  console.log('engine: ',engine)
 const theme = useContext(ThemeContext)

 const { global } = useGlobal({
  host: "sense-motor.adviseinc.co.uk",
  secure: true,
  port: 19077,
  prefix: "",
  appId: "cf38eabe-cf49-45c8-b006-9a6f38947669",
  redirectFileName: "auth.html",
  qsServerType: "onPrem",
  global: true
});

console.log('global: ',global)

  return (
    <div>
      <MotorFilter
        dimension={["BURGER"]}
        m={10}
      />

      <div>
        {/*<MaterialTable /
        
              <div style={{ width: '400px', padding: '10px' }}><MotorKPI /></div>
              
              >*/}
      </div>
      
    </div>
  );
};

export default NewApp;

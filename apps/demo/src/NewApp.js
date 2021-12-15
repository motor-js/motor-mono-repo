import App from "./App";
import { useList, useGlobal, useSearch, EngineContext, AppProvider } from '@motor-js/engine'
import { useContext, useState } from "react";
//import { NebulaConnection } from '@motor-js/nebula'
import MotorFilter from "./Filter"
import MaterialTable from "./components/MaterialTable";
import MotorKPI from "./KPI";
import { ThemeContext } from "@motor-js/theme"
import { qlikConfig, globalConfig, qlikSAASConfig, qlikSAASConfig2 } from "./config.js";

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

const dimension = ['BURGER']

const { listData} = useList()

console.log('global: ',global)

  return (
    <div>
      <MotorFilter
        dimension={["BURGER"]}
        m={10}
      />
      {/* <AppProvider config={qlikSAASConfig2}> 
        <MotorFilter
          dimension={["Country"]}
          m={10}
        />
     </AppProvider> 
    <MaterialTable />*/}
    </div>
  );
};

export default NewApp;

import App from "./App";
import { useList, useSearch, EngineContext } from '@motor-js/engine'
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

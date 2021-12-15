import App from "./App";
import { useList, useGlobal, useSelections, useSearch, EngineContext, AppProvider } from '@motor-js/engine'
import { useContext, useState } from "react";
//import { NebulaConnection } from '@motor-js/nebula'
import MotorFilter from "./Filter"
import MaterialTable from "./components/MaterialTable";
import MotorKPI from "./KPI";
import { ThemeContext } from "@motor-js/theme"
import { qlikConfig, globalConfig, qlikSAASConfig, qlikSAASConfig2 } from "./config.js";

const NewApp = () => {


  const { selections, selectionItems } = useSelections()

  console.log('selections: ',selections)
  console.log('selectionsItems: ',selectionItems)


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

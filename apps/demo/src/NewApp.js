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

  return (
    <div>
      <MotorFilter
        dimension={["BURGER"]}
        m={50}
      />
    <MaterialTable />
    </div>
  );
};

export default NewApp;

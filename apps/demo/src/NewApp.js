import App from "./App";
import { useList, useSearch, EngineContext } from '@motor-js/engine'
import { useContext, useState } from "react";
//import { NebulaConnection } from '@motor-js/nebula'
import MotorFilter from "./Filter"
import MaterialTable from "./components/MaterialTable";

const NewApp = () => {

  // const { global } = useContext(EngineContext) 
  // console.log('GLOB: ',global)

  return (
    <div>
      <MotorFilter
        dimension={["BURGER" ]}
        m={10}
      />
      <MotorFilter
        dimension={["RESTAURANT" ]}
      />
      <div>
        <MaterialTable />
      </div>
    </div>
  );
};

export default NewApp;

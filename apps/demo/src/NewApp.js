import App from "./App";
import { useList, useSearch, EngineContext } from '@motor-js/engine'
import { useContext, useState } from "react";
//import { NebulaConnection } from '@motor-js/nebula'
import MotorFilter from "./Filter"

const NewApp = () => {

  return (
    <div>
      <MotorFilter
        dimension={["BURGER" ]}
        m={10}
      />
      <MotorFilter
        dimension={["RESTAURANT" ]}
      />
    </div>
  );
};

export default NewApp;

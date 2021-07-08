import React from "react";
//import Table from "./components/TableExampleCompact";
//import ButtonComponent from "./components/ButtonComponent";
import { useList } from "@motor-js/engine"
import { NebulaContainer } from '@motor-js/nebula'
import MotorSelect from "./components/MotorSelect"
import { dark, light } from "./themes/theme.js"
import { EngineContext } from "@motor-js/engine"

export default function App() {

  const dimension = ['Company Name'];

  const {
    listData,
    motorListProps,
  } = useList({
    dimension,
  });


  /*
  To Do:
  - Add color prop for select color - should mirror table
  - Add size prop
  - 
  */


  return (
    <div className="App" style={{ padding: "10px" }}>
      test
    <NebulaContainer  
      render={{ id: 'jVfmGat' }}
      styles={{ width: '80%', height: 400, paddingTop: 50}}
    />
      {/*<MotorSelect 
        listData={listData}
        motorListProps={motorListProps}
        theme={dark}
        isMulti={true}
        closeMenuOnSelect={false}
        hideSelectedOptions={false}
        isSearchable={true}
        placeholder="Company Name.."
      />*/}
    </div>
  );
}

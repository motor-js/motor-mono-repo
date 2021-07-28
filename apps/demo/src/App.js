import React from "react";
//import Table from "./components/TableExampleCompact";
//import ButtonComponent from "./components/ButtonComponent";
import { useList, useData } from "@motor-js/engine"
import MotorSelect from "./components/MotorSelect"
import { dark, light } from "./themes/theme.js"
import { EngineContext } from "@motor-js/engine"
import { NebulaContainer } from '@motor-js/nebula'

export default function App() {

  const dimension = ['Company Name'];

  const {
    listData,
   // motorListProps,
  } = useList({
    dimension,
  });

  const qMetrics = [{
    qName: "KPI 1",
    qExpr: "=$(vQuantity)",
    qType: "qStringExpression"
  }]

  const {
    metrics,
  } = useData({
    qMetrics,
  });

  console.log('metric: ',metrics)

  /*
  To Do:
  - Add color prop for select color - should mirror table
  - Add size prop
  - 
  */


  return (
    <div className="App" style={{ padding: "10px" }}>
      <NebulaContainer 
        render={{
          id: 'pwHnpwK',
        }}
        styles={{
          width: '80%',
          height: 400,
          paddingTop: 50,
        }}
      />
     {/*} <MotorSelect 
        listData={listData}
        motorListProps={motorListProps}
        theme={light}
        isMulti={true}
        closeMenuOnSelect={false}
        hideSelectedOptions={false}
        isSearchable={true}
        placeholder="Company Name.."
      /> */}
    </div>
  );
}

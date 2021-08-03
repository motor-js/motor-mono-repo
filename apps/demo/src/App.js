import React from "react";
//import Table from "./components/TableExampleCompact";
//import ButtonComponent from "./components/ButtonComponent";
import { useList, useData } from "@motor-js/engine"
import MotorSelect from "./components/MotorSelect"
import { dark, light } from "./themes/theme.js"
import { EngineContext } from "@motor-js/engine"

export default function App() {

  const dimension = ['Company Name'];

  const {
    listData,
    layout,
    changePage,
   // motorListProps,
  } = useList({
    dimension,
  });
  
 // console.log('layout: ',layout)
 console.log('listData: ',listData)


  /*
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
*/

  const handleChangePage = () => ( changePage({ qTop: 100 }))

  return (
    <div className="App" style={{ padding: "10px" }}>
      <button onClick={handleChangePage}>change page</button>
    {/*  <NebulaContainer 
        render={{
          id: 'pwHnpwK',
        }}
        styles={{
          width: '80%',
          height: 400,
          paddingTop: 50,
        }}
      />
     } <MotorSelect 
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

import React from "react";
//import Table from "./components/TableExampleCompact";
//import ButtonComponent from "./components/ButtonComponent";
import { useList, useData, useTable } from "@motor-js/engine"
import MotorSelect from "./components/MotorSelect"
import { dark, light } from "./themes/theme.js"
import { EngineContext } from "@motor-js/engine"

export default function App() {

  const cols = 
  [{
    qField: "[OrderDateMonth]",
   // dataKey: 'Order',
    qLabel: "Order Date",
  },
  {
    qField: "=sum(Price)",
    qLabel: "Price",
  },
  {
    qField: "",
    qLibraryId: "dWHamW",
    qType: "measure",
   // dataKey: 'MI',
    qLabel: "Revenue",
    qNumType: 'M',
    qNumFmt: '#,##0'
  }]

  const { 
    dataSet,
  } = useData({
    cols
  })

 console.log('dataSet: ',dataSet)

  return (
    <div className="App" style={{ padding: "10px" }}>
      <button>change page</button>

    </div>
  );
}

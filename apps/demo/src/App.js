import React from "react";
//import Table from "./components/TableExampleCompact";
//import ButtonComponent from "./components/ButtonComponent";
import { useList, useData, useTable } from "@motor-js/engine"
import MotorSelect from "./components/MotorSelect"
import { dark, light } from "./themes/theme.js"
import { EngineContext } from "@motor-js/engine"

export default function App() {

  const cols = 
  [
    {
      qField: "=sum(Quantity * Price)",
      dataKey: "revenue",
      qLabel: "rev",
      qNumType: "M",
      qNumFmt: "£#,##0",
      columnCategory: 'Metrics'
    },
    {
      qField: "=sum(Quantity)",
      dataKey: "profit",
      qLabel: "profit",
      qNumType: "M",
      qNumFmt: "£#,##0",
      columnCategory: 'Metrics'
    },
    {
      qField: "[Company Name]",
      dataKey: "company",
      qLabel: "Company Name",
      columnCategory: 'Dimensions'
    },
    {
      qField: "[Company Name]",
      dataKey: "company1",
      qLabel: "Company",
      columnCategory: 'Dimensions'
    },
    {
      qField: "_Image",
      dataKey: "img",
      qLabel: "Image",
      columnCategory: 'Dimensions'
    },
    {
      qField: "Body Location",
      dataKey: "body_location",
      qLabel: "Body Location",
      columnCategory: 'Dimensions'
    },
    {
      qField: "Quantity",
      dataKey: "quantity",
      qLabel: "Quantity",
      columnCategory: 'Dimensions'
    },
    {
      qField: "Source",
      dataKey: "source",
      qLabel: "Source",
      columnCategory: 'Dimensions'
    }
]

  const { 
    dataSet,
  } = useTable({
    cols
  })

  console.log(dataSet)

  return (
    <div className="App" style={{ padding: "10px" }}>
      <button>change page</button>
    </div>
  );
}

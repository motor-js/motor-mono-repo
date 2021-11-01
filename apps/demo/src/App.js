import React from "react";
//import Table from "./components/TableExampleCompact";
//import ButtonComponent from "./components/ButtonComponent";
import { useList, useData, useTable } from "@motor-js/engine"
import { dark, light } from "./themes/theme.js"
import { EngineContext } from "@motor-js/engine"
import { Filter } from "@motor-js/components"

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
    }
]

const cols1 = [
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
]

const columns = React.useMemo(() => cols, [])

  const { 
    dataSet,
    updateCols,
    incrementPage
  } = useTable({
    cols
  })

  const dimension = ['Link']

  const {    
    listData,
    motorListProps,
  } = useList({
    dimension,
    autoSortByState: true
})

  const handleColsChange = () => updateCols(cols1)

  return (
    <div className="App">
      <button onClick={incrementPage}>change page</button>
      <Filter 
        listData={listData}
        motorListProps={motorListProps}
        p={20}
      /> 
    </div>
  );
}


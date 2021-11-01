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
  const pageHeight = 100

  const {    
    listData,
    motorListProps,
  } = useList({
    dimension,
    qPage: {
    qTop: 0,
    qLeft: 0,
    qWidth: 1,
    qHeight: pageHeight,
  },
  autoSortByState: true
})
  
  console.log(listData)

  const handleColsChange = () => updateCols(cols1)

  return (
    <div className="App" style={{ padding: "10px" }}>
      <button onClick={incrementPage}>change page</button>
      <Filter 
        listData={listData}
        colorTheme="pink"
        motorListProps={motorListProps}
        pageHeight={pageHeight}
        singleSelection={false}
        selectionLabelLimit={5}
        m={10}
        size="medium"
        placeholder="Select.."
        onSelectionChange={() => {}}
        unselectedFormatting="highlight"
    /> 
    </div>
  );
}


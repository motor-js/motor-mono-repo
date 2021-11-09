import React, { useState } from "react";
//import Table from "./components/TableExampleCompact";
//import ButtonComponent from "./components/ButtonComponent";
import { useList, useData, useTable } from "@motor-js/engine"
import { EngineContext, useSearch } from "@motor-js/engine"
import { Filter } from "@motor-js/components"
import useConnect from "./useConnect"
import { Motor } from "@motor-js/engine";
import { ThemeProvider, defaultTheme, extendTheme } from "@motor-js/theme";
import { theme } from "./theme/theme"
import NewApp from "./NewApp.js";

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

  const config = {
    host: "sense-motor.adviseinc.co.uk",
    secure: true,
    port: 19077,
    prefix: "",
    appId: 'a6dfbb9f-b02a-401e-af98-349b4dd71458',
    redirectFileName: 'auth3.html'
  }

  const { engine, errorCode, loginUri, user } = useConnect({ config })


 const newTheme = extendTheme(theme)

  return (
    <div className="App" style={{ padding: "10px" }}>
      <ThemeProvider theme={defaultTheme}>
          <Motor engine={engine}
          /*
            config={{
              host: "motor.eu.qlikcloud.com",
              secure: true,
              port: null,
              prefix: "",
              appId: "f3c7c25f-90da-4286-ac1d-ca9885d89605",
              webIntId: "4Tx-ydWxSQEM_q1ajlYBVzGgVUVJUo-i",
              qcs: true,
            }}*/
          >
          <NewApp />
        </Motor> 
      </ThemeProvider>
    </div>
  );
}


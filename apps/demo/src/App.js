import React, { useState } from "react";
//import Table from "./components/TableExampleCompact";
//import ButtonComponent from "./components/ButtonComponent";
import { useList, useData, useTable } from "@motor-js/engine"
import { dark, light } from "./themes/theme.js"
import { EngineContext, useSearch } from "@motor-js/engine"
import { Filter } from "@motor-js/components"
import useConnect from "./useConnect"
import { Motor } from "@motor-js/engine";

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
    host: "motor.eu.qlikcloud.com", // Qlik Sense Host
    secure: true, // Whether your host is secure of not (HTTPS / HTTP)
    port: null, // Qlik Sense site port
    prefix: "", // Prefix
    appId: "f3c7c25f-90da-4286-ac1d-ca9885d896059", // Application Id
    webIntId: "4Tx-ydWxSQEM_q1ajlYBVzGgVUVJUo-i", // Web Integration Id, for connection to Qlik cloud
    qcs: true, // whether you are connecting to a Qlik Cloud site or not
  }

 // const { engine} = useConnect({config})

  return (
    <div className="App" style={{ padding: "10px" }}>
        <Motor 
          config={{
            host: "motor.eu.qlikcloud.com",
            secure: true,
            port: null,
            prefix: "",
            appId: "f3c7c25f-90da-4286-ac1d-ca9885d89605",
            webIntId: "4Tx-ydWxSQEM_q1ajlYBVzGgVUVJUo-i",
            qcs: true,
          }}
        >
      <NewApp />
      </Motor> 
    </div>
  );
}


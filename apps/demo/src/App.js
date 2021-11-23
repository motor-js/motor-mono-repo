import React, { useState } from "react";
import { Motor } from "@motor-js/engine";
import { ThemeProvider, defaultTheme, extendTheme } from "@motor-js/theme";
import NewApp from "./NewApp.js";

export default function App() {


  const config = {
    host: "sense-motor.adviseinc.co.uk",
    secure: true,
    port: 19077,
    prefix: "",
    appId: 'a6dfbb9f-b02a-401e-af98-349b4dd71458',
    redirectFileName: 'auth3.html'
  }


  const qse = {
    host: "sense-motor.adviseinc.co.uk",
    secure: true,
    port: 19077,
    prefix: "",
    appId: "a6dfbb9f-b02a-401e-af98-349b4dd71458",
    redirectFileName: "auth1.html",
    qsServerType: "onPrem",
    global: false
  };

  const cloud = {
    host: "motor.eu.qlikcloud.com",
    secure: true,
    port: null,
    prefix: "",
    appId: "f3c7c25f-90da-4286-ac1d-ca9885d89605",
    webIntId: "4Tx-ydWxSQEM_q1ajlYBVzGgVUVJUo-i",
    qsServerType: "cloud",
    qcs: true,
  }

  const newTheme={
    filter: {
      border: '1px solid red',
      borderRadius: '5rem'
    }
  }
  
  const theme1 = extendTheme(newTheme, defaultTheme)
  console.log(theme1)

  return (
    <div className="App" style={{ padding: "10px" }}>
       <ThemeProvider theme={newTheme}>
          <Motor
            config={cloud}
          >
          <NewApp />
        </Motor> 
      </ThemeProvider>
    </div>
  );
}


import React, { useState } from "react";
import { Motor, AppProvider } from "@motor-js/engine";
import { ThemeProvider, defaultTheme, extendTheme } from "@motor-js/theme";
import NewApp from "./NewApp.js";
import Iframe from 'react-iframe'
import { qlikConfig, globalConfig } from "./config.js";

export default function App() {


  return (
    <div className="App" style={{ padding: "10px" }}>
        <Motor config={globalConfig}>
          <AppProvider config={qlikConfig}>
          <NewApp />
          </AppProvider>
        </Motor> 
    </div>
  );
}


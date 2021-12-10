import React, { useState } from "react";
import { Motor, AppProvider } from "@motor-js/engine";
import { ThemeProvider, defaultTheme, extendTheme } from "@motor-js/theme";
import NewApp from "./NewApp.js";
import Iframe from 'react-iframe'
import { qlikConfig, globalConfig, qlikSAASConfig, qlikSAASConfig2, globalSAASConfig } from "./config.js";

export default function App() {

  return (
    <div className="App" style={{ padding: "10px" }}>
        <Motor 
        config={qlikSAASConfig}
        >
          <NewApp />
        </Motor> 
    </div>
  );
}


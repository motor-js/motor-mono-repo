import React, { useState } from "react";
import { Motor, AppProvider } from "@motor-js/engine";
import { ThemeProvider, defaultTheme, extendTheme } from "@motor-js/theme";
import NewApp from "./NewApp.js";
import Iframe from 'react-iframe'
import { qlikAppProxy, qlikApp2, globalConfig, qlikSAASConfig, qlikSAASConfig2, globalSAASConfig } from "./config.js";

export default function App() {

  const newTheme = defaultTheme //extendTheme({ filter: { size: { medium: { fontSize: '50px' }}}})

  return (
    <div className="App" style={{ padding: "10px" }}>
      <Motor config={qlikAppProxy}>
        <ThemeProvider theme={newTheme}>
          <NewApp />
        </ThemeProvider>
      </Motor> 
    </div>
  );
}


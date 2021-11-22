import React from "react";
import ReactWaterMark from "../Watermark"
import { AppContext } from "../../contexts/AppContext";
import { ConfigContext } from "../../contexts/ConfigProvider";
import useEngine from "../../hooks/useEngine";

function AppProvider({
  engine,
  children,
  config,
}) {

  const engineState = engine
  const newEngine = useEngine({config, engineState})

  return (
    <AppContext.Provider value={newEngine}>
        {children}
    </AppContext.Provider>
  );
}

export default AppProvider;


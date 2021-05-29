import { useContext, useState, useEffect } from "react";
import { EngineContext } from "../contexts/EngineProvider";

const useApp = () => {
  const { engine } = useContext(EngineContext) || {};
  const [app, setApp] = useState(null);
  const [appLayout, setAppLayout] = useState(null);
  const [appName, setAppName] = useState(null);
  const [lastReloadTime, setLastRelaodTime] = useState(null);

  useEffect(
    () =>
      (async () => {
        if (engine === undefined) {
        } else {
          const qDoc = await engine;

          const qAppLayout = await qDoc.getAppLayout();
          // console.log('qDoc',qDoc)
          setApp(qDoc);
          setAppLayout(qAppLayout);
          setAppName(qAppLayout.qTitle);
          setLastRelaodTime(qAppLayout.qLastReloadTime);
        }
      })(),
    [engine]
  );

  return { app, appLayout, appName, lastReloadTime };
};

export default useApp;

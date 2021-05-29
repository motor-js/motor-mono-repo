import { useContext, useState, useEffect } from "react";
import { EngineContext } from "../contexts/EngineProvider";

const useApp = () => {
  const { engine } = useContext(EngineContext) || {};
  const [qApp, setApp] = useState();

  useEffect(
    () =>
      (async () => {
        if (engine === undefined) {
        } else {
          const qDoc = await engine;

          const appProperties = await qDoc.getAppProperties();
          setApp({
            app: qDoc,
            appProperties,
            ...appProperties,
          });
        }
      })(),
    [engine]
  );

  return {
    ...qApp,
  };
};

export default useApp;

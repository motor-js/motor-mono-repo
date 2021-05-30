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

          //  const variables = await qDoc.doReload({
          //    qMode: 1,
          //    qPartial: true,
          //    qDebug: true,
          //  });
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

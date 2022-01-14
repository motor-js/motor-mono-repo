import { useContext, useState, useEffect } from "react";
import { EngineContext } from "../contexts/EngineProvider";
import { AppContext } from "../contexts/AppContext";

const useApp = () => {
  const { engine } =
    useContext(
      AppContext._currentValue !== undefined ? AppContext : EngineContext
    ) || {};
  const [qApp, setApp] = useState();

  const doReload = async (
    qMode = 0,
    qPartial = false,
    qDebug = false,
    qReturnReloadTime = true
  ) => {
    const qDoc = await engine;

    const result = await qDoc.doReload(qMode, qPartial, qDebug);
    const appInfo = await qDoc.getAppProperties({});
    if (qReturnReloadTime) {
      return {
        qReloadResult: result,
        qLastReloadTime: appInfo.qLastReloadTime,
      };
    }

    return result;
  };

  useEffect(
    () =>
      (async () => {
        if (!engine) return;

        const qDoc = await engine;

        const appProperties = await qDoc.getAppProperties();

        setApp({
          app: qDoc,
          appProperties,
          ...appProperties,
          doReload,
        });
      })(),
    // })
    [engine]
  );

  return {
    ...qApp,
  };
};

export default useApp;

import { useContext, useState, useEffect } from "react";
import { EngineContext } from "../contexts/EngineProvider";

const useApp = () => {
  const { engine } = useContext(EngineContext) || {};
  // const [qApp, setApp] = useState();

  const doReload = async (qMode, qPartial) => {
    const qDoc = await engine;
    qDoc.doReload(qMode, qPartial, false);
  };

  const [qApp, setApp] = useState(() => {
    (async () => {
      console.log("ff", engine);
      if (engine === undefined) {
      } else {
        const qDoc = await engine;

        const appProperties = await qDoc.getAppProperties();

        setApp({
          app: qDoc,
          appProperties,
          ...appProperties,
          doReload,
        });
      }
    })();
  }, []);

  // useEffect(
  //   () =>
  //     (async () => {
  //       if (engine === undefined) {
  //       } else {
  //         const qDoc = await engine;

  //         const appProperties = await qDoc.getAppProperties();

  //         setApp({
  //           app: qDoc,
  //           appProperties,
  //           ...appProperties,
  //           doReload,
  //         });
  //       }
  //     })(),
  //   [engine]
  // );

  return {
    ...qApp,
  };
};

export default useApp;

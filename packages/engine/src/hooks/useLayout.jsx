import { useContext, useState, useEffect } from "react";
import { EngineContext } from "../contexts/EngineProvider";

const useApp = () => {
  const { engine } = useContext(EngineContext) || {};
  const [layout, setLayout] = useState();

  useEffect(
    () =>
      (async () => {
        if (engine === undefined) {
        } else {
          const qDoc = await engine;

          const appLayout = await qDoc.getAppLayout();
          setLayout({
            appLayout,
            ...appLayout,
          });
        }
      })(),
    [engine]
  );

  return {
    ...layout,
  };
};

export default useApp;

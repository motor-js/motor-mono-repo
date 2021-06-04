import { useContext, useState, useEffect } from "react";
import { EngineContext } from "../contexts/EngineProvider";

const useLayout = () => {
  const { engine } = useContext(EngineContext) || {};
  const [layout, setLayout] = useState(null);
  const [error, setError] = useState(null);

  useEffect(
    () =>
      (async () => {
        if (!engine) return;
        try {
          const qDoc = await engine;

          const appLayout = await qDoc.getAppLayout();
          setLayout({
            appLayout,
            ...appLayout,
          });
        } catch (err) {
          setError(err);
        }
      })(),
    [engine]
  );

  return {
    ...layout,
    error,
  };
};

export default useLayout;

import { useContext, useState, useEffect } from "react";
import { EngineContext } from "../contexts/EngineProvider";
import { AppContext } from "../contexts/AppContext";

const useLayout = () => {
  
  const { engine } = useContext( AppContext._currentValue !== undefined ? AppContext : EngineContext) || {};

  const [layout, setLayout] = useState(null);
  const [error, setError] = useState(null);

  useEffect(
    () => {
      const getData = async () => {
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
      }
      getData()},
    [engine]
  );

  return {
    ...layout,
    error,
  };
};

export default useLayout;

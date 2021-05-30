import { useContext, useState, useEffect } from "react";
import { EngineContext } from "../contexts/EngineProvider";
import debounce from "../utils/render-debouncer";

const useLayout = () => {
  const { engine } = useContext(EngineContext) || {};
  const [layout, setLayout] = useState(null);
  let canceled = false;
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!engine) return undefined;
    const fetchLayout = async () => {
      try {
        const qDoc = await engine;

        const appLayout = await qDoc.getAppLayout();
        if (!canceled) {
          debounce(() => {
            setLayout(appLayout);
          });
        }
      } catch (err) {
        setError(err);
      }
    };
    engine.on("changed", fetchLayout);
    fetchLayout();

    return () => {
      canceled = true;
      engine.removeListener("changed", fetchLayout);
    };
  }, [engine]);

  return {
    ...layout,
    error,
  };
};

export default useLayout;

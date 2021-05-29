import { useState, useEffect, useContext } from "react";

import { EngineContext } from "../contexts/EngineProvider";

const useGlobal = () => {
  const { global } = useContext(EngineContext) || {};

  const [osVersion, setOSVersion] = useState(null);

  useEffect(() => {
    if (!global) return;
    (async () => {
      const osVersion = await global.engineVersion();
      setOSVersion(osVersion);
    })();
  }, [global]);

  return {
    global,
    osVersion,
  };
};

export default useGlobal;

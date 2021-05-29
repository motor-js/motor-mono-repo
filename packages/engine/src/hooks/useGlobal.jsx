import { useState, useEffect, useContext } from "react";

import { EngineContext } from "../contexts/EngineProvider";

const useGlobal = () => {
  const { global } = useContext(EngineContext) || {};

  const [globalObject, setGlobal] = useState({
    engine: null,
    engineVersion: null,
    docList: null,
    osVersion: null,
  });

  useEffect(() => {
    if (!global) return;
    (async () => {
      const engineVersion = await global.engineVersion();
      const oSName = await global.oSName();
      const oSVersion = await global.oSVersion();
      setGlobal({ qGlobal: global, engineVersion, oSName, oSVersion });
    })();
  }, [global]);

  const { qGlobal, engineVersion, docList, osVersion } = globalObject;

  return {
    global: qGlobal,
    engineVersion,
    docList,
    osVersion,
  };
};

export default useGlobal;

import { useState, useEffect, useContext } from "react";

import { EngineContext } from "../contexts/EngineProvider";

const useGlobal = () => {
  const { global: qGlobal } = useContext(EngineContext) || {};

  const [globalObject, setGlobal] = useState({
    global: null,
    engineVersion: null,
    docList: null,
    osVersion: null,
  });

  useEffect(() => {
    if (!qGlobal) return;
    (async () => {
      const engineVersion = await qGlobal.engineVersion();
      const oSName = await qGlobal.oSName();
      const oSVersion = await qGlobal.oSVersion();
      setGlobal({ global: qGlobal, engineVersion, oSName, oSVersion });
    })();
  }, [qGlobal]);

  const { global, engineVersion, oSName, oSVersion } = globalObject;

  return {
    global,
    engineVersion,
    oSName,
    oSVersion,
  };
};

export default useGlobal;

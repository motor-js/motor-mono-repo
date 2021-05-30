import { useState, useEffect, useContext } from "react";

import { EngineContext } from "../contexts/EngineProvider";

const useGlobal = () => {
  const { global: qGlobal } = useContext(EngineContext) || {};

  const [globalObject, setGlobal] = useState({
    global: null,
    appList: null,
    engineVersion: null,
    docList: null,
    osVersion: null,
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!qGlobal) return;

    (async () => {
      try {
        const engineVersion = await qGlobal.engineVersion();
        const appList = await qGlobal.getDocList({});
        const oSName = await qGlobal.oSName();
        const oSVersion = await qGlobal.oSVersion();
        setGlobal({
          global: qGlobal,
          appList,
          engineVersion,
          oSName,
          oSVersion,
        });
      } catch (err) {
        setError(err);
      }
    })();
  }, [qGlobal]);

  const { global, appList, engineVersion, oSName, oSVersion } = globalObject;

  return {
    global,
    appList,
    engineVersion,
    oSName,
    oSVersion,
  };
};

export default useGlobal;

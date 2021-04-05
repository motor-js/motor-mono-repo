import { useContext, useState, useEffect } from "react";
import { EngineContext } from "../contexts/EngineProvider";

const useApp = () => {

  const { engine } = useContext(EngineContext) || {};
  const [app, setApp] = useState(null)

  useEffect(() => (
    (async () => {
      if (engine === undefined) {
      } else {
      const qDoc = await engine;
      console.log('qDoc',qDoc)
      setApp(qDoc)
      }
    })()
  ), [engine]);
  
  return { app }
}

export default useApp
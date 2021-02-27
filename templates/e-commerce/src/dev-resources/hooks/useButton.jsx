import { useContext, useCallback, useEffect } from "react";
import { EngineContext } from "@motor-js/engine";

const useButton = () => {
  const { engine, engineError } = useContext(EngineContext) || {};

  const clearSelections = () => {
    console.log("called");
    engine && engine.clearAll();
  };

  /*

const action = async (e) => {
  switch (type) {
    case "clearSelections":
      if (engine) {
        await engine.abortModal(true);
        engine.clearAll();
      }
      break;
    case "back":
      if (engine) {
        await engine.abortModal(true);
        engine.back();
      }
      break;
    case "forward":
      if (engine) {
        await engine.abortModal(true);
        engine.forward();
      }
      break;
    case "default": {
    }
    default:
      break;
  }
};
*/

  return {
    clearSelections,
  };
};

export default useButton;

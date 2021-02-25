import React from 'react'


const useButton = () => {

  const { engine, engineError } = useContext(EngineContext) || {};

  const action = async (e) => {
    onClick(e);
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

}

export default useButton

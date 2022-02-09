import App from "./App";
import { useList, useGlobal, useSelections, useSearch, EngineContext, AppProvider } from '@motor-js/engine'
//import { NebulaConnection } from '@motor-js/nebula'
import MotorFilter from "./Filter"

const NewApp = () => {


  const { selections, selectionItems } = useSelections()

  return (
    <div>
      <MotorFilter
        dimension={["BURGER"]}
        m={50}
      />
    </div>
  );
};

export default NewApp;

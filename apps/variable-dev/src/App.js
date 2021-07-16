import React from "react";
//import Table from "./components/TableExampleCompact";
//import ButtonComponent from "./components/ButtonComponent";
import { useList } from "@motor-js/engine";
import MotorSelect from "./components/MotorSelect";
import { dark, light } from "./themes/theme.js";
import { EngineContext } from "@motor-js/engine";

import Slider from "./components/Slider";

export default function App() {
  const dimension = ["Company Name"];

  const { listData, motorListProps } = useList({
    dimension,
  });

  /*
  To Do:
  - Add color prop for select color - should mirror table
  - Add size prop
  - 
  */

  return (
    <div className="App" style={{ padding: "10px" }}>
      {/* test */}
      <Slider />
      {/*<MotorSelect 
        listData={listData}
        motorListProps={motorListProps}
        theme={dark}
        isMulti={true}
        closeMenuOnSelect={false}
        hideSelectedOptions={false}
        isSearchable={true}
        placeholder="Company Name.."
      />*/}
    </div>
  );
}

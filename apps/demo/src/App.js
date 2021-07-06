import React from "react";
import Table from "./components/TableExampleCompact";
import ButtonComponent from "./components/ButtonComponent";
import { useList } from "@motor-js/engine"
import { NebulaContainer } from '@motor-js/nebula'
import MotorSelect from "./components/MotorSelect"

export default function App() {

  const dimension = ['Company Name'];

  const {
    listData,
    motorListProps,
  } = useList({
    dimension,
  });

  return (
    <div className="App" style={{ hieght: "3000px" }}>
      <MotorSelect 
        listData={listData}
        motorListProps={motorListProps}
        theme={dark}
        isMulti={true}
        closeMenuOnSelect={false}
        closeMenuOnScroll={false}
        escapeClearsValue={false}
        hideSelectedOptions={false}
        isSearchable={true}
        loadingMessage="loading"
        placeholder="Select.."
      />
    </div>
  );
}

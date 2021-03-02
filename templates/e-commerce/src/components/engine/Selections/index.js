import React from "react";
import SelectionItem from "./SelectionItem";
import CustomScrollbars from 'util/CustomScrollbars'
import Auxiliary from "util/Auxiliary";
import useSelections from 'dev-resources/hooks/useSelections'

const Selections = () => {

  const { selections, clearSelections } = useSelections()

  const handleClear = field => clearSelections(field)

  return (
    <Auxiliary>
      <div className="gx-popover-header">
        <h3 className="gx-mb-0">Current Selections</h3>
        <i className="gx-icon-btn icon icon-charvlet-down"/>
      </div>
      <CustomScrollbars className="gx-popover-scroll">
        <ul className="gx-sub-popover">
          {selections && selections.map((sel, i) => 
          <SelectionItem key={i} selections={sel} clear={handleClear}/>)}
        </ul>
      </CustomScrollbars>
    </Auxiliary>
  )
};

export default Selections;


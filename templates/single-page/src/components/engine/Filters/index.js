import React from "react";
import CustomScrollbars from "util/CustomScrollbars";
import Auxiliary from "util/Auxiliary";
import Filter from "components/engine/Filter";

const Selections = ({ selections, handleClear }) => {
  return (
    <Auxiliary>
      <div className="gx-popover-header">
        <h3 className="gx-mb-0">Filters</h3>
        <i className="gx-icon-btn icon icon-charvlet-down" />
      </div>
      <CustomScrollbars className="gx-popover-scroll">
        <ul className="gx-sub-popover">
          <Filter dimension={["Country"]} />
          <Filter dimension={["City"]} />
        </ul>
      </CustomScrollbars>
    </Auxiliary>
  );
};

export default Selections;

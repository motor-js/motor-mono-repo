import React, { useState, useRef } from "react";
import Pie from "./Pie";
import SelectionModal from "./SelectionModal";
import useOutsideClick from "../hooks/useOutsideClick";

import { useData } from "@motor-js/engine";

const PieWrapper = ({ id }) => {
  const [currentSelectionIds, setCurrentSelectionIds] = useState([]);
  const chartRef = useRef();

  const cancelCallback = () => {
    endSelections(false);
    setCurrentSelectionIds([]);
  };

  const confirmCallback = async () => {
    await endSelections(true);
    await setCurrentSelectionIds([]);
  };
  // const clearSelectionIds = async () => {
  //   // await endSelections(true);
  //   console.log("clearSelectionIds");
  //   // setCurrentSelectionIds([]);
  //   // setCurrentSelectionIds((currentSelectionIds) => []);
  // };

  const setSelection = (id) => {
    beginSelections();

    const array = currentSelectionIds;
    console.log(id, array);
    const index = array.indexOf(id);
    if (index > -1) {
      array.splice(index, 1);
    } else {
      array.push(id);
    }
    setCurrentSelectionIds(array);

    select(0, array);
  };

  useOutsideClick(chartRef, () => {
    if (
      // eslint-disable-next-line  no-restricted-globals
      event.target.classList.contains("cancelSelections") ||
      // eslint-disable-next-line  no-restricted-globals
      event.target.parentNode.classList.contains("cancelSelections")
    )
      return;
    if (currentSelectionIds.length !== 0) {
      // eslint-disable-next-line  no-restricted-globals
      const outsideClick = !chartRef.current.contains(event.target);
      if (outsideClick) confirmCallback();
    }
  });

  const cols = [
    {
      qField: "[Category]",
      qLabel: "Category",
    },
    {
      qField: "=sum(Quantity * Price)",
      qLabel: "Revenue",
    },
  ];

  const { dataSet, endSelections, select, beginSelections } = useData({
    cols,
  });

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart" ref={chartRef}>
          {dataSet && (
            <React.Fragment>
              <Pie id={id} dataSet={dataSet} setSelection={setSelection} />
              <SelectionModal
                isOpen={currentSelectionIds.length !== 0}
                cancelCallback={cancelCallback}
                confirmCallback={confirmCallback}
                // clearSelectionIds={clearSelectionIds}
                offsetX={0}
              />
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default PieWrapper;

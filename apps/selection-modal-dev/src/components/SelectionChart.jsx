import React, { useState, useRef } from "react";
import SelectionModal from "./SelectionModal";
import useOutsideClick from "../hooks/useOutsideClick";

import { useData } from "@motor-js/engine";

const SelectionChart = ({ qlikParams, renderChart }) => {
  const [currentSelectionIds, setCurrentSelectionIds] = useState([]);
  const chartRef = useRef();

  const cancelCallback = () => {
    endSelections(false);
    setCurrentSelectionIds([]);
  };

  const confirmCallback = async () => {
    await endSelections(true);
    setCurrentSelectionIds([]);
  };

  const setSelection = (id) => {
    beginSelections();

    const array = currentSelectionIds;
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

  const {
    // metrics,
    // title,
    dataSet,
    endSelections,
    select,
    beginSelections,
  } = useData(qlikParams);

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart" ref={chartRef}>
          {dataSet && (
            <React.Fragment>
              <SelectionModal
                isOpen={currentSelectionIds.length !== 0}
                cancelCallback={cancelCallback}
                confirmCallback={confirmCallback}
                offsetX={0}
              />
              {/* <ChartComponent dataSet={dataSet} setSelection={setSelection} /> */}
              {renderChart(dataSet, setSelection)}
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectionChart;

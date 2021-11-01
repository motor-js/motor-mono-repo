import React, { useState, useRef } from "react";
import ApexChart from "./ApexChart";
import SelectionModal from "./SelectionModal";
import useOutsideClick from "../hooks/useOutsideClick";

const ApexChartWrapper = ({
  options,
  dataKeys,
  data,
  endSelections,
  select,
  beginSelections,
}) => {
  const [currentSelectionIds, setCurrentSelectionIds] = useState([]);
  const chartRef = useRef();

  const cancelCallback = async () => {
    await endSelections(false);
    setCurrentSelectionIds([]);

    // setShowBrush(false);
  };

  const confirmCallback = async () => {
    await endSelections(true);
    setCurrentSelectionIds([]);
    // setShowBrush(false);
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

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart" ref={chartRef}>
          {data && (
            <React.Fragment>
              {/* <ApexChart data={data} setSelection={setSelection} /> */}
              <ApexChart
                data={data}
                setSelection={setSelection}
                currentSelectionIds={currentSelectionIds}
                options={options}
                dataKeys={dataKeys}
              />
              <SelectionModal
                isOpen={currentSelectionIds.length !== 0}
                cancelCallback={cancelCallback}
                confirmCallback={confirmCallback}
                offsetX={0}
              />
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApexChartWrapper;

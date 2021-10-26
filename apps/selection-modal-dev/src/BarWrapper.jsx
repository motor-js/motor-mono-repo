import React, { useState } from "react";
import Bar from "./Bar";
import SelectionModal from "./components/SelectionModal";

import { useData } from "@motor-js/engine";

const BarWrapper = () => {
  const [currentSelectionIds, setCurrentSelectionIds] = useState([]);

  const cancelCallback = () => {
    endSelections(false);
    setCurrentSelectionIds([]);
    // setShowBrush(false);
  };

  const confirmCallback = async () => {
    await endSelections(true);
    setCurrentSelectionIds([]);
    // setShowBrush(false);
  };

  // const useOutsideClick =
  //   (ref,
  //   () => {
  //     if (
  //       event.target.classList.contains("cancelSelections") ||
  //       event.target.parentNode.classList.contains("cancelSelections")
  //     )
  //       return;
  //     if (!isEmpty(currentSelectionIds)) {
  //       const outsideClick = !ref.current.contains(event.target);
  //       if (outsideClick && selections) confirmCallback();
  //     }
  //   });

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

  const { dataSet, endSelections } = useData({
    cols,
  });

  const { data } = dataSet;

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          {data && <Bar data={data} />}
          <SelectionModal
            // isOpen={!isEmpty(currentSelectionIds)}
            isOpen={true}
            cancelCallback={cancelCallback}
            confirmCallback={confirmCallback}
            offsetX={0}
            // width={width}
          />
        </div>
      </div>
    </div>
  );
};

export default BarWrapper;

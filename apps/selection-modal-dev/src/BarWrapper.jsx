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

  const { dataSet, endSelections, select, beginSelections } = useData({
    cols,
  });

  const { data } = dataSet;

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          {data && <Bar data={data} setSelection={setSelection} />}
          <SelectionModal
            // isOpen={!isEmpty(currentSelectionIds)}
            isOpen={currentSelectionIds.length !== 0}
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

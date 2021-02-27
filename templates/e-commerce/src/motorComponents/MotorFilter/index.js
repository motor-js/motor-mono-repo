import React, { useEffect, useState, useRef, useContext } from "react";
import { Select } from "antd";
//import { useList } from "@motor-js/engine"
import useList from "../../dev-resources/hooks/useList";
import Widget from "dev-resources/components/Widget";

const MotorFilter = ({ dimension }) => {
  const [children, setChildren] = useState([]);
  const [selected, setSelected] = useState();

  const {
    mData,
    select,
    selections,
    beginSelections,
    endSelections,
    clearSelections,
  } = useList({
    dimension,
  });

  const { Option } = Select;

  useEffect(() => {
    let child = [];
    mData &&
      mData.map((d, i) =>
        child.push(
          <Option key={d.key} value={d.key}>
            {d.text}
          </Option>
        )
      );
    setChildren(child);
    if (!selections) return;
    setSelected(selections);
  }, [mData]);

  async function handleChange(v) {
    beginSelections();
    const newSel = await v.filter((el) => !selections.includes(el));
    select(newSel);
    endSelections(true);
  }

  function handleClear(v) {
    beginSelections();
    clearSelections();
    endSelections(true);
  }

  async function handleDeselect(v) {
    beginSelections();
    const sel = [v];
    select(sel);
    endSelections(true);
  }

  return (
    <Widget
      styleName="gx-order-history"
      //title={ <h2 className="h4 gx-text-capitalize gx-mb-0">Table Component</h2> }
    >
      <Select
        mode="multiple"
        allowClear
        onChange={handleChange}
        value={selected}
        style={{ width: "100%" }}
        placeholder={dimension[0]}
        onClear={handleClear}
        onDeselect={(v) => handleDeselect(v)}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        {children}
      </Select>
    </Widget>
  );
};

export default MotorFilter;

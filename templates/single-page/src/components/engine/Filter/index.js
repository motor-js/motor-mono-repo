import React, { useEffect, useState, useRef, useContext } from "react";
import { Select } from "antd";
import { useList } from "@motor-js/engine";
import Widget from "components/Widget";

const Filter = ({ dimension, maxTagCount = 10 }) => {
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

  console.log(selections)

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
  }, [mData, selections]);

  async function handleChange(v) {
    console.log('CALLED')
    await beginSelections();
    const newSel = await v.filter((el) => !selections.includes(el));
    await select(newSel);
    await endSelections(true);
  }

  const handleClear = async (v) => {
    clearSelections();
  };

  async function handleDeselect(v) {
    const sel = [v];
    select(sel);
  }

  return (
    <Select
      mode="multiple"
      allowClear
      onChange={handleChange}
      value={selected}
      style={{ width: "100%" }}
      placeholder={dimension[0]}
      onClear={handleClear}
      maxTagCount={maxTagCount}
      onDeselect={(v) => handleDeselect(v)}
      filterOption={(input, option) =>
      option.children && option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      {children}
    </Select>
    // </Widget>
  );
};

export default Filter;

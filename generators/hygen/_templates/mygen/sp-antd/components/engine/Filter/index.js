import React, { useEffect, useState, useRef, useContext } from "react";
import { Select } from "antd";
import { useList } from "@motor-js/engine";

const Filter = ({ dimension, maxTagCount = 10 }) => {
  const [children, setChildren] = useState([]);
  const [selected, setSelected] = useState();

  const {
    listData,
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
    listData &&
    listData.map((d, i) =>
        child.push(
          <Option key={d.key} value={d.key}>
            {d.text}
          </Option>
        )
      );
    setChildren(child);
    if (!selections) return;
    setSelected(selections);
  }, [listData, selections]);

  async function handleChange(v) {
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
      style={{ width: "100%", padding: '2px' }}
      placeholder={dimension[0]}
      onClear={handleClear}
      maxTagCount={maxTagCount}
      onDeselect={(v) => handleDeselect(v)}
      filterOption={(input, option) =>
        option.children &&
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      {children}
    </Select>
  );
};

export default Filter;

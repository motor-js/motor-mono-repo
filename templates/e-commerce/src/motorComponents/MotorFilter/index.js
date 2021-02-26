import React, { useEffect, useState, useRef, useContext } from "react";
import { Select } from "antd";
//import { useList } from "@motor-js/engine"
<<<<<<< HEAD
import useList from "../../hooks/useList";
import Widget from "components/Widget";
=======
import useList from "../../dev-resources/hooks/useList";
import Widget from "dev-resources/components/Widget";
import { SelectionsContext } from "../../store";
import useSelectionObject from "../../dev-resources/hooks/useSelectionObject";
>>>>>>> origin/development


const MotorFilter = ({ dimension }) => {

  const [children, setChildren] = useState([]);
  const [selected, setSelected] = useState();


  const { mData, select, selections, beginSelections, endSelections } = useList({
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
    setSelected(selections);
  }, [mData]);

  async function handleChange(v) {
    //beginSelections()
    console.log('handleChange')
    const newSel = await v.filter( el => !selections.includes(el))
    select(newSel)
    //endSelections(true)
  }

  function handleClear(v) {
   // console.log("clear", v);
    // setSelected(v)
   // select(v);
  }

  function handleDeselect(v) {
    console.log("deselect", v);
    // setSelected([v])
    // select(v)
  }

  function handleOpen(val) {}

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
        onClear={(v) => handleClear(v)}
        onDeselect={(v) => handleDeselect(v)}
        onDropdownVisibleChange={handleOpen}
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

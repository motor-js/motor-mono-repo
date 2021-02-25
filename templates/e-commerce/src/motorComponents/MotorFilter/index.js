import React, { useEffect, useState } from "react";
import { Select } from "antd";
import { useList } from "@motor-js/engine"
import Widget from "components/Widget";

const MotorFilter = () => {

  const [children, setChildren] = useState([])
  const dimension = ['currency']

  const { 
    mData,
    select
  } = useList({
    dimension
  })

  const { Option } = Select;

  useEffect(() => {
    let child = [];
    mData && mData.map((d,i) =>
      child.push(<Option key={d.key} value={d.key}>{d.text}</Option>)
    )
    setChildren(child)
  },[mData])
  

  function handleChange(v, i) {
    select(v)
  }

  function handleClear(value) {
    
  }

  function handleOpen(val) {
    
  }

  return (
    <Widget 
      styleName="gx-order-history"
      //title={ <h2 className="h4 gx-text-capitalize gx-mb-0">Table Component</h2> }
    >
      <Select
          mode="multiple"
          allowClear
          style={{ width: '100%' }}
          placeholder="Please select"
          // defaultValue={['China']}
          onChange={handleChange}
          onClear={handleClear}
          onDropdownVisibleChange={handleOpen}
      >
        {children}
      </Select>
    </Widget>
  );
};

export default MotorFilter;

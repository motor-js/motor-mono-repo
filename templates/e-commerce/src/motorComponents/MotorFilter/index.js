import React, { useEffect, useState, useRef, useContext } from "react";
import { Select } from "antd";
import { useList } from "@motor-js/engine"
import Widget from "components/Widget";
import SelectionsContext from '../../store'

const MotorFilter = () => {

  const [state, dispatch] = useContext(SelectionsContext);

  const [children, setChildren] = useState([])
  const [selected, setSelected] = useState([])

  console.log('state: ',state)
  const firstUpdate = useRef(true);

  const dimension = ['currency']
  const label = ['Currency']

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

  function handleChange(v) {
    console.log('v',v)
    select(v)
    setSelected(v)
  }

  function handleClear(v) {
    console.log('clear',v)
   // setSelected(v)
    select(v)
  }

  function handleDeselect(v) {
    console.log('deselect',v)
   // setSelected([v])
   // select(v)
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
          onChange={handleChange} 
          value={selected}
          style={{ width: '100%' }}
          placeholder="Currency"
          onClear={v => handleClear(v)}
          onDeselect={v => handleDeselect(v)}
          onDropdownVisibleChange={handleOpen}
      >
        {children}
      </Select>
    </Widget>
  );
};

export default MotorFilter;

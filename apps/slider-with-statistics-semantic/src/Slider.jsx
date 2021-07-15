import React, { useState, useEffect } from "react";
import { Slider } from "react-semantic-ui-range";
import { Label } from "semantic-ui-react";

import { useVariable } from "@motor-js/engine";

const start = [2, 18];
const varName = "testVar248";

const SliderExample = () => {
  const { value, setProperties } = useVariable({
    qName: varName,
    qDefinition: start.toString(),
  });
  // const { value, setProperties } = useVariable({
  //   qName: varName,
  // });
  // const { value, setProperties } = useVariable("test");
  // console.log("value", value);
  const [multipleValues, setMultipleValues] = useState(start);
  const settings = {
    start,
    min: 0,
    max: 25,
    step: 1,
    onChange: (value) => {
      // console.log(value);
      // console.log(value.toString());
      setMultipleValues(value);
      setProperties({ qName: varName, qDefinition: value.toString() });
    },
  };

  // console.log(qLayout);

  return (
    <>
      <Slider multiple color="red" settings={settings} />
      {multipleValues.map((val, i) => (
        <Label key={i} color="red">
          {val}
        </Label>
      ))}
      <Label color="red">{value}</Label>
    </>
  );
};

export default SliderExample;

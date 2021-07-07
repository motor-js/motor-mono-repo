/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { VectorMap as VectorMapComponent } from "@south-paw/react-vector-maps";
import worldLowRes from "../../data/maps/world-low-res.json";

import { StyledMap } from "./style";

export const VectorMap = ({
  width,
  height,
  backgroundColor,
  borderColor,
  color,
  checkedLayers,
  selectedColor,
  tooltip,
  data = worldLowRes,
}) => {
  const [selected, setSelected] = useState([]);
  const [tooltipeName, setTooltipeName] = useState();
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [tooltipY, setTooltipY] = useState(0);
  const [tooltipX, setTooltipX] = useState(0);

  const onClick = (e) => {
    const target = e.target;
    const id = target.attributes.id.value;
    if (selected.includes(id)) {
      setSelected(selected.filter((sid) => sid !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  const onMouseOver = (e) => {
    const target = e.target;
    const name = target.attributes.name.value;
    setTooltipeName(name);
    setIsTooltipVisible(true);
  };

  const onMouseMove = (e) => {
    setTooltipY(e.clientY - 20);
    setTooltipX(e.clientX - 10);
  };

  const onMouseOut = () => {
    setTooltipeName("");
    setIsTooltipVisible(false);
  };

  useEffect(() => {
    if (!checkedLayers) return;
    setSelected([...checkedLayers]);
  }, [checkedLayers]);

  return (
    <StyledMap
      width={width}
      height={height}
      $bg={backgroundColor}
      $bdc={borderColor}
      $color={color}
      $slColor={selectedColor}
      className="vector-map"
    >
      <VectorMapComponent
        {...data}
        checkedLayers={selected}
        layerProps={{ onClick, onMouseOver, onMouseOut, onMouseMove }}
      />
      {tooltip && isTooltipVisible && (
        <div className="tooltip" style={{ top: tooltipY, left: tooltipX }}>
          {tooltipeName}
        </div>
      )}
    </StyledMap>
  );
};

VectorMap.defaultProps = {
  backgroundColor: "#fff",
  borderColor: "#fff",
  color: "#8392a5",
  selectedColor: "rgba(56, 43, 168, 1)",
  width: "90%",
  height: "500px",
  tooltip: false,
};

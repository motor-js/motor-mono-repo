import { tooltipNumFormat, tooltipValueFormat } from "./formatChart";

const CustomTooltip = ({ active, payload, label, fill }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        {/*  <div className="recharts-tooltip-wrapper">*/}
        {payload.length !== 1 && (
          <span className="intro">
            {tooltipValueFormat(payload[0].payload.label)} <br></br>
          </span>
        )}
        {payload.length === 1 && (
          <span
            style={{ color: fill[payload[0].payload.key] }}
            className="label"
          >{`${tooltipValueFormat(
            payload[0].payload.label
          )} : ${tooltipNumFormat(payload[0].value)}`}</span>
        )}
        {payload.length !== 1 &&
          payload.map((value, index) => {
            return (
              <span style={{ color: value.color }} className="label">
                {`${tooltipValueFormat(value.dataKey)} : ${tooltipNumFormat(
                  value.value
                )}`}
                <br></br>
              </span>
            );
          })}
      </div>
    );
  }

  return null;
};

export default CustomTooltip;

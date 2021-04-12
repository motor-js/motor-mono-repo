import { tooltipNumFormat, tooltipValueFormat } from "./formatChart";

const CustomTooltip = ({ active, payload, label, fill }) => {
  if (active && payload && payload.length) {
    console.log("payload", payload.length, payload);

    if (payload.length !== 1) return null;

    return (
      <div className="custom-tooltip">
        {/*  <div className="recharts-tooltip-wrapper">*/}
        <span
          style={{ color: fill[payload[0].payload.key] }}
          className="label"
        >{`${tooltipValueFormat(payload[0].payload.label)} : ${tooltipNumFormat(
          payload[0].value
        )}`}</span>
        {/* <p className="intro">{getIntroOfPage(label)}</p> */}
        {/* <p className="desc">Anything you want can be displayed here.</p> */}
      </div>
    );
  }

  return null;
};

export default CustomTooltip;

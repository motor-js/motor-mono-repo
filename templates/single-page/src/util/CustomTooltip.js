import { tooltipNumFormat } from "./formatChart";

const CustomTooltip = ({ active, payload, label, fill }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        {/*  <div className="recharts-tooltip-wrapper">*/}
        <span
          style={{ color: fill[payload[0].payload.key] }}
          className="label"
        >{`${payload[0].payload.label} : ${tooltipNumFormat(
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

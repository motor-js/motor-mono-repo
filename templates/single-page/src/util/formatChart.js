export const formatYAxis = (tickItem) => {
  return tickItem.toLocaleString();
};
export const tooltipNumFormat = (tickItem) => {
  return tickItem.toLocaleString();
};

export const formatXAxis = (tickItem) => {
  return new Date(tickItem).toLocaleDateString() !== "Invalid Date"
    ? new Date(tickItem).toLocaleDateString()
    : tickItem.toLocaleString();
};

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

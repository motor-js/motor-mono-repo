export const formatYAxis = (tickItem) => {
  return tickItem.toLocaleString();
};

export const formatXAxis = (tickItem) => {
  return new Date(tickItem).toLocaleDateString() !== "Invalid Date"
    ? new Date(tickItem).toLocaleDateString()
    : tickItem.toLocaleString();
};

export const tooltipNumFormat = (tickItem) => {
  return tickItem.toLocaleString();
};

export const tooltipValueFormat = (tickItem) => {
  return new Date(tickItem).toLocaleDateString() !== "Invalid Date"
    ? new Date(tickItem).toLocaleDateString()
    : tickItem.toLocaleString();
};

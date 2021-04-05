export const formatYAxis = (tickItem) => {
  return tickItem.toLocaleString();
};

export const formatXAxis = (tickItem) => {
  return new Date(tickItem).toLocaleDateString() !== "Invalid Date"
    ? new Date(tickItem).toLocaleDateString()
    : tickItem.toLocaleString();
};

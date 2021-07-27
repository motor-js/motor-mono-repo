export const light = {
  control: (styles, { isFocused }) => ({ 
    ...styles,
    boxShadow: 'none',
    border: isFocused && "1px solid #ff7272",
    "&:hover": {
      border: "1px solid #ff7272"
    },
    maxHeight: 40 }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => ({
    ...styles,
    backgroundColor: isSelected ? "#ff7272" : "white",
    "&:hover": {
      backgroundColor:  "#ffe8e8"
    }
  }),
  valueContainer: (styles) => ({ ...styles, maxHeight: 40 }),
  input: (styles, { isFocused }) => ({ 
    ...styles, 
    margin: 0, 
    padding: 0,
  }),
  multiValue: (styles) => ({ ...styles }),
  multiValueLabel: (styles) => ({ ...styles }),
  multiValueRemove: (styles) => ({ ...styles }),
  spacing: (styles) => ({ ...styles, controlHeight: 30, baseUnit: 0 }),
};

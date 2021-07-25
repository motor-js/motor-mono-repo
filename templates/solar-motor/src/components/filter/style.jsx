export const light = {
  control: styles => ({ ...styles, maxHeight: 40 }),
  option: ( styles, { data, isDisabled, isFocused, isSelected } ) => ({
    ...styles,
  }),
  valueContainer: styles => ({ ...styles, maxHeight: 40 }),
  input: styles => ({ ...styles, margin: 0, padding: 0 }),
  multiValue: styles => ({ ...styles  }),
  multiValueLabel: styles => ({ ...styles }),
  multiValueRemove: styles => ({ ...styles }),
  spacing: styles => ({ ...styles, controlHeight: 30, baseUnit: 0, })
}


export const dark = {
  control: styles => ({ ...styles, backgroundColor: "#1A202C", borderColor: "#EDEDEE", maxHeight: 40 }),
  valueContainer: styles => ({ ...styles, maxHeight: 40 }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) =>({ 
    ...styles, 
    backgroundColor: "#1A202C", 
    borderColor: "#EDEDEE", 
    color: "#EDEDEE",
    backgroundColor: isSelected ? "#2D3748" : "#1A202C"
  }),
  multiValue: styles => ({ ...styles, backgroundColor: "#2D3748",  }),
  multiValueLabel: styles => ({ ...styles, color: "#EDEDEE" }),
  multiValueRemove: styles => ({ ...styles, color: "#EDEDEE" }),
}

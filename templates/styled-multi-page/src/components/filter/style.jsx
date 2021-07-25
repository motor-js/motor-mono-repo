export const light = {
  control: (styles) => ({ ...styles, maxHeight: 40 }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => ({
    ...styles,
  }),
  valueContainer: (styles) => ({ ...styles, maxHeight: 40 }),
  input: (styles) => ({ ...styles, margin: 0, padding: 0 }),
  multiValue: (styles) => ({ ...styles }),
  multiValueLabel: (styles) => ({ ...styles }),
  multiValueRemove: (styles) => ({ ...styles }),
  spacing: (styles) => ({ ...styles, controlHeight: 30, baseUnit: 0 }),
};

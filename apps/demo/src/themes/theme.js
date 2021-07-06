const light = {
  control: styles => ({ ...styles, backgroundColor: 'red', color: 'white' }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => ({ 
    ...styles,
  }),
  multiValue: (styles, { data }) => {
    const color = 'blue';
    console.log('data: ',data)
    return {
      ...styles,
      backgroundColor: color,
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: 'white',
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ':hover': {
      backgroundColor: 'pink',
      color: 'white',
    },
  }),
}

const dark = {
  control: styles => ({ ...styles }),
  option: styles => ({ ...styles }),
  multiValue: styles => ({ ...styles }),
  multiValueLabel: styles => ({ ...styles }),
  multiValueRemove: styles => ({ ...styles }),

}



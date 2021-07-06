import { useState, useEffect } from 'react'
import { useList } from "@motor-js/engine"
import Select from 'react-select'

function MotorSelect({
  listData,
  motorListProps,
  theme,
  isMulti,
  closeMenuOnSelect,
  closeMenuOnScroll,
  escapeClearsValue,
  hideSelectedOptions,
  isSearchable,
  loadingMessage,
  placeholder
}) {

  const { 
    clearSelections,
    selections,
    select,
  } = motorListProps

  const [selectedValues, setSelectedValues] = useState('')

  useEffect(() => (
    setSelectedValues(selections)
  ),[selections])
  
  const handleChange = async(options,ac,name) => {
    const removedVal = ac.removedValue

    if(ac.action === 'clear') {
      clearSelections()
    } else if(ac.action === 'deselect-option') {
      await select([ac.option.key])
    } else if(selections.includes(removedVal)) {
       await select([removedVal.key])
    } else {
      const newSel = await options.filter((el) => !selections.includes(el));
      await select([newSel[0].key])
    }

  } 

  return (
    <Select
      value={selectedValues}
      isMulti={isMulti}
      styles={theme}
      options={listData}
      onChange={handleChange}
      closeMenuOnSelect={closeMenuOnSelect}
      closeMenuOnScroll={closeMenuOnScroll}
      escapeClearsValue={escapeClearsValue}
      hideSelectedOptions={hideSelectedOptions}
      isSearchable={isSearchable}
      loadingMessage={loadingMessage}
      placeholder={placeholder}
    />
  );
}

export default MotorSelect;
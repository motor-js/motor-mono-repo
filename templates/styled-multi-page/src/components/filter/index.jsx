import { useState, useEffect } from "react";
import Select from "react-select";
import { light } from "./style";

function Filter({
  listData,
  motorListProps,
  isMulti,
  closeMenuOnSelect,
  hideSelectedOptions,
  isSearchable,
  placeholder,
}) {
  const { clearSelections, selections, select } = motorListProps;

  const [selectedValues, setSelectedValues] = useState("");

  useEffect(() => setSelectedValues(selections), [selections]);

  const handleChange = async (options, ac) => {
    const removedVal = ac.removedValue;

    if (ac.action === "clear") {
      clearSelections();
    } else if (ac.action === "deselect-option") {
      await select([ac.option.key]);
    } else if (selections.includes(removedVal)) {
      await select([removedVal.key]);
    } else if (!isMulti) {
      await select([options.key], false);
    } else {
      const newSel = await options.filter((el) => !selections.includes(el));
      await select([newSel[0].key]);
    }
  };

  return (
    <Select
      value={selectedValues}
      isMulti={isMulti}
      styles={light}
      options={listData}
      onChange={handleChange}
      closeMenuOnSelect={closeMenuOnSelect}
      hideSelectedOptions={hideSelectedOptions}
      isSearchable={isSearchable}
      placeholder={placeholder}
    />
  );
}

export default Filter;

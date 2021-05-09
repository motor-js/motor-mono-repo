import React, { useState, useEffect } from "react";
import { Input, AutoComplete } from "antd";
//import searchResults from './searchResults'
import { useSearch } from "@motor-js/engine";

const MotorSearch = ({ styleName, placeholder }) => {
  const [options, setOptions] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const qCount = 100;
  const qGroupItemCount = 100;

  const { flatResults, flatSelect } = useSearch({
    searchValue,
    qCount,
    qGroupItemCount,
  });

  const handleSearch = (value) => {
    setSearchValue(value);
  };

  const onSelect = (val, obj) => {
    flatSelect(obj.dimension, val);
  };

  useEffect(() => {
    setOptions(flatResults);
  }, [flatResults]);

  return (
    <div className={`${styleName}`}>
      <AutoComplete
        dropdownMatchSelectWidth={252}
        style={{ width: 300 }}
        options={options}
        onSelect={onSelect}
        onSearch={handleSearch}
      >
        <Input.Search size="medium" placeholder={placeholder} />
      </AutoComplete>
    </div>
  );
};

export default MotorSearch;

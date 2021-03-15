import React, { useState } from "react";
import React, { useState, useEffect } from "react";
import { Input, AutoComplete } from 'antd';
//import searchResults from './searchResults'
import useSearch from '../../../dev-resources/hooks/useSearch'


const MotorSearch = () => {

  const [options, setOptions] = useState([]);

  const { searchResults, select } = useSearch()

  console.log(searchResults)

  const [searchValue, setSearchValue] = useState("");
  const qCount = 100;
  const qGroupItemCount = 100;

  const { 
    flatResults,
    groupedResults,
    flatSelect,
  } = useSearch({ 
    searchValue,
    qCount,
    qGroupItemCount
  })
  console.log(groupedResults)
  const handleSearch = (value) => {
    setOptions(value ? searchResult(value) : []);
    console.log(searchResult(value))
    setSearchValue(value)
  };

  const onSelect = (val, obj) => {
    flatSelect(obj.dimension,val)
  };

  useEffect(() => {
    setOptions(flatResults)
  },[flatResults])

  return (
    <AutoComplete
      dropdownMatchSelectWidth={252}
      style={{ width: 300 }}
      options={options}
      onSelect={onSelect}
      onSearch={handleSearch}
    >
      <Input.Search size="medium" placeholder="Search app" />
    </AutoComplete>
  )
}

export default MotorSearch;
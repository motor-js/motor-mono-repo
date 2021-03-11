import React, { useState } from "react";
import { Input, AutoComplete } from 'antd';
//import searchResults from './searchResults'
import useSearch from '../../../dev-resources/hooks/useSearch'

function getRandomInt(max, min = 0) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
}

const searchResult = (query) =>
  new Array(getRandomInt(10000))
    .join('.')
    .split('.')
    .map((_, idx) => {
      const category = `${query}${idx}`;
      return {
        value: category
      };
    });

const MotorSearch = () => {

  const [options, setOptions] = useState([]);

  const { searchResults, select } = useSearch()

  console.log(searchResults)

  const handleSearch = (value) => {
    setOptions(value ? searchResult(value) : []);
    console.log(searchResult(value))
  };

  const onSelect = (value) => {
    console.log('onSelect', value);
  };

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

export default MotorSearch


/*
  const MotorSearch = ({ styleName, placeholder, onChange, value }) => {
    return (
      <div className={`gx-search-bar ${styleName}`}>
        <div className="gx-form-group">
          <input
            className="ant-input"
            type="search"
            placeholder={placeholder}
            onChange={onChange}
            value={value}
          />
          <span className="gx-search-icon gx-pointer">
            <i className="icon icon-search" />
          </span>
        </div>
      </div>
    );
  };
  export default MotorSearch;

  MotorSearch.defaultProps = {
    styleName: "",
    value: "",
  };
*/
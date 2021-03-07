import React, { useState } from "react";
// import { useSearch } from "@motor-js/engine";
import useSearch from "dev-resources/hooks/useSearch";
// import Suggestions from "./Suggestions";
import useOutsideClick from "@motor-js/engine";

const SearchBox = ({ styleName, placeholder, onChange, value }) => {
  const [searchValue, setSearchValue] = useState("");
  // const [listOpen, setListOpen] = useState(false);
  // const [qCount, setQCount] = useState(10);
  // const [qGroupItemCount, setQGroupOptions] = useState(10);
  // const [loading, setLoading] = useState(true);
  // const searchRef = useRef();

  const { searchResults, select } = useSearch({
    searchValue,
    // dimensions,
    // qCount,
    // qGroupItemCount,
  });

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className={`gx-search-bar ${styleName}`}>
      <div className="gx-form-group">
        <input
          className="ant-input"
          type="search"
          placeholder={placeholder}
          onChange={handleInputChange}
          value={searchValue}
        />
        <span className="gx-search-icon gx-pointer">
          <i className="icon icon-search" />
        </span>
      </div>
    </div>
  );
};
export default SearchBox;

SearchBox.defaultProps = {
  styleName: "",
  value: "",
};

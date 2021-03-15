import React, { useState, useRef, useEffect } from "react";
import { useSearch } from "@motor-js/engine";
import Suggestions from "./Suggestions";

const SearchBox = ({
  dimensions,
  size,
  width,
  dropHeight,
  styleName,
  placeholder,
  value,
}) => {
  const [searchValue, setSearchValue] = useState("");
  const [listOpen, setListOpen] = useState(false);
  const [qCount, setQCount] = useState(10);
  const [qGroupItemCount, setQGroupOptions] = useState(10);
  const [loading, setLoading] = useState(true);
  const searchRef = useRef();

  const { searchResults, select } = useSearch({
    searchValue,
    dimensions,
    qCount,
    qGroupItemCount,
  });

  // handle search test change
  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  // handle opening of suggestions & loading indicator
  useEffect(() => {
    if (searchValue === "") {
      setListOpen(false);
      setLoading(true);
    } else {
      setListOpen(true);
    }
  }, [searchValue]);

  // number of search suggestions returned
  const loadSearchTerms = () => {
    setQCount(qCount + 5);
  };

  // number of items returns within a dimension
  const loadSearchItems = () => setQGroupOptions(qGroupItemCount * 2);

  // clear search icon
  const clearSearch = () => {
    setSearchValue("");
    setListOpen(false);
    setLoading(true);
  };

  // handle select, close suggestions and clear search terms
  const handleSelect = (id) => {
    //  beginSelections();
    select(id);
    //   endSelections(true);
    setListOpen(false);
    setSearchValue("");
  };


  // handle loading indicator
  useEffect(() => {
    searchResults &&
      searchResults.qSearchGroupArray.length > 0 &&
      setLoading(false);
  }, [searchResults]);


  return (
    <div className={`gx-search-bar ${styleName}`}>
      <div
        className="gx-form-group">
        <input
          className="ant-input"
          type="search"
          placeholder={placeholder}
          onChange={handleInputChange}
          value={value}
        />
        <span className="gx-search-icon gx-pointer">
          <i className="icon icon-search" />
        </span>
      </div>
      {listOpen && (
        <Suggestions
          searchResults={searchResults}
          dimensions={dimensions}
          qCount={qCount}
          qGroupItemCount={qGroupItemCount}
          loadSearchTermsCallback={loadSearchTerms}
          loadSearchItemsCallback={loadSearchItems}
          selectCallback={handleSelect}
          loading={loading}
          width={width}
          dropHeight={dropHeight}
          size={size}
        />
      )}
    </div>
  );
};
export default SearchBox;

SearchBox.defaultProps = {
  styleName: "",
  value: "",
};

import React, { useState, useRef, useEffect } from "react";
import useSearch from "dev-resources/hooks/useSearch";
import Suggestions from "./Suggestions";
import useOutsideClick from "dev-resources/hooks/useOutsideClick";

import { Input, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const Search = ({
  engineError,
  dimensions,
  // size,
  width,
  margin,
  dropHeight,
  styleName,
  placeholder,
  onChange,
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

  // outside click functionality
  useOutsideClick(
    searchRef,
    () => {
      // eslint-disable-next-line
      const outsideClick = !searchRef.current.contains(event.target);
      outsideClick &&
        setSearchValue("") &&
        setListOpen(false) &&
        setLoading(true);
    },
    []
  );

  // handle loading indicator
  useEffect(() => {
    searchResults &&
      searchResults.qSearchGroupArray.length > 0 &&
      setLoading(false);
  }, [searchResults]);

  return (
    <div className={`gx-search-bar ${styleName}`} ref={searchRef}>
      <Space direction="vertical" style={{ width: "100%" }}>
        <Input
          addonAfter={<SearchOutlined />}
          // defaultValue="mysite"
          allowClear
          placeholder={placeholder}
          onChange={handleInputChange}
          value={searchValue}
        />

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
          />
        )}
      </Space>
    </div>
  );
};
export default Search;

Search.defaultProps = {
  styleName: "",
  value: "",
};

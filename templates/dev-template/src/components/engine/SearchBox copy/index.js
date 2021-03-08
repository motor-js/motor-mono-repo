import React, { useState, useRef, useEffect } from "react";
// import { useSearch } from "@motor-js/engine";
import useSearch from "dev-resources/hooks/useSearch";
import Suggestions from "./Suggestions";
import useOutsideClick from "dev-resources/hooks/useOutsideClick";

const SearchBox = ({
  styleName,
  placeholder,
  dimensions,
  size,
  width,
  margin,
  dropHeight,
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

  return (
    // see wrapper do we need to change this ?
    <div
    //     width: ${(props) => props.width};
    // margin: ${(props) => props.margin};
    // style={{
    //   width,
    //   margin,
    //   display: "flex",
    //   flexDirection: "column",
    //   position: " relative",
    // }}
    >
      <div
        className={`gx-search-bar ${styleName}`}
        //       border: ${(props) => props.theme.search.title.border};
        // border-color: ${(props) =>
        //   selectColor(props.theme.search.title.borderColor, props.theme)};
        // border-radius: ${(props) => props.theme.search.title.radius};
        // background-color: ${(props) =>
        //   selectColor(props.theme.search.color.background, props.theme)};
        // style={{
        //   backgroundColor: "red",
        //   width: "100%",
        //   padding: "0.6em 0 0.6em 0em",
        //   display: "flex",
        //   alignItems: "center",
        // }}
      >
        <div className="gx-form-group">
          <input
            className="ant-input"
            type="search"
            placeholder={placeholder}
            onChange={handleInputChange}
            value={searchValue}
            //             width: 85%;
            // outline: none;
            // border: none;
            // padding-left: 0.7em;
            // background-color: ${(props) =>
            //   selectColor(props.theme.search.color.background, props.theme)};
            // color: ${(props) => selectColor(props.theme.search.color.font, props.theme)};
            // &::placeholder {
            //   color: ${(props) =>
            //     selectColor(props.theme.search.color.placeholder, props.theme)};
            // }
          />
          <span className="gx-search-icon gx-pointer">
            <i
              className="icon icon-search"
              //             padding-left: 1em;
              // height: 15px;
              // width: 30px;
              // color: ${(props) => selectColor(props.theme.search.color.icon, props.theme)};
            />
          </span>
        </div>
      </div>
      {/* {listOpen && engine && ( */}
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
  dimensions: [],
  size: "medium",
  width: "100%",
  margin: "5px",
  dropHeight: "400px",
};

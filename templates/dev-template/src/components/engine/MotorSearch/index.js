import React, { useState, useRef, useEffect } from "react";
import useSearch from "dev-resources/hooks/useSearch";
import Suggestions from "./Suggestions";
import useOutsideClick from "dev-resources/hooks/useOutsideClick";

const SearchBox = ({
  engineError,
  dimensions,
  size,
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
    <div
      className={`gx-search-bar ${styleName}`}
      //     width: ${(props) => props.width};
      // margin: ${(props) => props.margin};
      // display: flex;
      // flex-direction: column;
      // position: relative;
    >
      <div
        className="gx-form-group"
        // style={{
        //   //       border: ${(props) => props.theme.search.title.border};
        //   // border-color: ${(props) =>
        //   //   selectColor(props.theme.search.title.borderColor, props.theme)};
        //   // border-radius: ${(props) => props.theme.search.title.radius};
        //   // background-color: ${(props) =>
        //   //   selectColor(props.theme.search.color.background, props.theme)};
        //   width: "100%",
        //   padding: "0.6em 0 0.6em 0em",
        //   display: "flex",
        //   alignItems: "center",
        // }}
      >
        <input
          className="ant-input"
          type="search"
          placeholder={placeholder}
          onChange={handleInputChange}
          value={searchValue}
        />
        <span className="gx-search-icon gx-pointer">
          <i
            className="icon icon-search"
            style={{
              paddingLeft: "1em",
              height: "15px",
              width: "30px",
              // color: ${(props) => selectColor(props.theme.search.color.icon, props.theme)};
            }}
          />
          {/* {searchValue !== "" && <XIcon onClick={clearSearch} size={15} 
  //           padding-right: 0.5em;
  // cursor: pointer;
  // color: ${(props) => selectColor(props.theme.search.color.icon, props.theme)};
          />} */}
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

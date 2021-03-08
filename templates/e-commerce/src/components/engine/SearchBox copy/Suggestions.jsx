import React from "react";
// import Button from "../Button";
import { Button } from "antd";
// import Spinner from "../Spinner";
// import {
//   SuggestionsItem,
//   SuggestionsWrapper,
//   SuggestionsList,
//   SuggestionsItemLoad,
//   SuggestionsItemTitle,
//   SuggestionsItemValues,
// } from "./SearchTheme";

const Suggestions = ({
  searchResults,
  loadSearchTermsCallback,
  loadSearchItemsCallback,
  qCount,
  qGroupItemCount,
  selectCallback,
  loading,
  dropHeight,
  width,
  size,
}) => {
  // load more search results callback
  const loadSearchTerms = (e) => {
    e.preventDefault();
    e.stopPropagation();
    loadSearchTermsCallback();
  };

  // load more items within a dimension callback
  const loadItems = (e) => {
    e.stopPropagation();
    loadSearchItemsCallback();
  };

  // select search callback
  const select = (r) => selectCallback(r.qId);

  // Total number of dimensions returned in search
  const searchterms = searchResults.qTotalNumberOfGroups;

  // Create suggestions list from search results
  let options = [];
  const loadSuggestions = () => {
    options = searchResults.qSearchGroupArray.map((r, i) => {
      const numberOfItems = r.qItems[0].qTotalNumberOfMatches;

      return (
        <li // SuggestionsItem
          padding={"5px"}
          cursor={"pointer"}
          // border-bottom: ${(props) => props.theme.search.suggestions.borderBottom};
          // &:hover {
          // background-color: ${(props) =>
          //   selectColor(props.theme.search.suggestions.hoverColor, props.theme)};
          // }
          data-testid={`suggestion-${i}`}
          key={i}
          onClick={() => select(r)}
        >
          <div data-testid={`dim-${i}`} size={size}>
            {/* SuggestionsItemTitle */}
            {r.qItems[0].qIdentifier}
            {/* </SuggestionsItemTitle> */}
          </div>
          <div data-testid={`value-${i}`} size={size}>
            {/* SuggestionsItemValues */}
            {r.qItems[0].qItemMatches
              .map((item) => {
                if (item.qText.length > 30) {
                  return `${item.qText.substring(0, 20)}..`;
                }

                return item.qText;
              })
              .join(", ")}
            {numberOfItems > qGroupItemCount && (
              <div onClick={(e) => loadItems(e)} size={size}>
                {/* SuggestionsItemLoad  */}
                Load more
                {/* </SuggestionsItemLoad> */}
              </div>
            )}
          </div>
          {/*</SuggestionsItemValues> */}
        </li> //SuggestionsItem
      );
    });
  };

  loadSuggestions();

  return (
    // <SuggestionsWrapper width={width}>
    // <div width={width}>
    <div style={{ width: "100%" }}>
      {/* <SuggestionsList dropHeight={dropHeight}> */}
      <ul //max-height={dropHeight}
        style={{
          listStyle: "none",
          padding: "0px",
          marginTop: "2px",
          // border: ${(props) => props.theme.search.title.border};
          // border-color: ${(props) =>
          //   selectColor(props.theme.search.title.borderColor, props.theme)};
          // border-radius: ${(props) => props.theme.search.title.radius};
          zIndex: "100",
          // background-color: ${(props) =>
          //   selectColor(props.theme.search.color.background, props.theme)};
          backgroundColor: "white",
          maxHeight: dropHeight,
          overflow: "auto",
          cursor: "normal",
          position: "absolute",
          width: "100%",
        }}
      >
        {/* {loading && <Spinner timeout={20000} />} */}
        {options}
        {options.length > 0 && searchterms > qCount && (
          <Button
            onClick={(e) => loadSearchTerms(e)}
            color="lightgrey"
            size="small"
            type="default"
          >
            Load more
          </Button>
        )}
        {/* </SuggestionsList> */}
      </ul>
      {/* </SuggestionsWrapper> */}
    </div>
  );
};

export default Suggestions;
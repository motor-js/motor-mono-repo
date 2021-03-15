import React from "react";
// import Button from "../Button";
import { Button } from "antd";
// import Spinner from "../Spinner";

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
        <li
          data-testid={`suggestion-${i}`}
          key={i}
          onClick={() => select(r)}
          // padding: 5px;
          // cursor: pointer;
          // border-bottom: ${(props) => props.theme.search.suggestions.borderBottom};
          // &:hover {
          //   background-color: ${(props) =>
          //     selectColor(props.theme.search.suggestions.hoverColor, props.theme)};
          // }
        >
          <div
            data-testid={`dim-${i}`}
            size={
              size
              //           font-size: ${(props) => props.theme.global.size.font[props.size]};
              // padding: 2px;
              // font-weight: bold;
              // color: ${(props) =>
              //   selectColor(props.theme.search.suggestions.titleColor, props.theme)};
            }
          >
            {r.qItems[0].qIdentifier}
          </div>
          <div
            data-testid={`value-${i}`}
            size={size}
            //           font-size: ${(props) => props.theme.global.size.font[props.size]};
            // padding: 2px;
            // color: ${(props) =>
            //   selectColor(props.theme.search.suggestions.valueColor, props.theme)};
          >
            {r.qItems[0].qItemMatches
              .map((item) => {
                if (item.qText.length > 30) {
                  return `${item.qText.substring(0, 20)}..`;
                }

                return item.qText;
              })
              .join(", ")}
            {numberOfItems > qGroupItemCount && (
              <div
                onClick={(e) => loadItems(e)}
                size={size}
                //               font-size: ${(props) => props.theme.global.size.subFont[props.size]};
                // font-style: italic;
                // text-decoration: underline;
                // display: inline-block;
                // &:hover {
                //   font-weight: bold;
                //   cursor: pointer;
                // }
              >
                Load more
              </div>
            )}
          </div>
        </li>
      );
    });
  };

  loadSuggestions();

  return (
    <div
      width={width}
      //   width: 100%;
    >
      <ul
        dropHeight={dropHeight}
        //       list-style: none;
        // padding: 0px;
        // margin-top: 2px;
        // border: ${(props) => props.theme.search.title.border};
        // border-color: ${(props) =>
        //   selectColor(props.theme.search.title.borderColor, props.theme)};
        // border-radius: ${(props) => props.theme.search.title.radius};
        // z-index: 100;
        // background-color: ${(props) =>
        //   selectColor(props.theme.search.color.background, props.theme)};
        // max-height: ${(props) => props.dropHeight};
        // overflow: auto;
        // cursor: normal;
        // position: absolute;
        // width: 100%;
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
      </ul>
    </div>
  );
};

export default Suggestions;

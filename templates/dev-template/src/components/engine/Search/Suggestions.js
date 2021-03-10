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
          className="gx-suggestions-list-li"
          data-testid={`suggestion-${i}`}
          key={i}
          onClick={() => select(r)}
        >
          <div
            data-testid={`dim-${i}`}
            className="gx-suggestions-list-li-title"
          >
            {r.qItems[0].qIdentifier}
          </div>
          <div
            data-testid={`value-${i}`}
            className="gx-suggestions-list-li-values"
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
                className="gx-suggestions-items-load"
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
      <ul className="gx-suggestions-list">
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

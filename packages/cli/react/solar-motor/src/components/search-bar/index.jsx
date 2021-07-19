import { useState, useEffect } from "react";
import { X } from "react-feather";
import { Input } from "../forms/form-elements";
import { useSearch } from "@motor-js/engine"
import {
  StyledSearch,
  StyledSearchHeader,
  StyledSearchClose,
  StyledSearchBody,
  StyledSearchTitle,
  StyledNavList,
  StyledNavBtn,
  StyledNavDivider,
  StyledNavListItem,
} from "./style";

const SearchBar = ({ isOpen, onClose }) => {

  const [options, setOptions] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const qCount = 100;
  const qGroupItemCount = 100;

  const { 
    flatResults,
    flatSelect,
  } = useSearch({ 
    searchValue,
    qCount,
    qGroupItemCount
  })


  // Temporary Search suggestions for you to update
  const searchSuggestions = [
    {
    item: "Search Term A"
    },
    {
      item: "Search Term B"
    },
    {
      item: "Search Term C"
    }
  ];

  const handleSearch = (value) => (
    setSearchValue(value)
  )

  const handleSelect = (val, dim) => {
    flatSelect(dim,val)
    onClose()
  };

  useEffect(() => {
    setOptions(flatResults)
  },[flatResults])

  return (
    <StyledSearch $isOpen={isOpen}>
      <StyledSearchHeader>
        <Input
          type="search"
          id="nav-search"
          name="nav-search"
          placeholder="Type and hit enter to search..."
          customStyle="noborder"
          fontSize={["14px", null, null, "16px"]}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <StyledSearchClose variant="texted" onClick={onClose}>
          <X />
        </StyledSearchClose>
      </StyledSearchHeader>
      <StyledSearchBody>
        <StyledSearchTitle>Search Results</StyledSearchTitle>
        <StyledNavList>
          { options && options.map((data,i) => (
            <StyledNavListItem key={i} >
              <StyledNavBtn onClick={() => handleSelect(data.value, data.dimension)}>{data.value}</StyledNavBtn>
            </StyledNavListItem>
          ))}
        </StyledNavList>
      </StyledSearchBody>
      <StyledSearchBody>
        <StyledNavDivider />
        <StyledSearchTitle>Search Suggestions</StyledSearchTitle>
        <StyledNavList>
          {searchSuggestions.map((data, i) => (
            <StyledNavListItem key={i}>
              <StyledNavBtn href="#">{data.item}</StyledNavBtn>
            </StyledNavListItem>
          ))}
        </StyledNavList>
      </StyledSearchBody>
    </StyledSearch>
  );
};

export default SearchBar;

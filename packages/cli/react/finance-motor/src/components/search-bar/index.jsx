import { Search, X } from "react-feather";
import { Input } from "../forms/form-elements";
import {
  StyledSearch,
  StyledSearchHeader,
  StyledSearchBtn,
  StyledSearchClose,
  StyledSearchBody,
  StyledSearchTitle,
  StyledNavList,
  StyledNavBtn,
  StyledNavDivider,
  StyledNavListItem,
} from "./style";

const SearchBar = ({ isOpen, onClose }) => {

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
          onChange={(e) => ( console.log(e.target.value))}
        />
        <StyledSearchBtn variant="texted" color="light">
          <Search />
        </StyledSearchBtn>
        <StyledSearchClose variant="texted" onClick={onClose}>
          <X />
        </StyledSearchClose>
      </StyledSearchHeader>
      <StyledSearchBody>
        <StyledSearchTitle>Search Results</StyledSearchTitle>
        <StyledNavList>
          
          <StyledNavListItem>
            <StyledNavBtn href="#">Result 1</StyledNavBtn>
          </StyledNavListItem>
          <StyledNavListItem>
            <StyledNavBtn href="#">Result 1</StyledNavBtn>
          </StyledNavListItem>
          <StyledNavListItem>
            <StyledNavBtn href="#">Result 1</StyledNavBtn>
          </StyledNavListItem>
          <StyledNavListItem>
            <StyledNavBtn href="#">Result 1</StyledNavBtn>
          </StyledNavListItem>
          <StyledNavListItem>
            <StyledNavBtn href="#">Result 1</StyledNavBtn>
          </StyledNavListItem>

        </StyledNavList>
      </StyledSearchBody>
      <StyledSearchBody>
        <StyledNavDivider />
        <StyledSearchTitle>Search Suggestions</StyledSearchTitle>
        <StyledNavList>
          {searchSuggestions.map((data) => (
            <StyledNavListItem>
              <StyledNavBtn href="#">{data.item}</StyledNavBtn>
            </StyledNavListItem>
          ))}
        </StyledNavList>
      </StyledSearchBody>
    </StyledSearch>
  );
};

export default SearchBar;

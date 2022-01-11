import { useState, useCallback, } from "react";
import { Search, Menu, X } from "react-feather";
import { useSelections } from "@motor-js/engine"

import { Button, Navbar } from "../../components";
import { menuData } from "../../components/data";
import Logo from "../../components/logo";
import SearchBar from "../../components/search-bar";
import CurrentSelections from "../../components/current-selections";
import FilterDropDown from "../../components/filter-dropdown"

import {
  StyledHeader,
  StyledLogo,
  StyledNavbarWrap,
  StyledNavbarMenu,
  StyleNavbarRight,
  StyledNavbarElement,
  StyledNavbarHeader,
  StyledNavbarBody,
  StyledNavbarTitle,
  StyledMenuBtn,
} from "./style";

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const { selections, clearSelections } = useSelections();

  const searchHandler = useCallback(() => {
    setSearchOpen((prev) => !prev);
  }, []);

  const menuHandler = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  return (
    <>
      <StyledHeader> 
          <StyledMenuBtn
            variant="texted"
            onClick={menuHandler}
          >
            <Menu size={20} strokeWidth="2.5px" />
          </StyledMenuBtn>
        <StyledLogo>
          <Logo />
        </StyledLogo>
        <StyledNavbarWrap $isOpen={menuOpen} onClick={menuHandler}>
          <StyledNavbarMenu
            $isOpen={menuOpen}
            onClick={(e) => e.stopPropagation()}
          >
            <StyledNavbarHeader>
              <Logo />
              <Button variant="texted" onClick={menuHandler}>
                <X color="#7987a1" width={20} strokeWidth="2.5px" />
              </Button>
            </StyledNavbarHeader>
            <StyledNavbarBody>
              <StyledNavbarTitle>MAIN NAVIGATION</StyledNavbarTitle>
              <Navbar menus={menuData} />
            </StyledNavbarBody>
          </StyledNavbarMenu>
        </StyledNavbarWrap>
        <StyleNavbarRight>
          <StyledNavbarElement ml={["8px", "15px"]}>
            <CurrentSelections selections={selections} clear={clearSelections} />
          </StyledNavbarElement>
          <StyledNavbarElement ml={["8px", "15px"]}>
            <FilterDropDown />
          </StyledNavbarElement>
          <StyledNavbarElement ml={["8px", "15px"]}>
          <Button variant="texted" onClick={searchHandler}>
            <Search className="header-icon" />
          </Button>
          </StyledNavbarElement>
        </StyleNavbarRight>
      </StyledHeader>
      <SearchBar isOpen={searchOpen} onClose={searchHandler} />
    </>
  );
};

Header.defaultProps = {
  sidebarLayout: 1,
};

export default Header;

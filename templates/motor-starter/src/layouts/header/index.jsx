import { useState, useCallback, useContext } from "react";
import { Search, Menu, X, ArrowLeft } from "react-feather";
import { Button, Navbar } from "../../components";
import { menuData } from "../../components/data";
import Logo from "../../components/logo";
import SearchBar from "../../components/search-bar";

/*
import MessageDropdown from "../../components/header/message-dropdown";
import NotificationDropdown from "../../components/header/notification-dropdown";
import ProfileDropdown from "../../components/header/profile-dropdown";
import NavSearch from "../../components/header/nav-search";

//import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { toggleSidebar, toggleBody } from "../../redux/slices/ui";
*/


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
  StyledSidebarBtn,
} from "./style";

const Header = ({ /*hasSidebar, sidebarLayout  */}) => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const searchHandler = useCallback(() => {
    setSearchOpen((prev) => !prev);
  }, []);

  const menuHandler = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, [menuOpen]);

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
          <StyledNavbarElement>
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

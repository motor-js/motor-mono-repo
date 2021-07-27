import React from "react";
import { Heart } from "react-feather";
import {
  StyledFooter,
  StyledFooterLeft,
  StyledFooterRight,
  StyledFooterNav,
  StyledFotterNavLink,
} from "./style";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterLeft>
        <span>&copy; Motor {new Date().getFullYear()} </span>
      </StyledFooterLeft>
    </StyledFooter>
  );
};

export default Footer;

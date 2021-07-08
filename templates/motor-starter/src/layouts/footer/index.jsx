import React from "react";
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
      <StyledFooterRight>
        <StyledFooterNav>
          <StyledFotterNavLink path="https://docs.motor.so">
            View Docs
          </StyledFotterNavLink>
          <StyledFotterNavLink path="https://www.motor.so/contact">
            Get Help
          </StyledFotterNavLink>
        </StyledFooterNav>
      </StyledFooterRight>
      <StyledFooterLeft>
        <span>&copy; MOTOR {new Date().getFullYear()} </span>
        <span className="copright-link">
        </span>
      </StyledFooterLeft>
    </StyledFooter>
  );
};

export default Footer;

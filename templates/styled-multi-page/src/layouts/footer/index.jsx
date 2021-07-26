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
      <StyledFooterRight>
        <StyledFooterNav>
          <StyledFotterNavLink path="https://themeforest.net/licenses/standard">
            Licenses
          </StyledFotterNavLink>
          <StyledFotterNavLink path="/">Change Log</StyledFotterNavLink>
          <StyledFotterNavLink path="https://hasthemes.com/contact-us/">
            Get Help
          </StyledFotterNavLink>
        </StyledFooterNav>
      </StyledFooterRight>
      <StyledFooterLeft>
        <span>&copy; Motor {new Date().getFullYear()} </span>
        <span className="copright-link">
          MADE WITH <Heart size="24" /> BY{"  "}
          <a
            href="https://www.motor.so/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Motor Team
          </a>
        </span>
      </StyledFooterLeft>
    </StyledFooter>
  );
};

export default Footer;

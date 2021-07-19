/* eslint-disable react/react-in-jsx-scope */
import styled, { themeGet, device } from "../../theme";
import { Anchor } from "../../components";

export const StyledFooter = styled.footer`
  font-size: 10px;
  font-family: ${themeGet("fonts.interUi")};
  letter-spacing: 0.3px;
  padding: 15px 25px;
  background-color: ${themeGet("colors.gray50")};
  color: ${themeGet("colors.gray950")};
  border-top: 1px solid ${themeGet("colors.border")};
  text-transform: uppercase;
  ${device.large} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row-reverse;
  }
`;

export const StyledFooterLeft = styled.div`
  margin-top: 10px;
  ${device.medium} {
    margin-top: 0;
  }
  a {
    padding: 0;
    color: ${themeGet("colors.text2")};
  }
  .copright-link {
    display: inline-flex;
    a {
      margin-left: 2px;
    }
  }
  svg {
    width: 16px;
    height: 16px;
    color: ${themeGet("colors.danger")};
    margin: 0 5px;
  }
`;

export const StyledFooterRight = styled.div``;

export const StyledFooterNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
`;

export const StyledFotterNavLink = styled(({ ...rest }) => (
  <Anchor {...rest} />
))`
  padding: 0;
  color: ${themeGet("colors.text2")};
  display: block;
  &:not(:first-of-type) {
    margin-left: 25px;
  }
  &:hover {
    color: ${themeGet("colors.primary")};
  }
`;

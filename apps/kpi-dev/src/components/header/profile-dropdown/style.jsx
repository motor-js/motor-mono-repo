import styled, { device, themeGet, space } from "../../../styled";
import { Anchor, DropdownMenu } from "../..";

export const StyledDropMenu = styled(({ ...rest }) => (
  <DropdownMenu {...rest} />
))`
  border-top-width: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-color: rgba(72, 94, 144, 0.16);
  width: 230px;
  padding: 25px;
  margin-top: 11.5px;
  box-shadow: none;
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
  margin-right: -10px;
  right: 0;
  left: auto;
  ${device.large} {
    margin-top: 14.5px;
  }
  &:before {
    content: "";
    position: absolute;
    top: -10px;
    left: 25px;
    border-bottom: 10px solid rgba(72, 94, 144, 0.16);
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    left: auto;
    right: 20px;
    ${device.small} {
      right: 20px;
    }
  }
  &:after {
    content: "";
    position: absolute;
    top: -8.5px;
    left: 26px;
    border-bottom: 9px solid #fff;
    border-left: 9px solid transparent;
    border-right: 9px solid transparent;
    left: auto;
    right: 21px;
    ${device.small} {
      right: 21px;
    }
  }
`;

StyledDropMenu.displayName = "DropdownMenu";

export const StyledAuthorName = styled.h6`
  font-weight: 600;
  margin-bottom: 5px;
  margin-top: 15px;
`;

export const StyledAuthorRole = styled.p`
  font-size: 12px;
  color: ${themeGet("colors.text3")};
  margin-bottom: 25px;
`;
export const StyledReload = styled.p`
  padding: 0;
  display: flex;
  align-items: center;
  color: ${themeGet("colors.text2")};
  border-radius: 0.25rem;
  transition: all 0.2s ease-in-out;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
  clear: both;
  font-weight: 400;
  width: 100%;
  svg {
    width: 16px;
    height: 16px;
    margin-right: 15px;
  }
`;

export const StyledDropItem = styled(({ mt, ...rest }) => <Anchor {...rest} />)`
  padding: 0;
  display: flex;
  align-items: center;
  color: ${themeGet("colors.text2")};
  border-radius: 0.25rem;
  transition: all 0.2s ease-in-out;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
  clear: both;
  font-weight: 400;
  width: 100%;
  svg {
    width: 16px;
    height: 16px;
    margin-right: 15px;
  }
  ${space}
`;

export const StyledDivider = styled.div`
  height: 0;
  overflow: hidden;
  border-top: 1px solid ${themeGet("colors.gray200")};
  margin: 15px 0;
`;

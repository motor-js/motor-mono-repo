import styled, { device, themeGet } from "../../theme";
import { DropdownMenu } from "../";

export const StyledDropMenu = styled(({ ...rest }) => (
  <DropdownMenu {...rest} />
))`
  width: 300px;
  padding: 0;
  margin-right: -20px;
  box-shadow: none;
  right: 0;
  left: auto;
  border-top-width: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  margin-top: 17.5px;
  margin-right: -55px;
  ${device.small} {
    margin-right: -20px;
  }
  ${device.large} {
    margin-top: 19.5px;
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
    right: 51px;
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
    right: 52px;
    ${device.small} {
      right: 21px;
    }
  }
`;

StyledDropMenu.displayName = "DropdownMenu";

export const StyledDropHeader = styled.div`
  display: block;
  white-space: nowrap;
  padding: 12px 15px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: ${themeGet("colors.text2")};
  border-bottom: 1px solid ${themeGet("colors.border")};
  margin-bottom: 5px;
`;

export const StyledDropItem = styled.div`
  transition: none;
  border-radius: 0.25rem;
  padding: 8px 10px;
  max-height: 35px;
  margin: 0 5px;
  width: auto;
  position: relative;
`;

export const StyledDropFooter = styled.div`
  margin-top: 5px;
  border-top: 1px solid ${themeGet("colors.border")};
  padding: 10px;
  text-align: center;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  a {
    color: ${themeGet("colors.text3")};
  }
`;

export const StyledBadge = styled.span`
  display: flex;
  width: 15px;
  height: 15px;
  justify-content: center;
  position: absolute;
  top: -5px;
  right: -2px;
  background-color: ${themeGet("colors.danger")};
  color: #fff;
  font-size: 8px;
  font-weight: 400;
  font-family: sans-serif;
  line-height: 2;
  border-radius: 100%;
`;

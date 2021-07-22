/* eslint-disable react/react-in-jsx-scope */
import styled, { device, themeGet } from "../../theme";
import { DropdownMenu } from "..";
import { hexTorgb } from "../../util";

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
  margin-right: -75px;
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
    border-bottom: 10px solid ${themeGet("colors.border")};
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    left: auto;
    right: 72px;
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
    right: 73px;
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
  color: #1b2e4b;
  border-bottom: 1px solid ${themeGet("colors.border")};
  margin-bottom: 5px;
`;

export const StyledDropBody = styled.div`
  max-height: 500px;
  overflow-y: scroll;
`;

export const StyledDropFooter = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5px;
  border-top: 1px solid ${themeGet("colors.border")};
  padding: 5px;
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

export const StyledDropItem = styled.span`
  transition: none;
  border-radius: 0.25rem;
  white-space: normal;
  padding: 8px 10px;
  margin: 0 5px;
  width: auto;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  cursor: pointer;
  align-items: center;
  &:hover {
    background-color: ${(props) => hexTorgb(props.theme.colors.light, 0.5)};
  }
`;

export const StyledText = styled.div`
  font-weight: 500;
  color: ${themeGet("colors.text3")};
  text-align: center;
  padding: 5px;
  &:hover {
    cursor: pointer;
  }
`;

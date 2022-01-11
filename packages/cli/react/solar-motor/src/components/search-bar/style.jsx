import styled, { css, device, themeGet } from "../../theme";
import { Button } from "..";
import { Input } from "../forms/form-elements";
import { hexTorgb } from "../../util";

export const StyledSearch = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => hexTorgb(props.theme.colors.primary, 0.4)};
  z-index: 99999;
  visibility: hidden;
  opacity: 0;
  transition: all 0.2s ease-in-out;
  ${({ $isOpen }) =>
    $isOpen === true &&
    css`
      visibility: visible;
      opacity: 1;
    `}
`;

export const StyledSearchHeader = styled.div`
  height: 55px;
  background-color: #fff;
  padding: 0 15px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${themeGet("colors.border")};
  ${device.small} {
    padding: 0 20px;
    height: 60px;
  }
  ${device.large} {
    padding: 0 25px;
  }
`;

export const StyledSearchInput = styled(({ ...rest }) => <Input {...rest} />)`
  padding: 0;
  font-size: 14px;
  font-weight: 500;
  color: ${themeGet("colors.text")};
  border-width: 0;
  background-color: transparent;
  &::placeholder {
    font-weight: 400;
    ${device.large} {
      font-size: 16px;
    }
  }
  &:-ms-input-placeholder {
    font-weight: 400;
    ${device.large} {
      font-size: 16px;
    }
  }
  &::-ms-input-placeholder {
    font-weight: 400;
    ${device.large} {
      font-size: 16px;
    }
  }
  ${device.large} {
    font-size: 16px;
  }
  &:focus {
    box-shadow: none;
    color: ${themeGet("colors.text")};
  }
`;

export const StyledSearchClose = styled(({ ...rest }) => <Button {...rest} />)`
  color: ${themeGet("colors.text3")};
  margin-left: 5px;
  &:hover {
    color: ${themeGet("colors.text")};
  }
  ${device.large} {
    margin-left: 10px;
  }
`;

export const StyledSearchBody = styled.div`
  padding: 15px 15px 20px;
  background-color: #fff;
  overflow-y: scroll;
  overflow-x: hidden;
  max-height: 60%;
  font-size: 13px;
  ${device.large} {
    padding: 25px 25px 30px;
  }
`;

export const StyledSearchTitle = styled.h6`
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 500;
  color: ${themeGet("colors.text3")};
  margin-bottom: 10px;
`;

export const StyledNavList = styled.ul`
  padding-left: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  height: 80%;
  margin-bottom: 0;
  ${device.large} {
    flex-direction: row;
  }
`;

export const StyledNavListItem = styled.li`
  margin: 2px;
  cursor: pointer;
`;

export const StyledNavBtn = styled.a`
  padding: 5px 10px;
  display: block;
  color: ${themeGet("colors.text2")};
  border-radius: 0.25rem;
  ${device.large} {
    border: 1px solid ${themeGet("colors.border")};
  }
  &:hover,
  &:focus {
    background-color: ${themeGet("colors.light")};
    ${device.large} {
      background-color: ${themeGet("colors.text4")};
      border-color: transparent;
    }
  }
`;

export const StyledNavDivider = styled.hr`
  margin-top: 30px;
  margin-bottom: 30px;
  border-width: 0;
  border-color: ${themeGet("colors.border")};
`;

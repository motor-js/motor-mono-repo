/* eslint-disable react/react-in-jsx-scope */
import styled, { themeGet } from "../../theme";
import { MediaBody } from "..";
import { hexTorgb } from "../../util";

export const StyledMediaBody = styled(({ ...rest }) => <MediaBody {...rest} />)`
  margin-left: 15px;
  font-size: 13px;
`;

export const StyledStrong = styled.strong`
  font-weight: strong;
  color: ${themeGet("colors.text2")};
`;

export const StyledText = styled.p`
  margin-bottom: 2px;
  color: rgba(${themeGet("colors.text2")}, 0.85);
`;

export const StyledSpan = styled.span`
  color: ${themeGet("colors.text3")};
  padding: 2px;
  font-size: 11px;
  font-family: ${themeGet("fonts.interUi")};
  cursor: pointer;
  &:hover {
    background-color: ${(props) => hexTorgb(props.theme.colors.light, 0.5)};
  }
`;

export const StyledSelectionItem = styled.span`
  transition: none;
  border-radius: 0.25rem;
  white-space: normal;
  padding: 8px 10px;
  margin: 0 5px;
  width: auto;
  display: block;
  overflow: hidden;
`;

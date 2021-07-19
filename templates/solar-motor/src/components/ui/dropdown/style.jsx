import styled, { css, themeGet } from "../../../theme";
import tinycolor2 from "tinycolor2";
import { Anchor } from "../anchor";

export const StyledDropdown = styled.div`
  position: relative;
`;

export const StyledDropMenu = styled.div`
  position: absolute;
  will-change: transform;
  z-index: 1000;
  display: none;
  float: left;
  min-width: 10rem;
  font-size: 0.875rem;
  color: ${themeGet("colors.text")};
  text-align: left;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid
    ${(props) => tinycolor2(props.theme.colors.text3).setAlpha(0.27).toString()};
  border-radius: 0.25rem;
  box-shadow: 0 0 8px 2px rgb(28 39 60 / 4%);
  padding: 5px;

  ${({ $show }) =>
    $show &&
    css`
      display: block;
    `}

  ${({ $direction }) =>
    $direction === "down" &&
    css`
      top: 100%;
      left: 0px;
      margin-top: 0.125rem;
    `}

    ${({ $direction }) =>
    $direction === "up" &&
    css`
      left: 0px;
      bottom: 100%;
      margin-bottom: 0.125rem;
    `}

    ${({ $direction, $menuWidth }) =>
    $direction === "left" &&
    css`
      transform: translate3d(-${$menuWidth}px, 0px, 0px);
      top: 0px;
      left: 0px;
      margin-right: 0.125rem;
    `}
    ${({ $direction, $menuWidth }) =>
    $direction === "right" &&
    css`
      transform: translate3d(${$menuWidth}px, 0px, 0px);
      top: 0px;
      right: 0px;
      margin-left: 0.125rem;
    `}
`;

export const StyledDropItem = styled(({ active, ...rest }) => (
  <Anchor {...rest} />
))`
  display: block;
  width: 100%;
  padding: 6px 15px;
  clear: both;
  font-weight: 400;
  color: ${themeGet("colors.gray900")};
  text-align: inherit;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${themeGet("colors.heading")};
    background-color: ${themeGet("colors.light")};
  }

  ${(props) =>
    props.active === true &&
    css`
      color: #fff;
      background-color: ${themeGet("colors.primary")};
      &:hover {
        color: #fff;
        background-color: ${themeGet("colors.primary")};
      }
    `}
`;

export const StyledDropDivider = styled.div`
  height: 0;
  margin: 0.5rem 0;
  overflow: hidden;
  border-top: 1px solid #e3e7ed;
`;

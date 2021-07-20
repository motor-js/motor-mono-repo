import styled, {
  themeGet,
  css,
  flexbox,
  space,
  device,
  typography,
} from "../../../theme";
import { Anchor } from "../anchor";

export const StyledNav = styled(
  ({
    fontSize,
    fontWeight,
    fontFamily,
    justifyContent,
    alignItems,
    flexDirection,
    mb,
    mt,
    mx,
    my,
    ml,
    mr,
    ...rest
  }) => <nav {...rest} />
)`
  display: flex;
  flex-wrap: wrap;
  ${({ $pills }) =>
    !!$pills &&
    css`
      .nav-link {
        transition: all 0.2s ease-in-out;
        border-radius: 0.25rem;
        &:not(.active) {
          &:hover,
          &:focus {
            background-color: #eeeff4;
            color: #001737;
          }
        }
        &.active {
          color: #fff;
          background-color: #0168fa;
        }
      }
    `}
  ${({ $align }) =>
    $align === "center" &&
    css`
      justify-content: center;
    `}
	${({ $align }) =>
    $align === "right" &&
    css`
      justify-content: flex-end;
    `}
	${({ $vertical }) =>
    !!$vertical &&
    css`
      flex-direction: column;
    `}
	${({ $vertical, $pills }) =>
    !$vertical &&
    !!$pills &&
    css`
      .nav-link {
        & + .nav-link {
          margin-left: 2px;
        }
      }
    `}
	${({ $fill }) =>
    !!$fill &&
    css`
      .nav-link {
        flex: 1 1 auto;
        text-align: center;
      }
    `}
	${({ $customStyle }) =>
    $customStyle === "classic" &&
    css`
      flex-wrap: wrap;
      flex-direction: column;
    `}
	${({ $customStyle }) =>
    $customStyle === "icon" &&
    css`
      flex-wrap: wrap;
      align-items: center;
    `}

	${({ $customStyle }) =>
    $customStyle === "line" &&
    css`
      flex-wrap: wrap;
      border-bottom: 2px solid ${themeGet("colors.border")};
    `}
	
	${({ $customStyle }) =>
    $customStyle === "sidebar" &&
    css`
      flex-wrap: wrap;
      flex-direction: column;
      font-size: 13px;
      padding-left: 0;
      margin-bottom: 0;
      .badge {
        margin-left: auto;
        color: ${themeGet("colors.text4")};
        font-weight: 400;
        font-size: 11px;
        background: transparent;
      }
    `}

	${({ $customStyle }) =>
    $customStyle === "social" &&
    css`
      flex-wrap: wrap;
      align-items: center;
    `}
		
	${({ $customStyle }) =>
    $customStyle === "with-icon" &&
    css`
      flex-wrap: wrap;
      font-size: 13px;
    `}

    ${flexbox};
  ${space};
  ${typography};
`;

export const StyledNavLink = styled(
  ({ fontSize, fontWeight, fontFamily, mb, mt, mx, my, ml, mr, ...rest }) => (
    <Anchor {...rest} />
  )
)`
  padding: 0.5rem 1rem;
  color: ${themeGet("colors.text3")};
  ${({ $active }) =>
    !!$active &&
    css`
      color: ${themeGet("colors.primary")};
    `}
  ${({ $customStyle }) =>
    $customStyle === "classic" &&
    css`
      padding: 0;
      display: flex;
      align-items: center;
      color: ${themeGet("colors.text2")};
      &:not(:first-of-type) {
        margin-top: 10px;
      }
      span:not(.badge) {
        display: block;
        transform: translateY(1px);
      }
      .badge {
        margin-left: auto;
        color: ${themeGet("colors.text4")};
        font-weight: 400;
        font-size: 11px;
      }
    `}
	${({ $active, $customStyle }) =>
    !!$active &&
    $customStyle === "classic" &&
    css`
      color: ${themeGet("colors.primary")};
    `}

	${({ $customStyle }) =>
    $customStyle === "icon" &&
    css`
      padding: 0;
      line-height: 100%;
      &:not(:first-of-type) {
        margin-left: 10px;
      }
      svg {
        width: 18px;
        height: 18px;
      }
    `}
		
	${({ $customStyle }) =>
    $customStyle === "line" &&
    css`
      display: block;
      color: ${themeGet("colors.gray700")};
      padding: 8px 0;
      font-size: 12px;
      &:not(:first-of-type) {
        margin-left: 10px;
      }
      ${device.small} {
        font-size: 13px;
        &:not(:first-of-type) {
          margin-left: 15px;
        }
      }
      ${device.medium} {
        &:not(:first-of-type) {
          margin-left: 25px;
        }
      }
    `}
	${({ $active, $customStyle }) =>
    !!$active &&
    $customStyle === "line" &&
    css`
      position: relative;
      color: ${themeGet("colors.primary")};
      &:before {
        content: "";
        position: absolute;
        bottom: -2px;
        left: 0;
        right: 0;
        height: 2px;
        background-color: ${themeGet("colors.primary")};
      }
    `}
	
	${({ $customStyle }) =>
    $customStyle === "sidebar" &&
    css`
      padding: 6px 10px;
      display: flex;
      align-items: center;
      border-radius: 0.25rem;
      color: ${themeGet("colors.text2")};
      &:not(:first-of-type) {
        margin-top: 2px;
      }
      &:hover,
      &:focus {
        background-color: ${themeGet("colors.whisper")};
      }
      svg {
        width: 18px;
        height: 18px;
        stroke-width: 2.3px;
        margin-right: 12px;
        color: #566476;
        fill: rgba(27, 46, 75, 0.06);
      }
    `}

	${({ $active, $customStyle }) =>
    !!$active &&
    $customStyle === "sidebar" &&
    css`
      color: ${themeGet("colors.primary")};
      font-weight: 500;
      background-color: ${themeGet("colors.catskill")};
      svg {
        color: ${themeGet("colors.primary")};
        fill: rgba(1, 104, 250, 0.2);
      }
    `}

	${({ $customStyle }) =>
    $customStyle === "social" &&
    css`
      padding: 0;
      color: #1b2e4b;
      &:not(:first-of-type) {
        margin-left: 8px;
      }
      svg {
        width: 18px;
      }
    `}
	
	${({ $customStyle }) =>
    $customStyle === "with-icon" &&
    css`
      padding: 0;
      display: flex;
      align-items: center;
      &:not(:first-of-type) {
        margin-left: 15px;
        ${device.small} {
          margin-left: 25px;
        }
      }
      &:hover {
        color: ${themeGet("colors.primary")};
      }
      svg {
        width: 16px;
        height: 16px;
        stroke-width: 2.5px;
        position: relative;
        top: -1px;
      }
    `}

	svg {
    ${({ $customStyle, $iconPosition, $iconDistance }) =>
      $customStyle === "with-icon" &&
      $iconPosition === "left" &&
      css`
        margin-right: ${$iconDistance};
      `}
    ${({ $customStyle, $iconPosition, $iconDistance }) =>
      $customStyle === "with-icon" &&
      $iconPosition === "right" &&
      css`
        margin-left: ${$iconDistance};
      `}
  }
  ${space};
  ${typography};
`;

export const StyledDivider = styled.span`
  width: 1px;
  background-color: ${themeGet("colors.light")};
  margin: 0 15px;
  display: none;
  ${device.small} {
    display: block;
  }
`;

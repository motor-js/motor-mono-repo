import styled, { themeGet, css, space, flexbox, layout } from "../../../styled";

export const StyledListGroup = styled(
  ({ p, px, py, pl, pr, pt, pb, m, mx, my, ml, mr, mt, mb, ...rest }) => (
    <ul {...rest} />
  )
)`
  display: flex;
  ${space}
  ${({ $horizontal }) =>
    ($horizontal !== true || !$horizontal) &&
    css`
      flex-direction: column;
    `}
    ${({ $horizontal }) =>
    $horizontal === true &&
    css`
      flex-direction: row;
    `}
`;

export const StyledListGroupItem = styled(
  ({ display, p, px, py, pl, pr, pt, pb, ...rest }) => <li {...rest} />
)`
  padding: 10px 15px;
  position: relative;
  display: block;
  background-color: transparent;
  border: 1px solid ${themeGet("colors.light")};
  &:first-child {
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }
  &:not(:first-child) {
    border-top-width: 0;
  }
  &:last-child {
    border-bottom-right-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }

  ${({ $active }) =>
    $active === true &&
    css`
      margin-top: -1px;
      border-top-width: 1px;
      z-index: 2;
      color: #fff;
      background-color: ${themeGet("colors.primary")};
      border-color: ${themeGet("colors.primary")};
    `}
  ${({ $disabled }) =>
    $disabled === true &&
    css`
      color: ${themeGet("colors.gray600")};
      pointer-events: none;
      background-color: #fff;
    `}
    ${({ $action, $active }) =>
    $action === true &&
    $active !== true &&
    css`
      &:hover,
      &:focus {
        z-index: 1;
        color: ${themeGet("colors.gray700")};
        text-decoration: none;
        background-color: ${themeGet("colors.gray100")};
      }
    `}

    ${({ $flush }) =>
    $flush === true &&
    css`
      border-width: 0 0 1px;
      border-radius: 0;
      &:first-child,
      &:last-child {
        border-radius: 0;
      }
      &:last-child {
        border-bottom-width: 0;
      }
    `}
    ${({ $horizontal }) =>
    $horizontal === true &&
    css`
      &:first-child {
        border-bottom-left-radius: 0.25rem;
        border-top-right-radius: 0;
      }
      &:not(:first-child) {
        border-top-width: 1px;
        border-left-width: 0;
      }
      &:last-child {
        border-top-right-radius: 0.25rem;
        border-bottom-left-radius: 0;
      }
    `}
    ${space};
  ${flexbox};
  ${layout}
`;

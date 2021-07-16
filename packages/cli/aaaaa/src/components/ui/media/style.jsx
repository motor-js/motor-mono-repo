import styled, { layout, space, flexbox, css } from "../../../theme";

export const StyledMedia = styled(
  ({ m, ml, mr, mt, mb, display, alignItems, $el, ...props }) => (
    <div {...props} />
  )
)`
  ${({ $el }) =>
    $el !== "ul" &&
    css`
      display: flex;
      align-items: flex-start;
    `}
  ${layout};
  ${space};
  ${flexbox};
`;

export const StyledMediaLeft = styled(({ width, mr, ml, ...props }) => (
  <div {...props} />
))`
  ${layout};
  ${space};
  ${(props) =>
    props.$alignMent === "middle" &&
    css`
      align-self: center;
    `}
  ${(props) =>
    props.$alignMent === "end" &&
    css`
      align-self: flex-end;
    `}
    img {
    max-width: 100%;
  }
`;

export const StyledMediaBody = styled(
  ({ width, m, mr, ml, mt, mb, px, ...props }) => <div {...props} />
)`
  ${space};
  flex: 1;
`;

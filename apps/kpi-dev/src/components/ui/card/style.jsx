/* eslint-disable jsx-a11y/heading-has-content */
import styled, {
  themeGet,
  layout,
  space,
  css,
  device,
  typography,
  position as positionProps,
} from "../../../styled";

const colorCSS = css`
  color: #ffffff;
  .card-header {
    border-bottom-color: rgba(255, 255, 255, 0.1);
  }
  .card-text,
  .card-title,
  p,
  small {
    color: #ffffff;
  }
`;

export const StyledCard = styled(
  ({
    ml,
    mr,
    mt,
    mb,
    pl,
    pr,
    pt,
    pb,
    p,
    width,
    height,
    minWidth,
    maxWidth,
    ...props
  }) => <div {...props} />
)`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid ${themeGet("colors.border")};
  border-radius: ${themeGet("radii.rounded")};
  ${(props) =>
    props.$color === "primary" &&
    css`
      background-color: ${themeGet("colors.primary")};
      ${colorCSS};
    `}
  ${(props) =>
    props.$color === "secondary" &&
    css`
      background-color: ${themeGet("colors.secondary")};
      ${colorCSS};
    `}
    ${(props) =>
    props.$color === "success" &&
    css`
      background-color: ${themeGet("colors.success")};
      ${colorCSS};
    `}
    ${(props) =>
    props.$color === "warning" &&
    css`
      background-color: ${themeGet("colors.warning")};
      ${colorCSS};
    `}
    ${(props) =>
    props.$color === "danger" &&
    css`
      background-color: ${themeGet("colors.danger")};
      ${colorCSS};
    `}
    ${(props) =>
    props.$color === "info" &&
    css`
      background-color: ${themeGet("colors.info")};
      ${colorCSS};
    `}
    ${layout};
  ${space};
`;

export const StyledCardBody = styled(
  ({
    textAlign,
    ml,
    mr,
    mt,
    mb,
    pl,
    pr,
    pt,
    pb,
    p,
    py,
    px,
    position,
    ...props
  }) => <div {...props} />
)`
  flex: 1 1 auto;
  min-height: 1px;
  padding: 15px;
  ${device.small} {
    padding: 20px;
  }
  ${space};
  ${positionProps};
  ${typography};
`;

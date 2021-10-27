import styled, {
  space,
  color as colorStyles,
  typography,
  layout,
  css,
} from "../../../styled";

const props = [
  "p",
  "px",
  "py",
  "pt",
  "pb",
  "pl",
  "pr",
  "m",
  "mx",
  "my",
  "mt",
  "mb",
  "ml",
  "mr",
  "color",
  "fontFamily",
  "fontSize",
  "fontWeight",
  "lineHeight",
  "letterSpacing",
  "textAlign",
  "display",
];

export const StyledText = styled("p").withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    ![...props].includes(prop) && defaultValidatorFn(prop),
})`
  ${({ $tt }) =>
    $tt &&
    css`
      text-transform: ${$tt};
    `}
  ${space};
  ${colorStyles};
  ${typography};
  ${layout};
`;

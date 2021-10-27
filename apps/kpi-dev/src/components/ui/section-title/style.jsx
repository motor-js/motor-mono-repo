import styled, { themeGet, css, typography } from "../../../styled";

export const StyledTitle = styled.h6`
  ${({ $hasDesc }) =>
    !$hasDesc &&
    css`
      margin-bottom: 0;
    `}
  ${({ $hasDesc }) =>
    $hasDesc &&
    css`
      margin-bottom: 5px;
    `}
	${typography}
`;

export const StyledDesc = styled(({ fontSize, ...rest }) => <p {...rest} />)`
  color: ${themeGet("colors.text3")};
  font-size: 13px;
  margin-bottom: 0px;
  ${typography}
`;

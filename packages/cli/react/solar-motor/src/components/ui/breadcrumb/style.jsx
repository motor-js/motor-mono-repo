import styled, { space, css, themeGet } from "../../../theme";

export const StyledNav = styled.nav``;

export const StyledBreadcrumb = styled(({ mr, ml, mb, mt, ...props }) => (
  <ol {...props} />
))`
  display: flex;
  flex-wrap: wrap;
  padding: 0.75rem 1rem;
  margin-bottom: 1rem;
  margin-top: 0;
  list-style: none;
  background-color: ${themeGet("colors.gray200")};
  border-radius: 0.25rem;
  ${space};
`;

export const StyledBreadcrumbItem = styled.li`
  ${({ $active }) =>
    $active &&
    css`
      color: ${themeGet("colors.gray600")};
    `}
  a {
    color: ${themeGet("colors.primary")};
    &:hover {
      color: ${themeGet("colors.primary")};
    }
  }
  &:not(:first-of-type) {
    &:before {
      display: inline-block;
      padding-right: 0.5rem;
      color: ${themeGet("colors.gray600")};
      content: "/";
    }
    padding-left: 0.5rem;
  }
`;

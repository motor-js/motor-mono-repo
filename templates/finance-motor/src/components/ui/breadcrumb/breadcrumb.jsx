import React from "react";
import { Link } from "react-router-dom";

import { StyledNav, StyledBreadcrumb, StyledBreadcrumbItem } from "./style";

export const Breadcrumb = ({ children, className, as, ...restProps }) => {
  const classes = className || "";
  return (
    <StyledNav aria-label="breadcrumb" as={as}>
      <StyledBreadcrumb className={classes} {...restProps}>
        {children}
      </StyledBreadcrumb>
    </StyledNav>
  );
};

export const BreadcrumbItem = ({ children, path, active, className }) => {
  const classes = className || "";
  return (
    <StyledBreadcrumbItem
      className={classes}
      $active={active}
      aria-current={active && "page"}
    >
      {active && children}
      {!active && path && <Link to={path}>{children}</Link>}
    </StyledBreadcrumbItem>
  );
};

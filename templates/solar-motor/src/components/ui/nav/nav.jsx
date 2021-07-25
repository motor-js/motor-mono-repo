import { Children } from "react";
import classnames from "classnames";

import { StyledNav, StyledNavLink, StyledDivider } from "./style";

export const Nav = ({
  children,
  className,
  pills,
  align,
  vertical,
  fill,
  customStyle,
  ...rest
}) => {
  const RenderChild = Children.map(children, (el) => {
    const child = el;
    if (child !== null) {
      const childType = child.type;
      const name = childType.displayName || childType.name;
      if (name === "NavLink") {
        return <child.type {...child.props} customStyle={customStyle} />;
      }
    }
    return <child.type {...child.props} />;
  });

  return (
    <StyledNav
      className={classnames(className, "nav")}
      $pills={pills}
      $align={align}
      $vertical={vertical}
      $fill={fill}
      $customStyle={customStyle}
      {...rest}
    >
      {RenderChild}
    </StyledNav>
  );
};

export const NavLink = ({
  children,
  className,
  path,
  active,
  onClick,
  customStyle,
  iconPosition,
  iconDistance,
  rel,
  label,
  target,
  ...rest
}) => {
  return (
    <StyledNavLink
      className={classnames(className, "nav-link", active && "active")}
      path={path}
      $active={active}
      onClick={onClick}
      $customStyle={customStyle}
      $iconPosition={iconPosition}
      $iconDistance={iconDistance}
      rel={rel}
      target={target}
      aria-label={label}
      {...rest}
    >
      {children}
    </StyledNavLink>
  );
};

NavLink.defaultProps = {
  iconPosition: "left",
  iconDistance: "7px",
};

NavLink.displayName = "NavLink";

export const NavDivider = () => {
  return <StyledDivider />;
};

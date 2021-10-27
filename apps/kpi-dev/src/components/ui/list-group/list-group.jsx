import { Children } from "react";
import classnames from "classnames";

import { StyledListGroup, StyledListGroupItem } from "./style";

export const ListGroup = ({
  as,
  className,
  children,
  flush,
  horizontal,
  ...restProps
}) => {
  const RenderChild = Children.map(children, (el) => {
    const child = el;
    if (child !== null) {
      const childType = child.type;
      const name = childType.displayName || childType.name;
      if (name === "ListGroupItem") {
        return (
          <child.type {...child.props} flush={flush} horizontal={horizontal} />
        );
      }
    }
    return child;
  });
  return (
    <StyledListGroup
      as={as}
      className={classnames(className, "list-group")}
      $horizontal={horizontal}
      {...restProps}
    >
      {RenderChild}
    </StyledListGroup>
  );
};

export const ListGroupItem = ({
  as,
  className,
  children,
  active,
  disabled,
  action,
  href,
  flush,
  horizontal,
  ...restProps
}) => {
  return (
    <StyledListGroupItem
      as={as}
      className={classnames(className, "list-group-item")}
      $active={active}
      $disabled={disabled}
      $action={action}
      href={href}
      $flush={flush}
      $horizontal={horizontal}
      {...restProps}
    >
      {children}
    </StyledListGroupItem>
  );
};

ListGroupItem.displayName = "ListGroupItem";

import { Children, useState, useCallback, useEffect, useRef } from "react";
import classnames from "classnames";
import { useClickOutside } from "../../../hooks";
import { Button } from "../button/button";
import {
  StyledDropMenu,
  StyledDropdown,
  StyledDropItem,
  StyledDropDivider,
} from "./style";

export const Dropdown = ({ children, direction, className, ...restProps }) => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow((prev) => !prev);
  };
  const onClose = useCallback(() => {
    setShow(false);
  }, []);

  const containerRef = useClickOutside(onClose);

  const RenderChild = Children.map(children, (el) => {
    const child = el;
    if (child !== null) {
      const childType = child.type;
      const name = childType.displayName || childType.name;
      if (name === "DropdownToggle") {
        return <child.type {...child.props} onClick={handleClick} />;
      }
      if (name === "DropdownMenu") {
        return (
          <child.type {...child.props} direction={direction} show={show} />
        );
      }
    }
    return null;
  });

  return (
    <StyledDropdown
      {...restProps}
      className={classnames(className, "dropdown")}
      ref={containerRef}
    >
      {RenderChild}
    </StyledDropdown>
  );
};

Dropdown.defaultProps = {
  direction: "down",
};

export const DropdownToggle = (props) => {
  const { children, ...restProps } = props;
  return <Button {...restProps}>{children}</Button>;
};

DropdownToggle.defaultProps = {
  label: "DropdownToggle",
};
DropdownToggle.displayName = "DropdownToggle";

export const DropdownMenu = ({
  children,
  show,
  direction,
  className,
  ...restProps
}) => {
  const [menuMeasure, setMenuMeasure] = useState({
    clientWidth: 0,
    clientHeight: 0,
    clientLeft: 0,
    clientTop: 0,
    offsetWidth: 0,
    offsetHeight: 0,
    offsetLeft: 0,
    offsetTop: 0,
  });
  const menuRef = useRef(null);

  useEffect(() => {
    setMenuMeasure((prev) => {
      return {
        ...prev,
        clientWidth: menuRef?.current?.clientWidth || 0,
        clientHeight: menuRef?.current?.clientHeight || 0,
        clientLeft: menuRef?.current?.clientLeft || 0,
        clientTop: menuRef?.current?.clientTop || 0,
        offsetWidth: menuRef?.current?.offsetWidth || 0,
        offsetHeight: menuRef?.current?.offsetHeight || 0,
        offsetLeft: menuRef?.current?.offsetLeft || 0,
        offsetTop: menuRef?.current?.offsetTop || 0,
      };
    });
  }, [show]);

  return (
    <StyledDropMenu
      $menuWidth={menuMeasure.offsetWidth}
      $show={show}
      $direction={direction}
      ref={menuRef}
      className={classnames(className, "dropdown-menu")}
      {...restProps}
    >
      {children}
    </StyledDropMenu>
  );
};

DropdownMenu.displayName = "DropdownMenu";

export const DropdownItem = ({ children, path, className, active }) => (
  <StyledDropItem
    active={active}
    path={path}
    className={classnames(className, "dropdown-item")}
  >
    {children}
  </StyledDropItem>
);

export const DropdownDivider = ({ className }) => (
  <StyledDropDivider className={classnames(className, "dropdown-divider")} />
);

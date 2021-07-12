import classnames from "classnames";

import { StyledGroup, StyledButtonToolbar } from "./style";

export const ButtonGroup = ({
  children,
  size,
  vertical,
  label,
  className,
  ...restProps
}) => {
  return (
    <StyledGroup
      role="group"
      $size={size}
      $vertical={vertical}
      aria-label={label}
      className={classnames(className, "btn-group")}
      {...restProps}
    >
      {children}
    </StyledGroup>
  );
};

ButtonGroup.defaultProps = {
  label: "button group",
};

export const ButtonToolbar = ({ children, className, label }) => {
  return (
    <StyledButtonToolbar
      role="toolbar"
      className={classnames(className, "btn-toolbar")}
      aria-label={label}
    >
      {children}
    </StyledButtonToolbar>
  );
};

ButtonToolbar.defaultProps = {
  label: "button toolbar",
};

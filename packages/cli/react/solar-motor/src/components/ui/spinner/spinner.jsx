import classnames from "classnames";
import { StyledSpinner } from "./style";

export const Spinner = ({
  className,
  variant = "border",
  color,
  size,
  ...restProps
}) => {
  return (
    <StyledSpinner
      className={classnames(className, "spinner", `spinner-${variant}`)}
      $variant={variant}
      $color={color}
      $size={size}
      {...restProps}
    />
  );
};

Spinner.defaultProps = {
  variant: "border",
  size: "md",
};

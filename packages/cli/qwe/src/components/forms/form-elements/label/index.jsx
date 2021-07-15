import classnames from "classnames";

import { StyledLabel } from "./style";

export const Label = ({ children, htmlFor, className, ...rest }) => {
  return (
    <StyledLabel
      htmlFor={htmlFor}
      className={classnames(className, "label")}
      {...rest}
    >
      {children}
    </StyledLabel>
  );
};

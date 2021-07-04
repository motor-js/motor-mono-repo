import { FC } from "react";
import classname from "classnames";
import {
  StyledInputGroup,
  StyledInputGroupWrap,
  StyledInputGroupText,
} from "./style";

export const InputGroup = ({ children, className, ...rest }) => {
  return (
    <StyledInputGroup className={classname(className, "input-group")} {...rest}>
      {children}
    </StyledInputGroup>
  );
};

export const InputGroupAddon = ({
  children,
  dir = "append",
  className,
  ...rest
}) => {
  return (
    <StyledInputGroupWrap
      className={classname(className, `input-group-${dir}`)}
      $dir={dir}
      {...rest}
    >
      {children}
    </StyledInputGroupWrap>
  );
};

export const InputGroupText = ({ children, className, ...rest }) => {
  return (
    <StyledInputGroupText
      className={classname(className, `input-group-text`)}
      {...rest}
    >
      {children}
    </StyledInputGroupText>
  );
};

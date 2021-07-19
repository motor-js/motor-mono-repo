import React from "react";
import classnames from "classnames";
import { StyledMedia, StyledMediaBody, StyledMediaLeft } from "./style";

export const Media = ({ children, as, className, ...restProps }) => {
  return (
    <StyledMedia
      className={classnames(className, "media")}
      as={as}
      $el={as}
      {...restProps}
    >
      {children}
    </StyledMedia>
  );
};

export const MediaLeft = ({ children, alignMent, ...restProps }) => {
  return (
    <StyledMediaLeft $alignMent={alignMent} {...restProps}>
      {children}
    </StyledMediaLeft>
  );
};

export const MediaBody = ({ children, className, ...restProps }) => {
  return (
    <StyledMediaBody
      className={classnames(className, "media-body")}
      {...restProps}
    >
      {children}
    </StyledMediaBody>
  );
};

import React from "react";
import { SpaceProps, BorderProps } from "@doar/shared/styled";
import { Container } from "@doar/components";
import { StyledContent } from "./style";

const Content = ({ children, className, fullHeight, align, ...restProps }) => {
  return (
    <StyledContent
      $fullHeight={fullHeight}
      $align={align}
      className={className}
      {...restProps}
    >
      <Container className="container" pl="0" pr="0">
        {children}
      </Container>
    </StyledContent>
  );
};

export default Content;

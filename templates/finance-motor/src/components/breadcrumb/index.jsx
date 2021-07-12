import React from "react";
import { StyledBreadItem, StyledBreadWrap, PageHeading } from "./style";

const Breadcrumb = ({ prev, title, wcText }) => {
  return (
    <>
      <StyledBreadWrap>
        {prev.map((item) => (
          <StyledBreadItem key={item.text} path={item.link}>
            {item.text}
          </StyledBreadItem>
        ))}
        <StyledBreadItem active>{title}</StyledBreadItem>
      </StyledBreadWrap>
      {wcText && <PageHeading>{wcText}</PageHeading>}
    </>
  );
};

export default Breadcrumb;

import classnames from "classnames";

import { StyledCard, StyledCardBody } from "./style";

/**
 * Card Component
 */

export const Card = ({ children, className, color, ...restProps }) => {
  return (
    <StyledCard
      className={classnames(className, "card")}
      {...restProps}
      $color={color}
    >
      {children}
    </StyledCard>
  );
};

/**
 * Card Body Component
 */

export const CardBody = ({ children, className, ...restProps }) => {
  return (
    <StyledCardBody
      className={classnames(className, "card-body")}
      {...restProps}
    >
      {children}
    </StyledCardBody>
  );
};

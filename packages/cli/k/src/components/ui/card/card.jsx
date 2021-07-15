import classnames from "classnames";

import {
  StyledCard,
  StyledCardImage,
  StyledCardBody,
  StyledCardHeading,
  StyledCardText,
  StyledCardSubtitle,
  StyledCardLink,
  StyledCardHeader,
  StyledCardFooter,
  StyledCardImgOverlay,
  StyledCardGroup,
  StyledCardDeck,
  StyledCardColumns,
} from "./style";

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
 * Card Image Component
 */

export const CardImage = ({
  src,
  alt,
  className,
  isTop,
  isBottom,
  ...restProps
}) => {
  const topClass = isTop ? "card-img-top" : "";
  const bottomClass = isBottom ? "card-img-bottom" : "";
  return (
    <StyledCardImage
      src={src}
      alt={alt}
      className={classnames(className, "card-image", topClass, bottomClass)}
      $isTop={isTop}
      $isBottom={isBottom}
      {...restProps}
    />
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

/**
 * Card Title Component
 */

export const CardTitle = ({ children, className, as, ...restProps }) => {
  return (
    <StyledCardHeading
      as={as}
      className={classnames(className, "card-title")}
      {...restProps}
    >
      {children}
    </StyledCardHeading>
  );
};

/**
 * Card Text Component
 */

export const CardText = ({ children, className, ...restProps }) => {
  return (
    <StyledCardText
      className={classnames(className, "card-text")}
      {...restProps}
    >
      {children}
    </StyledCardText>
  );
};

/**
 * Card Subtitle Component
 */

export const CardSubtitle = ({ children, className, ...restProps }) => {
  return (
    <StyledCardSubtitle
      className={classnames(className, "card-subtitle")}
      {...restProps}
    >
      {children}
    </StyledCardSubtitle>
  );
};

/**
 * Card Link Component
 */

export const CardLink = ({ children, className, path, ...restProps }) => {
  return (
    <StyledCardLink
      path={path}
      className={classnames(className, "card-link")}
      {...restProps}
    >
      {children}
    </StyledCardLink>
  );
};

/**
 * Card Header Component
 */

export const CardHeader = ({ children, className, variant, ...restProps }) => {
  return (
    <StyledCardHeader
      className={classnames(className, "card-header")}
      $variant={variant}
      {...restProps}
    >
      {children}
    </StyledCardHeader>
  );
};

/**
 * Card Footer Component
 */

export const CardFooter = ({ children, className, ...restProps }) => {
  return (
    <StyledCardFooter
      className={classnames(className, "card-footer")}
      {...restProps}
    >
      {children}
    </StyledCardFooter>
  );
};

/**
 * Card Image Overlay Component
 */

export const CardImageOverlay = ({ children, className, ...restProps }) => {
  return (
    <StyledCardImgOverlay
      className={classnames(className, "card-img-overlay")}
      {...restProps}
    >
      {children}
    </StyledCardImgOverlay>
  );
};

/**
 * Card Group Component
 */

export const CardGroup = ({ children, className, ...restProps }) => {
  return (
    <StyledCardGroup
      className={classnames(className, "card-group")}
      {...restProps}
    >
      {children}
    </StyledCardGroup>
  );
};

/**
 * Card Deck Component
 */

export const CardDeck = ({ children, className, ...restProps }) => {
  return (
    <StyledCardDeck
      className={classnames(className, "card-deck")}
      {...restProps}
    >
      {children}
    </StyledCardDeck>
  );
};

export const CardColumns = ({ children, className, ...restProps }) => {
  return (
    <StyledCardColumns
      className={classnames(className, "card-columns")}
      {...restProps}
    >
      {children}
    </StyledCardColumns>
  );
};

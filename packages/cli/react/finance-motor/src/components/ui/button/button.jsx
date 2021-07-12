/* eslint-disable react/button-has-type */

import classnames from "classnames";

import { StyledButton, StyledAnchor, StyledLink } from "./style";

export const Button = ({
  children,
  type,
  variant,
  color,
  size,
  shape,
  fullwidth,
  active,
  disabled,
  iconButton,
  hasIcon,
  label,
  onClick,
  className,
  path,
  iconPosition,
  iconSize,
  iconSpace,
  ...restProps
}) => {
  if (path) {
    const internal = /^\/(?!\/)/.test(path);
    const isHash = path?.startsWith("#");

    if (internal) {
      return (
        <StyledLink
          $color={color}
          $variant={variant}
          $size={size}
          $shape={shape}
          $fullwidth={fullwidth}
          $active={active}
          disabled={disabled}
          $iconButton={iconButton}
          $hasIcon={hasIcon}
          $iconPosition={iconPosition}
          $iconSize={iconSize}
          $iconSpace={iconSpace}
          aria-label={label}
          onClick={onClick}
          className={classnames(className, "btn")}
          to={path}
          {...restProps}
        >
          {children}
        </StyledLink>
      );
    }
    if (isHash) {
      return (
        <StyledAnchor
          $color={color}
          $variant={variant}
          $size={size}
          $shape={shape}
          $fullwidth={fullwidth}
          $active={active}
          disabled={disabled}
          $iconButton={iconButton}
          $hasIcon={hasIcon}
          $iconPosition={iconPosition}
          $iconSize={iconSize}
          $iconSpace={iconSpace}
          aria-label={label}
          onClick={onClick}
          className={classnames(className, "btn")}
          href={path}
          {...restProps}
        >
          {children}
        </StyledAnchor>
      );
    }
    return (
      <StyledAnchor
        $color={color}
        $variant={variant}
        $size={size}
        $shape={shape}
        $fullwidth={fullwidth}
        $active={active}
        disabled={disabled}
        $iconButton={iconButton}
        $hasIcon={hasIcon}
        $iconPosition={iconPosition}
        $iconSize={iconSize}
        $iconSpace={iconSpace}
        aria-label={label}
        onClick={onClick}
        className={classnames(className, "btn")}
        href={path}
        {...restProps}
      >
        {children}
      </StyledAnchor>
    );
  }

  return (
    <StyledButton
      $color={color}
      $variant={variant}
      $size={size}
      $shape={shape}
      $fullwidth={fullwidth}
      type={type}
      $active={active}
      disabled={disabled}
      $iconButton={iconButton}
      $hasIcon={hasIcon}
      $iconPosition={iconPosition}
      $iconSize={iconSize}
      $iconSpace={iconSpace}
      aria-label={label}
      onClick={onClick}
      className={classnames(className, "btn")}
      {...restProps}
    >
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  type: "button",
  variant: "contained",
  color: "primary",
  size: "md",
  shape: "rounded",
  fullwidth: false,
  active: false,
  disabled: false,
  iconButton: false,
  iconPosition: "left",
  iconSize: "sm",
};

Button.displayName = "Button";

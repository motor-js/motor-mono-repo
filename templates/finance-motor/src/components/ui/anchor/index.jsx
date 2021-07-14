import React from "react";

import { StyledLink, StyledAnchor } from "./style";

export const Anchor = ({
  path,
  children,
  className,
  rel,
  label,
  target,
  onClick,
  variant,
  ...rest
}) => {
  const internal = /^\/(?!\/)/.test(path);
  if (!internal) {
    const isHash = path && path.startsWith("#");
    if (isHash) {
      return (
        <StyledAnchor
          aria-label={label}
          rel={rel}
          className={className}
          href={path}
          onClick={onClick}
          $variant={variant}
          {...rest}
        >
          {children}
        </StyledAnchor>
      );
    }
    return (
      <StyledAnchor
        aria-label={label}
        rel={rel}
        className={className}
        href={path}
        target={target}
        onClick={onClick}
        $variant={variant}
        {...rest}
      >
        {children}
      </StyledAnchor>
    );
  }

  return (
    <StyledLink
      aria-label={label}
      rel="preload"
      className={className}
      to={path}
      onClick={onClick}
      $variant={variant}
      {...rest}
    >
      {children}
    </StyledLink>
  );
};

Anchor.defaultProps = {
  target: "_blank",
  rel: "noopener noreferrer",
};

Anchor.displayName = "Anchor";

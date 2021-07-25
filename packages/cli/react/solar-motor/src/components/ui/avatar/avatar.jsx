import { Children } from "react";
import classnames from "classnames";

import { StyledAvatar, StyledInitialText } from "./style";

export const Avatar = ({
  size,
  shape,
  status,
  className,
  children,
  ...restProps
}) => {
  const RenderChild = Children.map(children, (el) => {
    const child = el;
    if (child !== null) {
      const childType = child.type;
      const name = childType.displayName || childType.name;
      if (name === "AvatarInitial") {
        return <child.type size={size} shape={shape} {...child.props} />;
      }
      return <child.type {...child.props} />;
    }
    return null;
  });
  return (
    <StyledAvatar
      $size={size}
      $shape={shape}
      $status={status}
      className={classnames(className, "avatar")}
      {...restProps}
    >
      {RenderChild}
    </StyledAvatar>
  );
};

Avatar.defaultProps = {
  size: "default",
  shape: "circle",
};

export const AvatarInitial = ({
  children,
  size,
  shape,
  className,
  ...restProps
}) => {
  return (
    <StyledInitialText
      $size={size}
      $shape={shape}
      className={classnames(className, "avatar-initial")}
      {...restProps}
    >
      {children}
    </StyledInitialText>
  );
};

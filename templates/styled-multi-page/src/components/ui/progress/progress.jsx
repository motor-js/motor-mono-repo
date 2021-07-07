import classnames from "classnames";

import { StyledProgress, StyledProgressBar } from "./style";

export const Progress = ({
  className,
  now,
  min,
  max,
  isLabel,
  bg,
  height,
  striped,
  animated,
  opacity,
  ...restProps
}) => {
  return (
    <StyledProgress
      className={classnames(className)}
      $height={height}
      $opacity={opacity}
      {...restProps}
    >
      <StyledProgressBar
        role="progressbar"
        aria-valuenow={now}
        aria-valuemin={min}
        aria-valuemax={max}
        bg={bg}
        $width={now}
        $striped={striped}
        $animated={animated}
      >
        <span className={!isLabel ? "sr-only" : ""}>{now}%</span>
      </StyledProgressBar>
    </StyledProgress>
  );
};

Progress.defaultProps = {
  now: 40,
  min: 0,
  max: 100,
  bg: "primary",
  height: "10px",
  striped: false,
  animated: false,
};

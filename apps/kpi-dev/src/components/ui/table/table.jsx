import classNames from "classnames";

import { StyledTableResponsive, StyledTable } from "./style";

export const Table = ({
  children,
  className,
  theadColor,
  striped,
  bordered,
  hover,
  compact,
  color,
  borderless,
  ...restProps
}) => {
  return (
    <StyledTableResponsive>
      <StyledTable
        className={classNames(className)}
        $theadColor={theadColor}
        $striped={striped}
        $bordered={bordered}
        $hover={hover}
        $compact={compact}
        $color={color}
        $borderless={borderless}
        {...restProps}
      >
        {children}
      </StyledTable>
    </StyledTableResponsive>
  );
};

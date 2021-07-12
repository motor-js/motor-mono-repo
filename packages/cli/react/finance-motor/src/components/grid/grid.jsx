import classNames from "classnames";

import { StyledContainer, StyledRow, StyledCol } from "./style";

export const Container = ({ className, ...props }) => {
  return <StyledContainer className={className} {...props} />;
};

export const Row = ({ className, gutters, noGutter, ...props }) => {
  return (
    <StyledRow
      $gutters={gutters}
      $noGutter={noGutter}
      className={className}
      {...props}
    />
  );
};

export const Col = ({ className, ...props }) => {
  const { smOrder, mdOrder, lgOrder, xlOrder } = props;
  const restProps = props;
  let orderSm;
  let orderMd;
  let orderlg;
  let orderXl;

  if (smOrder === 0 || mdOrder === 0 || lgOrder === 0 || xlOrder === 0) {
    if (smOrder === 0) {
      orderSm = `order-sm-${smOrder}`;
      delete restProps.smOrder;
    }
    if (mdOrder === 0) {
      orderMd = `order-md-${mdOrder}`;
      delete restProps.mdOrder;
    }
    if (lgOrder === 0) {
      orderlg = `order-lg-${lgOrder}`;
      delete restProps.lgOrder;
    }
    if (xlOrder === 0) {
      orderXl = `order-xl-${xlOrder}`;
      delete restProps.xlOrder;
    }
  }

  return (
    <StyledCol
      className={classNames(className, orderSm, orderMd, orderlg, orderXl)}
      {...restProps}
    />
  );
};

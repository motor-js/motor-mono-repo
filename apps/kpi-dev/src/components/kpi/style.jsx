import { Col, Row } from "styled-bootstrap-grid";
import styled, {
  space,
  themeGet,
  css,
  device,
  border,
  typography,
} from "../../styled";

export const StyledCardTitle = styled.h6`
  font-size: 11px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-weight: 600;
  color: ${themeGet("colors.text2")};
  margin-bottom: 8px;
`;

export const StyledCardBottom = styled.div`
  display: flex;
  align-items: flex-end;
  ${device.large} {
    display: block;
  }
  ${device.xlarge} {
    display: flex;
  }
`;

export const StyledCardRate = styled.h3`
  line-height: 1.1;
  margin-right: 5px;
  margin-bottom: 0px;
  font-family: ${themeGet("fonts.rubik")};
  font-weight: 400;
`;

export const StyledCardText = styled.p`
  margin-bottom: 0px;
  color: ${themeGet("colors.text3")};
  font-size: 11px;
`;

export const StyledCardChangePercent = styled.span`
  font-weight: 500;
  ${({ $growth }) =>
    $growth === "up" &&
    css`
      color: ${themeGet("colors.success")};
    `}

  ${({ $growth }) =>
    $growth === "down" &&
    css`
      color: ${themeGet("colors.danger")};
    `}
`;

export const StyledChart = styled.div`
  margin-top: 10px;
  margin-left: -15px;
  margin-right: -15px;
  margin-bottom: -15px;
  ${device.small} {
    margin-left: -20px;
    margin-right: -20px;
    margin-bottom: -20px;
  }
`;

export const StyledCol = styled(
  ({ p, pl, pr, pt, pb, m, ml, mr, mt, mb, textAlign, ...props }) => (
    <Col {...props} />
  )
)`
  ${device.small} {
    &.order-sm-0 {
      order: 0;
    }
  }
  ${device.medium} {
    &.order-md-0 {
      order: 0;
    }
  }
  ${device.large} {
    &.order-lg-0 {
      order: 0;
    }
  }
  ${device.xlarge} {
    &.order-xl-0 {
      order: 0;
    }
  }
  ${space};
  ${border};
  ${typography};
`;

export const StyledRow = styled(
  ({ p, pl, pr, pt, pb, m, ml, mr, mt, mb, ...props }) => <Row {...props} />
)`
  ${space};
  ${({ $gutters }) =>
    !!$gutters &&
    css`
      margin-left: -${$gutters / 2}px;
      margin-right: -${$gutters / 2}px;
      & > div {
        padding-left: ${$gutters / 2}px;
        padding-right: ${$gutters / 2}px;
      }
    `}
  ${({ $noGutter }) =>
    $noGutter === true &&
    css`
      margin-left: 0px;
      margin-right: 0px;
      & > div {
        padding-left: 0px;
        padding-right: 0px;
      }
    `}
`;

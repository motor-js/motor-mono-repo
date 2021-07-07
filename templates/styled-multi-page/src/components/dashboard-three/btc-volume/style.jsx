import styled, { color as colorStyle, themeGet, css } from "../../../styled";
import { CardHeader } from "../../../components";

export const StyledHeader = styled(({ ...rest }) => <CardHeader {...rest} />)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledChart = styled.div`
  width: 100%;
  height: 220px;
`;

export const StyledBottom = styled.div`
  margin-top: 40px;
`;

export const StyledItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  &:not(:first-of-type) {
    margin-top: 10px;
  }
`;

export const StyledBullet = styled(({ bg, ...rest }) => <div {...rest} />)`
  width: 10px;
  height: 10px;
  top: -1px;
  position: relative;
  border-radius: 50%;
  ${colorStyle};
`;

export const StyledTitle = styled.span`
  font-weight: 500;
  margin-left: 10px;
`;

export const StyledCoin = styled.span`
  font-family: ${themeGet("fonts.rubik")};
  margin-left: auto;
`;

export const StyledRate = styled.span`
  width: 60px;
  text-align: right;
  font-family: "Rubik", sans-serif;
  margin-left: 5px;
  i {
    font-size: 10px;
  }
  ${({ $status }) =>
    $status === "up" &&
    css`
      color: ${themeGet("colors.success")};
    `}
  ${({ $status }) =>
    $status === "down" &&
    css`
      color: ${themeGet("colors.danger")};
    `}
`;

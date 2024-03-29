import styled, { device, css, themeGet, tinycolor } from "../../../styled";
import { CardHeader } from "../../../components";

export const StyledHeader = styled(({ ...rest }) => <CardHeader {...rest} />)`
  padding-top: 20px;
  padding-bottom: 0px;
  border-bottom: 0;
  ${device.small} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const StyledList = styled.ul`
  font-size: 13px;
`;

export const StyledListItem = styled.li`
  display: flex;
  padding: 5px 0 10px;
  position: relative;
  min-height: 70px;
  &:last-of-type {
    padding-bottom: 0;
    min-height: inherit;
  }
  &:before {
    content: "";
    position: absolute;
    top: 50px;
    bottom: 0;
    left: 20px;
    border-left: 2px dotted ${themeGet("colors.text4")};
  }
`;

export const StyledIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  ${(props) =>
    props.$color &&
    css`
      color: ${themeGet(`colors.${props.$color}`)};
      background-color: ${tinycolor(themeGet(`colors.${props.$color}`)(props))
        .setAlpha(0.18)
        .toString()};
    `}
`;

export const StyledBody = styled.div`
  margin-left: 15px;
  flex: 1;
  color: ${themeGet("colors.shuttle")};
  strong {
    color: ${themeGet("colors.text2")};
    font-weight: 500;
  }
`;

export const StyledDate = styled.small`
  color: ${themeGet("colors.text3")};
`;

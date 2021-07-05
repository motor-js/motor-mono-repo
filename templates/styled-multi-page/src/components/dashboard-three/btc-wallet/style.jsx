import styled, { themeGet, color as colorStyles, space } from "../../../styled";
import { CardHeader, Button, ListGroupItem } from "../../../components";

export const StyledHeader = styled(({ ...rest }) => <CardHeader {...rest} />)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledHeaderText = styled.span`
  color: ${themeGet("colors.text3")};
  line-height: 1;
  svg {
    margin-left: 2px;
  }
`;

export const StyledText = styled(({ mb, ...rest }) => <p {...rest} />)`
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 500;
  color: #8392a5;
  ${space}
`;

export const StyledH3 = styled.h3`
  font-size: 26px;
  letter-spacing: -1px;
  font-family: "Rubik", sans-serif;
  font-weight: 400;
  margin-bottom: 5px;
  small {
    font-weight: 300;
    color: #7987a1;
  }
`;

export const StyledDiv = styled.div`
  margin-bottom: 25px;
  display: flex;
`;

export const StyledDivText = styled.p`
  font-size: 12px;
  font-family: "Rubik", sans-serif;
  margin-bottom: 0px;
  &:last-of-type {
    margin-left: 10px;
  }
`;

export const StyledDivSpan = styled.span`
  font-weight: 500;
  margin-right: 5px;
  ${colorStyles};
`;

export const StyledBtnWrap = styled.div`
  margin-bottom: 25px;
  display: flex;
`;

export const StyledBtn = styled(({ ...rest }) => <Button {...rest} />)`
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.5px;
  font-size: 11px;
  line-height: 1.773;
  flex: 1 1 auto;
`;

export const StyledDivTwo = styled.div`
  margin-bottom: 10px;
  align-items: center;
  justify-content: space-between;
  display: flex;
`;

export const StyledLink = styled.a`
  font-size: 11px;
  text-transform: uppercase;
  font-weight: 500;
  margin-bottom: 0px;
`;

export const StyledListIitem = styled(({ ...rest }) => (
  <ListGroupItem {...rest} />
))`
  padding-left: 0px;
  padding-right: 0px;
  display: flex;
  justify-content: space-between;
  font-size: 13px;
`;

StyledListIitem.displayName = "ListGroupItem";

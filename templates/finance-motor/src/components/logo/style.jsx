import styled, { device } from "../../styled";

export const StyledLogo = styled.img`
  height: 40px;
  width: 125px;
  margin-top: 0px;
  ${device.small} {
    font-size: 22px;
  }
  ${device.large} {
    font-size: 24px;
  }
`;

import styled, { device } from "../../../theme";

export const StyledWelcomeArea = styled.div`
  margin-bottom: 10px;
  ${device.medium} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  ${device.large} {
    margin-bottom: 25px;
  }
  ${device.xlarge} {
    margin-bottom: 30px;
  }
`;

export const StyledWelcomeLeft = styled.div``;

export const StyledWelcomeRight = styled.div`
  display: flex;
  flex-wrap: wrap;
`;


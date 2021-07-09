import styled, { themeGet, css, device } from "../../../styled";

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
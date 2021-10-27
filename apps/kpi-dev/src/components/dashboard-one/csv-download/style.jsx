import styled, { themeGet, device } from "../../../styled";

export const StyledCard = styled.div`
    border: 1px solid ${themeGet("colors.border")};
    padding: 15px;
    ${device.small} {
        padding: 20px;
    }
    ${device.large} {
        height: 100px;
    }
`;

export const StyledIcon = styled.span`
    color: ${themeGet("colors.text4")};
    svg {
        width: 60px;
        height: 60px;
    }
`;

export const StyledTitle = styled.h6`
    margin-bottom: 10px;
`;

export const StyledText = styled.p`
    margin-bottom: 0px;
    color: ${themeGet("colors.text3")};
`;

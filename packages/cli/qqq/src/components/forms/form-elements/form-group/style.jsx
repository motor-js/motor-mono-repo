import styled, { space } from "../../../../styled";

export const StyledGroup = styled(({ mb, mt, ...rest }) => (
    <div {...rest} />
))`
    ${space}
`;

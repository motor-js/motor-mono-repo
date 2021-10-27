import styled, { space } from "../../styled";
import { Container } from "styled-bootstrap-grid";

export const StyledContainer = styled(
  ({ p, pl, pr, pt, pb, m, ml, mr, mt, mb, ...props }) => (
    <Container {...props} />
  )
)`
  ${space};
`;

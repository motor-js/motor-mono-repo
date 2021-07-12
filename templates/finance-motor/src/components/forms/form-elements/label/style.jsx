/* eslint-disable jsx-a11y/label-has-associated-control */
import styled from "../../../../styled";

export const StyledLabel = styled(
  ({ mb, display, fontSize, fontWeight, ...rest }) => <label {...rest} />
)`
  display: inline-block;
`;

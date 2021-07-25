
import styled from "../../../../theme";
import {
  InputStyles,
  SuccessInputStyles,
  WarningInputStyles,
  ErrorInputStyles,
  allowedProps,
} from "../style";

export const StyledInput = styled("input").withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    ![...allowedProps].includes(prop) && defaultValidatorFn(prop),
})`
  ${InputStyles};
  ${({ $state, $showState, $showErrorOnly }) =>
    $state === "success" &&
    $showState &&
    !$showErrorOnly &&
    SuccessInputStyles};
  ${({ $state, $showState, $showErrorOnly }) =>
    $state === "warning" &&
    $showState &&
    !$showErrorOnly &&
    WarningInputStyles};
  ${({ $state, $showState, $showErrorOnly }) =>
    $state === "error" && $showState && $showErrorOnly && ErrorInputStyles};
`;

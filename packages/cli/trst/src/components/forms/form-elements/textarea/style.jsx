/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "../../../../styled";
import {
  InputStyles,
  SuccessInputStyles,
  WarningInputStyles,
  ErrorInputStyles,
  allowedProps,
} from "../style";

export const StyledTextarea = styled("textarea").withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    ![...allowedProps].includes(prop) && defaultValidatorFn(prop),
})`
  height: auto;
  min-height: 38px;
  ${InputStyles};
  ${({ $state, $showState, $showErrorOnly }) =>
    $state === "success" &&
    !!$showState &&
    !$showErrorOnly &&
    SuccessInputStyles};
  ${({ $state, $showState, $showErrorOnly }) =>
    $state === "warning" &&
    !!$showState &&
    !$showErrorOnly &&
    WarningInputStyles};
  ${({ $state, $showState, $showErrorOnly }) =>
    $state === "error" && !!$showState && !!$showErrorOnly && ErrorInputStyles};
`;

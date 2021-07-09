import { forwardRef } from "react";
import classnames from "classnames";
import { StyledInput } from "./style";
import Feedback from "../feedback";

export const Input = forwardRef(
  (
    {
      className,
      type,
      disabled,
      state,
      feedbackText,
      id,
      name,
      onChange,
      onClick,
      onBlur,
      value,
      readonly,
      showState,
      showErrorOnly,
      width,
      height,
      customStyle,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <StyledInput
          type={type}
          disabled={disabled}
          ref={ref}
          className={classnames(className, "form-control")}
          id={id}
          name={name}
          onChange={onChange}
          onClick={onClick}
          onBlur={onBlur}
          value={value}
          readOnly={readonly}
          $state={state}
          $showState={showState}
          $showErrorOnly={showErrorOnly}
          $width={width}
          $height={height}
          $customStyle={customStyle}
          {...restProps}
        />
        {feedbackText && showState && (
          <Feedback
            state={state}
            showState={showState}
            showErrorOnly={showErrorOnly}
          >
            {feedbackText}
          </Feedback>
        )}
      </>
    );
  }
);

Input.displayName = "Input";

Input.defaultProps = {
  type: "text",
  showErrorOnly: true,
};

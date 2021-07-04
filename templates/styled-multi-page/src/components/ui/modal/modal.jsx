import { Portal } from "react-portal";
import classnames from "classnames";
import { CSSTransition } from "react-transition-group";

import {
  StyledBackdrop,
  StyledModal,
  StyledHeader,
  StyledTitle,
  StyledClose,
  StyledBody,
  StyledFooter,
} from "./style";

export const Modal = ({
  className,
  show,
  size,
  centered,
  children,
  onClose,
  ...restProps
}) => {
  return (
    <Portal>
      <>
        <StyledBackdrop $show={show} />
        <StyledModal
          $show={show}
          $size={size}
          $centered={centered}
          className={classnames(className)}
          onClick={onClose}
          {...restProps}
        >
          <CSSTransition
            in={show}
            timeout={400}
            unmountOnExit
            classNames="modal"
          >
            {() => (
              <div className="modal-dialog">
                <div
                  className="modal-content"
                  onClick={(e) => e.stopPropagation()}
                  role="button"
                  tabIndex={0}
                >
                  {children}
                </div>
              </div>
            )}
          </CSSTransition>
        </StyledModal>
      </>
    </Portal>
  );
};

Modal.defaultProps = {
  size: "md",
  centered: true,
};

export const ModalHeader = ({ className, children, ...restProps }) => {
  return (
    <StyledHeader
      className={classnames(className, "modal-header")}
      {...restProps}
    >
      {children}
    </StyledHeader>
  );
};

export const ModalTitle = ({ className, children, ...restProps }) => {
  return (
    <StyledTitle
      className={classnames(className, "modal-title")}
      {...restProps}
    >
      {children}
    </StyledTitle>
  );
};

export const ModalClose = ({ className, children, onClose, ...restProps }) => {
  return (
    <StyledClose
      type="button"
      className={classnames(className, "close")}
      onClick={onClose}
      {...restProps}
      data-dismiss="modal"
      aria-label="Close"
    >
      <span aria-hidden="true">{children}</span>
    </StyledClose>
  );
};

ModalClose.displayName = "ModalClose";

export const ModalBody = ({ className, children, ...restProps }) => {
  return (
    <StyledBody className={classnames(className, "modal-body")} {...restProps}>
      {children}
    </StyledBody>
  );
};

export const ModalFooter = ({ className, children, ...restProps }) => {
  return (
    <StyledFooter
      className={classnames(className, "modal-body")}
      {...restProps}
    >
      {children}
    </StyledFooter>
  );
};

import styled from "styled-components";
import { color, space } from "styled-system";

export const SelectionModalWrapper = styled.div`
  ${space};
  ${color};
  font-size: ${(props) => props.theme.selectionModal.size[props.size].fontSize};
`;

export const SelectionModalButton = styled.button`
  height: 25px;
  padding: 0 12px;
  margin: 5px 5px;
  font-weight: bold;
  font-size: 12px;
  text-decoration: none;
  position: relative;
  outline: none;
  cursor: pointer;
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;

export const SelectionModalButtonConfirm = styled(SelectionModalButton)`
  background-color: ${(props) => props.theme.colors.gray[200]};
  border-color: ${(props) => props.theme.selectionModal.border.color.confirm};
  border-size: ${(props) => props.theme.selectionModal.border.size.confirm};
  border-style: ${(props) => props.theme.selectionModal.border.style.confirm};
  border-radius: ${(props) => props.theme.selectionModal.border.radius.confirm};
  color: ${((props) => props.theme.selectionModal.color.confirm, props.theme)};

  &:hover {
    opacity: ${(props) => props.theme.selectionModal.hoverOpacity.confirm};
  }
`;

export const SelectionModalButtonCancel = styled(SelectionModalButton)`
  background-color: ${((props) => props.theme.selectionModal.bckgColor.cancel,
  props.theme)};
  border-color: ${(props) => props.theme.selectionModal.border.color.cancel};
  border-size: ${(props) => props.theme.selectionModal.border.size.cancel};
  border-style: ${(props) => props.theme.selectionModal.border.style.cancel};
  border-radius: ${(props) => props.theme.selectionModal.border.radius.cancel};
  color: ${(props) => props.theme.selectionModal.color.cancel};

  &:hover {
    opacity: ${(props) => props.theme.selectionModal.hoverOpacity.cancel};
  }
`;

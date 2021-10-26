import styled from "styled-components";
import { color, space } from "styled-system";

export const SelectionModalWrapper = styled.div`
  ${space};
  ${color};
  font-size: 12px;
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
  background-color: "gray";
  border-color: "white";
  border-size: "none";
  border-style: "none";
  border-radius: "8px";
  color: "white";

  &:hover {
    opacity: 0.7;
  }
`;

export const SelectionModalButtonCancel = styled(SelectionModalButton)`
  background-color: "#dc423f";
  border-color: "white";
  border-size: "none";
  border-style: "none";
  border-radius: "8px";
  color: "white";

  &:hover {
    opacity: 0.7;
  }
`;

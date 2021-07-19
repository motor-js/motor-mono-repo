import { Trash2 } from "react-feather";
import {
  StyledMediaBody,
  StyledSelectionItem,
  StyledStrong,
  StyledText,
  StyledSpan,
} from "./style";
import { Media } from "..";

const SelectionItem = ({ selections, clear }) => {
  const { qField, qSelected } = selections;

  return (
    <StyledSelectionItem>
      <Media>
        <StyledMediaBody>
          <StyledStrong>{qField}</StyledStrong>
          <StyledText>{qSelected}</StyledText>
          <StyledSpan onClick={() => clear(qField)}>
            <Trash2 size={8} /> Delete
          </StyledSpan>
        </StyledMediaBody>
      </Media>
    </StyledSelectionItem>
  );
};

export default SelectionItem;

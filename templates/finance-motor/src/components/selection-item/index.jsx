import React from "react";
import {
  StyledDropItem,
} from "./style";
import { StyledMediaBody, StyledStrong, StyledText, StyledSpan } from "./style";
import { Media, MediaLeft } from "..";
import { Avatar, AvatarInitial } from "..";

const SelectionItem = ({ selections, clear }) => {

  const { qField, qSelected, qSelectedCount } = selections;

  return (
    <StyledDropItem>
        <Media>
          <StyledMediaBody>
            <StyledStrong>{qField}</StyledStrong>
            <StyledText>{qSelected}</StyledText>
            <StyledSpan onClick={() => clear(qField)}>DELETE</StyledSpan>
          </StyledMediaBody>
        </Media>
    </StyledDropItem>
  );
};

export default SelectionItem;

/*
 <MediaLeft>
  <Avatar size="sm" shape="circle" status="online">
    <AvatarInitial>df</AvatarInitial>
    </Avatar>
  </MediaLeft>
  <StyledMediaBody>
    <StyledStrong>Socrates Itumay</StyledStrong>
    <StyledText>nam libero tempore cum so...</StyledText>
    <StyledSpan>Mar 15 12:32pm</StyledSpan>
  </StyledMediaBody>

*/
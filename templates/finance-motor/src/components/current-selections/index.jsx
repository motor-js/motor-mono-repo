import React from "react";
import { Bell } from "react-feather";
import { useSelections } from "@motor-js/engine"
import { DropdownToggle, Dropdown } from "..";
import Notification from "../notification";
import {
  StyledDropMenu,
  StyledDropHeader,
  StyledDropItem,
  StyledDropFooter,
  StyledBadge,
} from "./style";

const CurrentSelections = () => {

  const { selections, clearSelections } = useSelections();

  console.log(selections)

  return (
    <Dropdown direction="down">
      <DropdownToggle variant="texted">
        <Bell className="header-icon" />
        { selections && selections.length > 0 && <StyledBadge>{selections.length}</StyledBadge> }
      </DropdownToggle>
      <StyledDropMenu>
        <StyledDropHeader>Current Selections</StyledDropHeader>
        <StyledDropItem path="/apps/chat">
          <Notification />
        </StyledDropItem>
      </StyledDropMenu>
      <StyledDropFooter>

      </StyledDropFooter>
    </Dropdown>
  );
};

export default CurrentSelections;

import { Filter as FilterIcon } from "react-feather";
import { DropdownToggle, Dropdown } from "../..";
import Notification from "../notification";
import {
  StyledDropMenu,
  StyledDropHeader,
  StyledDropItem,
  StyledBadge,
} from "./style";

const FilterDropDown = () => {
  return (
    <Dropdown direction="down">
      <DropdownToggle variant="texted">
        <FilterIcon className="header-icon" />
        <StyledBadge>2</StyledBadge>
      </DropdownToggle>
      <StyledDropMenu>
        <StyledDropHeader>FILTERS</StyledDropHeader>
        <StyledDropItem path="/profile-view">
          <Notification />
        </StyledDropItem>
        <StyledDropItem path="/profile-view">
          <Notification />
        </StyledDropItem>
        <StyledDropItem path="/profile-view">
          <Notification />
        </StyledDropItem>
        <StyledDropItem path="/profile-view">
          <Notification />
        </StyledDropItem>
      </StyledDropMenu>
    </Dropdown>
  );
};

export default FilterDropDown;

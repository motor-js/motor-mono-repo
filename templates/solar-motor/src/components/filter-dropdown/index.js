import { Filter as FilterIcon } from "react-feather";
import { DropdownToggle, Dropdown } from "../";
import {
  StyledDropMenu,
  StyledDropHeader,
} from "./style";

const FilterDropDown = () => {

  return (
    <Dropdown direction="down">
      <DropdownToggle variant="texted">
        <FilterIcon className="header-icon" />
      </DropdownToggle>
      <StyledDropMenu>
        <StyledDropHeader>FILTERS</StyledDropHeader>

      </StyledDropMenu>
    </Dropdown>
  );
};

export default FilterDropDown;

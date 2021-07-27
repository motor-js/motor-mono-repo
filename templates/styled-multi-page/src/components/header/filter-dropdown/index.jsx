import { Filter as FilterIcon } from "react-feather";
import { DropdownToggle, Dropdown } from "../..";

import Filter from "../../../components/filter";
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
        <StyledDropItem>
          <Filter
            dimension={["state"]}
            isMulti={true}
            closeMenuOnSelect={false}
            hideSelectedOptions={false}
            isSearchable={true}
            placeholder="State.."
          />
        </StyledDropItem>
        <StyledDropItem>
          <Filter
            dimension={["agentName"]}
            isMulti={true}
            closeMenuOnSelect={false}
            hideSelectedOptions={false}
            isSearchable={true}
            placeholder="Agent.."
          />
        </StyledDropItem>
      </StyledDropMenu>
    </Dropdown>
  );
};

export default FilterDropDown;

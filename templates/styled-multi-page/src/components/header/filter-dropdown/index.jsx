import { Filter as FilterIcon } from "react-feather";
import { DropdownToggle, Dropdown } from "../..";
import { useList } from "@motor-js/engine";
import Filter from "../../../components/filter";
import {
  StyledDropMenu,
  StyledDropHeader,
  StyledDropItem,
  StyledBadge,
} from "./style";

const FilterDropDown = () => {
  const { listData, motorListProps } = useList({
    dimension: ["state"],
  });

  const {
    listData: listDataAgent,
    motorListProps: motorListPropsAgent,
  } = useList({
    dimension: ["agentName"],
  });

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
            listData={listData}
            motorListProps={motorListProps}
            isMulti={true}
            closeMenuOnSelect={false}
            hideSelectedOptions={false}
            isSearchable={true}
            placeholder="State.."
          />
        </StyledDropItem>
        <StyledDropItem>
          <Filter
            listData={listDataAgent}
            motorListProps={motorListPropsAgent}
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

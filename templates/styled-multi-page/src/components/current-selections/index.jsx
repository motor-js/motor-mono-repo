import { Bell, Trash, ArrowLeftCircle, ArrowRightCircle } from "react-feather";
import { useButton } from "@motor-js/engine";
import { DropdownToggle, Dropdown } from "..";
import SelectionItem from "../selection-item";
import {
  StyledDropMenu,
  StyledDropHeader,
  StyledDropBody,
  StyledDropFooter,
  StyledBadge,
  StyledDropItem,
  StyledText,
} from "./style";

const CurrentSelections = ({ selections, clear }) => {
  const handleClear = (field) => clear(field);
  const { clearSelections } = useButton();

  const handleClearAll = () => clearSelections();

  return (
    <Dropdown direction="down">
      <DropdownToggle variant="texted">
        <Bell className="header-icon" />
        {selections && selections.length > 0 && (
          <StyledBadge>{selections.length}</StyledBadge>
        )}
      </DropdownToggle>
      <StyledDropMenu>
        <StyledDropHeader>Current Selections</StyledDropHeader>
        <StyledDropBody>
          {selections && selections.length > 0 ? (
            selections.map((data, i) => (
              <SelectionItem key={i} selections={data} clear={handleClear} />
            ))
          ) : (
            <StyledText>nothing selected yet..</StyledText>
          )}
        </StyledDropBody>
        {selections && selections.length > 0 && (
          <StyledDropFooter>
            <StyledDropItem onClick={handleClearAll}>
              <Trash size={12} /> Clear All
            </StyledDropItem>
            <StyledDropItem onClick={handleClearAll}>
              <ArrowLeftCircle size={12} /> Back
            </StyledDropItem>
            <StyledDropItem onClick={handleClearAll}>
              <ArrowRightCircle size={12} /> Forward
            </StyledDropItem>
          </StyledDropFooter>
        )}
      </StyledDropMenu>
    </Dropdown>
  );
};

export default CurrentSelections;

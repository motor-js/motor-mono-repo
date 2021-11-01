import { useRef } from 'react'
import {
  FilterInputWrapper,
  FilterInputOutline,
  StyledFilterInput,
  SelectTag,
  SelectButton,
  SelectTagText,
  IconWrapper,
  StyledSingleSelect,
  InputContainer,
} from "./styles/FilterTheme";
import XIcon from '../Icons/XIcon'
import ChevronDownIcon from "../Icons/ChevronDownIcon";

const useFocus = () => {
  const htmlElRef = useRef(null)
  const setFocus = () => {htmlElRef.current &&  htmlElRef.current.focus()}

  return [ htmlElRef, setFocus ] 
}

const FilterInput = ({ 
  selectionsLabels,
  selectionLabelLimit,
  numberOfSelections,
  numberOfItems,
  handleKeyDownCallback,
  handleSearchCallback,
  handleInputSelectCallback,
  handleIconSelectCallback,
  handleDeselectCallback,
  deselectAllCallback,
  placeholderState,
  singleSelection,
  size,
  ...rest
}) => {

  const [inputRef, setInputFocus] = useFocus()

  const handleFocus = () => setInputFocus()
  
  const handleSearch = (e) => {
    handleSearchCallback(e)
  }

  const renderItems = () => {
  //limit selections logic
    if(singleSelection && selectionsLabels && selectionsLabels.length > 0) {
      return (
      <StyledSingleSelect size={size} {...rest}>{selectionsLabels[0].text}</StyledSingleSelect>
      )
    } 
    else if(!singleSelection && selectionsLabels && selectionLabelLimit < numberOfSelections) {
      return (
      <SelectTag size={size} {...rest}>
        <SelectTagText {...rest}>{`${numberOfSelections}`+' of '+`${numberOfItems}`}</SelectTagText>
        <SelectButton {...rest} onClick={deselectAllCallback}>
        <XIcon stroke="black" strokeWidth={1} height="14px" width="14px" />
        </SelectButton>
      </SelectTag>
      )
    } else {
      return (
        selectionsLabels && selectionsLabels.map((sel,i) => (
          <SelectTag {...rest} size={size} key={sel.key}>
            <SelectTagText {...rest}>{sel.text}</SelectTagText>
            <SelectButton {...rest} onClick={() => handleDeselectCallback(sel)}>
              <XIcon stroke="black" strokeWidth={1} height="14px" width="14px" padding="10px" />
            </SelectButton>
          </SelectTag>
        ))
      )
    }
  }

  return (
    <FilterInputOutline onClick={handleFocus} {...rest}>
    <FilterInputWrapper {...rest}>
      {renderItems()}
      <InputContainer {...rest}>
      <StyledFilterInput
        ref={inputRef}
        size={size}
        onSelect={handleInputSelectCallback}
        onChange={(e) => handleSearch(e)} 
        onKeyDown={handleKeyDownCallback}
        placeholder={placeholderState}
        {...rest}
      />
      </InputContainer>
      </FilterInputWrapper>
      <div style={{ display: 'flex', flexDirection: 'row'}}>
      <IconWrapper onClick={deselectAllCallback}>
        { numberOfSelections > 0 && <XIcon stroke="black" strokeWidth={1} height="14px" width="14px" /> }
      </IconWrapper>
      <IconWrapper {...rest} onClick={handleIconSelectCallback}>
        <ChevronDownIcon stroke="black" strokeWidth={1} height="14px" width="14px" />
      </IconWrapper> 
      </div>
    </FilterInputOutline>
  )
}

export default FilterInput
/* eslint-disable prefer-template */
import React, { useState, useEffect, useRef, useContext } from "react";
import Dropdown from './Dropdown'
import useOutsideClick from "../../hooks/useOutsideClick";
import FilterInput from "./FilterInput";
import {
  FilterWrapper,
} from "./styles/FilterTheme";

function StyledFilter({
  engine,
  engineError,
  listData,
  motorListProps,
  singleSelection,
  dropHeight='200px',
  pageHeight,
  selectionLabelLimit,
  placeholder,
  onSelectionChange,
  defaultSelections,
  colorTheme,
  size,
  ...rest
}) {

  console.log('size',size)


  // Ref for click outside functionality
  const filterRef = useRef();

  const [listOpen, setListOpen] = useState(false);
  const [selectionsLabels, setSelectionsLabels] = useState(null)
  const [numberOfSelections, setNumberOfSelections] = useState(null)
  const [currPageHeight, setCurrPageHeight] = useState(pageHeight)
  const [placeholderState, setPlaceholderState] = useState(placeholder)
  //const [defaultSelectionState, setDefaultSelections] = useState(null)

  useEffect(() => {
    listData && setCurrPageHeight(listData.length)
  },[listData])

  const { 
    layout,
    select,
    selections,
    searchList,
    confirmListSearch,
    clearSelections,
    changePage,
  } = motorListProps

  const numberOfItems = layout && layout.qListObject.qSize.qcy
  const viewportHeight = parseInt(dropHeight, 10);

  // selections for map
  useEffect(() => { 
    selections && setSelectionsLabels(selections.slice(0,selectionLabelLimit))
    selections && setNumberOfSelections(selections.length)
  },[selections])
    
  useEffect(() => {
    numberOfSelections && numberOfSelections !== 0 ? setPlaceholderState("") : setPlaceholderState(placeholder)
  },[numberOfSelections])

  useOutsideClick(
    filterRef,
    () => {
      if (listOpen) { 
        setListOpen(false) 
        changePage({ qTop: 0, qHeight: pageHeight })
      }
    },[]
  );

  const handleSearchCallback = (e) => searchList(e.target.value)

  const handleKeyDownCallback = (e) => {
    e.key === 'Enter' && confirmListSearch()
  }

  const handleDeselectCallback = (d) => select([d.key], true);

  const deselectAllCallback = () => { 
    clearSelections()
  } 

  const handleInputSelectCallback = () => setListOpen(true)

  const handleIconSelectCallback = () => setListOpen(!listOpen)

  const handleSelectCallback = (item) => {
    setPlaceholderState("")
    const { key } = item;
    const toggleSelections = !singleSelection;
    select([key],toggleSelections);
    onSelectionChange();
  }


  // Page Height doubles initially, then paging starts - Need trigger for top of list
  //Number of items before paging starts
  //const loadLimit = 200

  const loadNextPage = () => changePage({ qHeight: pageHeight+currPageHeight })

  // PROPS
  const filterInputProps = {
    selectionsLabels,
    numberOfSelections,
    selectionLabelLimit,
    numberOfItems,
    handleKeyDownCallback,
    handleSearchCallback,
    handleInputSelectCallback,
    handleIconSelectCallback,
    handleDeselectCallback,
    deselectAllCallback,
    placeholderState,
    singleSelection,
    selections,
    colorTheme,
    size,
  }

  const dropdownProps = {
    items: listData,
    loadNextPage,
    pageHeight: currPageHeight || pageHeight,
    numberOfItems,
    dropHeight: viewportHeight,
    handleSelectCallback,
    colorTheme,
    size
  }

  return (
    <div>test</div> /*
    <FilterWrapper 
      size={size}
      colorTheme={colorTheme} 
      {...rest}
      ref={filterRef}>
      <FilterInput {...filterInputProps} />
      { listOpen && 
        <Dropdown {...dropdownProps} /> 
      }
    </FilterWrapper>*/
  );
}

export default StyledFilter;

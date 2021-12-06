/* eslint-disable prefer-template */
import React, { useState, useEffect, useRef } from "react";
import DropdownRef from './Dropdown'
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
  size,
  ...rest
}) {

  // Ref for click outside functionality
  const filterRef = useRef();
  const dropRef = useRef();

  const [listOpen, setListOpen] = useState(false);
  const [selectionsLabels, setSelectionsLabels] = useState(null)
  const [numberOfSelections, setNumberOfSelections] = useState(null)
  const [currPageHeight, setCurrPageHeight] = useState(pageHeight)
  const [placeholderState, setPlaceholderState] = useState(placeholder)
  const [searchValue, setSearchValue] = useState("")
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

  useOutsideClick({
    filterRef, dropRef
  },
    () => {
      if (listOpen) { 
        setListOpen(!listOpen) 
        setSearchValue('')
        changePage({ qTop: 0, qHeight: pageHeight })
      }
    },[]
  );

  const handleSearchCallback = (e) => setSearchValue(e.target.value)
  
  useEffect(() => {
    searchList(searchValue)
  },[searchValue])
  
  const handleKeyDownCallback = (e) => {
    if(e.key === 'Enter') {
      confirmListSearch() 
      setSearchValue("")
    }
  }

  const handleDeselectCallback = (d) => {
    select([d.key], true)
    setSearchValue("")
  }

  const deselectAllCallback = () => { 
    clearSelections()
    setSearchValue("")
  } 

  const handleInputSelectCallback = () => setListOpen(true)

  const handleIconSelectCallback = () => setListOpen(!listOpen)

  const handleSelectCallback = (item) => {
    setPlaceholderState("")
    const { key } = item;
    const toggleSelections = !singleSelection;
    select([key],toggleSelections);
    setSearchValue("")
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
    size,
    searchValue,
    ...rest
  }

  const dropdownProps = {
    items: listData,
    loadNextPage,
    pageHeight: currPageHeight || pageHeight,
    numberOfItems,
    dropHeight: viewportHeight,
    handleSelectCallback,
    size,
    ...rest
  }

  return (
    <FilterWrapper 
      ref={filterRef}
      size={size}
      {...rest}
    >
      <FilterInput {...filterInputProps} />
      { listData && listOpen && 
        <DropdownRef ref={dropRef} {...dropdownProps} /> 
      }
    </FilterWrapper>
  );
}

export default StyledFilter;

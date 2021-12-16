/* eslint-disable prefer-template */
import React, { useState, useEffect, useRef } from "react";
import DropdownRef from './Dropdown'
import useOutsideClick from "../../hooks/useOutsideClick";
import FilterInput from "./FilterInput";
import {
  FilterWrapper,
} from "./styles/FilterTheme";

function StyledFilter({
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

  useEffect(() => {
    listData && setCurrPageHeight(listData.length)
  },[listData])

  const { 
    layout,
    select,
    endSelections,
    beginSelections,
    selections,
    searchList,
    confirmListSearch,
    cancelListSearch,
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
        endSelections(true)
      }
    },[]
  );

  const handleSearchCallback = (e) => {
    setSearchValue(e.target.value)
    searchList(e.target.value)
  }
 

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

  const handleInputSelectCallback = () => {
    if (!listOpen) {
      beginSelections()
      setListOpen(true)
    } 
  }

  const handleIconSelectCallback = () => {
    if (listOpen) {
      endSelections(true)
    } else {
      beginSelections()
    }
    setListOpen(!listOpen)
  }

  const handleSelectCallback = (item) => {
    setPlaceholderState("")
    setSearchValue("")
    const { key } = item
    const toggleSelections = !singleSelection
    select([key],toggleSelections)
    onSelectionChange();
    //endSelections(true)
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

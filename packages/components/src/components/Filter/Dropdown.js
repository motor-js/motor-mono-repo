import { useContext, forwardRef } from 'react';
import InfiniteLoader from 'react-window-infinite-loader'
import { FixedSizeList as List } from 'react-window';
import { 
  StyledDropdownItem,
  StyledList,
  HiddenCheckbox,
  StyledCheckbox,
  CheckboxContainer,
  StyledDropdownText,
  DropdownWrapper,
  NoItems
 } from './styles/DropdownTheme';
import CheckIcon from '../Icons/CheckIcon';

const Checkbox = ({ className, checked, selected, ...rest }) => (
  <CheckboxContainer className={className} {...rest}>
    <HiddenCheckbox selected={selected} {...rest}/>
    <StyledCheckbox {...rest} selected={selected}>
      <CheckIcon />
    </StyledCheckbox>
  </CheckboxContainer>
)

const Dropdown = ({
  // Are there more items to load?
  // (This information comes from the most recent API request.)
  isNextPageLoading=false,
  items,
  loadNextPage,
  numberOfItems,
  pageHeight,
  dropHeight,
  handleSelectCallback,
  size,
  ...rest
}, ref) => {

  const themeContext = {...rest}.theme
  const itemHeight = themeContext.filter.size[size].itemHeight

  const hasNextPage = items.length < numberOfItems ? true : false
  const itemCount = hasNextPage ? pageHeight + 1 : pageHeight;

  // Only load 1 page of items at a time.
  // Pass an empty callback to InfiniteLoader in case it asks us to load more than once.
  const loadMoreItems = isNextPageLoading ? () => {} : loadNextPage;

  // Every row is loaded except for our loading indicator row.
  const isItemLoaded = index => !hasNextPage || index < pageHeight;

  const handleSelect = (items) => handleSelectCallback(items)

  // Render an item or a loading indicator.
  const Item = ({ index, style }) => {
    
    let content;
    let select;
    let state;

    if (!isItemLoaded(index) || items.length == 0 || items[index] == undefined) {
      content = "Loading...";
      select = "";
      state = ""
    } else {
      content = items[index].text;
      select = items[index];
      state = items[index].state
    }

    return (
      <div className="drop-item">
        {
        items.length > 0 &&
          <StyledDropdownItem 
            className="drop-item"
            style={style}
            onClick={() => handleSelect(select)}
            selected={state}
            {...rest}
          >
            <Checkbox className="drop-item" selected={state} {...rest} />
            <StyledDropdownText className="drop-item" {...rest}>{content}</StyledDropdownText>
          </StyledDropdownItem>
        }
      </div>
    )
  }

  return (
    <DropdownWrapper ref={ref}>
      <InfiniteLoader
        isItemLoaded={isItemLoaded}
        itemCount={itemCount}
        loadMoreItems={loadMoreItems}
        threshold={80}
      > 
        {({ onItemsRendered, ref }) => (
          items.length > 0 ?
          (
            <StyledList size={size} {...rest}>
            <List
              className="list"
              itemCount={itemCount}
              onItemsRendered={onItemsRendered}
              ref={ref}
              height={dropHeight}
              width={"100%"}
              itemSize={itemHeight}
            >
              {Item}
            </List>
            </StyledList>
          ) : (
          <NoItems size={size} {...rest}>No results found.</NoItems>
          )
        )}
      </InfiniteLoader>
    </DropdownWrapper>
  )
}

const DropdownRef = forwardRef(Dropdown);
export default DropdownRef;


import * as React from "react";

export interface FilterProps {
  size?: "small" | "medium" | "large" 
  width?: string
  dropHeight?: string
  margin?: string
  onSelectionChange?: () => {}
  onSearch?: () => {}
  single?: boolean
  sortByState?: boolean
  selectionsTitle?: boolean
}

declare const Filter: React.FC<FilterProps>;

export type FilterType = FilterProps

export default Filter
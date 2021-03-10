import * as React from "react";
import { calcCondType, otherTotalSpecType } from "../utils";

export interface useTableProps {
  cols: Array<string>;
  qColumnOrder: Array<number>;
  qCalcCondition: calcCondType;
  qPage: object;
  qInterColumnSortOrder: Array<number>;
  qSupressMissing: boolean;
  qSuppressZero: boolean;
  qSortByNumeric: number;
  qSortByAscii: number;
  qInterLineSortOrder: Array<number>;
  qOtherTotalSpec: otherTotalSpecType;
}

declare const useTable: React.FC<useTableProps>;

export type useTableType = useTableProps;

export default useTable;

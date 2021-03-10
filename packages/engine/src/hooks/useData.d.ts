import { calcCondType, otherTotalSpecType } from "../utils";

export interface useDataProps {
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

declare const useData: React.FC<useDataProps>;

export type useDataType = useDataProps;

export default useData;

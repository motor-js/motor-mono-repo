import * as React from "react";
import { configType } from "../utils";

export interface useAppProps {
  config: configType;
}

declare const useBookmark: React.FC<useAppProps>;

export type useAppType = useAppProps;

export default useBookmark;

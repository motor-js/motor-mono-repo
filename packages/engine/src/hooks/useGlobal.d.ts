import * as React from "react";
import { configType } from "../utils";

export interface useAppProps {
  config: configType;
}

declare const useGlobal: React.FC<useAppProps>;

export default useGlobal;

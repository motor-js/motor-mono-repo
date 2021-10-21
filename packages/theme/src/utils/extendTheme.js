import { deepMerge } from "./object";
import { theme } from "..";

export function extendTheme(value) {
  return deepMerge(theme, value)
}
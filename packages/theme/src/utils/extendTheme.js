import { deepMerge } from "./object";
import { defaultTheme } from "../theme";

export function extendTheme(value) {
  return deepMerge(defaultTheme, value)
}
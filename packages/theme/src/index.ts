import { ThemeProvider, ThemeContext } from "styled-components";
import defaultTheme from "./theme";
import { extendTheme } from "./utils/extendTheme"
import { themeGet } from "@styled-system/theme-get";

const breakpoints = ["576px", "768px", "992px", "1200px", "1400px"];

export const device = {
    small: `@media screen and (min-width: ${breakpoints[0]})`,
    medium: `@media screen and (min-width: ${breakpoints[1]})`,
    large: `@media screen and (min-width: ${breakpoints[2]})`,
    xlarge: `@media screen and (min-width: ${breakpoints[3]})`,
    xxlarge: `@media screen and (min-width: ${breakpoints[4]})`,
};

export {
    ThemeContext,
    ThemeProvider,
    defaultTheme,
    extendTheme,
    themeGet,
};


export * from "styled-system";
import { ThemeProvider, ThemeContext } from "styled-components";
import defaultTheme from "./theme";
import { extendTheme } from "./utils/extendTheme";
export declare const device: {
    small: string;
    medium: string;
    large: string;
    xlarge: string;
    xxlarge: string;
};
export { ThemeContext, ThemeProvider, defaultTheme, extendTheme, };
export * from "styled-system";

import styled, { css, ThemeProvider } from "styled-components";
import { ThemeContext } from "./contexts/ThemeProvider";
import defaultTheme from "./theme";
import { extendTheme } from "./utils/extendTheme";
export declare const device: {
    small: string;
    medium: string;
    large: string;
    xlarge: string;
    xxlarge: string;
};
export { ThemeContext, ThemeProvider, defaultTheme, css, extendTheme };
export * from "styled-system";
export default styled;

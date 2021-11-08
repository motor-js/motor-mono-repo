import styled, { css, ThemeProvider } from "styled-components";
import { ThemeContext } from "./contexts/ThemeProvider";
import defaultTheme from "./theme";
export declare const device: {
    small: string;
    medium: string;
    large: string;
    xlarge: string;
    xxlarge: string;
};
export { ThemeContext, ThemeProvider, defaultTheme, css };
export * from "styled-system";
export default styled;

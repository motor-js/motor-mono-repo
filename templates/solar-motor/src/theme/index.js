import styled, {
    createGlobalStyle,
    css,
    keyframes,
} from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import tinycolor from "tinycolor2";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { theme } from "./theme";
import { defaultTheme } from "@motor-js/theme"

const breakpoints = ["576px", "768px", "992px", "1200px", "1400px"];

export const device = {
    small: `@media screen and (min-width: ${breakpoints[0]})`,
    medium: `@media screen and (min-width: ${breakpoints[1]})`,
    large: `@media screen and (min-width: ${breakpoints[2]})`,
    xlarge: `@media screen and (min-width: ${breakpoints[3]})`,
    xxlarge: `@media screen and (min-width: ${breakpoints[4]})`,
};

console.log('d: ',defaultTheme)

export {
    createGlobalStyle,
    css,
    keyframes,
    themeGet,
    tinycolor,
    theme,
    Container,
    Row,
    Col,
};
export * from "styled-system";
export default styled;

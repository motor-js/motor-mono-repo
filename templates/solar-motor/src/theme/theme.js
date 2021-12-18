import { extendTheme } from "@motor-js/theme"

const breakpoints = ["576px", "768px", "992px", "1200px", "1400px"];

export const theme = extendTheme({
    colors: {
        primary: "#EF6E71" /*#0168fa"*/,
        secondary: "#5f6d88",
        success: "#10b759",
        info: "#00b8d4",
        warning: "#ffc107",
        danger: "#dc3545",
        light: "#e5e9f2",
        dark: "#3b4863",
        text: "#001737",
        text2: "#1b2e4b",
        text3: "#8392a5",
        text4: "#c0ccda",
        heading: "#001737",
        link: "#001737",
        background: "#ffffff",
        hover: "#0168fa",
        white: "#ffffff",
        black: "#000000",
        close: "#1b2e4b",
        border: "#485e9029",
    },
    fonts: {
        body: `'Roboto', sans-serif`,
        heading: `'Roboto', sans-serif`,
        interUi: `-apple-system, BlinkMacSystemFont, "Inter UI", Roboto, sans-serif`,
        rubik: `'Rubik', sans-serif`,
    },
    fontSize: {
        body: "0.875rem",
      },
    fontWeights: {
        body: 400,
        heading: 500,
    },
    lineHeights: {
        body: 1.5,
        heading: 1.25,
    },
    breakpoints: [...breakpoints],
    transition: "all 0.4s ease 0s",
    anchor: {
        primary: {
            color: "white",
            bg: "red",
        },
    },
})

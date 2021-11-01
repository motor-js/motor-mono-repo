import { spacing } from "./spacing"

const fontSizes = {
  body: {
    xsmall: "0.675rem",
    small: "0.775rem",
    medium: "0.875rem",
    large: "0.975rem",
    xlarge: "1.075rem",
  },
  h1: ["2.1875rem", "2.1875rem", "2.1875rem", "2.1875rem"],
  h2: ["1.75rem", "1.75rem", "1.75rem"],
  h3: ["1.53125rem", "1.53125rem"],
  h4: ["1.3125rem", "1.3125rem"],
  h5: ["1.09375rem", "1.09375rem"],
  h6: ["0.875rem", "0.875rem"],
}

const largeSizes = {
  max: "max-content",
  min: "min-content",
  full: "100%",
  "3xs": "14rem",
  "2xs": "16rem",
  xs: "20rem",
  sm: "24rem",
  md: "28rem",
  lg: "32rem",
  xl: "36rem",
  "2xl": "42rem",
  "3xl": "48rem",
  "4xl": "56rem",
  "5xl": "64rem",
  "6xl": "72rem",
  "7xl": "80rem",
  "8xl": "90rem",
}

const container = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
}

const sizes = {
  ...spacing,
  ...largeSizes,
  ...fontSizes,
  container,
}


export type Sizes = typeof spacing &
  typeof largeSizes & { container: typeof container }

export default sizes
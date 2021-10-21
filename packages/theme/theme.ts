import components from "./components"
import foundations from "./foundations"

const theme = {
    ...components,
    ...foundations,
} 

export type Theme = typeof theme

export default theme

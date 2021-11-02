import components from "./components"
import foundations from "./foundations"

const defaultTheme = {
    ...components,
    ...foundations,
} 

export type Theme = typeof defaultTheme

export default defaultTheme

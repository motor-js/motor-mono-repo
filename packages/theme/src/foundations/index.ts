import borders from "./borders"
import colors from "./colors"
import radii from "./radii"
import shadows from "./shadows"
import fontSizes from "./sizes"
import typography from "./typography"

const foundations = {
  borders,
  colors,
  radii,
  shadows,
  fontSizes,
  typography
}

type FoundationsType = typeof foundations

export default foundations
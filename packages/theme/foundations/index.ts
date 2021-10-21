import borders from "./borders"
import colors from "./colors"
import radii from "./radii"
import shadows from "./shadows"
import sizes from "./sizes"
import typography from "./typography"

const foundations = {
  borders,
  colors,
  radii,
  shadows,
  sizes,
  typography
}

type FoundationsType = typeof foundations

export default foundations
import borders from '../foundations/borders'
import colors from '../foundations/colors'
import radii from '../foundations/radii'
import sizes from '../foundations/sizes'


export type Filter = typeof filter

const filter = {
  border: borders["1px"]+' '+colors.gray[300],
  borderRadius: radii.base,
  borderHovered: borders["1px"]+' '+colors.gray[400],
  size: {
      small: {
          fontSize: sizes.body.small,
          itemHeight: 28,
      },
      medium: {
          fontSize: sizes.body.medium,
          itemHeight: 30,
      },
      large: {
           fontSize: sizes.body.large,
           itemHeight: 32,
      },
  }
}

export default filter